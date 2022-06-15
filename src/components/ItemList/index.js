import { Box } from '@mui/material'
import Item from '../Item';

const ItemList = ({products}) => {

  return (
    <Box component='div' className='product-list' m={5}>
        {products.map((product,index) =>
            <Item key={index} product={product}/>
        )}
    </Box>
  )
}

export default ItemList