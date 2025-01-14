import { useState } from "react"
import AppHeader from "./components/AppHeader"
import AppMain from "./components/AppMain"
import axios from "axios";
import GlobalContext from "./contexts/GlobalContext";

const apiUrl = "https://api.themoviedb.org/3";
const apiKey = "a0b950e762a12a9239edb2c634f57bd8";

function App() {

  const [searchValue, setSearchValue] = useState(" ");
  const [films, setFilms] = useState([]);
  const [series, setSeries]= useState([]);

   async function getMovies() {
         const resp = await axios.get(`${apiUrl}/search/movie`, {
             params: {
                api_key: apiKey,
                 query: searchValue,
             },
         });
         setFilms(resp.data.results); 
        console.log(resp.data.results);

        const respo = await axios.get(`${apiUrl}/search/tv`, {
           params: {
               api_key: apiKey,
              query: searchValue,
             },
         });
         setSeries(respo.data.results); 
         console.log(respo.data.results);

         setSearchValue("");
    };
    

  
  const globalProviderValue = {
    getMovies,
    searchValue,
    setSearchValue,
    films,
    series
  };

  return (

    <GlobalContext.Provider value={globalProviderValue}>
      <AppHeader />
      <AppMain />
    </GlobalContext.Provider>

  )
}

export default App
