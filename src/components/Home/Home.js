import React from 'react';
import {Link} from 'react-router-dom';

import {blogData, aboutData} from '../../util/data';

import '../../sass/style.sass';

export default function Home() {
    return (
        <div className = 'Home'>
            
            <section className='Home__intro'>
                <div className="Home__intro__info">
                    <div className="Home__intro__info__image"></div>
                    <h2>RecipeIdeas which will help you find new recipes</h2>
                    <h4>Are you bored with eating the same food all the time?</h4>
                    <h4>We will help you stop the routine!</h4>
                    <p>Our site got the best recipes ideas in the world</p>
                    <p>You can find some of them for you</p>
                    <p>It's easy to use</p>
                    <p>Got some bananas in your fridge?</p>
                    <p>And you don't know what to do with them?</p>
                    <p>Just type in the <span>searchbar</span> the quote 'banana'</p>
                    <p>This App will look for some recipes which got bananas in it</p>
                    <Link to='/recipes' className='Home__intro__info__link'>
                        Check out
                    </Link>
                    
                </div>
            </section>
            <section className="Home__recipes">
                <div className="Home__recipes__elements">
                    <Link to={{pathname: '/recipes', query: 'breakfast'}} className="Home__recipes__elements__element">
                        <img src="https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg" alt="breakfast" className="Home__recipes__elements__element__image"/>
                        <p className="Home__recipes__elements__element__title">Breakfast</p>
                    </Link>
                    <Link to={{pathname: '/recipes', query: 'lunch'}} className="Home__recipes__elements__element">
                        <img src="https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_960_720.jpg" alt="lunch" className="Home__recipes__elements__element__image"/>
                        <p className="Home__recipes__elements__element__title">Lunch</p>
                    </Link>
                    <Link to={{pathname: '/recipes', query: 'dinner'}} className="Home__recipes__elements__element">
                        <img src="https://cdn.pixabay.com/photo/2014/04/05/11/27/buffet-315691_960_720.jpg" alt="dinner" className="Home__recipes__elements__element__image"/>
                        <p className="Home__recipes__elements__element__title">Dinner</p>
                    </Link>
                    <Link to={{pathname: '/recipes', query: 'dessert'}} className="Home__recipes__elements__element">
                        <img src="https://cdn.pixabay.com/photo/2017/05/02/18/20/blueberries-2278921_960_720.jpg" alt="dessert" className="Home__recipes__elements__element__image"/>
                        <p className="Home__recipes__elements__element__title">Dessert</p>
                    </Link>
                </div>
            </section>
            <section className="Home__about">
                <h2 className="Home__about__title">
                    Our Team
                </h2>
               <div className="Home__about__slider">
                   <div className="Home__about__slider__slide">
                       <div className="Home__about__slider__slide__section">
                            <img src={aboutData.imageData[0]} alt={aboutData.userData[0].name} />
                            <p>{aboutData.userData[0].name}</p>
                       </div>
                       <div className="Home__about__slider__slide__section">
                            <img src={aboutData.imageData[1]} alt={aboutData.userData[1].name} />
                            <p>{aboutData.userData[1].name}</p>
                       </div>
                   </div>
                   <div className="Home__about__slider__slide">
                        <div className="Home__about__slider__slide__section">
                            <img src={aboutData.imageData[2]} alt={aboutData.userData[2].name} />
                            <p>{aboutData.userData[2].name}</p>
                       </div>
                       <div className="Home__about__slider__slide__section">
                            <img src={aboutData.imageData[3]} alt={aboutData.userData[3].name} />
                            <p>{aboutData.userData[3].name}</p>
                       </div>
                   </div>
                   <div className="Home__about__slider__slide">
                        <div className="Home__about__slider__slide__section">
                            <img src={aboutData.imageData[4]} alt={aboutData.userData[4].name} />
                            <p>{aboutData.userData[4].name}</p>
                       </div>
                       <div className="Home__about__slider__slide__section">
                            <img src={aboutData.imageData[5]} alt={aboutData.userData[5].name} />
                            <p>{aboutData.userData[5].name}</p>
                       </div>
                   </div>
               </div>
            </section>
            <section className="Home__blog">
                <h2 className="Home__blog__title">
                    Blog
                </h2>
                <div className="Home__blog__latest">
                    <Link 
                        to={{pathname: `/blog/${blogData.titleData[0]}`, query: `${blogData.imageData[0]}`}} className="Home__blog__latest__item"
                    >
                        <div className="Home__blog__latest__item__image">
                            <img src={blogData.imageData[0]} alt={blogData.titleData[0]} />
                        </div>
                        <h4>
                            {blogData.titleData[0]}
                        </h4>
                        <p>
                            {blogData.dateData[0]}
                        </p>
                    </Link>
                    <Link 
                        to={{pathname: `/blog/${blogData.titleData[1]}`, query: `${blogData.imageData[1]}`}} className="Home__blog__latest__item"
                    >
                        <div className="Home__blog__latest__item__image">
                            <img src={blogData.imageData[1]} alt={blogData.titleData[1]} />
                        </div>
                        <h4>
                            {blogData.titleData[1]}
                        </h4>
                        <p>
                            {blogData.dateData[1]}
                        </p>
                    </Link>
                    <Link 
                        to={{pathname: `/blog/${blogData.titleData[2]}`, query: `${blogData.imageData[2]}`}} className="Home__blog__latest__item"
                    >
                        <div className="Home__blog__latest__item__image">
                            <img src={blogData.imageData[2]} alt={blogData.titleData[2]} />
                        </div>
                        <h4>
                            {blogData.titleData[2]}
                        </h4>
                        <p>
                            {blogData.dateData[2]}
                        </p>
                    </Link>
                </div>
            </section>
        </div>
    )
}
