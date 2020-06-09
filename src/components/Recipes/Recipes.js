import React from 'react';

import RecipeItem from '../RecipeItem/RecipeItem';

import './Recipes.sass'


export default function Recipes({data:{data}}) {

    if(!data) {
        return 'loading...';
    }

    console.log(data.hits);

    return (
        <div className = 'Recipes'>
            {data.hits.map((recipe, index) => (
                <div key ={index} className="Recipes__item">
                    <div className="Recipes__item__overlay">
                        <img className='Recipes__item__overlay__image' src={recipe.recipe.image} alt={recipe.recipe.label}  />
                        <a href="#" className="Recipes__item__overlay__link">
                            <span className="Recipes__item__overlay__link__icon">
                                <i className="fas fa-search"></i>
                                <p>Read more</p>
                            </span>
                        </a>
                    </div>
                    <h3 className= 'Recipes__item__title'>{recipe.recipe.label} </h3>
                </div>
            ))}
        </div>
    )
}
