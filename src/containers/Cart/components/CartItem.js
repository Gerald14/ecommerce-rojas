import { Box, Card, CardMedia, FormControl, Grid, OutlinedInput, Typography } from '@mui/material'

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const mangasImg = require.context('../../../assets/images/mangas', true);

const CartItem = ({item}) => {

    console.log(item)
  return (
    <Grid container m={0}>
      <Grid item xs={5} sm={4} md={3}>
        <Card sx={{width:{xs:100,md:140}, margin:'auto'}}>
          <CardMedia
              component="img"
              sx={{ width:{xs:100,md:140}}}
              image={ mangasImg(`./${item.img}`) }
              alt="Live from space album cover"
          />
        </Card>
      </Grid>
      <Grid item xs={7} sm={8} md={9} sx={{display:'flex',flexWrap:'wrap'}}>
        <Box sx={{display:'flex',flexDirection:'column', justifyContent:'center'}}>
          <Typography variant="h5" color="initial" pl={3}>
            {item.name}
          </Typography>
          <Typography variant="subtitle1" color="initial" pl={3}>
            {item.editorial}
          </Typography>
        </Box>
        <Typography variant="subtitle1" color="initial">
          {`S/.${item.price.toFixed(2)}`}
        </Typography>
        <Box sx={{display:'flex', flexDirection:'row',alignItems:'center',gap:'.5rem'}}>
            <RemoveIcon/>
            <FormControl sx={{ width: '3rem' }}>
              <OutlinedInput 
              size='small'
              value={item.quantity}
              sx={{'.MuiInputBase-input':{textAlign:'center'}}}
            />
            </FormControl>
            <AddIcon/>
        </Box>
        <Typography 
          variant="subtitle1" 
          color="initial"
          sx={{display:'flex',flexDirection:'column',justifyContent:'center'}}
        >
          {`S/.${(item.price*item.quantity).toFixed(2)}`}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default CartItem