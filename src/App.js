import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import {fetchData} from './api';
import Nav from './components/Nav/Nav';
import Recipes from './components/Recipes/Recipes';
import Home from './components/Home/Home';
import RecipeItem from './components/RecipeItem/RecipeItem';

import './App.sass';
import SearchBar from './components/SearchBar/SearchBar';


function App() {

 
  

  return (
    <Router>
      <div className="App">
        <Nav  />
         {/* <SearchBar handleSubmit = {handleSubmit} /> */}
        {/* <Recipes data={data} /> */}
        <Switch>
          <Route path='/' exact component={Home} />
          {/* <Route path='/recipes' exact render={ (props) => <Recipes data = {data} {...props} />}/> */}
          <Route path='/recipes' exact component={Recipes} />}/>

          <Route patk='/recipes/:id' component= {RecipeItem} />
        </Switch>
      </div>
      <footer className='footer'> &copy; RecipeIdeas 2020</footer>
    </Router>
  );
}

export default App;
