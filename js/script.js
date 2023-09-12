
        document.addEventListener("DOMContentLoaded", function() {
            const canciones = [
                {
                    title: "Sweden",
                    artist: "C418",
                    volume: "Alpha",
                    year:"2013",
                    source: "audio/1.mp3",
                    cover: 'img/1.jpg',
                },
                {
                    title: "DroopylikesyourFace",
                    artist: "C418",
                    volume: "Beta",
                    year:"2012",
                    source: "audio/2.mp3",
                    cover: 'img/1.jpg',
                },
                {
                    title: "DryHands",
                    artist: "C418",
                    volume: "Alpha",
                    year:"2014",
                    source: "audio/3.mp3",
                    cover: 'img/1.jpg',
                },
                {
                    title: "Haggstrom",
                    artist: "C418",
                    volume: "Alpha",
                    year:"2010",
                    source: "audio/4.mp3",
                    cover: 'img/1.jpg',
                },
                {
                    title: "LivingMice",
                    artist: "C418",
                    volume: "Beta",
                    source: "audio/5.mp3",
                    cover: 'img/1.jpg',
                },
                {
                    title: "MiceonVenus",
                    artist: "C418",
                    volume: "Beta",
                    year:"2011",
                    source: "audio/6.mp3",
                    cover: 'img/1.jpg',
                },
                {
                    title: "MoogCity",
                    artist: "C418",
                    volume: "Alpha",
                    year:"2012",
                    source: "audio/7.mp3",
                    cover: 'img/1.jpg',
                },
                {
                    title: "WetHands",
                    artist: "Beta",
                    year:"2010",
                    source: "audio/8.mp3",
                    cover: 'img/1.jpg',
                }
            ];

            const main_audio = document.getElementById("main-audio");
            const play_list = document.getElementById("play-list");
            const searchInput = document.getElementById("searchInput");

            function loadPlaylist() {
                canciones.forEach((e, index) => {
                    const listItem = document.createElement("li");
                    listItem.id = index;
                    listItem.innerHTML = `
                        <img src="${e.cover}" alt="${e.title} cover" style='width:300px'>
                        ${e.title}
                        ${e.artist}
                        ${e.volume}
                        ${e.year}
                    `;
                    listItem.addEventListener('click', () => {
                        play_audio(e.source);
                    });
                    play_list.appendChild(listItem);
                });
            }

            function play_audio(src) {
                main_audio.src = src;
                main_audio.play();
            }

            function searchSongs() {
                const searchTerm = searchInput.value.toLowerCase();
                const filteredSongs = canciones.filter(song => song.title.toLowerCase().includes(searchTerm));
                canciones.forEach((song, index) => {
                    const listItem = document.getElementById(String(index));
                    if (filteredSongs.includes(song)) {
                        listItem.style.display = "block";
                    } else {
                        listItem.style.display = "none";
                    }
                });
            }
            loadPlaylist();
            searchInput.addEventListener('input', () => {
                searchSongs();
            });
        });
