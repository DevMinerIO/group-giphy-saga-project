import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import React, {useEffect} from 'react';



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
                    <>
                    <select>
            <option placeholder = "choose-category"> choose category </option> 
            <option value = "comedy"> comedy </option>
            <option value = "drama"> drama </option>
            <option value = "romance"> romance </option>
            </select>
           
                    <img src= {favoritesItem.url} key={favoritesItem.id} />
                    </>
                );
            })}




        </div>
    )
}

export default Favorites;