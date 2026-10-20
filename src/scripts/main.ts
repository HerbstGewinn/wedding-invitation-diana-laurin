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
    const box = word.clientWidth;
    const size = parseFloat(getComputedStyle(word).fontSize);
    const w = span.getBoundingClientRect().width;
    if (w > 0) word.style.fontSize = `${(size * box) / w}px`;
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
  const rows = Array.from(document.querySelectorAll<HTMLElement>('.slip__row[data-time]'));
  let active: HTMLElement | null = null;
  for (const row of rows) {
    const [h, m] = row.dataset.time!.split(/[:.]/).map(Number);
    if (h * 60 + m <= minutes) active = row;
  }
  active?.classList.add('is-now');
}

/* ---------------------------------------------------------------- RSVP */

function leafBurst(from: HTMLElement, host: HTMLElement) {
  if (reduce.matches) return;
  const hb = host.getBoundingClientRect();
  const fb = from.getBoundingClientRect();
  const cx = fb.left - hb.left + fb.width / 2;
  const cy = fb.top - hb.top + fb.height / 2;
  const leaf =
    '<svg viewBox="0 0 24 24" width="22" height="22"><path fill="currentColor" d="M3 21C3 11 9 4 21 3c-1 12-8 18-18 18zm2-2c4-1 8-5 11-11-5 3-9 7-11 11z"/></svg>';
  const tones = ['#6f8b5c', '#3f5e35', '#a8bf7a', '#cbd99e', '#5b7b4a'];
  for (let i = 0; i < 18; i++) {
    const el = document.createElement('span');
    el.className = 'leaf-burst';
    el.innerHTML = leaf;
    el.style.left = `${cx - 11}px`;
    el.style.top = `${cy - 11}px`;
    el.style.color = tones[i % tones.length];
    host.appendChild(el);
    const angle = (Math.PI * 2 * i) / 18 + Math.random() * 0.4;
    const dist = 90 + Math.random() * 140;
    const dx = Math.cos(angle) * dist;
    const dy = Math.sin(angle) * dist - 40;
    el.animate(
      [
        { transform: 'translate(0,0) rotate(0deg) scale(0.4)', opacity: 1 },
        { transform: `translate(${dx}px, ${dy}px) rotate(${Math.random() * 360}deg) scale(1)`, opacity: 1, offset: 0.55 },
        { transform: `translate(${dx * 1.15}px, ${dy + 120}px) rotate(${Math.random() * 540}deg) scale(0.9)`, opacity: 0 },
      ],
      { duration: 1600 + Math.random() * 600, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', fill: 'forwards' },
    ).finished.then(() => el.remove());
  }
}

function rsvp() {
  const form = document.querySelector<HTMLFormElement>('[data-rsvp]');
  if (!form) return;
  const card = form.closest<HTMLElement>('.reply')!;
  const done = card.querySelector<HTMLElement>('[data-done]')!;
  const more = form.querySelector<HTMLElement>('[data-more]')!;
  const namesLabel = form.querySelector<HTMLElement>('[data-names-label]')!;
  const names = form.querySelector<HTMLTextAreaElement>('textarea')!;
  const otherText = form.querySelector<HTMLInputElement>('[data-other-text]')!;
  const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
  const error = form.querySelector<HTMLElement>('.reply__error')!;
  const fallback = form.querySelector<HTMLAnchorElement>('[data-fallback]')!;
  const stayRequired = form.dataset.stayRequired === 'true';

  const attendValue = () => form.querySelector<HTMLInputElement>('[data-attend]:checked')?.dataset.attend;

  const sync = () => {
    const a = attendValue();
    more.classList.toggle('is-open', a === 'yes');
    more.querySelectorAll('input').forEach((i) => { i.tabIndex = a === 'yes' ? 0 : -1; });
    namesLabel.textContent = a === 'no' ? form.dataset.namesNo! : form.dataset.namesYes!;
    const other = form.querySelector<HTMLInputElement>('[data-other]')!;
    otherText.classList.toggle('is-shown', other.checked);
  };
  form.addEventListener('change', (e) => {
    sync();
    const t = e.target as HTMLElement;
    t.closest('.field')?.classList.remove('is-invalid');
    if (t.matches('[data-other]')) otherText.focus();
  });
  names.addEventListener('input', () => names.removeAttribute('aria-invalid'));
  sync();

  const invalid = (el: Element) => {
    el.classList.add('is-invalid');
    return el;
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    error.hidden = true;
    const a = attendValue();
    let firstBad: Element | null = null;
    if (!a) firstBad = invalid(form.querySelector('[data-attend]')!.closest('.field')!);
    if (!names.value.trim()) {
      names.setAttribute('aria-invalid', 'true');
      firstBad ??= names;
    }
    if (a === 'yes') {
      const stay = more.querySelector('[data-yes-required]') as HTMLInputElement;
      if (!form.querySelector(`input[name="${stay.name}"]:checked`)) firstBad ??= invalid(stay.closest('.field')!);
    }
    if (firstBad) {
      (firstBad.querySelector?.('input') ?? (firstBad as HTMLElement)).focus?.();
      firstBad.scrollIntoView({ block: 'center', behavior: reduce.matches ? 'auto' : 'smooth' });
      return;
    }

    const data = new FormData(form);
    if (a === 'no') {
      // A decline sends attendance and name only; extra answers are dropped.
      const stayName = (more.querySelector('[data-yes-required]') as HTMLInputElement).name;
      for (const input of more.querySelectorAll<HTMLInputElement>('input')) data.delete(input.name);
      if (stayRequired) {
        const first = more.querySelector<HTMLInputElement>(`input[name="${stayName}"]`)!;
        data.set(stayName, first.value);
      }
    } else if (!form.querySelector<HTMLInputElement>('[data-other]')!.checked) {
      data.delete(otherText.name);
    }

    const body = new URLSearchParams();
    data.forEach((v, k) => body.append(k, String(v)));
    const prefill = new URL(form.dataset.view!);
    prefill.searchParams.set('usp', 'pp_url');
    body.forEach((v, k) => { if (!k.endsWith('other_option_response')) prefill.searchParams.append(k, v); });
    fallback.href = prefill.href;

    submit.disabled = true;
    submit.textContent = form.dataset.sending!;
    try {
      // Google Forms does not send CORS headers; an opaque response means the post went through.
      await fetch(form.action, { method: 'POST', mode: 'no-cors', body });
      done.classList.toggle('is-no', a === 'no');
      const burstFrom = submit;
      if (a === 'yes') leafBurst(burstFrom, card);
      form.hidden = true;
      done.hidden = false;
      done.focus({ preventScroll: true });
    } catch {
      error.hidden = false;
    } finally {
      submit.disabled = false;
      submit.textContent = form.dataset.submit!;
    }
  });

  card.querySelector('[data-again]')!.addEventListener('click', () => {
    form.reset();
    sync();
    done.hidden = true;
    form.hidden = false;
    form.querySelector<HTMLInputElement>('[data-attend]')!.focus();
  });
}

entrances();
countdown();
parallax();
indexPreview();
fitWord();
nowOnSlip();
rsvp();
