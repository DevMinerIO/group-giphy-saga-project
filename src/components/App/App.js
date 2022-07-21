import React from 'react';
import Favorites from '../Favorites/Favorites';
import Search from '../Search/Search';
import FavoritesList from '../FavoritesList/FavoritesList';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function App(props) {
	return (
		<Router>
			<div>
				<h1>Giphy Search!</h1>
				<Route path='/' exact>
					<Search />
				</Route>
				<Route path='/favorite' exact>
					<Favorites />
				</Route>
			</div>
		</Router>
	);
}

export default App;
