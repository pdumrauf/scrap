import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import CartWidget from '../CartWidget/CartWidget.js';
import './NavBar.css';

function NavBar() {
  return (
    <nav>
        <div>
          <Link to='/'>
            <img src={logo} className='imgLogo' alt='logo'/>
          </Link>  
        </div>
        <div>
          <ul className='menu'>
              <li><NavLink to='/category/papers' className='menuLinks'>Papers</NavLink></li>
              <li><NavLink to='/category/pens' className='menuLinks'>Pens</NavLink></li>
              <li><NavLink to='/category/washi-tapes' className='menuLinks'>Washi tapes</NavLink></li>
              <li><NavLink to='/cart' className='cartIcon'><CartWidget /></NavLink></li>
          </ul>
        </div>
    </nav>
  );
};

export default NavBar;
