function capitalize(string) {
  let stringParsed = string.split("");
  stringParsed[0] = stringParsed[0].toUpperCase();
  return stringParsed.join("");
}

export default capitalize;
