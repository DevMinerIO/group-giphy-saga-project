import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import React, {useEffect} from 'react';
import FavoritesList from '../FavoritesList/FavoritesList';


function Favorites() {
const dispatch = useDispatch();
const favorites = useSelector(store => store.favoritesReducer);
console.log('favorites here', favorites);
useEffect(() => {
    // getFruit();
    dispatch ({type:'FETCH_FAVORITE'});
}, []);




    return (
        <div>
            <header>Favorites page!!</header>
            
            

    {favorites.map((favoritesItem) => {
                return (
                    
                    <FavoritesList key = {favoritesItem.id} favoritesItem= {favoritesItem}/>
                );
            })}




        </div>
    )
}

export default Favorites;