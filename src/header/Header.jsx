import { Link } from 'react-router-dom';
import './header.css';

const Header=()=>{
    return(
        <div className="header">
            <h1 className="page-title">Fran Riddell Renaissance</h1>
            <nav className="top-nav">
                <Link to="/" className="top-nav-link head-home">Home</Link>
                <Link to="/about" className="top-nav-link head-about">About</Link>
                <Link to="/jewelry" className="top-nav-link head-jewelry">Jewelry</Link>
                <Link to="/contact" className="top-nav-link head-contact">Contact</Link>
            </nav>
        </div>
    )
};

export default Header;