import { useDispatch } from "react-redux"

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
        <div>
            <img src={image.images.original.url} />
            <div>
                <button onClick={addToFavs}>Add to Favorite 👻</button>
            </div>
            <br />
        </div>
    )
}

export default SearchItem