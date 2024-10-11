// Fungsi untuk mengecek apakah angka tersebut palindrome
function isPalindrome(number) {
    let str = number.toString();
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

// Fungsi untuk mencari palindrome terdekat setelah angka input
function nextPalindrome(number) {
    number++; // Memulai dari angka berikutnya
    while (!isPalindrome(number)) {
        number++; // Teruskan hingga menemukan palindrome
    }
    return number;
}

// Contoh penggunaan fungsi
let inputs = [9, 100, 200, 1000, 2345]; // Contoh input yang diberikan
inputs.forEach(input => {
    let palindromeTerdekat = nextPalindrome(input);
    console.log("Palindrome terdekat setelah " + input + " adalah: " + palindromeTerdekat);
});
