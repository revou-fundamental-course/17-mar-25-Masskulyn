function hitungluas() {
  let angka = document.getElementById("angka").value;
  if (angka === "" || angka <= 0) {
    alert("Angka yang dimasukkan tidak valid!");
    return 0;
  }
  let luas = angka * angka;
  document.getElementById(
    "hasil"
  ).innerHTML = `L = S x S <br>L = ${angka} x ${angka} <br> L = ${luas} `;
}
function reset() {
  document.getElementById("angka").value = " ";
  document.getElementById("hasil").innerHTML = " ";
}
function hitungkeliling() {
  let angka = document.getElementById("angka-keliling").value;
  if (angka === "" || angka <= 0) {
    alert("Angka yang dimasukkan tidak valid!");
    return 0;
  }
  let keliling = 4 * angka;
  document.getElementById(
    "hasil-keliling"
  ).innerHTML = `K = 4 x S <br>K = ${4} x ${angka} <br> K = ${keliling} `;
}
function reset_keliling() {
  document.getElementById("angka-keliling").value = " ";
  document.getElementById("hasil-keliling").innerHTML = " ";
}
function persegi() {
  document.getElementById("container-persegi").style.display = "block";
  document.getElementById("container-persegi-panjang").style.display = "none";
}

function persegipanjang() {
  document.getElementById("container-persegi").style.display = "none";
  document.getElementById("container-persegi-panjang").style.display = "block";
}
document.addEventListener("DOMContentLoaded", function () {
  // Sembunyikan menu saat pertama kali halaman dimuat
  document.getElementById("container-persegi").style.display = "block";
  document.getElementById("container-persegi-panjang").style.display = "none";
});

function hitungluasp_panjang() {
  let angka_panjang = document.getElementById("angka-panjang-lpp").value;
  let angka_lebar = document.getElementById("angka-lebar-lpp").value;
  if (angka_panjang === "" || angka <= 0) {
    alert("Angka yang dimasukkan tidak valid!");
    return 0;
  }
  let luas_pp = angka_panjang * angka_lebar;
  document.getElementById(
    "hasil-luas-pp"
  ).innerHTML = `L = P x L <br>L = ${angka_panjang} x ${angka_lebar} <br> L = ${luas_pp} `;
}
function resetluasp_panjang() {
  document.getElementById("angka-panjang-lpp").value = " ";
  document.getElementById("angka-lebar-lpp").value = " ";
  document.getElementById("hasil-luas-pp").innerHTML = " ";
}

function hitungkelilingp_panjang() {
  let angka_panjang_pp = document.getElementById("angka-panjang-kpp").value;
  let angka_lebar_pp = document.getElementById("angka-lebar-kpp").value;
  if (angka_panjang_pp === "" && angka_lebar_pp === "") {
    alert("Angka yang dimasukkan tidak valid!");
    return 0;
  }
  let keliling_pp =
    parseFloat(2) * (parseFloat(angka_panjang_pp) + parseFloat(angka_lebar_pp));
  document.getElementById(
    "hasil-keliling-pp"
  ).innerHTML = `K = 2 x (P + l) <br>L = 2 x (${angka_panjang_pp} + ${angka_lebar_pp}) <br> K = ${keliling_pp} `;
}
function reset_kelilingp_panjang() {
  document.getElementById("angka-panjang-kpp").value = " ";
  document.getElementById("angka-lebar-kpp").value = " ";
  document.getElementById("hasil-keliling-pp").innerHTML = " ";
}
