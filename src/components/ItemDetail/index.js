import { Box, Breadcrumbs, Button, Grid, Link, Typography } from '@mui/material'
import { Link as RouterLink, useNavigate } from 'react-router-dom'

import HomeIcon from '@mui/icons-material/Home';
import Img from './components/Img';
import ItemCount from '../ItemCount';
import cartContext from '../../context/CartContext';
import { useContext } from 'react';
import { useState } from 'react';

const mangasImg = require.context('../../assets/images/mangas', true);

const ItemDetail = ({product}) => {
  const navigate = useNavigate();
  const { addItem } = useContext(cartContext);

  const [quantity, setQuantity] = useState(null)

  const onAdd = (quantityToAdd) => {
    setQuantity(quantityToAdd)
  }

  const handleClick = () => {
    addItem({...product,quantity},quantity);
    navigate('/cart')
  }

  return (
    <Grid container sx={{width:'100%'}} mt={2}>
      <Grid item xs={12} md={12} mb={2}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center' }}
            color="inherit"
            component={RouterLink}
            to="/"
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Inicio
          </Link>
          <Link
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center' }}
            color="inherit"
            component={RouterLink}
            to="/mangas"
          >
            Mangas
          </Link>
          <Typography
            sx={{ display: 'flex', alignItems: 'center' }}
            color="text.primary"
          >
            {product.title}
          </Typography>
        </Breadcrumbs>
      </Grid>
      <Grid item xs={12} sm={5}>
        <Img src={ mangasImg(`./${product.img}`)} alt={product.name} srcSet={ mangasImg(`./${product.img}`)} />
      </Grid>
      <Grid item xs={12} sm={7}>
        <Box component='div' m={3}>
          <Typography variant="subtitle1" gutterBottom component="div">
            {product.editorial}
          </Typography>
          <Typography variant="h4" color="initial" sx={{textTransform:'uppercase', fontWeight:'600'}}>
            {product.title}
          </Typography>
          <Typography variant="h5" color="initial" gutterBottom>
            {`S/.${product.price}`}
          </Typography>
          <Typography variant="body1" color="initial" mb={4}>
            {product?.description}
          </Typography>
          {!Boolean(quantity) ?
           <ItemCount stock={product.stock} onAdd={onAdd}/>:
           <Button variant="contained" onClick={handleClick} fullWidth sx={{backgroundColor:'#272829','&:hover':{backgroundColor:'#272829'}}}>
            Terminar Comprar
          </Button>
         }
         
        </Box>
      </Grid>
    </Grid>
  )
}

export default ItemDetail