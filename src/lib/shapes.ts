// Paper edges as clip-path polygons (percent across, px up from the edge),
// so slips and cards get real cut edges without images or gradients.

const f = (n: number) => +n.toFixed(3);

/** Zigzag bottom edge, straight top. */
export function zigzagBottom(teeth = 28, depth = 10): string {
  const pts = ['0 0', '100% 0'];
  for (let i = teeth; i >= 0; i--) {
    const x = (i / teeth) * 100;
    pts.push(`${f(x)}% calc(100% - ${depth}px)`);
    if (i > 0) pts.push(`${f(x - 50 / teeth)}% 100%`);
  }
  return `polygon(${pts.join(', ')})`;
}

/** Scalloped bottom edge (half-circles), straight top. */
export function scallopBottom(scallops = 22, radius = 10, steps = 7): string {
  const pts = ['0 0', '100% 0'];
  for (let i = scallops - 1; i >= 0; i--) {
    for (let s = 0; s <= steps; s++) {
      const t = (s / steps) * Math.PI;
      const x = ((i + (1 + Math.cos(t)) / 2) / scallops) * 100;
      const y = radius - Math.sin(t) * radius;
      pts.push(`${f(x)}% calc(100% - ${f(y)}px)`);
    }
  }
  return `polygon(${pts.join(', ')})`;
}

/** Deterministic pseudo-random numbers so the grass is identical on every build. */
function rng(seed: number) {
  return () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };
}

export interface Blade {
  d: string;
  fill: string;
}

/**
 * Meadow grass along the bottom of a 1440×260 box: long tapering blades that
 * lean and curl, in three layers (back to front) so each can sway on its own.
 */
export function meadow(seed = 7): Blade[][] {
  const r = rng(seed);
  const layers: Blade[][] = [];
  const palettes = [
    ['#9eab96', '#a8b4a0', '#8d9b84'],
    ['#868d75', '#7a8170', '#949b84'],
    ['#3f5643', '#31473a', '#4d6752'],
  ];
  const counts = [70, 60, 46];
  const heights = [150, 200, 250];
  for (let l = 0; l < 3; l++) {
    const blades: Blade[] = [];
    for (let i = 0; i < counts[l]; i++) {
      const x = r() * 1480 - 20;
      const h = heights[l] * (0.45 + r() * 0.65);
      const lean = (r() - 0.5) * h * 0.9;
      const w = 3 + r() * 7;
      const tipX = x + lean;
      const tipY = 260 - h;
      const c1x = x + lean * 0.15;
      const c1y = 260 - h * 0.55;
      const d = [
        `M${f(x - w)} 262`,
        `Q${f(c1x - w * 0.6)} ${f(c1y)} ${f(tipX)} ${f(tipY)}`,
        `Q${f(c1x + w * 0.6)} ${f(c1y + 8)} ${f(x + w)} 262`,
        'Z',
      ].join(' ');
      blades.push({ d, fill: palettes[l][Math.floor(r() * 3)] });
    }
    layers.push(blades);
  }
  return layers;
}
