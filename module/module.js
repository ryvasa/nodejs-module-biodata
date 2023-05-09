// buat module biodata
module.exports = {
  nama: "Ryan Oktavian Saputra",
  tempatLahir: "Tasikmalaya",
  tanggalLahir: "24 Oktober 2002",
  alamat: "Jayaputra, Kec. Sariwangi, Kabupaten Tasikmalaya",

  lihatNama: function () {
    console.log("Nama: " + this.nama);
  },

  lihatTempatLahir: function () {
    console.log("Tempat Lahir: " + this.tempatLahir);
  },

  lihatTanggalLahir: function () {
    console.log("Tanggal Lahir: " + this.tanggalLahir);
  },

  lihatAlamat: function () {
    console.log("Alamat: " + this.alamat);
  },
};
