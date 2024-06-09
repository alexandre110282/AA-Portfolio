import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/DropDownMenu.scss'
import '../styles/Arrow.scss'
import arrow from '../assets/arrow_back_ios-24px 2.png'

function DropdownMenu({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown ${isOpen ? 'opened' : ''}`}>
      <button className="dropdown-toggle" onClick={toggleMenu}>
        {title}
        <img
          src={arrow}
          alt={isOpen ? 'Fermer' : 'Ouvrir'}
          className={`arrow-icon ${isOpen ? 'rotate' : ''}`}
        />
      </button>
      <div className="dropdown-menu">
        <ul>{children}</ul>
      </div>
    </div>
  
  );
}
DropdownMenu.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default DropdownMenu;