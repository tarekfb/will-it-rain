export const basePath = (): string =>
  `${process.env.NODE_ENV === "production" ? "" : "http://localhost:3000"}/api/`;
