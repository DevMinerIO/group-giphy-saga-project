import axios from "axios";





function FavoritesList({favoritesItem}) {

const updateCategory = (event)=> {
axios.put(`/api/favorite/${favoritesItem.id}`, {
    category: event.target.value,
})


}



    return (
        <>
<select onChange={updateCategory} key={favoritesItem.id} >
            <option placeholder = "choose-category"> choose category </option> 
            <option value = "funny"> funny </option>
            <option value = "cohort"> cohort </option>
            <option value = "cartoon"> cartoon </option>
            <option value = "nsfw"> nsfw </option>
            <option value = "meme"> meme </option>
            </select>
                    <img src= {favoritesItem.url}  />
                    </>
    )
}

export default FavoritesList;