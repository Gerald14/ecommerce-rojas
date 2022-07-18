import { useNavigate } from 'react-router-dom';
import {
  AppBar, Avatar, Box, Container, IconButton, Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import Logo from '../../assets/images/Logo-manga.png';
import CartWidget from '../CartWidget';
import NavItem from './components/NavItem';
import { auth } from '../../firebase';
import MenuData from './components/MenuData';

function NavBar() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
    });
  }, []);

  return (
    <AppBar className="navbar" position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => null}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box
            component="div"
            className="navbar-brand"
            sx={{ flexGrow: { xs: 1, md: 0 } }}
            onClick={handleClick}
          >
            <img src={Logo} alt="Logo" />
            <div className="navbar-brand-text">
              <span>Manga</span>
              <span>Store</span>
            </div>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft: '2rem' }}>
            <nav className="menu-main">
              <ul>
                {MenuData.map((item) => <NavItem key={item.id} item={item} />)}
              </ul>
            </nav>
          </Box>

          <Box component="div" className="menu-secondary" sx={{ flexGrow: 0, paddingRight: '.5rem' }}>
            <div className="navbar-account">
              <Avatar alt="Remy Sharp" src="" />
            </div>
            <CartWidget />
          </Box>
        </Toolbar>

      </Container>
    </AppBar>
  );
}

export default NavBar;
