import { useContext, useEffect } from "react";
import GlobalContext from "../contexts/GlobalContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function FilmList() {
    const { films, series } = useContext(GlobalContext);
   const urlImg = "https://image.tmdb.org/t/p/w92";


    useEffect(() => {
        console.log(films);
    }, []);

    const flatLanguage = (language) => {
        let flat = ""
        if (language === "en") {
            flat = "public/images/en.png"
        } else if (language === "it") {
            flat = "public/images/it.png"
        } else {
            flat = "public/images/placeholder.png"
        }
        return flat
    };
    const starsFilm = (vote) => {
        let stars = [];
        for (let i = 0; i < Math.ceil(vote);i++){
            stars.push(<FontAwesomeIcon key={i} icon={faStar} />)
        }
        return stars
    }



    return (
        <ul>
            {films.length === 0  ? (
                <p>Nessun film trovato</p>
            ) : (
                films.map((film) => (
                    <li key={film.id}>
                        <h2>{film.title}</h2>
                        <h4>{film.original_title}</h4>
                        <img src={`${urlImg}${film.poster_path}`} alt="poster del film" />
                        <img src={flatLanguage(film.original_language)} alt="bandiera" />
                        <p>{starsFilm(film.vote_average)}</p>
                    </li>
                ))
            )}
             {series.length === 0 ? (
                <p>Nessuna serie trovata</p>
            ) : (
                series.map((serie) => (
                    <li key={serie.id}>
                        <h2>{serie.name}</h2>
                        <h4>{serie.original_name}</h4>
                        <img src={`${urlImg}${serie.poster_path}`} alt="poster del film" />
                        <img src={flatLanguage(serie.original_language)} alt="" />
                        <p>{serie.vote_average}</p>
                    </li>
                ))
            )}
        </ul>
    )

}
export default FilmList;