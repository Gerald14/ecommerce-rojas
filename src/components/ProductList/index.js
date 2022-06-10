import { Box } from '@mui/material'
import ProductCard from '../ProductCard';

const ProductList = ({products}) => {

  return (
    <Box component='div' className='product-list' m={5}>
        {products.map((product,index) =>
            <ProductCard key={index} product={product}/>
        )}
    </Box>
  )
}

export default ProductList