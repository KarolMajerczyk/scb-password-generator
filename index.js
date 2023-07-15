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
const passwordBoxes = document.querySelectorAll(".password-box");
const passwordLabels = document.querySelectorAll(".password-label");
const switchModeButton = document.querySelector("#switch-mode");
const body = document.body;

// Copy password to clipboard

passwordBoxes.forEach((box) => {
  const passwordLabel = box.querySelector(".password-label");

  box.addEventListener("click", () => {
    const password = passwordLabel.textContent;
    copyPasswordToClipboard(password);
  });
});

function copyPasswordToClipboard(password) {
  navigator.clipboard
    .writeText(password)
    .then(() => {
      // password copied
    })
    .catch((error) => {
      // error
    });
}

// Switch theme mode

switchModeButton.addEventListener("click", toggleMode);

function toggleMode() {
  body.classList.toggle("light-mode");
  switchModeButton.textContent = body.classList.contains("light-mode")
    ? "dark_mode"
    : "light_mode";
}

// Update the password length label

passwordLengthInput.addEventListener("input", () => {
  passwordLengthLabel.textContent = passwordLengthInput.value;
});

// Generate random passwords

generateButton.addEventListener("click", generatePasswords);

function generatePasswords() {
  const isSymbolChecked = symbolsCheckboxInput.checked;
  const isNumbersChecked = numbersCheckboxInput.checked;
  const passwordLength = Number(passwordLengthInput.value);

  const filteredCharacters = filterCharacters(
    isSymbolChecked,
    isNumbersChecked
  );

  passwordLabels.forEach((label) => {
    const password = generatePassword(passwordLength, filteredCharacters);
    label.textContent = password;
  });
}

function filterCharacters(isSymbolChecked, isNumbersChecked) {
  let filteredCharacters = characters;

  if (!isSymbolChecked) {
    filteredCharacters = filteredCharacters.filter((char) => isSymbol(char));
  }

  if (!isNumbersChecked) {
    filteredCharacters = filteredCharacters.filter((char) => isNumber(char));
  }

  return filteredCharacters;
}

function isSymbol(char) {
  return /^[a-zA-Z0-9]+$/.test(char);
}

function isNumber(char) {
  return isNaN(Number(char));
}

function generatePassword(passwordLength, characters) {
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    const randomNumber = getRandomNumber(characters.length);
    password += characters[randomNumber];
  }

  return password;
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}
