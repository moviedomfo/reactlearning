import React ,{useState}from 'react';

const initialForm ={
    artist:'',
    song:'',

}
const SongForm = ({hadleSearch}) => {

    const [form, setForm] = useState(initialForm);
    const {artist,song} =[form];

    const handleInput = (e) =>{
        e.preventDefault();
        setForm(
            {...form,
            [e.target.name]:e.target.value}
            );
      }

    const handleSubmit = (e) =>{
        e.preventDefault();
      if(!form.artist || !form.song){
          alert('Datos incompletos');
          return;

      }
        hadleSearch(form);
        setForm(initialForm);
      }
    return (
             <form onSubmit={handleSubmit} >
          
            
        <input type="text"  placeholder="Nombre del artista"
             name = "artist"
             value={artist}
             onChange={handleInput}></input>
          <input type="text"   placeholder="Nombre de la canción"
             name = "song"
             value={song}
             onChange={handleInput}></input>
         <input type="submit" value= "Aceptar"></input>
         
        </form>
    )
}

export default SongForm
