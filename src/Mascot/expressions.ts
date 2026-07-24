// Overlays = geometry drawn on top of the base gorilla for each expression.
// `color` is a swatch role ("dark" | "accent") so overlays theme with the variant.
// `stroke` set => rendered as a stroke of that width (fill:none); otherwise filled.
export type Overlay = {
  tag: "path" | "circle" | "ellipse";
  color: "dark" | "accent";
  d?: string;
  cx?: number;
  cy?: number;
  r?: number;
  rx?: number;
  ry?: number;
  stroke?: number;
};

export const expressions = {
  happy: [
    { tag: "path", color: "dark", d: "M 465.554688 514.597656 C 465.554688 520.800781 460.523438 525.832031 454.320312 525.832031 C 448.117188 525.832031 443.085938 520.800781 443.085938 514.597656 C 443.085938 508.394531 448.117188 503.363281 454.320312 503.363281 C 460.523438 503.363281 465.554688 508.394531 465.554688 514.597656 " },
    { tag: "path", color: "dark", d: "M 544.703125 514.597656 C 544.703125 520.800781 539.671875 525.832031 533.46875 525.832031 C 527.265625 525.832031 522.234375 520.800781 522.234375 514.597656 C 522.234375 508.394531 527.265625 503.363281 533.46875 503.363281 C 539.671875 503.363281 544.703125 508.394531 544.703125 514.597656 " },
    { tag: "path", color: "dark", d: "M 531.136719 660.945312 C 531.136719 673.402344 513.476562 683.5 491.691406 683.5 C 469.90625 683.5 452.246094 673.402344 452.246094 660.945312 C 452.246094 648.488281 469.90625 638.390625 491.691406 638.390625 C 513.476562 638.390625 531.136719 648.488281 531.136719 660.945312 " },
    { tag: "path", color: "accent", d: "M 492.101562 695.066406 C 477.292969 695.066406 464.394531 690.398438 457.652344 683.496094 L 455.625 683.496094 C 463.3125 695.523438 476.769531 703.5 492.101562 703.5 C 507.429688 703.5 520.886719 695.523438 528.578125 683.496094 L 526.550781 683.496094 C 519.804688 690.398438 506.910156 695.066406 492.101562 695.066406 " },
  ],
  sad: [
    { tag: "path", color: "dark", d: "M 465.554688 514.597656 C 465.554688 520.800781 460.523438 525.832031 454.320312 525.832031 C 448.117188 525.832031 443.085938 520.800781 443.085938 514.597656 C 443.085938 508.394531 448.117188 503.363281 454.320312 503.363281 C 460.523438 503.363281 465.554688 508.394531 465.554688 514.597656 " },
    { tag: "path", color: "dark", d: "M 544.703125 514.597656 C 544.703125 520.800781 539.671875 525.832031 533.46875 525.832031 C 527.265625 525.832031 522.234375 520.800781 522.234375 514.597656 C 522.234375 508.394531 527.265625 503.363281 533.46875 503.363281 C 539.671875 503.363281 544.703125 508.394531 544.703125 514.597656 " },
    { tag: "path", color: "dark", stroke: 7, d: "M 468 676 Q 491 662 520 676" },
    { tag: "path", color: "accent", d: "M 432 552 Q 422 572 432 590 Q 442 572 432 552 Z" },
  ],
  angry: [
    { tag: "ellipse", color: "dark", cx: 454, cy: 515, rx: 11, ry: 3.5 },
    { tag: "ellipse", color: "dark", cx: 533, cy: 515, rx: 11, ry: 3.5 },
    { tag: "path", color: "dark", stroke: 10, d: "M 467 670 L 516 670" },
  ],
  surprised: [
    { tag: "circle", color: "dark", cx: 454, cy: 514, r: 14 },
    { tag: "circle", color: "dark", cx: 533, cy: 514, r: 14 },
    { tag: "circle", color: "dark", cx: 491, cy: 667, r: 13 },
  ],
  wince: [
    { tag: "path", color: "dark", stroke: 4, d: "M 442 514 L 466 514" },
    { tag: "circle", color: "dark", cx: 533, cy: 515, r: 7 },
    { tag: "path", color: "dark", stroke: 6, d: "M 467 670 L 480 664 L 491 672 L 502 664 L 514 670" },
    { tag: "path", color: "accent", d: "M 608 478 Q 598 498 608 516 Q 618 498 608 478 Z" },
  ],
} as const satisfies Record<string, readonly Overlay[]>;

export type ExpressionName = keyof typeof expressions;

export const expressionPaths = (name: ExpressionName): readonly Overlay[] =>
  expressions[name];
