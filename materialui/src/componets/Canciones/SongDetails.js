import React from "react";
import Message from "../Message";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";

const SongDetails = ({ search, currenLyric, bio }) => {
  
  if (!search || !bio)
   return null;

   


  return (
    <>

      {currenLyric.error ||currenLyric.err || currenLyric.name === "AbortError" ? (
        <Message
          msg={`Error: No existe la canción ${search.song}`}
          isError={true}
        ></Message>
      ) : (
        <SongArtist artist = {bio}/>
      )}
      {bio.artists ? <SongLyric currenLyric={currenLyric}  title={search.song} /> : <Message   msg={`Error: No artista  ${search.artist}`} />}
    </>
  );
};

export default SongDetails;
