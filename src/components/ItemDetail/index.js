import { Box, Breadcrumbs, Grid, Link, Paper, Typography } from '@mui/material'
import Img from './components/Img';
import ItemCount from '../ItemCount';
import { Link as RouterLink } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
const mangasImg = require.context('../../assets/images/mangas', true);

const ItemDetail = ({product}) => {
  return (
    <>
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
            {product.name}
          </Typography>
        </Breadcrumbs>
      </Grid>
      <Grid item xs={12} sm={5}>
        <Img src={ mangasImg(`./${product.img}`)} alt={product.name} srcSet={ mangasImg(`./${product.img}`)} />
      </Grid>
      <Grid item xs={12} sm={7}>
        <Box component='div' m={3}>
          <Typography variant="h5" color="initial">
            {product.name}
          </Typography>
          <Typography variant="span" color="initial">
            {`S/.${product.price}`}
          </Typography>
          <Typography variant="body1" color="initial">
            {product?.description}
          </Typography>
          <ItemCount stock={product.stock}/>
        </Box>
      </Grid>
    </>
  )
}

export default ItemDetail