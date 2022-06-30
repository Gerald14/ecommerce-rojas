import {Box, Button, Divider, Typography} from '@mui/material'

import cartContext from '../../../context/CartContext'
import { useContext } from 'react'

const CartSummary = () => {

    const {data:{quantity,amount}} = useContext(cartContext)
    console.log(quantity)

  return (
    <Box component='div' sx={{backgroundColor:'#f2f2f2',padding:'1rem'}}>
        <Typography variant="h5" color="initial" sx={{ padding:'0 0 1rem 0'}}>
            Resumen de Orden
        </Typography>
        <Divider />
        <Box pt={2} sx={{display:'flex',justifyContent:'space-between'}}>
            <Typography variant="subtitle1" color="initial" sx={{ padding:'0 0 1rem 0'}}>
                Cantidad
            </Typography>
            <Typography variant="subtitle1" color="initial" sx={{ padding:'0 0 1rem 0'}}>
                {quantity}
            </Typography>
        </Box>
        <Divider />
        <Box pt={2} sx={{display:'flex',justifyContent:'space-between'}}>
            <Typography variant="subtitle1" color="initial" sx={{ padding:'0 0 1rem 0'}}>
                Monto Total
            </Typography>
            <Typography variant="subtitle1" color="initial" sx={{ padding:'0 0 1rem 0'}}>
                {`S/.${amount.toFixed(2)}`}
            </Typography>
        </Box>
        
        <Button>
            Checkout
        </Button>
        
    </Box>
  )
}

export default CartSummary