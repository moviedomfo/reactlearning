import React, { useEffect,useState } from 'react';
import { helpHttp } from '../helpers/helpHttp';
import Loader from '../Loader';
import SongDetails from './SongDetails';
import SongForm from './SongForm';

const url_song = "https://lyricsovh.docs.apiary.io/";
const url_artist = 'https://www.theaudiodb.com/api/v1/json/1/search.php?';
const SongSearch = () => {
    const [search, setSearch] = useState(null);
    const [currenLyric, setCurrenLyric] = useState(null);
    const [bio, setBio] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error,setError] = useState(null);

    useEffect(() => {
        // para evitar renderizados innecesarios
        if(!search)return;

    const {artist,song} =[search];

      
    const fetchData = ()=>{
        let search_artist = `${url_artist}?/${artist}`;
        let search_song = `${url_song}/${artist}/${song}`;

        setLoading(true);
        
        //DEBO ESPERAR AMBAS PETICIONES Artsta mas Canciones
        const [res_artist,res_songs] = Promise.all([
            helpHttp().get(search_artist),
            helpHttp().get(search_song)
        ]);

        if(res_artist.error){
            setError(res_artist.error);
            
        }
        if(res_songs.error){
            setError(res_artist.error);
            return;
        }

        setBio(res_artist);
        setCurrenLyric(res_songs);
        
        setLoading(false);
    }
    fetchData();
     
    }, [search]);


    const hadleSearch = (searchData) =>{
        setSearch(searchData);
           
    };
    
    return (
        <>
            <h2> Song Search</h2> 
             
                {loading && <Loader/> }
        
            <SongForm hadleSearch={hadleSearch}/>
            <SongDetails search= {search}
               currenLyric={currenLyric} 
               bio={bio} 
               />
        </>
    )
}

export default SongSearch
