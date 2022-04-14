import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './Navbar.css';

// import mypic from '../../images/GenZon-logos_black.png';
// import ProductForm from '../ProductForm/ProductForm';

const NavBar = () => {
  const [showProfile, setShowProfile] = useState(false);


  const user = useSelector(state => state.session.user);

  console.log(user);
  return (

    <nav>
      <div className='uppernav'>
        <div className='navbar-left-part'>

          <NavLink to={'/'}><p className='genzonnavbar'>GenZon</p></NavLink>
        </div>
        <div className='delivertodiv'>

          <p className='deliverto'>Deliver to {user?.username}</p>
        </div>

        <div className='search'>
          <div className='left-all'>
            All
            <i class="fa-solid fa-sort-down colorchangecarretdown"></i>
          </div>

          <input className='searchinput' type='text'></input>
          <div className='right-search-thingy'>
            <i class="fa-solid fa-magnifying-glass search-logo-thingy"></i>

          </div>
        </div>

        <div className='div-nav-right-ana'>

          <div className='right-most-left-part-navbar'>
            <span className='hello-someone'>Hello, {user?.username}</span>
            <span className='listings-onthenavbar'>Account & Lists</span>
          </div>

          <div className='right-mid-part-navbar'>

          </div>

          <div className='shopping-cart-thingy'>

          </div>
        </div>

        {/* <NavLink to={'/product/sell'}><button>Create Product</button></NavLink>
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
          } */}

      </div>

      <div className='lowernav'>

      </div>

    </nav>

  );
}

export default NavBar;
