import './header.css';
import logo from './../../img/icons/Vector.svg'

export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header_row">
                    <div className="header_logo">
                        <img src={logo} alt="Logo" />
                        <span>Fashion</span>
                    </div>
                    <nav>
                        <ul className="nav_list">
                            <li><a href="#" className="nav_link">Catalogue</a></li>
                            <li><a href="#" className="nav_link">Fashion</a></li>
                            <li><a href="#" className="nav_link">Favorite</a></li>
                            <li><a href="#" className="nav_link">Lifestyle</a></li>
                            <li><a href="#" className="nav_link header__nav-btn">Sign up</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}