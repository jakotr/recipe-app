import React from 'react';
import {Link} from 'react-router-dom';

import './Blog.sass';

export default function Blog() {

    const imageData = [
        "https://cdn.pixabay.com/photo/2019/08/14/20/08/keto-4406621_960_720.jpg",
        "https://cdn.pixabay.com/photo/2020/05/02/09/15/eggs-5120477_960_720.jpg",
        "https://cdn.pixabay.com/photo/2015/09/15/15/53/bank-note-941246_960_720.jpg",
        "https://cdn.pixabay.com/photo/2016/11/20/09/06/bowl-1842294_960_720.jpg",
        "https://cdn.pixabay.com/photo/2015/01/09/11/22/fitness-594143_960_720.jpg",
    ];  
    const titleData = [
        'Ketogenic diet for losing extra kilos',
        'Best protein source',
        'Eat for 10$ for a week',
        'Fastes meal you ever made!',
        'Get some weight',
    ];
    const dateData = [
        '11 June 2019',
        '3 May 2019',
        '17 april 2019',
        '22 March 2019',
        '12 February 2019',
    ];


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
