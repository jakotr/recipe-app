import React from 'react';

import './SearchBar.sass';

export default function SearchBar({handleSubmit}) {

    return (
        <div className="SearchBar">
            <div className="SearchBar__logo">
                <i className='SearchBar__logo__icon fas fa-drumstick-bite'></i>
                <p className='SearchBar__logo__title'><span>R</span>ecipe<span>I</span>deas</p>
            </div>
            <form className='SearchBar__form' onSubmit={handleSubmit}>
                <input type="text" name="query" className='SearchBar__form__input' />
                <button type="submit" className='SearchBar__form__button'>Search</button>
            </form>
        </div>
        
    )
}
