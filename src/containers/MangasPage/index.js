import { Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import ItemList from '../../components/ItemList'
import { MangasData } from './components/MangasData'

const MangasPage = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    //Simula peticion
    const MocAsync = new Promise((resolve)=>{
      setTimeout(() => {
        resolve(MangasData)
      }, 2000);
    });

    //Setea los datos obtenidos de la peticion
    MocAsync
    .then((products) => {
      setProducts(products);
      setLoading(false);
    })
    .catch((error) => console.error(error))
    
    return () => {
      setProducts();
    }
  }, [])

  if(loading) return <div>Cargando</div>
  

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} mt={3}>
        <Typography variant="h3" align='center' color="initial">Mangas</Typography>
      </Grid>
      <Grid item xs={12} md={3}>
        Filtros
      </Grid>
      <Grid item xs={12} md={9}>
        <ItemList products={products}/>
      </Grid>
    </Grid>
  )
}

export default MangasPage