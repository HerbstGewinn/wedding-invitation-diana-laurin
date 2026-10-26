const reduce = matchMedia('(prefers-reduced-motion: reduce)');

/* ---------------------------------------------------------------- entrances */

function entrances() {
  const els = document.querySelectorAll<HTMLElement>('[data-reveal], [data-print], [data-write]');
  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-in'));
    return;
  }
  // Elements that start clipped or pushed out of their section are watched through their parent,
  // which keeps its real box while they are hidden.
  const watchers = new Map<Element, HTMLElement[]>();
  els.forEach((el) => {
    const target = el.matches('.shutter, .pslip, [data-write]') ? el.parentElement! : el;
    watchers.set(target, [...(watchers.get(target) ?? []), el]);
  });
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          watchers.get(e.target)?.forEach((el) => el.classList.add('is-in'));
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
  );
  watchers.forEach((_, target) => io.observe(target));
}

/* ---------------------------------------------------------------- countdown */

function countdown() {
  const el = document.querySelector<HTMLElement>('[data-countdown]');
  if (!el) return;
  const target = Date.parse(el.dataset.date!);
  const forms = JSON.parse(el.dataset.forms || '{}') as Record<string, string>;
  const lang = document.documentElement.lang;
  const rules = new Intl.PluralRules(lang);
  const ms = target - Date.now();
  const sameDay = new Date().toDateString() === new Date(target).toDateString();

  if (sameDay) { el.textContent = el.dataset.today || ''; return; }
  if (ms < 0) { el.textContent = el.dataset.past || ''; return; }

  const days = Math.ceil(ms / 86400000);
  const num = el.querySelector<HTMLElement>('[data-count]')!;
  const unit = el.querySelector<HTMLElement>('[data-unit]')!;
  unit.textContent = forms[rules.select(days)] ?? forms.other;

  if (reduce.matches) { num.textContent = String(days); return; }
  // Roll the figure up from zero once the card has settled.
  const start = performance.now() + 1500;
  const dur = 1300;
  const tick = (now: number) => {
    const p = Math.min(1, Math.max(0, (now - start) / dur));
    const eased = 1 - Math.pow(1 - p, 4);
    num.textContent = String(Math.round(days * eased));
    if (p < 1) requestAnimationFrame(tick);
  };
  num.textContent = '0';
  requestAnimationFrame(tick);
}

/* ---------------------------------------------------------------- scroll-linked pictures */

function parallax() {
  if (reduce.matches) return;
  const hero = document.querySelector<HTMLElement>('[data-hero-media]');
  const card = document.querySelector<HTMLElement>('[data-hero-card]');
  const drifts = Array.from(document.querySelectorAll<HTMLElement>('[data-drift]'));
  let ticking = false;

  const update = () => {
    ticking = false;
    const vh = innerHeight;
    const y = scrollY;
    if (hero && y < vh * 1.2) {
      hero.style.transform = `translate3d(0, ${y * 0.28}px, 0)`;
      if (card) card.style.transform = `translate3d(0, ${y * -0.06}px, 0)`;
    }
    for (const img of drifts) {
      const box = img.parentElement!.getBoundingClientRect();
      if (box.bottom < 0 || box.top > vh) continue;
      const progress = (box.top + box.height / 2 - vh / 2) / (vh + box.height); // -0.5 … 0.5
      img.style.transform = `translate3d(0, ${progress * -9}%, 0)`;
    }
  };
  const onScroll = () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  };
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll);
  update();
}

/* ---------------------------------------------------------------- Estonia: index with preview */

function indexPreview() {
  const root = document.querySelector<HTMLElement>('[data-index]');
  if (!root) return;
  const frame = root.querySelector<HTMLElement>('.index__frame')!;
  const picture = frame.querySelector<HTMLImageElement>('img')!;
  const capName = frame.querySelector<HTMLElement>('[data-caption-name]')!;
  const capText = frame.querySelector<HTMLElement>('[data-caption-text]')!;
  const fine = matchMedia('(hover: hover) and (pointer: fine) and (min-width: 900px)');
  const rows = Array.from(root.querySelectorAll<HTMLAnchorElement>('a.index__row'));
  let current = rows[0];
  let warmed = false;

  const show = (row: HTMLAnchorElement) => {
    if (!fine.matches) return;
    if (!warmed) {
      warmed = true;
      rows.forEach((a) => { new Image().src = a.dataset.preview!; });
    }
    if (row === current) return;
    current = row;
    const next = row.dataset.preview!;
    capName.textContent = row.dataset.name!;
    capText.textContent = row.dataset.group!;
    if (reduce.matches) { picture.src = next; return; }
    frame.classList.add('is-swapping');
    window.setTimeout(() => {
      picture.src = next;
      const done = () => frame.classList.remove('is-swapping');
      if (picture.complete) requestAnimationFrame(done);
      else picture.addEventListener('load', done, { once: true });
    }, 180);
  };

  rows.forEach((row) => {
    row.addEventListener('pointerenter', () => show(row));
    row.addEventListener('focus', () => show(row));
  });

  // While the pointer is elsewhere, the frame follows the row passing the middle of the screen.
  const lists = root.querySelector<HTMLElement>('.index__lists')!;
  let pointerInside = false;
  lists.addEventListener('pointerenter', () => { pointerInside = true; });
  lists.addEventListener('pointerleave', () => { pointerInside = false; });
  const io = new IntersectionObserver(
    (entries) => {
      if (pointerInside) return;
      const hit = entries.find((e) => e.isIntersecting);
      if (hit) show(hit.target as HTMLAnchorElement);
    },
    { rootMargin: '-45% 0px -45% 0px' },
  );
  rows.forEach((row) => io.observe(row));
}

/* ---------------------------------------------------------------- Tallinn: fit the giant word */

function fitWord() {
  const word = document.querySelector<HTMLElement>('.tallinn__word');
  const span = word?.querySelector<HTMLElement>('span');
  if (!word || !span) return;
  const fit = () => {
    word.style.fontSize = '';
    const size = parseFloat(getComputedStyle(word).fontSize);
    const w = span.getBoundingClientRect().width;
    if (w > 0) word.style.fontSize = `${(size * word.clientWidth) / w}px`;
  };
  document.fonts?.ready.then(fit);
  addEventListener('resize', fit);
  fit();
}

/* ---------------------------------------------------------------- the day itself: highlight what is on now */

function nowOnSlip() {
  const now = new Date();
  // Estonia, summer time (UTC+3)
  const tallinn = new Date(now.getTime() + (now.getTimezoneOffset() + 180) * 60000);
  if (tallinn.getFullYear() !== 2027 || tallinn.getMonth() !== 6 || tallinn.getDate() !== 10) return;
  const minutes = tallinn.getHours() * 60 + tallinn.getMinutes();
  const rows = Array.from(document.querySelectorAll<HTMLElement>('.tl[data-time]'));
  let active: HTMLElement | null = null;
  for (const row of rows) {
    const t = row.dataset.time!.match(/(\d+)[:.](\d+)\s*(AM|PM)?/i);
    if (!t) continue;
    let h = +t[1] % (t[3] ? 12 : 24);
    if (t[3]?.toUpperCase() === 'PM') h += 12;
    let mins = h * 60 + +t[2];
    if (mins < 6 * 60) mins += 24 * 60; // after-midnight steps belong to the same evening
    if (mins <= minutes) active = row;
  }
  active?.classList.add('is-now');
}

entrances();
countdown();
parallax();
indexPreview();
fitWord();
nowOnSlip();
