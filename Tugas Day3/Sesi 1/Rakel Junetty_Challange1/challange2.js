// Rakels buat Challenge2
const userScore = prompt("Masukkan nilamu (1-100):");
const numericScore = parseInt(userScore);

if (numericScore >= 1 && numericScore <= 100) {
  if (numericScore >= 80 && numericScore <= 100) {
    alert("Yeyy Sangat Baik, Kamu mendapat nilai A");
  } else if (numericScore >= 60 && numericScore < 80) {
    alert("Keren..., Kamu mendapat nilai B");
  } else if (numericScore >= 40 && numericScore < 60) {
    alert("Cukup oke loh, nilaimu C");
  } else if (numericScore < 40) {
    alert("Lebih semangat yuk, nilamu D");
  }
} else {
  alert("Bolehnya hanya input nilai dari 1-100 aja yaa.");
}