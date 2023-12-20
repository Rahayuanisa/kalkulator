const angka1 = document.querySelector('input[name=angka1]');
const angka2 = document.querySelector('input[name=angka2]');

const tambah = document.querySelector('input[name=tambah]');
const  kurang = document.querySelector('input[name=kurang]');
const  bagi = document.querySelector('input[name=bagi]');
const  kali = document.querySelector('input[name=kali]');
const  hapus = document.querySelector('input[name=hapus]');


tambah.addEventListener('click', function(){
    var hasil = parseFloat(angka1.value) + parseFloat(angka2.value);

    alert(hasil);
});

kurang.addEventListener('click', function(){
    var hasil = parseFloat(angka1.value) - parseFloat(angka2.value);

    alert(hasil);
});

bagi.addEventListener('click', function(){
    var hasil = parseFloat(angka1.value) / parseFloat(angka2.value);

    alert(hasil);
});

 kali.addEventListener('click', function(){
    var hasil = parseFloat(angka1.value) * parseFloat(angka2.value);
    
        alert(hasil);
    });


hapus.addEventListener('click', function(){
    angka1.value = '';
    angka2.value = '';
});
