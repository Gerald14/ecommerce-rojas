import Logo from '../../assets/images/Logo-manga.png'
import Avatar from '../Avatar'
import User from '../../assets/images/User-icon.png'
import { MenuData } from './components/MenuData'
import CartWidget from '../CartWidget'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

  let activeStyle = {
    color: "red",
  };

  return (
    <header className="navbar">
      <div className="container">

        <div className="navbar-brand">
          <img src={Logo} alt="Logo" />
          <div className="navbar-brand-text">
            <span>Manga</span>
            <span>Store</span>
          </div>
        </div>

        <nav className="menu-main">
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
        <div className='menu-secondary'>
            <div className="navbar-search">
              <img src="https://img.icons8.com/ios-glyphs/26/ffffff/search--v1.png"alt='search'/>
            </div>
            <div className="navbar-account">
              <Avatar url={User}/>
            </div>
            <CartWidget/>
        </div>
      </div>
    </header>
  )
}

export default NavBar