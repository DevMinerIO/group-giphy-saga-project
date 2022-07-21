import axios from 'axios';
import './FavoritesList.css';

function FavoritesList({ favoritesItem }) {
	const updateCategory = (event) => {
		axios.put(`/api/favorite/${favoritesItem.id}`, {
			category: event.target.value,
		});
	};

	return (
		<>
			<div className='favCard'>
				<img src={favoritesItem.url} />
				<div className='select'>
					<select onChange={updateCategory} key={favoritesItem.id}>
						<option selected disabled>
							choose category
						</option>
						<option value='funny'> funny </option>
						<option value='cohort'> cohort </option>
						<option value='cartoon'> cartoon </option>
						<option value='nsfw'> nsfw </option>
						<option value='meme'> meme </option>
					</select>
				</div>
			</div>
		</>
	);
}

export default FavoritesList;
