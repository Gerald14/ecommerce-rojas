import Logo from '../../assets/images/Logo-manga.png'
import Avatar from '../Avatar'
import User from '../../assets/images/User-icon.png'
import { MenuData } from './components/MenuData'
import CartWidget from '../CartWidget'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppBar, Box, Container, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  const navigate = useNavigate();

  let activeStyle = {
    color: "red",
  };
  const handleClick = () => {
    navigate('/')
  }

  return (
    <AppBar className="navbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={()=>null}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box 
            component={'div'} 
            className="navbar-brand" 
            sx={{flexGrow:{xs:1,md:0}}}
            onClick={handleClick}>
            <img src={Logo} alt="Logo" />
            <div className="navbar-brand-text">
              <span>Manga</span>
              <span>Store</span>
            </div>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft:'2rem' }}>
            <nav className="menu-main" >
              <ul>
                {MenuData.map((item,index) =>
                  (<li key={index}>
                    <NavLink 
                      to={item.path}
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                        {item.title}
                      </NavLink>
                    </li>)
                )}
              </ul>
            </nav>
          </Box>
          
          <Box component={'div'} className='menu-secondary' sx={{ flexGrow: 0 }}>
              <div className="navbar-search">
                <img src="https://img.icons8.com/ios-glyphs/26/ffffff/search--v1.png"alt='search'/>
              </div>
              <div className="navbar-account">
                <Avatar url={User}/>
              </div>
              <CartWidget/>
          </Box>
        </Toolbar>
        
      </Container>
    </AppBar>
  )
}

export default NavBar