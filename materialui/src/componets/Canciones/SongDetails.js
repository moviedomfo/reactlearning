import React from "react";
import Message from "../Message";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";

const SongDetails = ({ search, currenLyric, bio }) => {
  
  if (!search || !bio)
   return null;

  //  console.log("La cancion es ")
  //  console.log(JSON.stringify(currenLyric))


  return (
    <>
      {currenLyric.error ||
      currenLyric.err ||
      currenLyric.name === "AbortError" ? (
        <Message
          msg={`Error: No existe la canción ${search.song}`}
          isError={true}
        ></Message>
      ) : (
        
        <SongArtist bio={bio} />
      )}
      {bio.artists ? (
        <SongLyric currenLyric={currenLyric.lyrics} title={search.song} />
      ) : (
        <Message msg={`Error: No artista  ${search.artist}`} />
      )}
    </>
  );
};

export default SongDetails;
