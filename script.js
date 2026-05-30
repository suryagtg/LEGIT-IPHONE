function hitungSensi() {
    var tipeSenjata = document.getElementById("game-type").value;
    var hasilBox = document.getElementById("hasil");
    
    var lihatSekeliling, redDot, tips;

    if (tipeSenjata === "shotgun") {
        lihatSekeliling = 100;
        redDot = 95;
        tips = "Tips: Tarik tombol tembak (drag shoot) secara cepat membentuk huruf 'U' terbalik untuk mempermudah mengenai target.";
    } else if (tipeSenjata === "smg") {
        lihatSekeliling = 95;
        redDot = 90;
        tips = "Tips: Lakukan tarikan tombol tembak dengan kecepatan sedang, fokus pada penempatan crosshair di dada musuh terlebih dahulu.";
    } else {
        lihatSekeliling = 90;
        redDot = 85;
        tips = "Tips: Gunakan teknik tapping atau tarikan perlahan agar peluru tidak menyebar (recoil terjaga).";
    }

    document.getElementById("sensi-lihat").innerText = "Lihat Sekeliling: " + lihatSekeliling;
    document.getElementById("sensi-reddot").innerText = "Red Dot Sight: " + redDot;
    document.getElementById("tips-trik").innerText = tips;
    
    hasilBox.style.display = "block";
}
