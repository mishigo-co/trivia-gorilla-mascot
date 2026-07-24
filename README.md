# Trivia Gorilla Mascot

**Published Storybook:** https://main--6a634cc8ff3bfdfb7c06b4e3.chromatic.com/

A small React + Storybook project for demonstrating [Chromatic](https://www.chromatic.com/)'s
visual-regression testing — specifically its ability to catch minor, easy-to-miss visual
changes in SVG-based components, including ones introduced by LLM-generated edits.

The subject is a gorilla mascot rendered entirely from inline SVG paths. Because the artwork
is pure path data, a one-character change to a coordinate produces a real visual diff that a
human reviewer might scroll past but Chromatic flags automatically.

## The component

`<Mascot>` (`src/Mascot/Mascot.tsx`) composes the gorilla from three data sources:

- **`basePaths.ts`** — the fixed anatomy (face, head, ears, nose, cheeks) that every
  expression shares.
- **`expressions.ts`** — per-expression paths (eyes, mouth, and extras like `chin` or `tear`).
  Keys vary by expression, so the component maps over whatever paths an expression provides.
- **`swatches.ts`** — three color themes (`blue`, `darkRed`, `brown`), each a five-color
  palette (`primary`, `accent`, `inner`, `light`, `dark`).

Props:

| Prop         | Type                            | Default   | Notes                              |
| ------------ | ------------------------------- | --------- | ---------------------------------- |
| `expression` | `happy \| sad \| angry \| ...`  | —         | Only `happy` and `sad` have paths so far |
| `variant`    | `blue \| darkRed \| brown`      | `"blue"`  | Color theme                        |
| `size`       | `number`                        | `240`     | Width/height in px                 |

```tsx
<Mascot expression="happy" variant="darkRed" size={640} />
```

## Stories

`Mascot.stories.tsx` defines the Chromatic snapshot targets: `Primary` (happy/blue),
`DarkRed`, `Brown`, and `Sad`. Each is a snapshot baseline — edit a path in `expressions.ts`
and Chromatic diffs the render against these.

## Development

```bash
pnpm install
pnpm storybook          # dev server on :6006
pnpm build-storybook    # static build for Chromatic
```

Requires pnpm (`packageManager: pnpm@10.23.0`), React 19, Storybook 10.

## How the demo works

1. Storybook renders each mascot variant as a snapshot.
2. Chromatic captures a baseline image per story.
3. An edit to any SVG path (say, an LLM tweaking the mouth curve) changes the render.
4. Chromatic surfaces the pixel diff for review — the whole point of the exercise.
