import React, {useState, useEffect} from 'react';

import RecipeItem from '../RecipeItem/RecipeItem';
import {fetchData} from '../../api';
import SearchBar from '../SearchBar/SearchBar';

import './Recipes.sass'


export default function Recipes() {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const [isClicked, setIsClicked] = useState(false);
    const [recipeIndex, setRecipeIndex] = useState('');
    const [display, setDisplay] = useState(true);
  
    useEffect(() => {
      const fetchedData = async () => {
        setData(await fetchData(query));
      }
      fetchedData();
    }, [query]);
  
  
    const handleSubmit = (e) => {
      console.log()
      e.preventDefault();
      setQuery(e.target.query.value)
      
      e.target.query.value = '';
    }

    const handleClick = (index) => {
        console.log(index);
        setRecipeIndex(index);
        setIsClicked(true); 
        setDisplay(!display);
    }
    
    return (
        <div className = 'Recipes'>
            <SearchBar handleSubmit = {handleSubmit} />
            {isClicked ? <RecipeItem data = {data.data.hits} index = {recipeIndex} display = {display} /> : null}
            {!data.data ? 'loading...' : 
                data.data.hits.map((recipe, index) => (
                    <div key ={index} className="Recipes__item">
                        <div className="Recipes__item__overlay">
                            <img className='Recipes__item__overlay__image' src={recipe.recipe.image} alt={recipe.recipe.label}  />
                            <div onClick = {() => handleClick(index)} className="Recipes__item__overlay__link">
                                <span className="Recipes__item__overlay__link__icon">
                                    <i className="fas fa-search"></i>
                                    <p>Read more</p>
                                </span>
                            </div>
                        </div>
                        <h3 className= 'Recipes__item__title'>{recipe.recipe.label} </h3>
                    </div>
                ))
            }
            
        </div>
    )
}
