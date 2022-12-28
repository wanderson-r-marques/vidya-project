export const removeSpecialCharacters = (string) => {
  return string.replaceAll("-", "").replaceAll(".", "").replaceAll("/", "");
};
