import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

function SearchBar() {
    const { getMovies, searchValue, setSearchValue } = useContext(GlobalContext);

    function handleEnterKey(event) {
        if (event.key === "Enter") {
            getMovies()
        }
    };

    return (
        <>
            <div className="search">
                <label htmlFor="search"></label>
                <input type="search" id="search" value={searchValue} onChange={(event) => setSearchValue(event.target.value)} onKeyUp={handleEnterKey} />
                <button onClick={getMovies}>Cerca</button>
            </div>
        </>

    )
}

export default SearchBar;