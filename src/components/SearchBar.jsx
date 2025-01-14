import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

function SearchBar() {
    const { getMovies, searchValue, setSearchValue } = useContext(GlobalContext);
    return (
        <>
            <label htmlFor="search"></label>
            <input type="search" id="search" value={searchValue} onChange={(event) =>
                setSearchValue(event.target.value)} />
            <button onClick={getMovies}>Cerca</button>
        </>

    )
}

export default SearchBar;