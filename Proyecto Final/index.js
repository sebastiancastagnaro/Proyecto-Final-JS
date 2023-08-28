const searchInput = document.getElementById("search-input");
const resultList = document.getElementById("result-list");

searchInput.addEventListener("input", realizarBusqueda);

const discografia = [
  {
    album: "Please Please Me",
    songs: ["I Saw Her Standing There", "Twist and Shout", "Love Me Do"]
  },
  {
    album: "Revolver",
    songs: ["Eleanor Rigby", "Yellow Submarine", "Here, There and Everywhere"]
  },

  {
    album: "A Hard Day's Night",
    songs: ["A Hard Day's Night", "Can't Buy Me Love", "All My Loving"]
  },

  {
    album: "Help!",
    songs: ["Ticket to Ride", "Help", "Yesterday"]
  },

  {
    album: "Rubber Soul",
    songs: ["Nowhere Man", "Think for Yourself", "Drive My Car"]
  },

  {
    album: "Sgt. Pepper's Lonely Hearts Club Band",
    songs: ["With a Little Help from My Friends", "A Day in the Life", "Sgt. Pepper's Lonely Hearts Club Band"]
  },

  {
    album: "Let it be",
    songs: ["Don't Let Me Down", "Let It Be", "The Long and Winding Road"]
  },


  // Agregar más álbumes y canciones acá
];

// Función para buscar y mostrar resultados
function buscarYMostrarResultados() {
  const searchTerm = searchInput.value.toLowerCase();

  const resultados = discografia.filter(album =>
    album.album.toLowerCase().includes(searchTerm) ||
    album.songs.some(song => song.toLowerCase().includes(searchTerm))
  );

  resultList.innerHTML = ""; // Limpiar resultados anteriores

  resultados.forEach(album => {
    const albumItem = document.createElement("li");
    albumItem.textContent = album.album;

    const songsList = document.createElement("ul");
    album.songs.forEach(song => {
      const songItem = document.createElement("li");
      songItem.textContent = song;
      songsList.appendChild(songItem);
    });

    albumItem.appendChild(songsList);
    resultList.appendChild(albumItem);
  });
}

// Realizar búsqueda en tiempo real
function realizarBusqueda() {
  buscarYMostrarResultados();
}

// Llamar a la función inicialmente
buscarYMostrarResultados();
