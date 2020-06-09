import React from 'react';
import {Link} from 'react-router-dom';

import './Home.sass';

export default function Home() {
    return (
        <div className = 'Home'>
            <section className='Home__intro'>
                <div className="Home__intro__info">
                    <h2>RecipeIdeas App which will help you to find new recipes</h2>
                    <h4>Are you bored with eating the same food all the time?</h4>
                    <h4>We will help you stop the routine!</h4>
                    <p>Our site got the best recipes ideas in the world</p>
                    <p>You can find some of them for you</p>
                    <p>It's easy to use</p>
                    <p>Got some bananas in your fridge?</p>
                    <p>And you don't know what to do with them?</p>
                    <p>Just type in the <span>searchbar</span> the quote 'banana'</p>
                    <p>This App will look for some recipes which got bananas in it</p>
                </div>
                <div className="Home__intro__image">
                    <img src="https://i.picsum.photos/id/292/640/480.jpg" alt=""/>
                </div>
            </section>
            <section className="Home__recipes">
                <div className="Home__recipes__elements">
                    <Link className="Home__recipes__elements__element">
                        <img src="" alt="" className="Home__recipes__elements__element__image"/>
                        <p className="Home__recipes__elements__element__title">Breakfast</p>
                    </Link>
                    <Link className="Home__recipes__elements__element">
                        <img src="" alt="" className="Home__recipes__elements__element__image"/>
                        <p className="Home__recipes__elements__element__title">Lunch</p>
                    </Link>
                    <Link className="Home__recipes__elements__element">
                        <img src="" alt="" className="Home__recipes__elements__element__image"/>
                        <p className="Home__recipes__elements__element__title">Desert</p>
                    </Link>
                    <Link className="Home__recipes__elements__element">
                        <img src="" alt="" className="Home__recipes__elements__element__image"/>
                        <p className="Home__recipes__elements__element__title">Meal</p>
                    </Link>
                </div>
            </section>
            <section className="Home__recipes__about">
                chyba slider
            </section>
            <section className="Home__recipes__blog">
                odowlania do blogow
            </section>
            
        </div>
    )
}
