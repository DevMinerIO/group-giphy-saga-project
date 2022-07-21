import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import FavoritesList from '../FavoritesList/FavoritesList';
import './Favorites.css';

function Favorites() {
	const dispatch = useDispatch();
	const favorites = useSelector((store) => store.favoritesReducer);
	console.log('favorites here', favorites);
	useEffect(() => {
		// getFruit();
		dispatch({ type: 'FETCH_FAVORITE' });
	}, []);

	return (
		<div>
			<h2 className='headerFav'>FAVORITES</h2>
			{favorites.map((favoritesItem) => {
				return <FavoritesList key={favoritesItem.id} favoritesItem={favoritesItem} />;
			})}
		</div>
	);
}

export default Favorites;
