import React,{ useState} from 'react';
import { FaEthereum } from "react-icons/fa";
import { FaBars, FaTimes} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

import './Nav.css';

function Nav(){
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  return(
    <>
    <IconContext.Provider value={{ color: '#fff' }}>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            <FaEthereum className='navbar-icon'/>
            Djongers Weather
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMenu}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/aboutus" className="nav-links" onClick={closeMenu}>About Us</Link>
            </li>
          </ul>
        </div>
      </div>
      </IconContext.Provider>
    </>
  );
}

export default Nav;
