import React from 'react'

const SongArtist = ({bio}) => {

    const artist = bio.artists[0];

    return (
        <section>
            <h3>{artist.strArtist}</h3>
            <img src={bio.artists[0].strArtistBanner} alt={artist.strArtist} width="300" height="300"></img>
            <p>{artist.strBornYear}</p>
            <p>{bio.artists[0].strBiographyDE}</p>   
            <a href={`http://${artist.strWebSite}`} target='_blank' rel="noreferrer" > Sitio del artista</a>
        </section>
    )
}

export default SongArtist
