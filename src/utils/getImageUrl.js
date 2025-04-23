export const getImageUrl = (url, width) => `https:${url}?w=${width}`;

export const getSrcSet = (url, widths) =>
  widths.map(w => `${getImageUrl(url, w)} ${w}w`).join(', ');
