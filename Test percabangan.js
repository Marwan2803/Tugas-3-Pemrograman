// Fungsi untuk menghitung kalori berdasarkan jenis olahraga dan waktu yang dihabiskan
function hitungKalori(jenisOlahraga, waktu) {
    let kalori = 0;

    if (jenisOlahraga === "lari") {
        if (waktu >= 5) {
            kalori = (waktu / 5) * 60;
        } else {
            console.log("Minimal waktu untuk lari adalah 5 menit.");
        }
    } else if (jenisOlahraga === "push-up") {
        if (waktu >= 30) {
            kalori = (waktu / 30) * 200;
        } else {
            console.log("Minimal waktu untuk push-up adalah 30 menit.");
        }
    } else if (jenisOlahraga === "plank") {
        if (waktu >= 1) {
            kalori = waktu * 5;
        } else {
            console.log("Minimal waktu untuk plank adalah 1 menit.");
        }
    } else {
        console.log("Jenis olahraga tidak dikenal.");
    }

    return kalori;
}

// Contoh penggunaan fungsi
let totalKalori = 0;

// Input jumlah waktu untuk setiap olahraga
let waktuLari = 10;  // Misalnya 10 menit lari
let waktuPushUp = 60; // Misalnya 60 menit push-up
let waktuPlank = 15;  // Misalnya 15 menit plank

// Menghitung kalori dari setiap olahraga dan menambahkannya ke total
totalKalori += hitungKalori("lari", waktuLari);
totalKalori += hitungKalori("push-up", waktuPushUp);
totalKalori += hitungKalori("plank", waktuPlank);

console.log("Total kalori yang dibakar:", totalKalori);
