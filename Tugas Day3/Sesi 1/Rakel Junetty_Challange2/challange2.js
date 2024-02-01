// Challenge
const numberOfRows = 100;
const numberOfColumns = 100;

for (let i = 1; i <= numberOfRows; i++) {
  let rowText = (i % 2 !== 0) ? "O".repeat(numberOfColumns) : " ".repeat(numberOfColumns);
  console.log(rowText);
}