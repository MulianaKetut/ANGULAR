const kursi = {
  warna: "putih salju",
  bahan: "kain",
  merk: "FSD OCBC",
  jumlahKaki: 40,
  kategori: "gaming",
  harga: 750000,
  bebanMaksimal: 200,
  400: "oke",
  "nilai-100": "oke",
};

// console.log(kursi);
// //cara 1 : object.property
// console.log(kursi.warna);
// //cara 2 : object['kategori']
// console.log(kursi["kategori"]);
// console.log(kursi["400"]);

// let cariCiri = "bebanMaksimal";
// console.log(kursi[cariCiri]);

//function
function getValue(obj, key) {
  return obj[key];
}

//arrow function
const getValueArrowFunction = (obj, key) => obj[key];

console.log(getValue(kursi, "harga"));
console.log(getValueArrowFunction(kursi, "harga"));
