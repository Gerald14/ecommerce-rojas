import {Box, Button, Typography} from '@mui/material'

import imgEmpty from '../../../assets/images/cartEmpty.webp'
import {useNavigate} from 'react-router-dom'

const CartEmpty = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/mangas')
    }
  return (
    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'100%'}}>
        <img src={imgEmpty} alt="" width={420} />
        <Typography variant="h5" color="initial">Carrito vacio</Typography>
        <Button variant="contained" onClick={handleClick}>
          Ir a Comprar
        </Button>
    </Box>
  )
}

export default CartEmpty