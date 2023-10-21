import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { cartCountSelector } from '../../app/providers/Store/store';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import ThemeSwitcher from '../../features/ThemeSwitcher/ThemeSwitcher';

export default function Navbar(props) {
    const cartCount = useSelector(cartCountSelector);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className={`navbar ${isOpen ? 'open' : ''}`}>
            <BurgerMenu toggleMenu={toggleMenu} closeMenu={closeMenu} isOpen={isOpen} />
            <NavLink to="/" className="nav-brand">
                ProductHub
            </NavLink>
            <div className="nav__rightblock-wrapper">
                <div className="nav__menu-wrapper">
                    <ul className="nav__menu-list">
                        <li className="nav-item">
                            <div className="nav__menu-link">
                                <ThemeSwitcher />
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav__menu-link">
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'active' : '')}
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav__menu-link">
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'active' : '')}
                                    to="/about"
                                >
                                    About us
                                </NavLink>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav__menu-link">
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'active' : '')}
                                    to="/products"
                                >
                                    Products
                                </NavLink>
                            </div>
                        </li>
                    </ul>
                </div>
                <NavLink to="/cart" className="nav-item nav-cart btn btn-accent">
                    Cart (
                    {cartCount}
                    )
                </NavLink>
            </div>
        </nav>
    );
}
