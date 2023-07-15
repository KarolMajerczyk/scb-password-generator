const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
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
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const symbolsCheckboxInput = document.querySelector("#symbols");
const numbersCheckboxInput = document.querySelector("#numbers");
const passwordLengthInput = document.querySelector("#password-length");
const passwordLengthLabel = document.querySelector("#password-length-label");
const generateButton = document.querySelector("#generate-passwords");

const firstPasswordLabel = document.querySelector("#first-password");
const secondPasswordLabel = document.querySelector("#second-password");

passwordLengthInput.addEventListener("change", () => {
  passwordLengthLabel.textContent = passwordLengthInput.value;
});

generateButton.addEventListener("click", () => {
  const isSymbolChecked = symbolsCheckboxInput.checked;
  const isNumbersChecked = numbersCheckboxInput.checked;
  const passwordLength = passwordLengthInput.value;

  const filteredCharacters = filterCharacters(
    isSymbolChecked,
    isNumbersChecked
  );

  firstPasswordLabel.textContent = generatePassword(
    passwordLength,
    filteredCharacters
  );
  secondPasswordLabel.textContent = generatePassword(
    passwordLength,
    filteredCharacters
  );
});

function filterCharacters(isSymbolChecked, isNumbersChecked) {
  let filteredCharacters = [...characters];

  if (!isSymbolChecked) {
    filteredCharacters = filteredCharacters.filter((char) =>
      /^[a-zA-Z0-9]+$/.test(char)
    );
  }

  if (!isNumbersChecked) {
    filteredCharacters = filteredCharacters.filter((char) => isNaN(char));
  }

  return filteredCharacters;
}

function generatePassword(passwordLength, characters) {
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * characters.length);
    password += characters[randomNumber];
  }

  console.log(password);

  return password;
}
