export function checkIfTheFirstLetterIsUppercase(text: string) {
  const result = text[0] === text[0].toUpperCase() ? true : false;
  return result;
}
