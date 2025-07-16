const songs = [
  {
    title: "Me Gusta",
    artist: "DTF",
    src: "src/audio/DTF - Me Gusta [Clip Officiel].mp3",
    cover: "src/img/image.png"
  },
  {
    title: "Dva i Dva",
    artist: "Crvena Jabuka",
    src: "src/audio/Crvena jabuka - Dva i dva (i ona mala barka) (Official lyric video).mp3",
    cover: "src/img/jabuka.png"
  },
  {
    title: "Adrenalina",
    artist: "RELJA",
    src: "src/audio/RELJA - ADRENALINA (OFFICIAL VIDEO) 4K.mp3",
    cover: "src/img/limage.png"
  }
];

let current = 0;
let audioStarted = false;
const audio = document.getElementById("bg-music");
const cover = document.querySelector(".cover-art");
const title = document.querySelector(".song-title");
const artist = document.querySelector(".song-artist");

function loadSong(index) {
  const song = songs[index];
  audio.src = song.src;
  cover.src = song.cover;
  title.textContent = song.title;
  artist.textContent = song.artist;
}

function playSong() {
  audio.play().then(() => {
    document.getElementById("toggle-btn").textContent = "⏸️";
  }).catch((e) => console.warn("Play failed:", e));
}

function pauseSong() {
  audio.pause();
  document.getElementById("toggle-btn").textContent = "▶️";
}

document.addEventListener("DOMContentLoaded", () => {
  loadSong(current);

  const toggleBtn = document.getElementById("toggle-btn");
  const nextBtn = document.getElementById("next-btn");

  toggleBtn.addEventListener("click", () => {
    if (audio.paused) {
      playSong();
    } else {
      pauseSong();
    }
  });

  nextBtn.addEventListener("click", () => {
    current = (current + 1) % songs.length;
    loadSong(current);
    playSong();
  });
});

// Trigger music from enter.js
window.startMusicAfterEnter = () => {
  if (!audioStarted) {
    audioStarted = true;
    playSong();
  }
};