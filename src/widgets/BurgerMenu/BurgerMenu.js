import React from 'react';
import Button from '../../shared/ui/Button/Button';

const BurgerMenu = (props) => {
    const { closeMenu, toggleMenu } = props;

    return (
        <div className="nav__burger-menu">
            <div className="blur" onClick={closeMenu} />
            <Button className="burger-button" onClick={toggleMenu}>
                <span />
                <span />
                <span />
            </Button>
        </div>
    );
};

export default BurgerMenu;
