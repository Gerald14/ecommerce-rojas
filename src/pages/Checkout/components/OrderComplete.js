import {Box} from '@mui/material'
import React from 'react'
import Typography from '@mui/material/Typography'
import iconComplete from '../../../assets/images/order_complete.jpg'

const OrderComplete = ({id}) => {
  return (
    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',height:'100%'}}>
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <img src={iconComplete} alt="order" srcset={iconComplete} width={'354px'} />
            <Typography variant="h3" color="primary"> Gracias por su compra!!</Typography>
            <Typography variant="body1" color="initial" mt={3}>
                Su orden N° {id} se completo con exito.
            </Typography>
        </Box>
    </Box>
  )
}

export default OrderComplete