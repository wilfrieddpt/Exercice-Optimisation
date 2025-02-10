interface Artist {
  id: string;
  name: string;
}

function findArtistIndex(artists, name) {
  for (let i = 0; i < artists.length; i++) {
    if (artists[i].name === name) {
      return artists[i].id;
    }
  }
  return -1;
}


function findArtistIndexOptimized(artists, name) {
  // utilisation du .find pour trouver l'artiste directement avec son nom sans faire de boucle
  const artist = artists.find((artist) => artist.name === name);
  return artist ? artist.id : -1;
}


const artists = [
  { id: "1", name: "John" },
  { id: "2", name: "Paul" },
  { id: "3", name: "George" },
  { id: "4", name: "Ringo" },
  { id: "5", name: "Pete" },
  { id: "6", name: "Stuart" },
  { id: "7", name: "Brian" },
  { id: "8", name: "Pete" },
  { id: "9", name: "Jim" },
  { id: "10", name: "Tom" },
];

console.log(findArtistIndex(artists, "Paul")); // 2
console.log(findArtistIndex(artists, "George")); // 3
console.log(findArtistIndex(artists, "John")); // 1
console.log(findArtistIndex(artists, "Ringo")); // 4
console.log(findArtistIndex(artists, "Pete")); // -1
console.log(findArtistIndex(artists, "Stuart")); // 6
console.log(findArtistIndex(artists, "Brian")); // 7

console.log(findArtistIndexOptimized(artists, "Paul")); // 2
console.log(findArtistIndexOptimized(artists, "George")); // 3
console.log(findArtistIndexOptimized(artists, "John")); // 1
console.log(findArtistIndexOptimized(artists, "Ringo")); // 4
console.log(findArtistIndexOptimized(artists, "Pete")); // -1
console.log(findArtistIndexOptimized(artists, "Stuart")); // 6
console.log(findArtistIndexOptimized(artists, "Brian")); // 7

