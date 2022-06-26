import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import cartContext from '../../context/CartContent';
import StyledBadge from './components/StyledBadge';

const CartWidget = () => {

  const {data:{quantity}} = useContext(cartContext);

  return (
      <StyledBadge badgeContent={quantity} color="primary">
        <ShoppingCartIcon sx={{ color: '#fff', cursor:'pointer'}}/>
      </StyledBadge>
    
  )
} 

export default CartWidget