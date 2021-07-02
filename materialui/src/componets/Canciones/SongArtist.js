import React from 'react'

const SongArtist = ({bio}) => {

    
    if (!bio)
        return null;
    // console.log("artists")
     
    const artist = bio.artists[0];

    return (
        <section>
            <h1>Que bueno</h1>
            <h3>{artist.strArtist}</h3>
            <img src={artist.strArtistBanner} alt={artist.strArtist} width="300" height="300"></img>
            <p>{artist.strBornYear}</p>
            <p>{artist.strBiographyDE}</p>   
            <a href={`http://${artist.strWebSite}`} target='_blank' rel="noreferrer" > Sitio del artista</a>
        </section>
    )
}

export default SongArtist
