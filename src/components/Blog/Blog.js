import React from 'react';
import {Link} from 'react-router-dom';

import {blogData} from '../../util/data';

import './Blog.sass';

export default function Blog() {

    const {imageData, titleData, dateData} = blogData;

    return (
        <div className = 'Blog'>
            <h3 className='Blog__title'>BLOG</h3>
            <section className="Blog__latest">
                {imageData.map((data, idx) => (
                    <div key = {idx} className="Blog__latest__item">
                        <div className="Blog__latest__item__image">
                            <img src={data} alt={titleData[idx]}/>
                        </div>
                        <div className="Blog__latest__item__description">
                            <h4 className="Blog__latest__item__description__title">{titleData[idx]}</h4>
                            <p className="Blog__latest__item__description__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptas nostrum mollitia quod accusamus aperiam nesciunt doloremque quis ad cumque dolor illo, architecto exercitationem sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium labore et aut, ex ipsa, quisquam, iste doloremque tenetur repellendus magni earum. Deleniti illo nostrum dicta sint fugiat perferendis a dignissimos est? Delectus, deserunt! Nihil, odio. Mollitia voluptate, voluptatibus quas veritatis maxime culpa totam! Quo, officia unde ut quasi dolore tempora...
                            <Link to={{pathname: `/blog/${titleData[idx]}`, query: `${data}`}} className='Blog__latest__item__description__content__link'>
                                Read more
                            </Link> 
                            </p>
                            <p className="Blog__latest__item__description__date">
                                {dateData[idx]}
                            </p>
                        </div>
                    
                    </div>
                ))}
            </section>
        </div>
    )
}
