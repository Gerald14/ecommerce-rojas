import { Box, Grid, Typography } from '@mui/material'
import Img from './components/Img';
import ItemCount from '../ItemCount';
const mangasImg = require.context('../../assets/images/mangas', true);

const ItemDetail = ({product}) => {
  return (
    <Grid container spacing={2} mt={3}>
      <Grid item xs={12} md={5}>
        <Img src={ mangasImg(`./${product.img}`)} alt={product.name} srcSet={ mangasImg(`./${product.img}`)} />
      </Grid>
      <Grid item xs={12} md={7}>
        <Box component='div' m={3}>
          <Typography variant="h5" color="initial">
            {product.name}
          </Typography>
          <Typography variant="span" color="initial">
            {`S/.${product.price}`}
          </Typography>
          <ItemCount stock={product.stock}/>
        </Box>
      </Grid>
    </Grid>
  )
}

export default ItemDetail