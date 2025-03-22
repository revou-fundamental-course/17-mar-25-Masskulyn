function hitungluas() {
  let angka = document.getElementById("angka").value;
  if (angka === "" || angka <= 0) {
    alert("Angka yang dimasukkan tidak valid!");
    return 0;
  }
  let luas = angka * angka;
  document.getElementById(
    "hasil"
  ).innerHTML = `L = ${angka} x ${angka} <br> L = ${luas} `;
}
