document.addEventListener('DOMContentLoaded', () => {
    const tombol = document.getElementById('tombol-sapa');
    const pesan = document.getElementById('pesan-tampil');

    tombol.addEventListener('click', () => {
        pesan.innerText = 'Halo! GitHub Actions berhasil melakukan deploy website ini. 🎉';
    });
});
