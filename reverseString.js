export default function reverseString(string) {
  let stringSplit = string.split("");
  let reversed = [];
  for (let i = stringSplit.length; i >= 0; i--) {
    reversed.push(stringSplit[i]);
  }
  return reversed.join("");
}
