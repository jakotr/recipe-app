import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Link} from 'react-scroll';

import Nav from './components/Nav/Nav';
import Recipes from './components/Recipes/Recipes';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import BlogReadMore from './components/BlogReadMore/BlogReadMore';

import './sass/style.sass';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav  />
        <Switch>
          <Route path='/recipe-app' exact component={Home} />
          <Route path='/recipes' exact component={Recipes} />
          <Route path='/about' component= {About} />
          <Route path='/blog' exact component= {Blog} />
          <Route path='/blog/:id' component= {BlogReadMore} />
        </Switch>
      </div>
      <Link
        className='ScrollToTop'
        activeClass='active'
        to ='App'
        smooth = {true}
        duration = {300}
      >
        <i className="fas fa-arrow-up"></i>
      </Link>
      <footer className='footer'> &copy; RecipeIdeas 2020</footer>
    </Router>
  );
}

export default App;
