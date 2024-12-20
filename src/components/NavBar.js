import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import './NavBar.css';
import { Button } from "./Button";


function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => { setClick(!click); };
    const closeMobileMenue = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
        
    };
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);



    return(
        <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenue}>
              LT 
              <i class='fab fa-typo3' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenue}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/aboutme'
                  className='nav-links'
                  onClick={closeMobileMenue}
                >
                  About me
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/projects'
                  className='nav-links'
                  onClick={closeMobileMenue}
                >
                  Projects
                </Link>
              </li>
  
              {/* <li>
                <Link
                  to='/sign-up1'
                  className='nav-links-mobile'
                  onClick={closeMobileMenue}
                >
                  Messege me
                </Link>
              </li> */}
            </ul>
            {button && <Button buttonStyle='btn--outline'>Messege</Button>}
          </div>
        </nav>
      </>
    );
  }
export default NavBar;
