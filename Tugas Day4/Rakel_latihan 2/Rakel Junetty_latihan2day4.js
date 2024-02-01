// // Exercise 1  
// // Function untuk membandingkan dua angka
// function compareNumbers(firstNumber, secondNumber) {
//     if (firstNumber < secondNumber) {
//       return true;
//     } else if (firstNumber > secondNumber) {
//       return false;
//     } else {
//       return -1;
//     }
//   }
  
// // Contoh penggunaan dengan menampilkan hasil di konsol
//   console.log(compareNumbers(5, 8)); 
//   console.log(compareNumbers(5, 3));    
//   console.log(compareNumbers(4, 4));
//   console.log(compareNumbers(3, 3));
//   console.log(compareNumbers(17, 2));

// // Exercise 2
// // Function untuk membalikkan string dan menampilkan hasil di konsol
// function reverseString(inputString) {
//     // Menggunakan split, reverse, dan join untuk membalikkan string
//     const reversedString = inputString.split("").reverse().join("");
  
//     // Mengembalikan hasil
//     return reversedString;
//     }
  
//     // Contoh penggunaan dengan menampilkan hasil di konsol
//     console.log(reverseString("Hello World and Coders"));
//     console.log(reverseString("John Doe"));
//     console.log(reverseString("I am a bookworm"));
//     console.log(reverseString("Coding is my hobby"));
//     console.log(reverseString("Super"));

// // Exercise 3
// // Fungsi untuk mengurutkan huruf dalam sebuah teks (A-Z)
// function urutHuruf(text) {
//     // Menggunakan .split("") untuk mengonversi string ke array karakter
//     const lettersArray = text.split("");
  
//     // Menggunakan .sort() untuk mengurutkan array
//     const sortedArray = lettersArray.sort();
  
//     // Menggunakan .join("") untuk mengonversi array kembali ke string
//     const sortedText = sortedArray.join("");
  
//     // Mengembalikan hasil
//     return sortedText;
//     }
  
//     // Contoh penggunaan dengan menampilkan hasil 
//     console.log(urutHuruf("halo")); 
//     console.log(urutHuruf("qwerty")); 
//     console.log(urutHuruf("qwertyuioplkjhgfdsazxcvbnm")); 


// // Exercise 4
// // Fungsi untuk mengecek apakah sebuah array merupakan deret aritmatika
// function isArithmeticProgression(arr) {
//     // Menghitung selisih pertama dan kedua
//     const commonDifference = arr[1] - arr[0];
  
//     // Mengecek selisih antar angka yang tidak konsisten
//     for (let i = 1; i < arr.length - 1; i++) {
//       if (arr[i + 1] - arr[i] !== commonDifference) {
//         return false;
//       }
//     }
  
//     // Jika selisih konsisten, maka merupakan deret aritmatika
//     return true;
//     }
  
//     // Contoh penggunaan dengan menampilkan hasil
//     console.log(isArithmeticProgression([1, 2, 3, 4, 5])); 
//     console.log(isArithmeticProgression([2, 4, 6, 12, 24])); 
//     console.log(isArithmeticProgression([2, 4, 6, 8])); 
//     console.log(isArithmeticProgression([2, 6, 18, 54])); 
//     console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9])); 
  

// // Exercise 5
// // Fungsi untuk mengecek karakter 'a' dan 'b' dengan jarak minimal 3 karakter
// function threeStepAB(str) {
//     // Mengecek karakter 'a' dan 'b' dalam string
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === 'a') {
//         // Mengecek keberadaan karakter 'b' dengan jarak minimal 3 karakter
//         if (str.indexOf('b', i + 1) !== -1 && str.indexOf('b', i + 1) - i >= 3) {
//           return true;
//         }
//       } else if (str[i] === 'b') {
//         // Mengecek keberadaan karakter 'a' dengan jarak minimal 3 karakter
//         if (str.indexOf('a', i + 1) !== -1 && str.indexOf('a', i + 1) - i >= 3) {
//           return true;
//         }
//       }
//     }
  
//     // Jika tidak ditemukan, kembalikan false
//     return false;
//   }
  
//   // Contoh penggunaan dengan menampilkan hasil 
//   console.log(threeStepAB("lane borrowed")); 
//   console.log(threeStepAB("i am sick")); 
//   console.log(threeStepAB("you are boring")); 
//   console.log(threeStepAB("barbarian"));
//   console.log(threeStepAB("bacon and meat"));


// // Exercise 6
// // Fungsi untuk mencari FPB dari dua bilangan
// function gcd(a, b) {
//     // Mengecek apakah salah satu bilangan adalah nol
//     if (a === 0 || b === 0) {
//       return "Tidak ada FPB karena salah satu bilangan nol.";
//     }
  
//     // Algoritma Euclidean untuk mencari FPB
//     while (b !== 0) {
//       let temp = b;
//       b = a % b;
//       a = temp;
//     }
  
//     return Math.abs(a); // Mengembalikan nilai absolut untuk hasil positif
//     }
  
//     // Contoh penggunaan dengan menampilkan hasil 
//     console.log(gcd(12, 16)); 
//     console.log(gcd(50, 40)); 
//     console.log(gcd(22, 99));  
//     console.log(gcd(24, 36)); 
//     console.log(gcd(17, 23)); 


// // Exercise 7
// // Fungsi untuk memeriksa apakah suatu angka adalah bilangan prima
// function isPrime(number) {
//     if (number <= 1) {
//       return false; // Bilangan negatif, nol, atau satu bukan bilangan prima
//     }
  
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) {
//         return false; // Terdapat pembagi selain 1 dan angka itu sendiri
//       }
//     }
  
//     return true; // Jika tidak terdapat pembagi selain 1 dan angka itu sendiri
//   }
  
//   // Contoh penggunaan dengan menampilkan hasil 
//   console.log(isPrime(3));    
//   console.log(isPrime(7));   
//   console.log(isPrime(6));   
//   console.log(isPrime(23));   
//   console.log(isPrime(26)); 


// Exercise 8
// Fungsi untuk menemukan angka prima di antara dua angka
function listPrima(angkaPertama, angkaKedua) {
    const primes = [];
  
    for (let currentNumber = Math.max(2, angkaPertama); currentNumber <= angkaKedua; currentNumber++) {
      if (isPrimeNumber(currentNumber)) {
        primes.push(currentNumber);
      }
    }
  
    return primes;
  }
  
  // Fungsi untuk memeriksa apakah suatu angka adalah bilangan prima
  function isPrimeNumber(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  // Contoh penggunaan dengan menampilkan hasil 
  console.log(listPrima(1, 5));  
  console.log(listPrima(5, 10));   
  console.log(listPrima(10, 20)); 
  