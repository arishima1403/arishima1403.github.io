$(document).ready(function () {
  $(".minus").click(function () {
    var $input = $(this).parent().find("input");
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $(".plus").click(function () {
    var $input = $(this).parent().find("input");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});

const kirimPudding = () => {
  let totalbarang = document.getElementById("pudding").value;
  if (totalbarang < 10) {
    alert("Barang harus lebih dari 10");
  } else if (totalbarang > 20) {
    let hargaAwal = totalbarang * 2000;
    let diskon = hargaAwal * 0.2;
    let total = hargaAwal - diskon;
    alert(`Total yang harus dibayarkan sebesar Rp.${total}`);
  } else {
    alert(`Total yang harus dibayarkan sebesar Rp.${totalbarang * 2000}`);
  }
};

const kirimTape = () => {
  let totalbarang = document.getElementById("tape").value;
  if (totalbarang < 10) {
    alert("Barang harus lebih dari 10");
  } else if (totalbarang > 20) {
    let hargaAwal = totalbarang * 2500;
    let diskon = hargaAwal * 0.2;
    let total = hargaAwal - diskon;
    alert(`Total yang harus dibayarkan sebesar Rp.${total}`);
  } else {
    alert(`Total yang harus dibayarkan sebesar Rp.${totalbarang * 2500}`);
  }
};

const kirimPermen = () => {
  let totalbarang = document.getElementById("permen").value;
  if (totalbarang < 10) {
    alert("Barang harus lebih dari 10");
  } else if (totalbarang > 20) {
    let hargaAwal = totalbarang * 2000;
    let diskon = hargaAwal * 0.2;
    let total = hargaAwal - diskon;
    alert(`Total yang harus dibayarkan sebesar Rp.${total}`);
  } else {
    alert(`Total yang harus dibayarkan sebesar Rp.${totalbarang * 2000}`);
  }
};

// let barang = [
//   {
//     nama: "Pudding",
//     harga: 2000,
//     value: document.getElementById("test1").value,
//   },
//   {
//     nama: "Permen jelly Bintang",
//     harga: 2000,
//     value: document.getElementById("test2").value,
//   },
//   {
//     nama: "Tape",
//     harga: 2500,
//     value: document.getElementById("test3").value,
//   },
// ];

// function kirim() {
//   let barang1 = barang[0].harga * barang[0].value;
//   let barang2 = barang[1].harga * barang[1].value;
//   let barang3 = barang[2].harga * barang[2].value;

//   let total = barang1 + barang2 + barang3
// }
