import { Card, CardMedia, Typography } from '@mui/material'
const mangasImg = require.context('../../../assets/images/mangas', true);

const CartItem = ({item}) => {

    console.log(item)
  return (
    <div className='cart-item'>
      <Card sx={{width:151}}>
        <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={ mangasImg(`./${item.img}`) }
            alt="Live from space album cover"
        />
      </Card>
      <Typography variant="h5" color="initial" pl={3}>
        {item.name}
      </Typography>
    </div>
  )
}

export default CartItem