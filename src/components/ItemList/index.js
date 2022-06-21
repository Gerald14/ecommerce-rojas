import { Box } from '@mui/material'
import Item from '../Item';

const ItemList = ({products}) => {

  return (
    <Box component='div' className='product-list' m={5}>
        {products.length>0 && products.map((product,index) =>
            <Item key={index} product={product}/>
        )}
    </Box>
  )
}

export default ItemList