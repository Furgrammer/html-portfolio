alert("Tebak angka antara 1-10\nKamu punya 3 kesempatan");
var jawaban = Math.floor(Math.random() * 10);

for (var i = 3; i > 0; i--) {
  var angka = prompt("Masukkan angka 1-10: ");
  if (angka == jawaban) {
    alert("Tebakanmu benar!");
    break;
  } else if (angka < jawaban) {
    alert("Angka terlalu rendah!\nMasih ada " + (i - 1) + " kesempatan lagi.");
  } else if (angka > jawaban) {
    alert("Angka terlalu tinggi!\nMasih ada " + (i - 1) + " kesempatan lagi.");
  } else if (i == 1) {
    alert("Kesempatanmu habis! Angka yang benar adalah " + jawaban);
  } else {
    alert("Input tidak valid! Silakan masukkan angka.");
  }
}
