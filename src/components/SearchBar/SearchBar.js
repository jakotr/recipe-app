import React from 'react';

import './SearchBar.sass';

export default function SearchBar({handleSubmit}) {

    return (
        <div className="SearchBar">
            <form className='SearchBar__form' onSubmit={handleSubmit}>
                <input type="text" name="query" placeholder='Search for recipes... lunch' className='SearchBar__form__input' />
                <button type="submit" className='SearchBar__form__button'>
                    <i className="fas fa-search"></i>
                </button>
            </form>
        </div>
        
    )
}
