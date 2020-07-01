import React, {useState, useEffect} from 'react';
import CircleLoader from 'react-spinners/CircleLoader';

import RecipeItem from '../RecipeItem/RecipeItem';
import {fetchData} from '../../api';
import SearchBar from '../SearchBar/SearchBar';

import '../../sass/style.sass';


export default function Recipes(props) {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const [isClicked, setIsClicked] = useState(false);
    const [recipeIndex, setRecipeIndex] = useState('');
    const [display, setDisplay] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(props.location.query) {
            const fetchedData = async () => {
                setData(await fetchData(props.location.query));
                setIsLoading(false);
            }
            setIsLoading(true);
            fetchedData();

            setQuery(props.location.query)
        }
    }, [props.location.query])

  
    const handleSubmit = (e) => {
      e.preventDefault();
      const fetchedData = async () => {
        setData(await fetchData(e.target.query.value));
        setIsLoading(false);
      }
      setIsLoading(true);
      fetchedData();
      
      setQuery(e.target.query.value)
      e.target.query.value = '';
    }

    const handleClick = (index) => {
        setRecipeIndex(index);
        setIsClicked(true); 
        setDisplay(!display);
    }

    const override =`
        margin-top: 20vh;
    `;
    
    return (
        <div className = 'Recipes'>
            <SearchBar handleSubmit = {handleSubmit} placeholder = {query} />
            {isClicked ? <RecipeItem data = {data.data.hits} index = {recipeIndex} display = {display} /> : null}
            { isLoading ? 
                <CircleLoader 
                    css={override}
                    size={50}
                    color={'#a52a2a'}
                /> : 
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
