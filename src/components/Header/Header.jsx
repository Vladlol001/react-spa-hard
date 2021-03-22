import { Link } from 'react-router-dom';
import sMod from './Header.module.css';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className={sMod.header__container}>
                    <Link to="/" className="logo">
                        <h3>Food recipe</h3>
                    </Link>
                    <div className="header__nav">
                        <Link to="/contact">Contact</Link>
                        <Link to="/about">About</Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
