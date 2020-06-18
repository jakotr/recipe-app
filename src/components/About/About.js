import React from 'react';

import {aboutData} from '../../util/data';

import './About.sass';

export default function About() {

    const {imageData, userData} = aboutData;

    return (
        <div className = "About">
            <h3 className='About__title'>About us</h3>
            {userData.map((user, idx) => (
                idx %2 === 0 ? 
                <section className="About__section">
                    <div className="About__section__image">
                    <img src={imageData[idx]} alt={user.name} /> 
                </div>
                <div className="About__section__description">
                    <h4>{user.name}, {user.age} yo</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatem aliquam blanditiis nemo consectetur dicta ut fuga minus culpa, illum, tempora illo quidem iure adipisci explicabo laudantium reprehenderit voluptatibus error temporibus amet voluptatum optio soluta. Itaque nihil autem at ad. Doloribus assumenda veniam ipsa minus odit suscipit optio totam magni!
                    </p>
                </div>
                </section>  :
                <section className="About__section bgc-right">
                <div className="About__section__image">
                    <img src={imageData[idx]} alt={user.name}/> 
                </div>
                <div className="About__section__description pleft">
                    <h4>{user.name}, {user.age} yo</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatem aliquam blanditiis nemo consectetur dicta ut fuga minus culpa, illum, tempora illo quidem iure adipisci explicabo laudantium reprehenderit voluptatibus error temporibus amet voluptatum optio soluta. Itaque nihil autem at ad. Doloribus assumenda veniam ipsa minus odit suscipit optio totam magni!
                    </p>
                </div>
            </section>
            ))}
        </div>
    )
}
