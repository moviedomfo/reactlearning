import React from "react";
import Message from "../Message";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";

const SongDetails = ({ search, currenLyric, bio }) => {
  
  if (!search || !bio)
   return null;

   alert();


  return (
    <>
      {/* {!search || bio  (<Message msg={'error'} isError= {true}></Message>)} */}

      {currenLyric.err || currenLyric.name === "AbortError" ? (
        <Message
          msg={`Error: No existe la canción ${search.song}`}
          isError={true}
        ></Message>
      ) : (
        <SongArtist artist = {bio}/>
      )}
      {bio.artists ? <SongLyric bio={bio} /> : <Message   msg={`Error: No artista  ${search.artist}`} />}
    </>
  );
};

export default SongDetails;
