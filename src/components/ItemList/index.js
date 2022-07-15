import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import Item from '../Item';

function ItemList({ products }) {
  return (
    <Box component="div" className="product-list" m={5}>
      {products.length > 0
       && products.map((product) => <Item key={product.id} product={product} />)}
    </Box>
  );
}

ItemList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })).isRequired,
};

export default ItemList;
