// komponen tombol
let tombolGunting = document.getElementById('tombol-gunting');
let tombolBatu = document.getElementById('tombol-batu');
let tombolKertas = document.getElementById('tombol-kertas');
let tombolReset = document.getElementById('reset');

// komponen hasil
let displayPemain = document.getElementById('pilihan-pemain');
let displayKomputer = document.getElementById('pilihan-komputer');
let hasil = document.getElementById('hasil');

// komponen skor
let skorPemain = 0;
let skorKomputer = 0;
let displaySkorPemain = document.getElementById('skor-pemain');
let displaySkorKomputer = document.getElementById('skor-komputer');

// array pilihan
let pilihan = ['Gunting', 'Batu', 'Kertas'];

// event listener untuk tombol

tombolGunting.addEventListener('click', function() {
    let acak = Math.floor(Math.random() * 3);
    let pilihanKomputer = pilihan[acak];

    displayPemain.innerHTML = 'Gunting';
    displayKomputer.innerHTML = pilihanKomputer;

    if (pilihanKomputer == 'Gunting') {
        hasil.style.color = 'black';
        hasil.innerHTML = 'Anda Seri';
    } else if (pilihanKomputer == 'Batu') {
        hasil.style.color = 'red';
        hasil.innerHTML = 'Anda Kalah';
        skorKomputer++;
        displaySkorKomputer.innerHTML = skorKomputer;
    } else {
        hasil.style.color = 'green';
        hasil.innerHTML = 'Anda Menang';
        skorPemain++;
        displaySkorPemain.innerHTML = skorPemain;
    }
});

tombolBatu.addEventListener('click', function() {
    let acak = Math.floor(Math.random() * 3);
    let pilihanKomputer = pilihan[acak];

    displayPemain.innerHTML = 'Batu';
    displayKomputer.innerHTML = pilihanKomputer;

    if (pilihanKomputer == 'Batu') {
        hasil.style.color = 'black';
        hasil.innerHTML = 'Anda Seri';
    } else if (pilihanKomputer == 'Kertas') {
        hasil.style.color = 'red';
        hasil.innerHTML = 'Anda Kalah';
        skorKomputer++;
        displaySkorKomputer.innerHTML = skorKomputer;
    } else {
        hasil.style.color = 'green';
        hasil.innerHTML = 'Anda Menang';
        skorPemain++;
        displaySkorPemain.innerHTML = skorPemain;
    }
});

tombolKertas.addEventListener('click', function() {
    let acak = Math.floor(Math.random() * 3);
    let pilihanKomputer = pilihan[acak];

    displayPemain.innerHTML = 'Kertas';
    displayKomputer.innerHTML = pilihanKomputer;

    if (pilihanKomputer == 'Kertas') {
        hasil.style.color = 'black';
        hasil.innerHTML = 'Anda Seri';
    } else if (pilihanKomputer == 'Gunting') {
        hasil.style.color = 'red';
        hasil.innerHTML = 'Anda Kalah';
        skorKomputer++;
        displaySkorKomputer.innerHTML = skorKomputer;
    } else {
        hasil.style.color = 'green';
        hasil.innerHTML = 'Anda Menang';
        skorPemain++;
        displaySkorPemain.innerHTML = skorPemain;
    }
});

tombolReset.addEventListener('click', function() {
    skorPemain = 0;
    skorKomputer = 0;
    displayKomputer.innerHTML = '';
    displayPemain.innerHTML = '';
    hasil.innerHTML = '';
    displaySkorPemain.innerHTML = skorPemain;
    displaySkorKomputer.innerHTML = skorKomputer;
})