import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { FormControl, IconButton, OutlinedInput, Stack } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box } from '@mui/system';

const ItemCount = ({stock,initial=1}) => {

  const [count, setCount] = useState(initial);

  const handleAdd = () => {
    if(count < stock)
    setCount(count + 1)
  }

  const handleRemove = () => {
    if(count > initial)
    setCount(count - 1)
  }

  return (
      <Stack spacing={2} width='100%'>
        <Box  component='div' sx={{width:'100%',display:'flex' ,justifyContent:'center'}}>
          <IconButton aria-label="Example" onClick={handleRemove} >
            <RemoveIcon/>
          </IconButton>
          <FormControl sx={{ width: '5rem' }}>
            <OutlinedInput 
            size='small'
            value={count}
          />
          </FormControl>
          <IconButton aria-label="Example" onClick={handleAdd}>
            <AddIcon/>
          </IconButton>
        </Box>
        <Button variant="contained" >
          Agregar al carrito
        </Button>
      </Stack>
  )
}

export default ItemCount