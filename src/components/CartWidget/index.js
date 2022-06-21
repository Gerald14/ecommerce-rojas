import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StyledBadge from './components/StyledBadge';

const CartWidget = () => {
  return (
      <StyledBadge badgeContent={5} color="primary">
        <ShoppingCartIcon sx={{ color: '#fff', cursor:'pointer'}}/>
      </StyledBadge>
    
  )
}

export default CartWidget