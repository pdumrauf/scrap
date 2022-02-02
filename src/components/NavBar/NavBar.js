import logo from '../../assets/img/logo.png'
import './NavBar.css';
import CartWidget from '../CartWidget.js'

function NavBar() {
  return (
    <nav>
        <div>
          <img src={logo} className='imgLogo' alt='logo'/>
        </div>
        <div>
          <ul className='menu'>
              <li><a href='#' className='menuLinks'>About</a></li>
              <li><a href='#' className='menuLinks'>Products</a></li>
              <li><a href='#' className='menuLinks'>Contact Us</a></li>
              <li><CartWidget /></li>
          </ul>
        </div>
    </nav>
  );
};

export default NavBar;
