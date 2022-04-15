import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './Navbar.css';
import { logout } from '../../store/session';
// import mypic from '../../images/GenZon-logos_black.png';
// import ProductForm from '../ProductForm/ProductForm';

const NavBar = () => {
  const [showProfile, setShowProfile] = useState(false);
  const user = useSelector(state => state.session.user);



  const dispatch = useDispatch();
  const history = useHistory();

  const onLogout = async (e) => {
    await dispatch(logout());
    history.push('/login');
    setShowProfile(false)
  };



  let menuRef = useRef();

  useEffect(() => {

    const handler = (event) => {

      if (!menuRef.current.contains(event.target)) {

        setShowProfile(false);
      }
    }

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler)
    }

  })

  return (
    <>
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
              <i className="fa-solid fa-sort-down colorchangecarretdown"></i>
            </div>

            <input className='searchinput' type='text'></input>
            <div className='right-search-thingy'>
              <i className="fa-solid fa-magnifying-glass search-logo-thingy"></i>

            </div>
          </div>

          <div className='div-nav-right-ana'>
            <div ref={menuRef}>

              <div onClick={() => setShowProfile(e => !e)} className='right-most-left-part-navbar'>
                <p className='hello-someone'>Hello, {user?.username}</p>
                <span className='listings-onthenavbar'>Account & Lists<i className="fa-solid fa-sort-down accountlistdropdownicon"></i></span>
              </div>
              {showProfile &&
                <div className='dropdownprofile'>
                  <NavLink exact to={'/'} onClick={() => setShowProfile(false)}>
                    <div className='accounts-listings'>

                      <p className='bold'>Home</p>

                    </div>
                  </NavLink>
                  <NavLink exact to={'/profile'} onClick={() => setShowProfile(false)}>

                  <div className='accounts-listings'>

                    <p className='bold notsobold'>Go to your profile</p>

                  </div>
                  </NavLink>

                  <NavLink exact to={'/user/products'} onClick={() => setShowProfile(false)}>
                  <div className='accounts-listings'>

                    <p className='bold notsobold'>Your products</p>

                  </div>
                  </NavLink>

                  <NavLink exact to={'/product/sell'} onClick={() => setShowProfile(false)}>
                  <div className='accounts-listings'>

                    <p className='bold notsobold'>Sell an Item</p>

                  </div>
                  </NavLink>

                  <div onClick={onLogout}  className='accounts-listings noborder'>

                    <p className='bold'>Logout</p>

                  </div>

                </div>
              }
            </div>

            <div className='right-mid-part-navbar'>
              <span className='returns-be-specificlol'>Returns</span>
              <span className='orders-be-specificlol'>& Orders</span>
            </div>

            <div className='shopping-cart-thingy'>


              <i className="fa-solid fa-cart-shopping shoppingcartthing"></i>
              <p className='numbershoppingcart'>2</p>
            </div>
          </div>

        </div>

        <div className='lowernav'>
          <div className='dana-lowernavpart'>
            <div className='lowernav-allpart'>

              <i className="fa-solid fa-bars habmurgerall"></i>
              <p>All</p>
            </div>
            <div className='lowernav-allpart'>
              <p>Electronics</p>
            </div>
            <div className='lowernav-allpart'>
              <p>Fashion</p>
            </div>
            <div className='lowernav-allpart'>
              <p>Furniture</p>
            </div>
            <div className='lowernav-allpart'>
              <p>Food</p>
            </div>
            <div className='lowernav-allpart'>
              <p>Hobby</p>
            </div>
            <div className='rightpartlinkedingithub'>
              <a href="https://github.com/yavuzabasiyanik" target="_blank"><i className="githublinked fa-brands fa-github"></i></a>
              <a href="https://www.linkedin.com/in/yavuz-abasiyanik-a4a86720a/" target="_blank"><i className="githublinked fa-brands fa-linkedin"></i></a>
            </div>
          </div>
        </div>

      </nav>

    </>

  );
}

export default NavBar;
