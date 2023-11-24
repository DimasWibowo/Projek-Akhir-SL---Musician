const Database = require('better-sqlite3');

// Path ke file database
const dbPath = 'D:/Kuliah UNY/Scripting Language/Projek Akhir/Projek Akhir SL - Musician/backend/json.sqlite';

// Buka koneksi dengan database
const db = new Database(dbPath, { verbose: console.log });

// Contoh: Tampilkan struktur tabel 'users'
const tableInfo = db.prepare("PRAGMA table_info(user)").all();
console.log(tableInfo);

// Contoh: Tampilkan data dari tabel 'users'
const userData = db.prepare("SELECT * FROM user").all();
console.log(userData);

/* const forumPosts = db.prepare('SELECT * FROM forum').all();
console.log('Tabel Forum:');
console.log(forumPosts); */

// Menampilkan isi tabel 'materi'
/* const materi = db.prepare('SELECT * FROM materi').all();
console.log('Tabel Materi:');
console.log(materi); */

// Tutup koneksi database
db.close();
