import React, { useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import Loader from "../Loader";

import SongDetails from "./SongDetails";
import SongForm from "./SongForm";


const url_artist = "https://www.theaudiodb.com/api/v1/json/1/search.php";
const url_song = "https://private-anon-6350773df0-lyricsovh.apiary-mock.com/v1/";
//const url_song = "https://api.lyrics.ovh/v1";
// let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;
const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [currenLyric, setCurrenLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // para evitar renderizados innecesarios
    if (!search) return;

    const fetchData = async () => {
      const { artist, song } = search;
      // alert(JSON.stringify(search));

      let search_artist = `${url_artist}?s=${artist}`;
      let search_song = `${url_song}/${artist}/${song}`;
      setLoading(true);
      //DEBO ESPERAR AMBAS PETICIONES Artsta mas Canciones
      const [res_artist, res_songs] = await Promise.all([
        helpHttp().get(search_artist),
        helpHttp().get(search_song),
      ]);

      //   if (res_artist.err) {
      //     setError(res_artist.err);
      //   }
      //   if (res_songs.err) {
      //     setError(res_artist.err);
      //     //return;
      //   }

      // se pasa el res con o sin error para q despues los hijos componentes sepan que hacer con el error
      setBio(res_artist);
      setCurrenLyric(res_songs);
     
      setLoading(false);
    };
    fetchData();
  }, [search]);

  const hadleSearch = (searchData) => {
    setSearch(searchData);
  };

  return (
    <div>
      <h2> Song Search</h2>
      <article className="grid-1-3">
        
        {/* {error && <Message msg={error.message} isError={true} />} */}

        <SongForm hadleSearch={hadleSearch} />
        {loading && <Loader />}
        {search && !loading && (
            <SongDetails search={search} currenLyric={currenLyric} bio={bio} />
        )}
      </article>
      
    </div>
  );
};

export default SongSearch;
