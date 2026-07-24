import { basePaths } from "./basePaths";
import { expressionPaths, type ExpressionName } from "./expressions";
import { swatches, type SwatchName } from "./swatches";

type Props = {
  expression: ExpressionName;
  size?: number;
  variant?: SwatchName;
};

export function Mascot({ expression, size = 240, variant = "blue" }: Props) {
  const swatch = swatches[variant];
  const face = expressionPaths(expression);
  return (
    <svg
      viewBox="0 0 1000 1000"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Base paths */}
      <path d={basePaths.face} fill={swatch.light} />
      <path d={basePaths.head} fill={swatch.inner} />
      <path d={basePaths.eyeBase} fill={swatch.accent} />
      <path d={basePaths.nose} fill={swatch.accent} />
      <path d={basePaths.nostrilRight} fill={swatch.dark} />
      <path d={basePaths.nostrilLeft} fill={swatch.dark} />
      <path d={basePaths.earLeft} fill={swatch.primary} />
      <path d={basePaths.earRight} fill={swatch.primary} />
      <path d={basePaths.cheekLeft} fill={swatch.primary} />
      <path d={basePaths.cheekRight} fill={swatch.primary} />
      {/* Expression overlays — path/circle/ellipse, filled or stroked, themed by role */}
      {face.map((o, i) => {
        const color = swatch[o.color];
        const paint = o.stroke
          ? { fill: "none", stroke: color, strokeWidth: o.stroke }
          : { fill: color };
        if (o.tag === "circle")
          return <circle key={i} cx={o.cx} cy={o.cy} r={o.r} {...paint} />;
        if (o.tag === "ellipse")
          return <ellipse key={i} cx={o.cx} cy={o.cy} rx={o.rx} ry={o.ry} {...paint} />;
        return <path key={i} d={o.d} {...paint} />;
      })}
    </svg>
  );
}
