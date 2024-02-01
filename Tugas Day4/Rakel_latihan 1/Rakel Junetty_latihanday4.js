// // Exercise1
// // Buat variable dengan let dan const
// let fruits = ['apple', 'pisang', 'banana', 'orange', 'grape', 'kiwi'];
// console.log(fruits);
// const fruits1 = ['apple', 'pisang', 'banana', 'orange', 'grape', 'kiwi'];
// console.log(fruits1);

// // A. Buat array berisi 5 buah-buahan (string)
// let buahArray = ['apel', 'pisang', 'mangga', 'jeruk', 'kiwi'];

// // B. Tambahkan satu buah
// buahArray.push('semangka');

// // C. Ubah satu buah
// buahArray[2] = 'nanas';

// // D. Kurangi satu buah terakhir
// buahArray.pop();

// // E. Tampilkan isi array di setiap step
// console.log(buahArray);

// // Exercise2
// // A. Buat objek mendeskripsikan diri
// let personalInfo = {
//     nama_depan: "Rakel",
//     nama_belakang: "Junetty",
//     hobi: ["tidur", "makan"],
//     angka_favorit: 14,
//     memakai_kacamata: false
//   };

//     personalInfo.pekerjaan ="Matematikawan";
//     personalInfo.umur ="23";

//   // B dan C Tambahkan property lainnya
//   console.log(personalInfo);
  
//   // D. Cetak nama_lengkap
//   console.log(personalInfo.nama_depan + ' ' + personalInfo.nama_belakang);
  
//   // E. Ubah angka_favorit jadi 8
//   personalInfo.angka_favorit = 8;
//   console.log(personalInfo.angka_favorit);
  
//   // F. Tambahkan satu hobi "coding"
//   personalInfo.hobi.push("coding");
//   console.log(personalInfo.hobi);
  
//   // G. Tambahkan satu property "lulusan" dengan value "Hacktiv8"
//   personalInfo.lulusan = "Hacktiv8";
//   console.log(personalInfo.lulusan);
  
//   // H. Cetak semua hobi satu per satu menggunakan loop
//   console.log();
//   for (let i = 0; i < personalInfo.hobi.length; i++) {
//     console.log(personalInfo.hobi[i]);
//   }
  
//   // I. Cetak semua key dan values milik objek
//   console.log();
//   for (let key in personalInfo) {
//     console.log(key);
//   }
  
//   console.log();
//   for (let key in personalInfo) {
//     console.log(personalInfo[key]);
//   }
  
//   // J. Gunakan loop untuk cetak semua property milik objek dengan format key : values
//   console.log();
//   for (let key in personalInfo) {
//     console.log(key + " : " + personalInfo[key]);
//   }


// // Exercise 3
// // Tugas 1
// // A. Buatlah sebuah function
// function printCurrentDate() {
// // B. Function tersebut akan mencetak tanggal sekarang ketika dipanggil
//   let currentDate = new Date();
//   console.log(currentDate);
// }

// // Tugas 2
// // A. Buatlah function berikutnya
// function getCurrentDate1() {
// // B. Function tersebut memberikan tanggal sekarang ketika dipanggil
//   let currentDate1 = new Date();
//   return currentDate1.toLocaleDateString();
// }

// // C. Cetaklah hasil dari function tersebut
// console.log(getCurrentDate1());


// Exercise 4
// Buatlah sebuah function yang menerima sebuah angka
function cekgage(inputNumber) {
// Tambahkan pengecekan tipe data
if (typeof inputNumber !== 'number' || isNaN(inputNumber)) {
  return "Invalid Data";
}

// Gunakanlah kondisional untuk memeriksa angka tersebut ganjil atau genap
if (inputNumber % 2 === 0) {

// Gunakan return untuk mengembalikan hasil pemeriksaan angka ganjil atau genap
return "genap";
  } else {
return "ganjil";
  }
}

// Tes dengan console log hasil function dengan angka: 2, 3, 20, 21
console.log(cekgage(2));
console.log(cekgage(3));
console.log(cekgage(20));
console.log(cekgage(21));
console.log(cekgage("invalid"));

