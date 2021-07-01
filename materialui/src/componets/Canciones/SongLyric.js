const SongLyric = ({bio}) => {
    return (
        < >
            
            <img src={bio.artists[0].strArtistBanner} alt="strArtistBanner" width="300" height="300"></img>
             <p>{bio.artists[0].strBiographyDE}</p>   
            
        </>
        
    )
}

export default SongLyric
