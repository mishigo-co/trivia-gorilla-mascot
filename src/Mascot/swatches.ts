export const swatches = {
  blue: {
    primary: "#4663A9",
    accent: "#88A5DC",
    inner: "#5972C1",
    light: "#D1E0F4",
    dark: "#14171D",
  },
  darkRed: {
    primary: "#8E3038",
    accent: "#C9646B",
    inner: "#A63F47",
    light: "#F0D3D4",
    dark: "#1D1113",
  },
  brown: {
    primary: "#8A5A34",
    accent: "#C99A6B",
    inner: "#A5713F",
    light: "#EFDCC6",
    dark: "#1D1611",
  },
};

export type SwatchName = keyof typeof swatches;
