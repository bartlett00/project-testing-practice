export default function caesarCipher(string, shift) {
  let alphabetRegex = /^[A-Za-z]+$/;
  let stringSplit = [...string];
  let alphabetKey = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let cipher = stringSplit.map((character) => {
    if (character.match(alphabetRegex)) {
      let shiftedChar = shiftLetter(character, shift);
    }
  });
  return cipher;
}

function shiftLetter(character, shift) {}
