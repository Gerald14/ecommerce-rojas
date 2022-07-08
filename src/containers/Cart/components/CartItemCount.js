import { Box, FormControl, OutlinedInput } from '@mui/material'

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import cartContext from '../../../context/CartContext'
import { useContext } from 'react';

const CartItemCount = ({id,stock,initial=1}) => {

    const { updateItem } = useContext(cartContext)
    
    const handleAdd = () => {
        if(initial < stock)
            updateItem(id,initial+1)
    }
    
    const handleRemove = () => {
        if(initial-1 > 0)
            updateItem(id,initial-1)
    }
      
  return (
    <Box sx={{display:'flex', flexDirection:'row',alignItems:'center',gap:'.5rem',padding:'.5rem 1rem','.MuiSvgIcon-root':{cursor:'pointer',fill:'#3d83a6'}}}>
        <RemoveIcon onClick={handleRemove}/>
        <FormControl sx={{ width: '2.5rem' }}>
            <OutlinedInput 
                size='small'
                value={initial}
                sx={{'.MuiInputBase-input':{textAlign:'center',border:'none'}}}
            />
        </FormControl>
        <AddIcon onClick={handleAdd}/>
    </Box>
  )
}

export default CartItemCount