import React from 'react';
import {Link} from 'react-router-dom';

import './SearchBar.sass';

export default function SearchBar({handleSubmit}) {

    return (
        <div className="SearchBar">
            <div className="SearchBar__logo">
                <Link to='/' className = 'SearchBar__logo__link'>
                    <i className='SearchBar__logo__link__icon fas fa-drumstick-bite'></i>
                    <p className='SearchBar__logo__link__title'><span>R</span>ecipe<span>I</span>deas</p>
                </Link>   
            </div>
            <form className='SearchBar__form' onSubmit={handleSubmit}>
                <input type="text" name="query" className='SearchBar__form__input' />
                <button type="submit" className='SearchBar__form__button'>Search</button>
            </form>
            <div className="SearchBar__links">
                <ul className="SearchBar__links__list">
                    <Link to='/recipes' className="SearchBar__links__list__item">
                        <li>Recipes</li>
                    </Link>
                    <Link to='/about' className="SearchBar__links__list__item">
                        <li>About</li>
                    </Link>
                    <Link to='/blog' className="SearchBar__links__list__item">
                        <li>Blog</li>
                    </Link>
                </ul>
            </div>
            
        </div>
        
    )
}
