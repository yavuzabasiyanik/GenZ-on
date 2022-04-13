import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './Navbar.css';

// import mypic from '../../images/GenZon-logos_black.png';
// import ProductForm from '../ProductForm/ProductForm';

const NavBar = () => {
  const [showProfile, setShowProfile] = useState(false);



  return (

    <nav>
      <div className='uppernav'>
        <NavLink to={'/'}><p className='genzonnavbar'>GenZon</p></NavLink>

        <div className='searchCreate'>

          <div className='search'>
            <input className='searchinput' type='text'></input>

          </div>
          <NavLink to={'/product/sell'}><button>Create Product</button></NavLink>
          <button onClick={(e) => setShowProfile((d) => !d)}>Profile</button>
          {showProfile &&
            <div className='dropdownProfile'>
              <ul>
                <li>
                  <NavLink to='/' exact={true} activeClassName='active'>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/login' exact={true} activeClassName='active'>
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/signup' exact={true} activeClassName='active'>
                    Sign Up
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/users' exact={true} activeClassName='active'>
                    Users
                  </NavLink>
                </li>
                <li>
                  <LogoutButton />
                </li>
              </ul>
            </div>
          }

        </div>
      </div>

      <div className='lowernav'>

      </div>

    </nav>

  );
}

export default NavBar;
