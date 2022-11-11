export const constructUrl = (baseUrl, path) =>
  !baseUrl || !path ? null : `${baseUrl}${path}`;
