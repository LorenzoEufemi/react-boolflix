import { useContext, useEffect } from "react";
import GlobalContext from "../contexts/GlobalContext";
import AppCard from "./AppCard";



function FilmList() {
    const { films, series } = useContext(GlobalContext);
   



    return (
        <section>
            {films.length === 0  ? (
                <p>Nessun film trovato</p>
            ) : (
                films.map((film) => (
                    <AppCard key={film.id}
                    title={film.title}
                     original_title={film.original_title}
                      poster={film.poster_path} 
                      language={film.original_language}
                      vote={film.vote_average} />
                    
            )))}
             {series.length === 0 ? (
                <p>Nessuna serie trovata</p>
            ) : (
                series.map((serie) => (
                    <AppCard key={serie.id}
                    title={serie.name}
                    original_title={serie.original_name}
                     poster={serie.poster_path} 
                     language={serie.original_language}
                     vote={serie.vote_average} />
                   
                ))
            )}
        </section>
    )

}
export default FilmList;