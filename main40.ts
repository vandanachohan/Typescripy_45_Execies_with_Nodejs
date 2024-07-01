// Define the make_album function
function makeAlbum(artist: string, title: string, numTracks?: number): Record<string, unknown> {
    const album: Record<string, unknown> = {
        artist,
        title,
    };

    if (numTracks !== undefined) {
        album.numTracks = numTracks;
    }

    return album;
}

// Calling three function and creating 3 variable with different value
const album1 = makeAlbum('Metallica', 'Ride the Lightning', 8);
const album2 = makeAlbum('Beethoven', 'Ninth Symphony');
const album3 = makeAlbum('Willie Nelson', 'Red-Headed Stranger', 12);

// printing the variable
console.log(album1);
console.log(album2);
console.log(album3);
