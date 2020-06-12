import React, {useState, useEffect}  from 'react';

import './RecipeItem.sass';


export default function RecipeItem({data, index, display}) {

    // if(!data) {
    //     return 'loading...';
    // }

    // const [recipe, setRecipe] = useState(data);
    const [isClicked, setIsClicked] = useState(true);

    useEffect(() => {
        setIsClicked(true)
    }, [display])

    const handleClick = () => {
        setIsClicked(false);
    }

    // console.log(data, index);

    return (
        isClicked ?
        <div className="RecipeItem">
            <div className="RecipeItem__overlay">
                <h3 className= 'RecipeItem__overlay__title'>{data[index].recipe.label} </h3>
                <div className="RecipeItem__overlay__section">
                    <img className= 'RecipeItem__overlay__section__image' src={data[index].recipe.image} alt=""/>
                    <div className="RecipeItem__overlay__section__table">
                        <h4>Nutritional value</h4>
                        <div className="RecipeItem__overlay__section__table__content">
                            <div className="RecipeItem__overlay__section__table__content__title">
                                <p>Energy value</p>
                                <p>Fat</p>
                                <p>Carbs</p>
                                <p>Sugars</p>
                                <p>Proteins</p>
                            </div>
                            <div className="RecipeItem__overlay__section__table__content__value">
                                <p>{Math.floor(data[index].recipe.totalNutrients.ENERC_KCAL.quantity)}kcal</p>
                                <p>{Math.floor(data[index].recipe.totalNutrients.FAT.quantity)}g</p>
                                <p>{Math.floor(data[index].recipe.totalNutrients.CHOCDF.quantity)}g</p>
                                <p>{Math.floor(data[index].recipe.totalNutrients.SUGAR.quantity)}g</p>
                                <p>{Math.floor(data[index].recipe.totalNutrients.PROCNT.quantity)}g</p>
                            </div>
                        </div>    
                    </div>   
                </div>
                <div className="RecipeItem__overlay__ingredients">
                    <h3>Ingredients</h3>
                    {data[index].recipe.ingredients.map((ing, idx) => (
                        <div key={idx} className="RecipeItem__overlay__ingredients__row">
                            <p className="RecipeItem__overlay__ingredients__row__title">{ing.text} </p>
                            <p className="RecipeItem__overlay__ingredients__row__weight">{Math.floor(ing.weight)}g</p>
                        </div>
                    ))}
                    <a target='blank' className='RecipeItem__overlay__ingredients__link' href={data[index].recipe.url}>
                        Show the Recipe
                    </a>
                </div>

                <div onClick= {handleClick} className="RecipeItem__overlay__closeBtn">
                    <i className="fas fa-times-circle"></i>
                </div>
                    

            </div> 
      </div> : null
    )
}
