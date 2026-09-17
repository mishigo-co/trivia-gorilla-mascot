export type Overlay = {
  tag: "path" | "circle" | "ellipse";
  color: "dark" | "accent" | "light";
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
    { tag: "circle", color: "dark", cx: 454, cy: 514, r: 13 },
    { tag: "circle", color: "dark", cx: 533, cy: 514, r: 13 },
    { tag: "circle", color: "light", cx: 459, cy: 509, r: 4 },
    { tag: "circle", color: "light", cx: 538, cy: 509, r: 4 },
    { tag: "circle", color: "accent", cx: 412, cy: 645, r: 15 },
    { tag: "circle", color: "accent", cx: 571, cy: 645, r: 15 },
    { tag: "path", color: "dark", stroke: 8, d: "M 450 650 Q 491 705 532 650" },
  ],
  sad: [
    { tag: "path", color: "dark", d: "M 465.554688 514.597656 C 465.554688 520.800781 460.523438 525.832031 454.320312 525.832031 C 448.117188 525.832031 443.085938 520.800781 443.085938 514.597656 C 443.085938 508.394531 448.117188 503.363281 454.320312 503.363281 C 460.523438 503.363281 465.554688 508.394531 465.554688 514.597656 " },
    { tag: "path", color: "dark", d: "M 544.703125 514.597656 C 544.703125 520.800781 539.671875 525.832031 533.46875 525.832031 C 527.265625 525.832031 522.234375 520.800781 522.234375 514.597656 C 522.234375 508.394531 527.265625 503.363281 533.46875 503.363281 C 539.671875 503.363281 544.703125 508.394531 544.703125 514.597656 " },
    { tag: "path", color: "dark", stroke: 7, d: "M 468 676 Q 491 662 520 676" },
    { tag: "path", color: "accent", d: "M 432 552 Q 422 572 432 590 Q 442 572 432 552 Z" },
  ],
  angry: [
    // narrowed eyes with angled brows
    { tag: "ellipse", color: "dark", cx: 454, cy: 516, rx: 12, ry: 5 },
    { tag: "ellipse", color: "dark", cx: 533, cy: 516, rx: 12, ry: 5 },
    { tag: "path", color: "dark", stroke: 9, d: "M 434 494 L 472 508" },
    { tag: "path", color: "dark", stroke: 9, d: "M 553 494 L 515 508" },
    // snarling mouth with bared teeth
    { tag: "path", color: "dark", d: "M 440 655 Q 491 640 542 655 L 536 690 Q 491 705 446 690 Z" },
    { tag: "path", color: "light", d: "M 452 658 L 460 678 L 468 658 Z" },
    { tag: "path", color: "light", d: "M 472 656 L 480 674 L 488 656 Z" },
    { tag: "path", color: "light", d: "M 494 656 L 502 674 L 510 656 Z" },
    { tag: "path", color: "light", d: "M 514 658 L 522 678 L 530 658 Z" },
    { tag: "path", color: "light", d: "M 464 688 L 470 674 L 476 688 Z" },
    { tag: "path", color: "light", d: "M 506 688 L 512 674 L 518 688 Z" },
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
  expressions[name] ?? []; // ponytail: unknown expression → no overlays, never a crash
