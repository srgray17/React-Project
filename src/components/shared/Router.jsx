import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../Home';
import About from '../About'
import DisplayTvShows from '../DisplayTvShows'

const Router = () => {
  return ( 
    <Switch>
      <Route exact path ="/" component={Home}/>
      <Route exact path ="/about" component={About}/>
      <Route exact path ="/displaytvshows" component={DisplayTvShows}/>
    </Switch>
  );
}
 
export default Router;