import { Box, Card, CardMedia, Grid, IconButton, Typography } from '@mui/material'

import CartItemCount from './CartItemCount';
import DeleteIcon from '@mui/icons-material/Delete';
import cartContext from '../../../context/CartContext'
import { useContext } from 'react';

const mangasImg = require.context('../../../assets/images/mangas', true);

const CartItem = ({item}) => {
  const { removeItem } = useContext(cartContext)

  const handleRemove = () => {
    removeItem(item.id)
  }
  
  return (
    <Grid container m={0}>
      <Grid item xs={5} sm={3} md={3}>
        <Card sx={{width:{xs:105,md:142}, marginRight:'auto'}}>
          <CardMedia
              component="img"
              sx={{ width:{xs:105,md:142}}}
              image={ mangasImg(`./${item.img}`) }
              alt="Live from space album cover"
          />
        </Card>
      </Grid>
      <Grid item xs={7} sm={9} md={9} className="cart-item-detail">
        <Box sx={{display:'flex',flexDirection:'column', justifyContent:'center',padding:'.5rem 1rem'}}>
          <Typography variant="h5" color="initial">
            {item.title}
          </Typography>
          <Typography variant="subtitle2" color="initial">
            {item.editorial}
          </Typography>
          <Typography variant="subtitle1" color="primary">
            {`S/.${item.price.toFixed(2)}`}
          </Typography>
        </Box>
        <CartItemCount id={item.id} stock={item.stock} initial={item.quantity}/>
        <Typography 
          variant="subtitle1" 
          color="initial"
          sx={{display:'flex',flexDirection:'column',justifyContent:'center'}}
        >
          {`S/.${(item.price*item.quantity).toFixed(2)}`}
        </Typography>
        <IconButton variant="text" color="default" onClick={handleRemove}>
          <DeleteIcon/>
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default CartItem