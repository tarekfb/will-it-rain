export const basePath = (): string => {
  const env = process.env.NODE_ENV;
  const http = env === "development" ? "http" : "https";
  const domain =
    env === "development" ? "localhost:3000" : "wwww.willitrain.site";
  return `${http}://${domain}/api/`;
};
