import React from 'react';
import {Link} from 'react-router-dom';

import './Blog.sass';

export default function Blog() {
    return (
        <div className = 'Blog'>
            <h3 className='Blog__title'>BLOG</h3>
            <section className="Blog__latest">
                {/* <h3 className = 'Blog__latest__title'>Latest</h3> */}
                <div className="Blog__latest__item">
                    <div className="Blog__latest__item__image">
                        <img src="https://cdn.pixabay.com/photo/2019/08/14/20/08/keto-4406621_960_720.jpg" alt="keto"/>
                    </div>
                    <div className="Blog__latest__item__description">
                        <h4 className="Blog__latest__item__description__title">Ketogenic diet for losing extra kilos</h4>
                        <p className="Blog__latest__item__description__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptas nostrum mollitia quod accusamus aperiam nesciunt doloremque quis ad cumque dolor illo, architecto exercitationem sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium labore et aut, ex ipsa, quisquam, iste doloremque tenetur repellendus magni earum. Deleniti illo nostrum dicta sint fugiat perferendis a dignissimos est? Delectus, deserunt! Nihil, odio. Mollitia voluptate, voluptatibus quas veritatis maxime culpa totam! Quo, officia unde ut quasi dolore tempora...
                        <Link className='Blog__latest__item__description__content__link'>
                            Read more
                        </Link> 
                        </p>
                        <p className="Blog__latest__item__description__date">
                            11 June 2019
                        </p>
                    </div>
                    
                </div>
                <div className="Blog__latest__item">
                    <div className="Blog__latest__item__image">
                        <img src="https://cdn.pixabay.com/photo/2020/05/02/09/15/eggs-5120477_960_720.jpg" alt="proteins"/>
                    </div>
                    <div className="Blog__latest__item__description">
                        <h4 className="Blog__latest__item__description__title">Best protein source</h4>
                        <p className="Blog__latest__item__description__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptas nostrum mollitia quod accusamus aperiam nesciunt doloremque quis ad cumque dolor illo, architecto exercitationem sapiente. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores laboriosam, odit magni eum eligendi vero. Incidunt laborum autem quidem dolorum laboriosam tenetur non minima repellendus sint eius eveniet temporibus iure ipsum vitae tempora eum excepturi sed, mollitia, fugit quas ex, amet nihil quisquam? Voluptatibus sit saepe ratione cum? Autem, nam...
                        <Link className='Blog__latest__item__description__content__link'>
                            Read more
                        </Link> 
                        </p>
                        <p className="Blog__latest__item__description__date">
                            3 May 2019
                        </p>
                    </div>
                </div>
                <div className="Blog__latest__item"> 
                    <div className="Blog__latest__item__image">
                        <img src="https://cdn.pixabay.com/photo/2015/09/15/15/53/bank-note-941246_960_720.jpg" alt="dollar"/>
                    </div>
                    <div className="Blog__latest__item__description">
                        <h4 className="Blog__latest__item__description__title">Eat for 10$ for a week</h4>
                        <p className="Blog__latest__item__description__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptas nostrum mollitia quod accusamus aperiam nesciunt doloremque quis ad cumque dolor illo, architecto exercitationem sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sequi quidem ipsam labore nihil fuga nobis, quod aliquid, repellat provident facilis vel dolore aperiam doloribus nisi quam vero id, et odio incidunt aut deserunt voluptatum. Aperiam obcaecati, perferendis repellendus corrupti nesciunt suscipit repudiandae, dolorem magnam ab voluptates non a nulla...
                        <Link className='Blog__latest__item__description__content__link'>
                            Read more
                        </Link> 
                        </p>
                        <p className="Blog__latest__item__description__date">
                            17 april 2019
                        </p>
                    </div>
                </div>
                <div className="Blog__latest__item"> 
                    <div className="Blog__latest__item__image">
                        <img src="https://cdn.pixabay.com/photo/2016/11/20/09/06/bowl-1842294_960_720.jpg" alt="meal"/>
                    </div>
                    <div className="Blog__latest__item__description">
                        <h4 className="Blog__latest__item__description__title">Fastes meal you ever made!</h4>
                        <p className="Blog__latest__item__description__content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem quos, maiores assumenda placeat fugiat possimus, qui odit dolorum sed recusandae culpa aut quisquam officia veniam laudantium commodi? Voluptatem, sit possimus iste aspernatur eum aliquid consequatur perferendis totam accusamus hic quo, suscipit maiores adipisci rem obcaecati ipsa ipsam quae, voluptates explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores assumenda, rerum eligendi cumque consectetur provident! Debitis pariatur dolorem placeat itaque?
                        <Link className='Blog__latest__item__description__content__link'>
                            Read more
                        </Link> 
                        </p>
                        <p className="Blog__latest__item__description__date">
                            22 March 2019
                        </p>
                    </div>
                </div>
                <div className="Blog__latest__item"> 
                    <div className="Blog__latest__item__image">
                        <img src="https://cdn.pixabay.com/photo/2015/01/09/11/22/fitness-594143_960_720.jpg" alt="weight"/>
                    </div>
                    <div className="Blog__latest__item__description">
                        <h4 className="Blog__latest__item__description__title">Get some weight</h4>
                        <p className="Blog__latest__item__description__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptas nostrum mollitia quod accusamus aperiam nesciunt doloremque quis ad cumque dolor illo, architecto exercitationem sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sequi quidem ipsam labore nihil fuga nobis, quod aliquid, repellat provident facilis vel dolore aperiam doloribus nisi quam vero id, et odio incidunt aut deserunt voluptatum. Aperiam obcaecati, perferendis repellendus corrupti nesciunt suscipit repudiandae, dolorem magnam ab voluptates non a nulla...
                        <Link className='Blog__latest__item__description__content__link'>
                            Read more
                        </Link> 
                        </p>
                        <p className="Blog__latest__item__description__date">
                            12 February 2019
                        </p>
                    </div>
                </div>
            
            </section>
        </div>
    )
}
