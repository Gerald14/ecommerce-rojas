import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Box } from '@mui/material';

const CartWidget = () => {
  return (
      <Box component="div" sx={{display:'flex', gap:'.3rem',alignItems:'center'}}>
        <LocalMallOutlinedIcon sx={{ color: '#fff', cursor:'pointer'}}/>
        <Box component="span" sx={{ color: '#fff',fontSize:'1.2rem'}}>5</Box>
      </Box>
    
  )
}

export default CartWidget