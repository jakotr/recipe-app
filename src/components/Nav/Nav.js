import React from 'react';
import {Link} from 'react-router-dom';

import '../../sass/style.sass';

export default function Nav() {
    return (
        <div className="Nav">
            <div className="Nav__logo">
                <Link to='/' className = 'Nav__logo__link'>
                    <i className='Nav__logo__link__icon fas fa-drumstick-bite'></i>
                    <p className='Nav__logo__link__title'><span>R</span>ecipe<span>I</span>deas</p>
                </Link>   
            </div>
            <div className="Nav__links">
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
            
        </div>
    )
}
