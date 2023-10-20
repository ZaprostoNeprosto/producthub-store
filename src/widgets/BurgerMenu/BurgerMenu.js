import React from 'react';
import Button from "../../shared/ui/Button/Button";

const BurgerMenu = (props) => {

  return (
    <div className="nav__burger-menu" >
      <div className='blur' onClick={props.closeMenu}></div>
      <Button className='burger-button' onClick={props.toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
      </Button>
    </div>
  );
};

export default BurgerMenu;
