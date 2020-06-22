import React from 'react';

import '../../sass/style.sass';

export default function BlogReadMore({location, match}) {

    if(!location.query) {
        // return 'loading...'
    }

    console.log(location, match.params.id)

    return (
        <div className='BlogReadMore'>
            <div className="BlogReadMore__image">
                <img src={location.query} alt=""/>
            </div>
            <h2 className='BlogReadMore__title'>{match.params.id} </h2>
            <p className="BlogReadMore__content1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam quisquam adipisci tempore mollitia, quis id tempora architecto est deleniti quam molestias! Nobis officia saepe doloremque nesciunt vel laboriosam alias quaerat deleniti blanditiis, quisquam aliquam temporibus, consequuntur sit tempore, natus enim! Tempore fuga praesentium est earum aliquam distinctio quia, eaque odio!
            </p>
            <p className="BlogReadMore__content2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, officia?
            </p>
            <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet, aperiam vel!</li>
            </ul>
            
            <h3 className='BlogReadMore__subtitle'>
                Lorem, ipsum dolor.
            </h3>
            <p className="BlogReadMore__content2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eum inventore quos iure animi tenetur nihil facilis deserunt in magnam voluptas ex cupiditate veniam, saepe fugiat. Iste molestiae minus rem, nostrum illo iure recusandae eum asperiores ipsam voluptatibus. Ut eligendi quia veniam architecto nemo, at consequuntur tenetur repellat sint blanditiis nostrum voluptas aut ad iure in ab quas ipsam reprehenderit quo, vero accusamus debitis. Ex, quos ab vel molestiae fugit explicabo! Sed ad deleniti quos, praesentium hic ut eius ipsa voluptates accusamus, temporibus quaerat expedita! Temporibus consequuntur in minus dicta adipisci debitis officia magni soluta explicabo facere incidunt repudiandae nihil, delectus quas ipsum harum fugiat quam commodi error distinctio illo ducimus voluptatibus sit. Officia inventore aperiam minus. Laborum, dolore blanditiis deserunt pariatur repudiandae voluptates ullam facere nemo harum eum autem nesciunt magnam vero aut facilis, mollitia veritatis beatae ab expedita ipsa molestias. Laudantium repudiandae et asperiores delectus magni sed velit?
            </p>
            <p className="BlogReadMore__content2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea aliquam laudantium atque excepturi laborum, facilis eligendi deleniti explicabo rerum consectetur eaque, assumenda dolorum? Rerum culpa tempora aliquid, voluptatibus ex libero ab ducimus neque! Porro fugit, distinctio incidunt esse eligendi quod perspiciatis totam ducimus accusantium laboriosam quidem possimus itaque blanditiis temporibus illum consectetur quisquam vitae sit eos est architecto facere. Nesciunt fuga consectetur quas at minima cupiditate repudiandae veritatis temporibus rerum cum, ab nisi dolorem quam esse ad inventore qui quaerat vitae. Dignissimos illum inventore voluptates sed quo natus velit laboriosam, sequi non ipsam, maiores voluptatem aspernatur impedit, suscipit voluptatum vitae.
            </p>
            <p className="BlogReadMore__content2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam ratione quaerat iste, ex consectetur vitae culpa ab incidunt a adipisci quod blanditiis, sed veniam officia illum quisquam sapiente id animi debitis exercitationem ullam aspernatur odio nesciunt! Qui maiores maxime repudiandae nesciunt doloremque esse, dolorum, quisquam incidunt libero, a at eos aliquid vitae explicabo porro! Ipsum et libero laborum voluptatibus. Suscipit laboriosam expedita temporibus dolor corporis quas! Deleniti, cumque. Reiciendis nam dolore, officia consectetur odio esse molestiae suscipit possimus expedita iure magnam veniam voluptatem perspiciatis quas vel commodi delectus! Dolor ad provident officiis reiciendis, quae corrupti illo expedita voluptas enim quo quos alias maiores porro, accusantium suscipit voluptates saepe sit, veniam reprehenderit necessitatibus laborum autem dignissimos esse est. Dolorem alias voluptatum temporibus quos iusto?
            </p>
            <h3 className="BlogReadMore__subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, modi voluptate.
            </h3>
            <p className="BlogReadMore__content2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam amet, neque in dolorum minus fugiat eum illo perferendis et fugit, animi non sequi dicta facere commodi, sed consequuntur autem recusandae modi? Recusandae fugit earum iusto quas nihil ratione fuga facilis officiis, officia doloribus provident. Deserunt doloribus modi quo nam aperiam cupiditate quas deleniti culpa sequi dignissimos dolores, reiciendis iure, autem magnam totam dolor esse alias illo harum iste dolorem similique consequatur. Ipsa, quasi ducimus maiores maxime, itaque eius culpa incidunt id debitis saepe et nobis similique ipsam labore. Dolore perferendis at veritatis vero dolor consequuntur aliquam saepe quibusdam nostrum libero?
            </p>
            <p className="BlogReadMore__content2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquam praesentium exercitationem nam itaque illum cupiditate laboriosam voluptatibus sapiente, dolorem non deleniti numquam nisi amet sit ex ducimus fugit architecto accusamus expedita ullam culpa maxime atque? Quibusdam, quod corporis repudiandae reiciendis praesentium mollitia delectus corrupti nihil atque quis excepturi fuga assumenda architecto explicabo ipsum vitae repellat, sed harum tempore dolorum dolores unde magnam reprehenderit. Ducimus sed deleniti maxime dolorum a labore ut voluptatem, obcaecati autem provident!
            </p>
            <h3 className="BlogReadMore__subtitle">
                Lorem ipsum dolor sit amet consectetur.
            </h3>
            <p className="BlogReadMore__content2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta iste maiores laboriosam voluptates qui, expedita obcaecati quod molestiae? Quod magni nostrum voluptatum minus nulla earum, ut eos, vitae maiores excepturi similique accusamus beatae, explicabo repellat necessitatibus at. Minus quae nesciunt hic sed illum magni quaerat commodi optio, cumque rerum quibusdam asperiores. Vel tenetur minus ipsam nemo perferendis atque, saepe qui eum molestiae quas fuga inventore quo, nobis, totam et odio. Quo perspiciatis a, vel reprehenderit voluptate saepe eligendi temporibus quia adipisci labore quidem quas architecto ut porro. Laborum debitis alias delectus impedit magni doloremque dicta aperiam officia libero tempore pariatur, maiores veritatis asperiores harum ullam. Placeat libero explicabo illum similique non harum in ipsam quidem. Maxime illo nobis minus cum aliquid assumenda labore totam asperiores, adipisci, aut eligendi soluta quos.
            </p>
            <p className="BlogReadMore__content2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas commodi repellendus consequatur libero fugiat. Itaque autem distinctio reiciendis non iure molestiae natus, voluptatem saepe perspiciatis dicta, nemo eum, fuga nulla fugiat optio omnis nobis exercitationem consectetur vitae dolorum deleniti recusandae aperiam. Architecto vero officiis quasi veniam doloremque, nisi porro commodi.
            </p>
        </div>
    )
}
