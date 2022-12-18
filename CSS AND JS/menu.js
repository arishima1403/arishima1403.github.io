const arrBarang = [
  {
    id: 1,
    nama: "Permen jelly Bintang",
    harga: 2000,
  },
  {
    id: 2,
    nama: "lollipop Jadul",
    harga: 2000,
  },
  {
    id: 3,
    nama: "Pudding Coklat",
    harga: 2000,
  },
  {
    id: 4,
    nama: "Pudding Ungu",
    harga: 2000,
  },
  {
    id: 5,
    nama: "Jus Jambu",
    harga: 2000,
  },
  {
    id: 6,
    nama: "Jus Jambu Botol",
    harga: 4500,
  },
  {
    id: 7,
    nama: "Mie Kremesan",
    harga: 1000,
  },
  {
    id: 8,
    nama: "Roti Goreng",
    harga: 2000,
  },
  {
    id: 9,
    nama: "Pisang dan Jeruk",
    harga: 3000,
  },
  {
    id: 10,
    nama: "Krupuk Bawang",
    harga: 1500,
  },
  {
    id: 11,
    nama: "Tape",
    harga: 2500,
  },
  {
    id: 12,
    nama: "Es Batu",
    harga: 1500,
  },
];

function beli(id) {
  // mengambil harga barang
  let hargaBarang = 0;
  let namaBarang = "";
  for (let i = 0; i < arrBarang.length; i++) {
    if (arrBarang[i].id === id) {
      hargaBarang = arrBarang[i].harga;
      namaBarang = arrBarang[i].nama;
      break;
    }
  }
  let diskon = 0;
  // pakai prompt untuk mengambil jumlah valuenya
  let totalBarang = prompt("Masukan Jumlah barang :");
  if (totalBarang < 10) {
    alert("Barang tidak boleh kurang dari 10");
    return;
  } else if (totalBarang > 30 && totalBarang <= 39) {
    diskon = 10000;
  } else if (totalBarang >= 40) {
    diskon = 20000;
  } else {
    diskon = 0;
  }
  // total harga
  let totalHargaFinal = hargaBarang * totalBarang;
  alert(`
  Anda membeli ${namaBarang} sebanyak ${totalBarang}. 
  Anda mendapatkan diskon sebesar ${diskon}.
  Total yang harus dibayarkan adalah Rp.${totalHargaFinal - diskon},-`);
}
