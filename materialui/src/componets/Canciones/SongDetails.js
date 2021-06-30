import React from 'react';
import SongArtist from './SongArtist';
import SongLyric from './SongLyric';


const SongDetails = ({search,currenLyric,bio}) => {
    return (
        <div>
            Detalle cancion
            <SongArtist></SongArtist>
            <SongLyric></SongLyric>
        </div>
    )
}

export default SongDetails
