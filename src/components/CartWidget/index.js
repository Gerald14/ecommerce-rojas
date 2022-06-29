import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StyledBadge from './components/StyledBadge';
import cartContext from '../../context/CartContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const CartWidget = () => {

  const navigate = useNavigate()
  const {data:{quantity}} = useContext(cartContext);

  const handleToCart = () => {
    navigate('/cart')
  }

  return (
      <StyledBadge badgeContent={quantity} color="primary">
        <ShoppingCartIcon 
        onClick={handleToCart} 
        sx={{ color: '#fff', cursor:'pointer'}}/>
      </StyledBadge>
    
  )
} 

export default CartWidget