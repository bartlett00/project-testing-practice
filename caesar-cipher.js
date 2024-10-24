export default function caesarCipher(string, shift) {
  let stringSplit = [...string];
  let cipher = [];
  stringSplit.map((character) => {
    cipher.push(shiftLetter(character, shift));
  });
  return cipher.join("");
}

// A-Z char. codes are 65 - 90
// a-z char. codes are 97 - 122
function shiftLetter(character, shift) {
  let charCode = character.charCodeAt(0);
  let shifted = charCode + shift;
  let newCharCode = character.charCodeAt(0);
  //check if character is A-Z
  if (charCode >= 65 && charCode <= 90) {
    //check if shift needs to "wrap" forwards
    if (shifted > 90) {
      let difference = shifted - 90;
      newCharCode = 64 + difference;
      //check if shift needs to "wrap" backwards
    } else if (shifted < 65) {
      let difference = shifted - 65;
      newCharCode = 89 + difference;
      //otherwise, simply shift char. code
    } else {
      newCharCode = shifted;
    }
    //same logic as before, but for other character range
  } else if (charCode >= 97 && charCode <= 122) {
    if (shifted > 122) {
      let difference = shifted - 122;
      newCharCode = 96 + difference;
    } else if (shifted < 97) {
      let difference = shifted - 97;
      newCharCode = 121 + difference;
    } else {
      newCharCode = shifted;
    }
  }
  return String.fromCharCode(newCharCode);
}
