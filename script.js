function tambahData() {
    // Ambil nilai dari input form
    var nama = document.getElementById("nama").value;
    var kelas = document.getElementById("kelas").value;
    var berat = document.getElementById("berat").value;
 
    // Buat baris tabel baru
    var barisBaru = document.createElement("tr");
 
    // Buat sel untuk setiap kolom
    var selNama = document.createElement("td");
    var selKelas = document.createElement("td");
    var selBerat = document.createElement("td");
 
    // Isi sel dengan data
    selNama.textContent = nama;
    selKelas.textContent = kelas;
    selBerat.textContent = berat;
 
    // Tambahkan sel ke baris
    barisBaru.appendChild(selNama);
    barisBaru.appendChild(selKelas);
    barisBaru.appendChild(selBerat);
 
    // Tambahkan baris ke tabel
    document.getElementById("tabelAtlit").getElementsByTagName("tbody")[0].appendChild(barisBaru);
 
    // Reset form
    document.getElementById("formAtlit").reset();
   }