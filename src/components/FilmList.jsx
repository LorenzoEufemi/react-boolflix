import { useContext, useEffect } from "react";
import GlobalContext from "../contexts/GlobalContext";
import AppCard from "./AppCard";



function FilmList() {
    const { films, series, getMovies } = useContext(GlobalContext);

    const hasContent = films.length > 0 || series.length > 0;

    const filmHome = [
        {
            adult
                :
                false,
            backdrop_path
                :
                "/8rpDcsfLJypbO6vREc0547VKqEv.jpg",
            genre_ids
                :
                (3)[878, 12, 28],
            id
                :
                76600,
            original_language
                :
                "en",
            original_title
                :
                "Avatar: The Way of Water",
            overview
                :
                "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
            popularity
                :
                149.865,
            poster_path
                :
                "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
            release_date
                :
                "2022-12-14",
            title
                :
                "Avatar: The Way of Water",
            video
                :
                false,
            vote_average
                :
                7.613,
            vote_count
                :
                12126,
        },
        {
            adult
                :
                false,
            backdrop_path
                :
                "/kjxnYiITXakTCeu2Ob8JIidGrAe.jpg",
            genre_ids
                :
                [35],
            id
                :
                37775,
            original_language
                :
                "it",
            original_title
                :
                "Bianco, rosso e Verdone",
            overview
                :
                "Three Italians travel to their hometown to vote for elections: Pasquale is a Southern immigrant living in Munich who's genuinely happy to come back to Italy, even if just for a few days, but the country he dreams of is far from reality; Furio travels to Rome with his family, but his niggling attitude threatens to push his wife Magda over the edge; young Mimmo is also going to Rome, but the trip is repeatedly interrupted by worries about his grandma's health.",
            popularity
                :
                7.784,
            poster_path
                :
                "/tS5ca077KEMbJHBVNLa1nCnycXJ.jpg",
            release_date
                :
                "1981-02-20",
            title
                :
                "Bianco, rosso e Verdone",
            video
                :
                false,
            vote_average
                :
                7.3,
            vote_count
                :
                714

        },
        {
            adult
                :
                false,
            backdrop_path
                :
                "/yY76zq9XSuJ4nWyPDuwkdV7Wt0c.jpg",
            genre_ids
                :
                (3)[28, 53, 878],
            id
                :
                577922,
            original_language
                :
                "en",
            original_title
                :
                "Tenet",
            overview
                :
                "Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
            popularity
                :
                73.527,
            poster_path
                :
                "/aCIFMriQh8rvhxpN1IWGgvH0Tlg.jpg",
            release_date
                :
                "2020-08-22",
            title
                :
                "Tenet",
            video
                :
                false,
            vote_average
                :
                7.185,
            vote_count
                :
                9978

        },
        {
            adult
                :
                false,
            backdrop_path
                :
                "/wt3nLs5Fcn1yFzgjB7bHdcI2h4I.jpg",
            first_air_date
                :
                "2006-09-07",
            genre_ids
                :
                [35],
            id
                :
                41280,
            name
                :
                "I Cesaroni",
            origin_country
                :
                ['IT'],
            original_language
                :
                "it",
            original_name
                :
                "I Cesaroni",
            overview
                :
                "I Cesaroni is an Italian television series produced since 2006 by Publispei and Mediaset RTI. The series is transmitted not only in Italy but also in Portugal, in the Czech Republic, Greece and Turkey. It is inspired by the Spanish series \"Los Serrano\". In Italy, the series is now in its fifth season and has been renewed for a sixth season.",
            popularity
                :
                63.467,
            poster_path
                :
                "/h6EaTBCOZlSaAEOTiaINzsYW9VR.jpg",
            vote_average
                :
                7.05,
            vote_count
                :
                50
        },
        {
            adult
: 
false,
backdrop_path
: 
"/jY3GXVS9Tc81Rvnn8kBzfrQHqo6.jpg",
genre_ids
: 
[35],
id
: 
372822,
original_language
: 
"it",
original_title
: 
"Vacanze ai Caraibi - Il film di Natale",
overview
: 
"While on holiday in the Caribbean, a bankrupt family pins their hopes on a rich man, two strangers fall in lust, and a technophile gets shipwrecked.",
popularity
: 
5.59,
poster_path
: 
"/7JgB4F9eyGT98DpRH4eoUXr64H8.jpg",
release_date
: 
"2015-12-16",
title
: 
"Vacanze ai Caraibi - Il film di Natale",
video
: 
false,
vote_average
: 
4.604,
vote_count
: 
297
        },
        {
            adult
: 
false,
backdrop_path
: 
"/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
genre_ids
: 
(2) [18, 80],
id
: 
238,
original_language
: 
"en",
original_title
: 
"The Godfather",
overview
: 
"Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
popularity
: 
212.554,
poster_path
: 
"/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
release_date
: 
"1972-03-14",
title
: 
"The Godfather",
video
: 
false,
vote_average
: 
8.689,
vote_count
: 
20866

        }
    ]




    return (
        <section className="film-list">
            {hasContent ? (
                <>
                    {films.map((film) => (
                        <AppCard
                            key={film.id}
                            title={film.title}
                            original_title={film.original_title}
                            poster={film.poster_path}
                            language={film.original_language}
                            vote={film.vote_average}
                            overview={film.overview}
                        />
                    ))}

                    {series.map((serie) => (
                        <AppCard
                            key={serie.id}
                            title={serie.name}
                            original_title={serie.original_name}
                            poster={serie.poster_path}
                            language={serie.original_language}
                            vote={serie.vote_average}
                            overview={serie.overview}
                        />
                    ))}
                </>
            ) : (
                <>
                <p className="white">GUARDA QUELLO CHE VUOI OVUNQUE. DISDICI QUANDO VUOI.</p>
                <section className="film-list"> 
                {filmHome.map((serie) => (
                        <AppCard
                            key={serie.id}
                            title={serie.name}
                            original_title={serie.original_name}
                            poster={serie.poster_path}
                            language={serie.original_language}
                            vote={serie.vote_average}
                            overview={serie.overview}
                        />
                    ))}
                </section>
                </>

            )}



        </section>
    )

}
export default FilmList;