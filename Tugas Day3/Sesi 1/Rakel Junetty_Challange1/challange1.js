// Rakels buat Challenge1
const correctPassword = "jasjisjus";
const userPassword = prompt("Masukkan Passwordmu:");

if (userPassword === correctPassword) {
  alert("Yeyyy Password Benar!");
} else {
  window.location.replace("https://www.google.com");
}