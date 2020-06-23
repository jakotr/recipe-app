(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],{10:function(e,a,t){},42:function(e,a,t){e.exports=t(76)},76:function(e,a,t){"use strict";t.r(a);var i=t(0),l=t.n(i),s=t(15),n=t.n(s),m=t(2),o=t(1),c=t(38),r=t(9),u=t(39),_=t.n(u);t(10);function p(){var e=Object(i.useState)(!1),a=Object(r.a)(e,2),t=a[0],s=a[1],n=function(){s(!t)};return l.a.createElement("div",{className:"Nav"},l.a.createElement("div",{className:"Nav__logo"},l.a.createElement(m.b,{onClick:t?n:null,to:"/",className:"Nav__logo__link"},l.a.createElement("i",{className:"Nav__logo__link__icon fas fa-drumstick-bite"}),l.a.createElement("p",{className:"Nav__logo__link__title"},l.a.createElement("span",null,"R"),"ecipe",l.a.createElement("span",null,"I"),"deas"))),l.a.createElement("div",{className:"Nav__links"},l.a.createElement("ul",{className:"Nav__links__list"},l.a.createElement(m.b,{to:"/recipes",className:"Nav__links__list__item"},l.a.createElement("li",null,"Recipes")),l.a.createElement(m.b,{to:"/about",className:"Nav__links__list__item"},l.a.createElement("li",null,"About")),l.a.createElement(m.b,{to:"/blog",className:"Nav__links__list__item"},l.a.createElement("li",null,"Blog")))),l.a.createElement("div",{className:t?"Nav__links__activeOnHam active":"Nav__links__activeOnHam"},l.a.createElement("ul",{className:"Nav__links__activeOnHam__list"},l.a.createElement(m.b,{onClick:n,to:"/recipes",className:"Nav__links__activeOnHam__list__item"},l.a.createElement("li",null,"Recipes")),l.a.createElement(m.b,{onClick:n,to:"/about",className:"Nav__links__activeOnHam__list__item"},l.a.createElement("li",null,"About")),l.a.createElement(m.b,{onClick:n,to:"/blog",className:"Nav__links__activeOnHam__list__item"},l.a.createElement("li",null,"Blog")))),l.a.createElement("div",{className:"Nav__hamburger"},l.a.createElement(_.a,{isOpen:t,menuClicked:n,width:24,height:22,strokeWidth:2,rotate:0,color:"black",borderRadius:0,animationDuration:.5})))}var d=t(12),b=t.n(d),E=t(16);function g(e){var a=e.data,t=e.index,s=e.display,n=Object(i.useState)(!0),m=Object(r.a)(n,2),o=m[0],c=m[1];Object(i.useEffect)((function(){c(!0)}),[s]);return o?l.a.createElement("div",{className:"RecipeItem"},l.a.createElement("div",{className:"RecipeItem__overlay"},l.a.createElement("h3",{className:"RecipeItem__overlay__title"},a[t].recipe.label," "),l.a.createElement("div",{className:"RecipeItem__overlay__section"},l.a.createElement("img",{className:"RecipeItem__overlay__section__image",src:a[t].recipe.image,alt:""}),l.a.createElement("div",{className:"RecipeItem__overlay__section__table"},l.a.createElement("h4",null,"Nutritional value"),l.a.createElement("div",{className:"RecipeItem__overlay__section__table__content"},l.a.createElement("div",{className:"RecipeItem__overlay__section__table__content__title"},l.a.createElement("p",null,"Energy value"),l.a.createElement("p",null,"Fat"),l.a.createElement("p",null,"Carbs"),l.a.createElement("p",null,"Sugars"),l.a.createElement("p",null,"Proteins")),l.a.createElement("div",{className:"RecipeItem__overlay__section__table__content__value"},l.a.createElement("p",null,Math.floor(a[t].recipe.totalNutrients.ENERC_KCAL.quantity),"kcal"),l.a.createElement("p",null,Math.floor(a[t].recipe.totalNutrients.FAT.quantity),"g"),l.a.createElement("p",null,Math.floor(a[t].recipe.totalNutrients.CHOCDF.quantity),"g"),l.a.createElement("p",null,Math.floor(a[t].recipe.totalNutrients.SUGAR.quantity),"g"),l.a.createElement("p",null,Math.floor(a[t].recipe.totalNutrients.PROCNT.quantity),"g"))))),l.a.createElement("div",{className:"RecipeItem__overlay__ingredients"},l.a.createElement("h3",null,"Ingredients"),a[t].recipe.ingredients.map((function(e,a){return l.a.createElement("div",{key:a,className:"RecipeItem__overlay__ingredients__row"},l.a.createElement("p",{className:"RecipeItem__overlay__ingredients__row__title"},e.text," "),l.a.createElement("p",{className:"RecipeItem__overlay__ingredients__row__weight"},Math.floor(e.weight),"g"))})),l.a.createElement("a",{target:"blank",className:"RecipeItem__overlay__ingredients__link",href:a[t].recipe.url},"Show the Recipe")),l.a.createElement("div",{onClick:function(){c(!1)},className:"RecipeItem__overlay__closeBtn"},l.a.createElement("i",{className:"fas fa-times-circle"})))):null}var v=t(41),h=t.n(v),N=function(){var e=Object(E.a)(b.a.mark((function e(a){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://api.edamam.com/search?q=".concat(a,"&app_id=").concat("a6f5a981","&app_key=").concat("87b6f098b586cc1abdbbb4aa01713af0","&from=0&to=100"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();function f(e){var a=e.handleSubmit,t=e.placeholder;return l.a.createElement("div",{className:"SearchBar"},l.a.createElement("form",{className:"SearchBar__form",onSubmit:a},l.a.createElement("input",{type:"text",name:"query",placeholder:"Search for recipes... ".concat(t),className:"SearchBar__form__input"}),l.a.createElement("button",{type:"submit",className:"SearchBar__form__button"},l.a.createElement("i",{className:"fas fa-search"}))))}function q(e){var a=Object(i.useState)([]),t=Object(r.a)(a,2),s=t[0],n=t[1],m=Object(i.useState)(""),o=Object(r.a)(m,2),c=o[0],u=o[1],_=Object(i.useState)(!1),p=Object(r.a)(_,2),d=p[0],v=p[1],h=Object(i.useState)(""),q=Object(r.a)(h,2),y=q[0],x=q[1],k=Object(i.useState)(!0),R=Object(r.a)(k,2),H=R[0],B=R[1];Object(i.useEffect)((function(){e.location.query&&u(e.location.query)}),[e.location.query]),Object(i.useEffect)((function(){(function(){var e=Object(E.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=n,e.next=3,N(c);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]);return l.a.createElement("div",{className:"Recipes"},l.a.createElement(f,{handleSubmit:function(e){e.preventDefault(),u(e.target.query.value),e.target.query.value=""},placeholder:c}),d?l.a.createElement(g,{data:s.data.hits,index:y,display:H}):null,s.data?s.data.hits.map((function(e,a){return l.a.createElement("div",{key:a,className:"Recipes__item"},l.a.createElement("div",{className:"Recipes__item__overlay"},l.a.createElement("img",{className:"Recipes__item__overlay__image",src:e.recipe.image,alt:e.recipe.label}),l.a.createElement("div",{onClick:function(){return function(e){x(e),v(!0),B(!H)}(a)},className:"Recipes__item__overlay__link"},l.a.createElement("span",{className:"Recipes__item__overlay__link__icon"},l.a.createElement("i",{className:"fas fa-search"}),l.a.createElement("p",null,"Read more")))),l.a.createElement("h3",{className:"Recipes__item__title"},e.recipe.label," "))})):"loading...")}var y=["https://cdn.pixabay.com/photo/2019/08/14/20/08/keto-4406621_960_720.jpg","https://cdn.pixabay.com/photo/2020/05/02/09/15/eggs-5120477_960_720.jpg","https://cdn.pixabay.com/photo/2015/09/15/15/53/bank-note-941246_960_720.jpg","https://cdn.pixabay.com/photo/2016/11/20/09/06/bowl-1842294_960_720.jpg","https://cdn.pixabay.com/photo/2015/01/09/11/22/fitness-594143_960_720.jpg"],x=["Ketogenic diet for losing extra kilos","Best protein source","Eat for 10$ for a week","Fastes meal you ever made!","Get some weight"],k=["11 June 2019","3 May 2019","17 april 2019","22 March 2019","12 February 2019"],R=["https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_960_720.jpg","https://cdn.pixabay.com/photo/2019/12/26/08/31/portrait-4719921_960_720.jpg","https://cdn.pixabay.com/photo/2018/11/02/09/41/business-3789889_960_720.jpg","https://cdn.pixabay.com/photo/2018/03/21/16/50/woman-3247382_960_720.jpg","https://cdn.pixabay.com/photo/2017/09/16/17/42/business-woman-2756210_960_720.jpg","https://cdn.pixabay.com/photo/2019/09/16/09/29/attractive-4480435_960_720.jpg"],H=[{name:"John Toph",age:"25"},{name:"Mark Smith",age:"23"},{name:"Alex Garcia",age:"22"},{name:"Lisa Batt",age:"24"},{name:"Mariah Pyke",age:"27"},{name:"Rue Wallor",age:"26"}];function B(){return l.a.createElement("div",{className:"Home"},l.a.createElement("section",{className:"Home__intro"},l.a.createElement("div",{className:"Home__intro__info"},l.a.createElement("div",{className:"Home__intro__info__image"}),l.a.createElement("h2",null,"RecipeIdeas which will help you find new recipes"),l.a.createElement("h4",null,"Are you bored with eating the same food all the time?"),l.a.createElement("h4",null,"We will help you stop the routine!"),l.a.createElement("p",null,"Our site got the best recipes ideas in the world"),l.a.createElement("p",null,"You can find some of them for you"),l.a.createElement("p",null,"It's easy to use"),l.a.createElement("p",null,"Got some bananas in your fridge?"),l.a.createElement("p",null,"And you don't know what to do with them?"),l.a.createElement("p",null,"Just type in the ",l.a.createElement("span",null,"searchbar")," the quote 'banana'"),l.a.createElement("p",null,"This App will look for some recipes which got bananas in it"),l.a.createElement(m.b,{to:"/recipes",className:"Home__intro__info__link"},"Check out"))),l.a.createElement("section",{className:"Home__recipes"},l.a.createElement("div",{className:"Home__recipes__elements"},l.a.createElement(m.b,{to:{pathname:"/recipes",query:"breakfast"},className:"Home__recipes__elements__element"},l.a.createElement("img",{src:"https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg",alt:"breakfast",className:"Home__recipes__elements__element__image"}),l.a.createElement("p",{className:"Home__recipes__elements__element__title"},"Breakfast")),l.a.createElement(m.b,{to:{pathname:"/recipes",query:"lunch"},className:"Home__recipes__elements__element"},l.a.createElement("img",{src:"https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_960_720.jpg",alt:"lunch",className:"Home__recipes__elements__element__image"}),l.a.createElement("p",{className:"Home__recipes__elements__element__title"},"Lunch")),l.a.createElement(m.b,{to:{pathname:"/recipes",query:"dinner"},className:"Home__recipes__elements__element"},l.a.createElement("img",{src:"https://cdn.pixabay.com/photo/2014/04/05/11/27/buffet-315691_960_720.jpg",alt:"dinner",className:"Home__recipes__elements__element__image"}),l.a.createElement("p",{className:"Home__recipes__elements__element__title"},"Dinner")),l.a.createElement(m.b,{to:{pathname:"/recipes",query:"dessert"},className:"Home__recipes__elements__element"},l.a.createElement("img",{src:"https://cdn.pixabay.com/photo/2017/05/02/18/20/blueberries-2278921_960_720.jpg",alt:"dessert",className:"Home__recipes__elements__element__image"}),l.a.createElement("p",{className:"Home__recipes__elements__element__title"},"Dessert")))),l.a.createElement("section",{className:"Home__about"},l.a.createElement("h2",{className:"Home__about__title"},"Our Team"),l.a.createElement("div",{className:"Home__about__slider"},l.a.createElement("div",{className:"Home__about__slider__slide"},l.a.createElement("div",{className:"Home__about__slider__slide__section"},l.a.createElement("img",{src:R[0],alt:H[0].name}),l.a.createElement("p",null,H[0].name)),l.a.createElement("div",{className:"Home__about__slider__slide__section"},l.a.createElement("img",{src:R[1],alt:H[1].name}),l.a.createElement("p",null,H[1].name))),l.a.createElement("div",{className:"Home__about__slider__slide"},l.a.createElement("div",{className:"Home__about__slider__slide__section"},l.a.createElement("img",{src:R[2],alt:H[2].name}),l.a.createElement("p",null,H[2].name)),l.a.createElement("div",{className:"Home__about__slider__slide__section"},l.a.createElement("img",{src:R[3],alt:H[3].name}),l.a.createElement("p",null,H[3].name))),l.a.createElement("div",{className:"Home__about__slider__slide"},l.a.createElement("div",{className:"Home__about__slider__slide__section"},l.a.createElement("img",{src:R[4],alt:H[4].name}),l.a.createElement("p",null,H[4].name)),l.a.createElement("div",{className:"Home__about__slider__slide__section"},l.a.createElement("img",{src:R[5],alt:H[5].name}),l.a.createElement("p",null,H[5].name))))),l.a.createElement("section",{className:"Home__blog"},l.a.createElement("h2",{className:"Home__blog__title"},"Blog"),l.a.createElement("div",{className:"Home__blog__latest"},l.a.createElement(m.b,{to:{pathname:"/blog/".concat(x[0]),query:"".concat(y[0])},className:"Home__blog__latest__item"},l.a.createElement("div",{className:"Home__blog__latest__item__image"},l.a.createElement("img",{src:y[0],alt:x[0]})),l.a.createElement("h4",null,x[0]),l.a.createElement("p",null,k[0])),l.a.createElement(m.b,{to:{pathname:"/blog/".concat(x[1]),query:"".concat(y[1])},className:"Home__blog__latest__item"},l.a.createElement("div",{className:"Home__blog__latest__item__image"},l.a.createElement("img",{src:y[1],alt:x[1]})),l.a.createElement("h4",null,x[1]),l.a.createElement("p",null,k[1])),l.a.createElement(m.b,{to:{pathname:"/blog/".concat(x[2]),query:"".concat(y[2])},className:"Home__blog__latest__item"},l.a.createElement("div",{className:"Home__blog__latest__item__image"},l.a.createElement("img",{src:y[2],alt:x[2]})),l.a.createElement("h4",null,x[2]),l.a.createElement("p",null,k[2])))))}function O(){var e=y,a=x,t=k;return l.a.createElement("div",{className:"Blog"},l.a.createElement("h3",{className:"Blog__title"},"BLOG"),l.a.createElement("section",{className:"Blog__latest"},e.map((function(e,i){return l.a.createElement("div",{key:i,className:"Blog__latest__item"},l.a.createElement("div",{className:"Blog__latest__item__image"},l.a.createElement("img",{src:e,alt:a[i]})),l.a.createElement("div",{className:"Blog__latest__item__description"},l.a.createElement("h4",{className:"Blog__latest__item__description__title"},a[i]),l.a.createElement("p",{className:"Blog__latest__item__description__content"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptas nostrum mollitia quod accusamus aperiam nesciunt doloremque quis ad cumque dolor illo, architecto exercitationem sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium labore et aut, ex ipsa, quisquam, iste doloremque tenetur repellendus magni earum. Deleniti illo nostrum dicta sint fugiat perferendis a dignissimos est? Delectus, deserunt! Nihil, odio. Mollitia voluptate, voluptatibus quas veritatis maxime culpa totam! Quo, officia unde ut quasi dolore tempora...",l.a.createElement(m.b,{to:{pathname:"/blog/".concat(a[i]),query:"".concat(e)},className:"Blog__latest__item__description__content__link"},"Read more")),l.a.createElement("p",{className:"Blog__latest__item__description__date"},t[i])))}))))}function j(){var e=R,a=H;return l.a.createElement("div",{className:"About"},l.a.createElement("h3",{className:"About__title"},"About us"),a.map((function(a,t){return t%2===0?l.a.createElement("section",{key:t,className:"About__section"},l.a.createElement("div",{className:"About__section__image"},l.a.createElement("img",{src:e[t],alt:a.name})),l.a.createElement("div",{className:"About__section__description"},l.a.createElement("h4",null,a.name,", ",a.age," yo"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatem aliquam blanditiis nemo consectetur dicta ut fuga minus culpa, illum, tempora illo quidem iure adipisci explicabo laudantium reprehenderit voluptatibus error temporibus amet voluptatum optio soluta. Itaque nihil autem at ad. Doloribus assumenda veniam ipsa minus odit suscipit optio totam magni!"))):l.a.createElement("section",{key:t,className:"About__section bgc-right"},l.a.createElement("div",{className:"About__section__image"},l.a.createElement("img",{src:e[t],alt:a.name})),l.a.createElement("div",{className:"About__section__description pleft"},l.a.createElement("h4",null,a.name,", ",a.age," yo"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatem aliquam blanditiis nemo consectetur dicta ut fuga minus culpa, illum, tempora illo quidem iure adipisci explicabo laudantium reprehenderit voluptatibus error temporibus amet voluptatum optio soluta. Itaque nihil autem at ad. Doloribus assumenda veniam ipsa minus odit suscipit optio totam magni!")))})))}function w(e){var a=e.location,t=e.match;return l.a.createElement("div",{className:"BlogReadMore"},l.a.createElement("div",{className:"BlogReadMore__image"},l.a.createElement("img",{src:a.query,alt:""})),l.a.createElement("h2",{className:"BlogReadMore__title"},t.params.id," "),l.a.createElement("p",{className:"BlogReadMore__content1"},"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam quisquam adipisci tempore mollitia, quis id tempora architecto est deleniti quam molestias! Nobis officia saepe doloremque nesciunt vel laboriosam alias quaerat deleniti blanditiis, quisquam aliquam temporibus, consequuntur sit tempore, natus enim! Tempore fuga praesentium est earum aliquam distinctio quia, eaque odio!"),l.a.createElement("p",{className:"BlogReadMore__content2"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, officia?"),l.a.createElement("ul",null,l.a.createElement("li",null,"Lorem ipsum dolor sit amet, consectetur adipisicing."),l.a.createElement("li",null,"Lorem ipsum dolor sit amet."),l.a.createElement("li",null,"Lorem ipsum dolor sit amet, aperiam vel!")),l.a.createElement("h3",{className:"BlogReadMore__subtitle"},"Lorem, ipsum dolor."),l.a.createElement("p",{className:"BlogReadMore__content2"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eum inventore quos iure animi tenetur nihil facilis deserunt in magnam voluptas ex cupiditate veniam, saepe fugiat. Iste molestiae minus rem, nostrum illo iure recusandae eum asperiores ipsam voluptatibus. Ut eligendi quia veniam architecto nemo, at consequuntur tenetur repellat sint blanditiis nostrum voluptas aut ad iure in ab quas ipsam reprehenderit quo, vero accusamus debitis. Ex, quos ab vel molestiae fugit explicabo! Sed ad deleniti quos, praesentium hic ut eius ipsa voluptates accusamus, temporibus quaerat expedita! Temporibus consequuntur in minus dicta adipisci debitis officia magni soluta explicabo facere incidunt repudiandae nihil, delectus quas ipsum harum fugiat quam commodi error distinctio illo ducimus voluptatibus sit. Officia inventore aperiam minus. Laborum, dolore blanditiis deserunt pariatur repudiandae voluptates ullam facere nemo harum eum autem nesciunt magnam vero aut facilis, mollitia veritatis beatae ab expedita ipsa molestias. Laudantium repudiandae et asperiores delectus magni sed velit?"),l.a.createElement("p",{className:"BlogReadMore__content2"},"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea aliquam laudantium atque excepturi laborum, facilis eligendi deleniti explicabo rerum consectetur eaque, assumenda dolorum? Rerum culpa tempora aliquid, voluptatibus ex libero ab ducimus neque! Porro fugit, distinctio incidunt esse eligendi quod perspiciatis totam ducimus accusantium laboriosam quidem possimus itaque blanditiis temporibus illum consectetur quisquam vitae sit eos est architecto facere. Nesciunt fuga consectetur quas at minima cupiditate repudiandae veritatis temporibus rerum cum, ab nisi dolorem quam esse ad inventore qui quaerat vitae. Dignissimos illum inventore voluptates sed quo natus velit laboriosam, sequi non ipsam, maiores voluptatem aspernatur impedit, suscipit voluptatum vitae."),l.a.createElement("p",{className:"BlogReadMore__content2"},"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam ratione quaerat iste, ex consectetur vitae culpa ab incidunt a adipisci quod blanditiis, sed veniam officia illum quisquam sapiente id animi debitis exercitationem ullam aspernatur odio nesciunt! Qui maiores maxime repudiandae nesciunt doloremque esse, dolorum, quisquam incidunt libero, a at eos aliquid vitae explicabo porro! Ipsum et libero laborum voluptatibus. Suscipit laboriosam expedita temporibus dolor corporis quas! Deleniti, cumque. Reiciendis nam dolore, officia consectetur odio esse molestiae suscipit possimus expedita iure magnam veniam voluptatem perspiciatis quas vel commodi delectus! Dolor ad provident officiis reiciendis, quae corrupti illo expedita voluptas enim quo quos alias maiores porro, accusantium suscipit voluptates saepe sit, veniam reprehenderit necessitatibus laborum autem dignissimos esse est. Dolorem alias voluptatum temporibus quos iusto?"),l.a.createElement("h3",{className:"BlogReadMore__subtitle"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, modi voluptate."),l.a.createElement("p",{className:"BlogReadMore__content2"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam amet, neque in dolorum minus fugiat eum illo perferendis et fugit, animi non sequi dicta facere commodi, sed consequuntur autem recusandae modi? Recusandae fugit earum iusto quas nihil ratione fuga facilis officiis, officia doloribus provident. Deserunt doloribus modi quo nam aperiam cupiditate quas deleniti culpa sequi dignissimos dolores, reiciendis iure, autem magnam totam dolor esse alias illo harum iste dolorem similique consequatur. Ipsa, quasi ducimus maiores maxime, itaque eius culpa incidunt id debitis saepe et nobis similique ipsam labore. Dolore perferendis at veritatis vero dolor consequuntur aliquam saepe quibusdam nostrum libero?"),l.a.createElement("p",{className:"BlogReadMore__content2"},"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquam praesentium exercitationem nam itaque illum cupiditate laboriosam voluptatibus sapiente, dolorem non deleniti numquam nisi amet sit ex ducimus fugit architecto accusamus expedita ullam culpa maxime atque? Quibusdam, quod corporis repudiandae reiciendis praesentium mollitia delectus corrupti nihil atque quis excepturi fuga assumenda architecto explicabo ipsum vitae repellat, sed harum tempore dolorum dolores unde magnam reprehenderit. Ducimus sed deleniti maxime dolorum a labore ut voluptatem, obcaecati autem provident!"),l.a.createElement("h3",{className:"BlogReadMore__subtitle"},"Lorem ipsum dolor sit amet consectetur."),l.a.createElement("p",{className:"BlogReadMore__content2"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta iste maiores laboriosam voluptates qui, expedita obcaecati quod molestiae? Quod magni nostrum voluptatum minus nulla earum, ut eos, vitae maiores excepturi similique accusamus beatae, explicabo repellat necessitatibus at. Minus quae nesciunt hic sed illum magni quaerat commodi optio, cumque rerum quibusdam asperiores. Vel tenetur minus ipsam nemo perferendis atque, saepe qui eum molestiae quas fuga inventore quo, nobis, totam et odio. Quo perspiciatis a, vel reprehenderit voluptate saepe eligendi temporibus quia adipisci labore quidem quas architecto ut porro. Laborum debitis alias delectus impedit magni doloremque dicta aperiam officia libero tempore pariatur, maiores veritatis asperiores harum ullam. Placeat libero explicabo illum similique non harum in ipsam quidem. Maxime illo nobis minus cum aliquid assumenda labore totam asperiores, adipisci, aut eligendi soluta quos."),l.a.createElement("p",{className:"BlogReadMore__content2"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas commodi repellendus consequatur libero fugiat. Itaque autem distinctio reiciendis non iure molestiae natus, voluptatem saepe perspiciatis dicta, nemo eum, fuga nulla fugiat optio omnis nobis exercitationem consectetur vitae dolorum deleniti recusandae aperiam. Architecto vero officiis quasi veniam doloremque, nisi porro commodi."))}var M=function(){return l.a.createElement(m.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(p,null),l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/",exact:!0,component:B}),l.a.createElement(o.a,{path:"/recipes",exact:!0,component:q}),l.a.createElement(o.a,{path:"/about",component:j}),l.a.createElement(o.a,{path:"/blog",exact:!0,component:O}),l.a.createElement(o.a,{path:"/blog/:id",component:w}))),l.a.createElement(c.Link,{className:"ScrollToTop",activeClass:"active",to:"App",smooth:!0,duration:300},l.a.createElement("i",{className:"fas fa-arrow-up"})),l.a.createElement("footer",{className:"footer"}," \xa9 RecipeIdeas 2020"))};n.a.render(l.a.createElement(M,null),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.79c8416a.chunk.js.map