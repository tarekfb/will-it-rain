export const basePath = (): string =>
  `${
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "willitrain.site"
  }/api/`;
