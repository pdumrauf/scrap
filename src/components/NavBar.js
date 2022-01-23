import logo from '../img/logo.png'
import './NavBar.css';

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
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;