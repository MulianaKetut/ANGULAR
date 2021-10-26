function removeSpaces(text) {
  //   return text.split(" ").join("");
  return text.replace(/\s/g, "");
}

function reverseText(text) {
  return text.split("").reverse().join("");
}

function updateVowels(text) {
  let arrVowels = ["a", "i", "u", "e", "o"];
  let arrText = text.toLowerCase().split()
  for (let i = 0; i < arrText.length; i++) {
      if(arrVowels.includes(arrText[i])){
          arrText[i]=String.fromC
      }
  }
}

let password = "ini password";

let rs = removeSpaces(password);
let rt = reverseText(rs);

console.log(rs);
console.log(rt);
