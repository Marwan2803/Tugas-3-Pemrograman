// Fungsi untuk mengecek apakah raja dalam posisi skak
function isKingInCheck(kingPos, rookPos) {
    // Mendapatkan posisi raja dan benteng
    const [kingX, kingY] = kingPos; // [baris, kolom]
    const [rookX, rookY] = rookPos;

    // Raja dalam skak jika berada dalam baris atau kolom yang sama dengan benteng
    return kingX === rookX || kingY === rookY;
}

// Fungsi untuk menampilkan papan catur
function displayChessBoard(kingPos, rookPos) {
    const boardSize = 5; // Ukuran papan catur 5x5
    let board = Array.from({ length: boardSize }, () => Array(boardSize).fill('.')); // Inisialisasi papan

    // Menandai posisi raja dan benteng
    const [kingX, kingY] = kingPos;
    const [rookX, rookY] = rookPos;

    board[kingX][kingY] = 'R'; // R untuk Raja
    board[rookX][rookY] = 'B'; // B untuk Benteng

    // Menampilkan papan catur
    console.log("Papan Catur:");
    for (let row of board) {
        console.log(row.join(' ')); // Menampilkan setiap baris
    }
}

// Contoh posisi raja dan benteng
const kingPosition = [2, 3]; // Posisi raja (baris 2, kolom 3)
const rookPosition = [4, 3]; // Posisi benteng (baris 4, kolom 3)

// Menampilkan papan catur
displayChessBoard(kingPosition, rookPosition);

// Mengecek apakah raja terkena skak
if (isKingInCheck(kingPosition, rookPosition)) {
    console.log("Raja dalam posisi skak!");
} else {
    console.log("Raja aman.");
}
