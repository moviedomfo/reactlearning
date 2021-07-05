import React, { useEffect ,useState} from 'react';
import { helpHttp } from '../helpers/helpHttp';
import usePelsoftFetch from '../../hooks/usePelsoft';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { helpFuncions } from '../helpers/helpFuncions';
import Loader from '../Loader';
import Message from '../Message';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });


const Selector = ({tittle,url,handleChange,parentId}) => {

   const [lista, setLista] = useState([]);
   const [loading, setLoading] = useState(true);
   
   // const [data, setData] = useState(null);
   const [error, setError] = useState(null);

   const classes = useStyles();

   useEffect(() => {
    // para evitar renderizados innecesarios
    
    
    if (!parentId && tittle !== 'paices') {
        setLoading(false);
        return;
    }
        
    setLoading(true);
    const fetchData = async (url) => {
    
        
      //http://localhost:50010/paices
     let res = await helpHttp().get(url);
    //  alert(url);
    //  alert(JSON.stringify(res));
     if(res.err){
        //alert('errroorrrr');
        setError( {
            err:true,
            status:res.status,
            statusText: !res.statusText ? "Ocurrio un error" : res.statusText 
            });
    }

    if (parentId){
        if(tittle === 'provincias')
            res = res.filter(p=>p.idPais === parentId);
        if(tittle === 'municipios')
            res = res.filter(p=>p.idProvincia === parentId);
     }

     setLista(res);
     setLoading(false);
    };

    fetchData(url);
  }, [parentId]);
   
    // If data is null avoid render the component and return null. 
    if(!lista){
        return null; 
    }

    if (error && error.err) {
      //alert(JSON.stringify(error));
      return (<Message msg={error.statusText} isError={true}></Message>);
      
    }

    const id = `select_${tittle}`;
    const label_tittle = helpFuncions().Capitalize(tittle);

    const handleOptions =(event)=>{

        const selected = lista.find(p=> p.id ===  parseInt(event.target.value));
        
        // le paso directaemne el name
        handleChange(selected);
    };


    return (
      <div>
        <label htmlFor={id}>{label_tittle}</label>

        {loading ? (
          <Loader></Loader>
        ) : (
          <select name={id} id={id} onChange={handleOptions} defaultValue="--">
            <option key="-1" value="--">Seleciona alguno de los {tittle}</option>
            {lista &&
              lista.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
          </select>
        )}

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://picsum.photos/id/684/600/400?blur=5"
              title="Listado Paices json"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Json con los  {tittle}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                        {lista.length !==0 ?
                               (<p>{JSON.stringify(lista)}</p>)
                                :
                                (<label>No hay data</label>)

                        }
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
};

export default Selector
