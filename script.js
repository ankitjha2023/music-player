let songs = [
    {
      name: "Rang Lageya",
      path: "mp3/Rang-Lageya.mp3",
      src: "images/rang-lageya.jpg",
      singerName:"Mohit Chauhan, Rochak Kohli"
    },
    {
      name: "Tujhko Main Rakh Loon Wahan",
      path: "mp3/Tujhko-Main-Rakh-Loon-Wahan(PagalWorldl).mp3",
      src: "images/hawaye.jpg",
      singerName:"Arijit Singh"
    },
    {
      name: "Tum Se Hi",
      path: "mp3/Tum-Se-Hi---LoFi-Mix(PagalWorldl).mp3",
      src: "images/tumsehi.jpg",
      singerName:"Mohit Chauhan"
    },
    {
      name: "Pee Loon Hoto ki sargam",
      path: "mp3/Pee-Loon-Hoto-Ki-Sargam(PagalWorldl).mp3",
      src: "images/peeloon.jpg",
      singerName:"Mohit Chauhan"
    },
    {
      name: "Jiya Dhadak Dhadak Jaye",
      path: "mp3/Jiya-Dhadak-Dhadak-Jaye(PagalWorldl).mp3",
      src: "images/jiyadhadak.jpg",
      singerName:"Rahat Fateh Ali Khan"
    },
    {
      name: "Jud Gayi Jud Gayi",
      path: "mp3/Jud-Gayi-Jud-Gayi-Tujhse-Yeh-Meri-Zindagi(PagalWorldl).mp3",
      src: "images/judgayi.jpg",
      singerName:"Rahat Fateh Ali Khan"
    },
    {
      name: "Malang Sajna",
      path: "mp3/malang.mp3",
      src: "images/malang.jpg",
      singerName:"Sachet Tandon, Parampara Tandon"
    },
    {
      name: "Bairiya",
      path: "mp3/Bairiya(PagalWorld.com.se).mp3",
      src: "images/bairaiya.jpg",
      singerName:"Arijit Singh"
    },
    {
      name: "Raatan Lambiyan",
      path: "mp3/Raatan Lambiyan(PagalWorld.com.se).mp3",
      src: "images/raatanlambiyan.jpg",
      singerName:"Arijit Singh"
    },
    {
      name: "Mere Sapno Ki Galiyon Mein",
      path: "mp3/Mere Sapno Ki Galiyon Mein(PagalWorld.com.se).mp3",
      src: "images/ranjhanave.jpg",
      singerName:"Antara Mitra, Soham Naik"
    },
    {
      name: "Kahani Suno",
      path: "mp3/Kahani Suno(PagalWorld.com.se).mp3",
      src: "images/kahanisuno.jpg",
      singerName:"Kaifi Khalil"
    },
    {
      name: "Chand Teri",
      path: "mp3/Chand Teri Roshni Ka(PagalWorld.com.se).mp3",
      src: "images/chandteri.jpg",
      singerName:"K K"
    },
    
  
    {
      name: "Tere Hawaale",
      path: "mp3/Tere Hawaale(PagalWorld.com.se).mp3",
      src: "images/hawale.jpg",
      singerName:"Arijit Singh"
    },
  
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
     
     
    ];
    

    window.addEventListener('load', function() {
        const songList = document.getElementById('song-list');
        const songName = document.getElementById('song-name');
        const singerName = document.getElementById('singer-name');
        const albumImage = document.getElementById('album-image');
        const audioPlayer = document.getElementById('audio-player');
      
        // Create song list
        for (let i = 0; i < songs.length; i++) {
          const song = songs[i];
      
          const listItem = document.createElement('li');
          listItem.textContent = song.name;
          listItem.addEventListener('click', function() {
            playSong(i);
          });
      
          songList.appendChild(listItem);
        }
      
        // Load the first song on page load
        loadSong(0);
      
        function loadSong(index) {
          const song = songs[index];
      
          songName.textContent = song.name;
          singerName.textContent = song.singerName;
          albumImage.src = song.src;
          audioPlayer.src = song.path;
        }
      
        function playSong(index) {
          loadSong(index);
          audioPlayer.play();
        }
      });
      
  