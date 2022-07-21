import { useDispatch } from "react-redux"
import { actionChannel } from "redux-saga/effects"
import '../Search/Search.css'

// TO WORK WITH 1 ITEM IT MUST BE WITHIN ITS OWN COMPONENT

function SearchItem({ image }) {
    const dispatch = useDispatch()

    const addToFavs = () => {
        dispatch({
            type: 'ADD_TO_FAVS',
            payload: image.images.original.url
        })
    }

    return (
        <div className="img-container">
            <img className="images" src={image.images.original.url} />
            <div>
                {/* <button  onClick={addToFavs}>Add to Favorite 👻</button> */}
                <button onClick={addToFavs} class="button-73" role="button">Add to Favorites</button>
            </div>
            <br />
        </div>
    )
}

export default SearchItem