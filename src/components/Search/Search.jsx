import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import SearchItem from "../SearchItem/SearchItem";
import './Search.css'

function Search() {
    // Store to get gifs we searched
    const gifList = useSelector(store => store.gifList);
    // local state to hold input variable
    const [newGif, setNewGif] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(newGif);
        // get request
        dispatch({
            type: 'GIF_SELECT',
            payload: newGif
        });

        setNewGif('');
    }




    const dispatch = useDispatch();


    return (
        <>
            <form onSubmit={handleSubmit}>
                <label className="label" name='gifSearch'>What gif would you like search</label>
                <input value={newGif} name="gifSearch" type="text" onChange={(event) => setNewGif(event.target.value)} />
                {/* <button type="submit">Submit</button> */}
                <button className="button-49" type="submit">Submit</button>
            </form>
            <h2>HERE are your search results:</h2>
            {
                // image is from gifResponse.data.data in the index.js. Already looked through the data.data. 
                // Later looks through assumed(data.data).images.original.url. Path can be seen on browser object.
                gifList.map((image, i) => {
                    return (
                        <SearchItem image={image} key={i} />
                    )
                })
            }

        </>
    )
}

export default Search;