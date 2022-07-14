import { useState } from "react";
import { useParams } from "react-router-dom";
import Submenu from "./Submenu";



const NavItem = ({item}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const {categoryId,itemId} = useParams();

    const showSubmenu = e => {
        setAnchorEl(e.currentTarget);
    }
 
    const hideSubmenu = () => {
        setAnchorEl(null)
    }

  return (
    <li
        className={`navbar-navitem ${Boolean(anchorEl)||((categoryId||itemId) && item.title ==='Mangas')? 'active':''}`}
        onMouseEnter={showSubmenu}
        onMouseLeave={hideSubmenu}
    >
        {item.title}
        {item.submenu && 
            <Submenu 
            anchorEl={anchorEl} 
            hideSubmenu={hideSubmenu}/>}
    </li>
  )
}

export default NavItem