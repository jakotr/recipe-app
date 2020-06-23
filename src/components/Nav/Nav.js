import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu'

import '../../sass/style.sass';

export default function Nav() {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="Nav">
            <div className="Nav__logo">
                <Link onClick = {isOpen ? handleClick : null} to='/recipe-app' className = 'Nav__logo__link'>
                    <i className='Nav__logo__link__icon fas fa-drumstick-bite'></i>
                    <p className='Nav__logo__link__title'><span>R</span>ecipe<span>I</span>deas</p>
                </Link>   
            </div>
            <div className={"Nav__links"}>
                <ul className="Nav__links__list">
                    <Link to='/recipes' className="Nav__links__list__item">
                        <li>Recipes</li>
                    </Link>
                    <Link to='/about' className="Nav__links__list__item">
                        <li>About</li>
                    </Link>
                    <Link to='/blog' className="Nav__links__list__item">
                        <li>Blog</li>
                    </Link>
                </ul>
            </div>
            <div className={isOpen ? "Nav__links__activeOnHam active" : "Nav__links__activeOnHam"}>
                <ul className="Nav__links__activeOnHam__list">
                    <Link onClick = {handleClick} to='/recipes' className="Nav__links__activeOnHam__list__item">
                        <li>Recipes</li>
                    </Link>
                    <Link onClick = {handleClick} to='/about' className="Nav__links__activeOnHam__list__item">
                        <li>About</li>
                    </Link>
                    <Link onClick = {handleClick} to='/blog' className="Nav__links__activeOnHam__list__item">
                        <li>Blog</li>
                    </Link>
                </ul>
            </div>
            <div className="Nav__hamburger">
                <HamburgerMenu
                    isOpen={isOpen}
                    menuClicked={handleClick}
                    width={24}
                    height={22}
                    strokeWidth={2}
                    rotate={0}
                    color='black'
                    borderRadius={0}
                    animationDuration={0.5}
                />
            </div>
            
            
        </div>
    )
}
