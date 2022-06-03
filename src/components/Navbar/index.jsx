import Logo from '../../assets/images/Logo-movie.png'
import Avatar from '../Avatar'
import User from '../../assets/images/User-icon.png'

const NavBar = () => {

  return (
    <header className="navbar">
      <div className="container">

        <div className="navbar-brand">
          <img src={Logo} alt="Logo" />
          <div className="navbar-brand-text">
            <span>Cine</span>
            <span>World</span>
          </div>
        </div>

        <nav className="menu-main">
          <ul>
            <li><a href="./#">Inicio</a></li>
            <li><a href="./#">Peliculas</a></li>
            <li><a href="./#">Cine</a></li>
            <li><a href="./#">Dulceria</a></li>
            <li><a href="./#">Contacto</a></li>
          </ul>
        </nav>
        <div className='menu-secondary'>
            <div className="navbar-search">
              <img src="https://img.icons8.com/ios-glyphs/26/ffffff/search--v1.png"alt='search'/>
            </div>
            <div className="navbar-account">
              <Avatar url={User}/>
            </div>
        </div>
      </div>
    </header>
  )
}

export default NavBar