import { Box, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

function CartItemList({ items }) {
  return (
    <Stack spacing={2}>
      <Box sx={{
        display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', borderBottom: '1px solid #b3b3b3', borderTop: '1px solid #b3b3b3', padding: '1rem 0',
      }}
      >
        <Typography variant="h6" sx={{ flexGrow: 2 }} color="initial">
          Producto
        </Typography>
        <Typography variant="h6" sx={{ flexGrow: 5 }} color="initial">
          Descripcion
        </Typography>
        <Typography variant="h6" sx={{ flexGrow: 2 }} color="initial">
          Cantidad
        </Typography>
        <Typography variant="h6" sx={{ flexGrow: 1 }} color="initial">
          Sub Total
        </Typography>
      </Box>
      {items.map((item) => <CartItem key={item.id} item={item} />)}
    </Stack>
  );
}

CartItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.id,
  })).isRequired,
};

export default CartItemList;
