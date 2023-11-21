

const image = document.getElementById('cover'),
    title = document.getElementById('music-title'),
    artist = document.getElementById('music-artist'),
    currentTimeEl = document.getElementById('current-time'),
    durationEl = document.getElementById('duration'),
    progress = document.getElementById('progress'),
    playerProgress = document.getElementById('player-progress'),
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),
    playBtn = document.getElementById('play'),
    background = document.getElementById('bg-img');

const music = new Audio();

const songs = [
    {
        path: 'on the floor.mp3',
        displayName: 'on the floor',
        cover: '350x350.jpg',
        artist: 'jenifer lopez',
    },
    {
        path: 'The Nights.mp3',
        displayName: 'The Nights ',
        cover: 'ACIVII.jpg',
        artist: 'AVICII',
    },
    {
        path: 'Love me like you do.mp3',
        displayName: 'Love Me Like You Do',
        cover: 'Fifty_Shades_of_Grey_poster.jpg',
        artist: 'Ellie Goulding',
    },
    {
        path: 'Why This Kolaveri Di ｜ R&B Remix ｜ @jenushan  ｜ Anirudh ｜ Dhanush [FRVUOSDp7X8].mp3',
        displayName: 'Why This Colaveri De Remix',
        cover: 'cola.jpg',
        artist:'Dhanush and Shruthi Hassan',
    },
    {
        path: 'Capital Cities - Safe And Sound [47dtFZ8CFo8].mp3',
        displayName: 'Safe And Sound',
        cover: 'maxresdefault.jpg',
        artist: 'Capital Cities',
    },
    {
        path: 'Alan_Walker,_Sabrina_Carpenter_&_Farruko__-_On_My_Way(256k).mp3',
        displayName: 'Alan Walker',
        cover: 'ab6761610000e5ebbf753c009fd9c2d53351dd3c.jpg',
        artist: 'Farruko, Alan Walker, Sabrina Carpenter',
    },
    {
        path: 'Umer_Farooq_-_Patang_(SomeWhatSuper_Afterhours_Mix)(256k).mp3',
        displayName: 'Patang',
        cover: 'a0921132624_5.jpg',
        artist: 'Umer Farooq',
    },
    {
        path: '_Duniyaa_Video_Song__Kartik_Aaryan_Kriti_Sanon__Akhil__Dhvani_B__Abhijit_V_Kunaal_V(256k).mp3',
        displayName: 'Duniya',
        cover: 'duniyaa.jpg',
        artist: 'Dhvani Bhanushali, Akhil',
    },
    {
        path: 'Talha Anjum - Downers At Dusk ｜ Prod. by Umair (Official Audio) [iWomYr2dlsM].mp3',
        displayName: 'Downers at Dusk Open Letter',
        cover: 'artworks-7YJlJUrjYS4Cmgbn-SbFLFg-t500x500.jpg',
        artist: ' Talha Anjum, Umair',
    },
    {
        path: 'AFSANAY - Young Stunners ｜ Talhah Yunus ｜ Talha Anjum ｜ Prod. By Jokhay (Official Music Video) [ijE2MMtzkHg].mp3',
        displayName: 'AFSANAY',
        cover: 'artworks-9h3yYSkBQcHLvyvb-jqP07g-t500x500.jpg',
        artist: ' Talha Anjum, Talhah Yunus',
    },
    {
        path: 'for you.mp3',
        displayName: 'ill be there for you',
        cover: 'ab67616d0000b273a21727d38ed201c03d9bac24.jpg',
        artist: 'Walk Of The Earth',
    },
    {
        path: 'tcdlmd.mp3',
        displayName: 'Dont let me down (Illenium Mix)',
        cover: 'maxresdefault (2).jpg',
        artist: ' The Chainsmokers',
    },
    {
        path: 'San Holo - Light [ULHeRdgeT54].mp3',
        displayName: 'LIGHT',
        cover: 'artworks-000206471453-cvxx2e-t500x500.jpg',
        artist: 'SAN HOLO',
    },
    {
        path: 'https://pagalworld123.com/wp-content/uploads/2023/10/Long-Time-No-See-Taimour-Baig.mp3',
        displayName: 'Long Time No See',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/36/62/7a/36627ab5-27dc-4da5-d102-32d3d0fa99d9/artwork.jpg/600x600bf-60.jpg',
        artist: 'Taimoor Baig',
    }, 
    {
        path: 'Adele_-_Set_Fire_to_the_Rain.mp3',
        displayName: 'Set Fire To The Rain',
        cover: 'https://i.scdn.co/image/ab67616d0000b273744ea41a7c1ae57024752db9',
        artist: 'Adele',
    },
    {
        path: 'https://mp3indirdur.life/San-Holo-Lift-me-From-the-Ground-feat-Sofie-Winterson-175030?dinle=1',
        displayName: 'Lift Me From The Ground',
        cover: 'https://c.saavncdn.com/285/album1-English-2018-20200407131010-500x500.jpg',
        artist: 'SAN HOLO',
    }



   
   
 
];

let musicIndex = 0;
let isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

function playMusic() {
    isPlaying = true;
    // Change play button icon
    playBtn.classList.replace('fa-play', 'fa-pause');
    // Set button hover title
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

function pauseMusic() {
    isPlaying = false;
    // Change pause button icon
    playBtn.classList.replace('fa-pause', 'fa-play');
    // Set button hover title
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

function loadMusic(song) {
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
    background.src = song.cover;
}

function changeMusic(direction) {
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
}

function updateProgressBar() {
    const { duration, currentTime } = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
    durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
    currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
}

function setProgressBar(e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));

music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);

loadMusic(songs[musicIndex]);

0

