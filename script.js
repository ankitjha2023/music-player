let songs = [
    {
      name: "Wafa Ne Bewafai",
      path: "mp3/wafa.mp3",
      src: "images/wafa.jpg",
      singerName:"Arijit Singh"
    },
    {
      name: "Kesariya",
      path: "mp3/kesariya.mp3",
      src: "images/kesariya.jpg",
      singerName:"Arijit Singh"
    },
    {
      name: "Maan Meri Jaan",
      path: "mp3/maanmeri.mp3",
      src: "images/manmeri.jpg",
      singerName:"king"
    },
    {
      name: "Let Me Down Slowly",
      path: "mp3/letmedown.mp3",
      src: "images/letme.jpg",
      singerName:"Alec Benjamin, Arijit Singh"
    },
    {
      name: "Malang Sajna",
      path: "mp3/malang.mp3",
      src: "images/malang.jpg",
      singerName:"Sachet Tandon, Parampara Tandon"
    }
  ];
  
  const prevBtn = document.getElementById('prev-btn');
  const playPauseBtn = document.getElementById('play-pause-btn');
  const nextBtn = document.getElementById('next-btn');
  const myaudio = document.getElementById('audio');
  const poster = document.getElementById('poster');
  const songName = document.getElementById('song-name')
  const singerName = document.getElementById('singer-name')
  let currentSongIndex = 0;
  let isPlaying = false;
  
  function loadSong(index) {
    const song = songs[index];
    myaudio.src = song.path;
    poster.src=song.src
    songName.innerHTML=song.name
    singerName.innerHTML=song.singerName
   
    if (isPlaying) {
      myaudio.play();
      
    }
  }
  
  function playPauseSong() {
    if (myaudio.paused) {
      myaudio.play();
      playPauseBtn.classList.replace('fa-play','fa-pause')
      isPlaying = true;
    } else {
      myaudio.pause();
      playPauseBtn.classList.replace('fa-pause','fa-play')
      isPlaying = false;
    }
  }
  
  prevBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
  });
  
  playPauseBtn.addEventListener('click', () => {
    playPauseSong();
  });
  
  nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
  });
  
  // Load the initial song
  loadSong(currentSongIndex);
  
