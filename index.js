function bin2Dec(input) {
  const regex = new RegExp(/^[0-1]+$/, "g");

  if (input.length === 0) {
    return;
  }

  if (input.length > 20) {
    throw new Error("The input must have a size less than or equal to 20!");
  }

  if (!regex.test(input)) {
    throw new Error("The entry must contain only 0's and 1's!");
  }

  let decimal = 0;
  for (let i = input.length - 1, j = 0; i >= 0; i--, j++) {
    decimal += Number(input[i]) * Math.pow(2, j);
  }

  return decimal;
}

function errorHandler(error) {
  const errorMessage = document.querySelector(".errorMessage");
  const p = document.querySelector(".display>p");

  errorMessage.innerText = error.message;
  p.innerText = "🤷 Waiting for a valid binary number...";
  p.className = "info";
}

function clearError() {
  const errorMessage = document.querySelector(".errorMessage");
  errorMessage.innerText = "";
}

function insertDecimal(decimal) {
  const p = document.querySelector(".display>p");

  p.className = "decimal";

  if (decimal) {
    p.innerText = decimal;
  } else {
    p.innerText = "";
  }
}

const input = document.querySelector("input");

input.addEventListener("input", (event) => {
  try {
    const binary = event.target.value;
    const decimal = bin2Dec(binary);

    clearError();
    insertDecimal(decimal);
  } catch (error) {
    errorHandler(error);
  }
});
