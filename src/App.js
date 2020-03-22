import React from 'react';
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import RecipeDetail from "./RecipeDetail";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    return(
      <div className="App">
          <Router>
              <Nav />
              <Switch>
                  <Route path="/" exact component={Home}/>
                  <Route path="/about" component={About}/>
                  <Route path="/shop" exact component={Shop}/>
                  <Route path="/shop/:id" component={RecipeDetail}/>
              </Switch>
          </Router>
      </div>
    );
};

const Home = () => (
    <div>
        <h1>Home Page</h1>
    </div>
);

export default App;
