import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Recipes from './components/Recipes/Recipes';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import About from './components/About/About';

import './App.sass';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav  />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/recipes' exact component={Recipes} />
          <Route path='/about' component= {About} />
          <Route path='/blog' component= {Blog} />
        </Switch>
      </div>
      <footer className='footer'> &copy; RecipeIdeas 2020</footer>
    </Router>
  );
}

export default App;
