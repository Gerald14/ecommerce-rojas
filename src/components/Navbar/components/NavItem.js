import { useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Submenu from './Submenu';

function NavItem({ item }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const { categoryId, itemId } = useParams();

  const showSubmenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const hideSubmenu = () => {
    setAnchorEl(null);
  };

  return (
    <li
      className={`navbar-navitem ${Boolean(anchorEl) || ((categoryId || itemId) && item.title === 'Mangas') ? 'active' : ''}`}
      onMouseEnter={showSubmenu}
      onMouseLeave={hideSubmenu}
    >
      {item.title}
      {item.submenu
            && (
            <Submenu
              anchorEl={anchorEl}
              hideSubmenu={hideSubmenu}
            />
            )}
    </li>
  );
}

NavItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    submenu: PropTypes.bool,
  }).isRequired,
};

export default NavItem;
