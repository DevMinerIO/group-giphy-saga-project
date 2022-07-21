import React from 'react';
import Favorites from '../Favorites/Favorites';
import Search from '../Search/Search';
import FavoritesList from '../FavoritesList/FavoritesList';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import '../Search/Search.css';


function App(props) {


  return (
    <>
      <Router>
        <header>
          <h1 className='title'>Giphy Search!</h1>
          <ul>
            <Link to="/"><li>Search</li></Link>
            <Link to="/favorites"><li>Favorites</li></Link>
          </ul>
          <Route path="/"><Search /></Route>
          <Route path="/favorites" exact>
            <Favorites />
          </Route>
        </header>
      </Router>

    </>

  );
}

export default App;
