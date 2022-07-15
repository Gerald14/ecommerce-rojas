import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material';
import { CartProvider } from '../../context/CartContext';
import Main from './styled/Main';
import NavBar from '../Navbar';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

function Layout() {
  return (
    <CartProvider>
      <NavBar />
      <Offset />
      <Main>
        <Outlet />
      </Main>
    </CartProvider>

  );
}

export default Layout;
