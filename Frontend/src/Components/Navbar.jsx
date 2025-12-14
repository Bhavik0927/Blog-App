// navbar (New)
import { useState, useRef } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { removeUser } from '../Store/UserSlice';
import { persistor } from '../Store/Store';
import '../CSS/navbar.css';
import { toast } from 'react-toastify';
import { RiEditBoxLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {

  console.log("Navbar Page")
  const user = useSelector((store) => store.user?.user);
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const dropdownRef = useRef(null)
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = async () => {
    await axios.post('http://localhost:4000/logout', null, { withCredentials: true });
    dispatch(removeUser());
    persistor.purge();
    toast.success('Logout successfully...');
    Navigate('/');
  }

  // Close mobile menu on navigation
  const handleMenuNav = (to) => {
    Navigate(to);
    setMenuOpen(false);
  }

  return (
    <div className='navbar_container'>
      <div onClick={() => { Navigate('/') }} style={{ cursor: 'pointer' }}>
        <h1>Connect</h1>
      </div>

      {/* Hamburger icon for mobile */}
      <div className="hamburger_icon" onClick={() => setMenuOpen((m) => !m)}>
        <GiHamburgerMenu />
      </div>

      {/* DESKTOP/TABLET NAVIGATION */}
      {user ? (
        <div className='userlogin desktop-menu'>
          <div className='search-bar'>
            <span className='search-icon'><IoIosSearch /></span>
            <input type="text" placeholder='search' />
          </div>

          <div className='user-profile'>
            <div onClick={() => Navigate('/card')} className='write-container'>
              <span className='write-icon'><RiEditBoxLine /></span>
              <p>Write</p>
            </div>

            <div className="user-dropdown" ref={dropdownRef}>
              <p>Welcome {user?.existUser?.firstname || user?.firstname}</p>
              <img
                src={user?.existUser?.profilePic || user?.profilePic}
                alt="User"
                className="user-icon"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              />
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <button onClick={() => { Navigate("/myprofile"); setDropdownOpen(false); }}>
                    My Profile
                  </button>
                  <hr />
                  <button onClick={() => { Navigate("/saveblogs"); setDropdownOpen(false); }}>
                    Save blogs
                  </button>
                  <hr />
                  <button onClick={() => { Navigate("/edit-profile"); setDropdownOpen(false); }}>
                    Edit profile
                  </button>
                  <hr />
                  <button onClick={() => { logout(); setDropdownOpen(false); }}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="nav-no-user desktop-menu">
          <ul>
            <li>
              <Link to='/about' className='our_story'>Our Story</Link>
            </li>
            <li>
              <Link to='/card'>Write</Link>
            </li>
            <li>
              <Link to='/signup' className='signup_btn'>Sign up</Link>
            </li>
            <li>
              <Link to='/login' className='login_btn'>Login</Link>
            </li>
          </ul>
        </div>
      )}

      {/* MOBILE NAVIGATION: Show when menuOpen */}
      {menuOpen && (
        <div className="mobile-menu">
          <ul>


            {!user && (
              <>
                <li>
                  <Link to='/about' className='our_story' onClick={() => handleMenuNav('/about')}>Our Story</Link>
                </li>
                <li>
                  <Link to='/signup' className='signup_btn' onClick={() => handleMenuNav('/signup')}>Sign up</Link>
                </li>
                <li>
                  <Link to='/login' className='login_btn' onClick={() => handleMenuNav('/login')}>Login</Link>
                </li>
              </>
            )}
            {user && (
              <>
                <li onClick={() => handleMenuNav('/card')}>Write</li>
                <li onClick={() => handleMenuNav('/myprofile')}>My Profile</li>
                <li onClick={() => handleMenuNav('/saveblogs')}>Save Blogs</li>
                <li onClick={() => handleMenuNav('/edit-profile')}>Edit Profile</li>
                <li onClick={() => { logout(); setMenuOpen(false); }}>Logout</li>
              </>
            )}
          </ul>
        </div>
      )}

    </div>
  )
}

export default Navbar;
