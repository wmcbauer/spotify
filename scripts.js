

document.addEventListener('DOMContentLoaded', () => {



    const artistData = [{ name: 'Henrique e Juliano', image: './img/artista-henrique-juliano.jpg' },
    { name: 'Jorge e Matheus', image: './img/artista-jorge-mateus.jpg' },
    { name: 'Zé neto e Cristiano', image: './img/artista-ze-neto.jpg' },
    { name: 'Gustavo Lima', image: './img/artista-gustavo-limma.jpg' },
    { name: 'Luan Santana', image: './img/artista-luan-santana.jpg' },
    { name: 'Matheus e Kauan', image: './img/artista-mateus-kauan.jpg' }
    ]

    const albumsData = [
        { name: 'White Noise(Sleep & Relaxation Sounds)', artist: 'Sleepy Jhon', image: './img/album-white-noise.jpg' },
        { name: 'Océu Explica Tudo (Ao Vivo)', artist: 'Henrique e Juliano', image: './img/album-ceu-explica.jpg' },
        { name: 'Nada Como Um Dia Após o Outro', artist: 'Racionais', image: './img/album-vida-loka.jpg' },
        { name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image: './img/album-hit-me.jpg' },
        { name: 'CAJU', artist: 'Liniker', image: './img/album-caju.jpg' },
        { name: 'Escândalo Íntimo', artist: 'Luísa Sonza', image: './img/album-escandalo.jpg' },
    ]


    const artistGrid = document.querySelector('.artist-grid')
    const albumGrid = document.querySelector('.album-grid')


    artistData.forEach(artist => {

        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')

        artistCard.innerHTML = `
    <img src= '${artist.image}' alt='nome do ${artist.name} ' >
     <div>
     <h3>${artist.name}</h3>
     <p>artista</p> 
     </div>
        `


        artistGrid.appendChild(artistCard)
    })

    albumsData.forEach(album => {

        const albumCard = document.createElement('div')
        albumCard.classList.add('album-card')

        albumCard.innerHTML = `
    <img src= '${album.image}' alt='nome do ${album.name} ' >
    <div>
    <h3>${album.name}</h3>
    <p>${album.artist}</p> 
    </div>
        `


        albumGrid.appendChild(albumCard)
    })

})