import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Box } from '@mui/material';

const CartWidget = () => {
  return (
      <>
        <LocalMallOutlinedIcon sx={{ color: '#fff', cursor:'pointer'}}/>
        <Box component="span" sx={{ color: '#fff'}}>S/0.00</Box>
      </>
    
  )
}

export default CartWidget