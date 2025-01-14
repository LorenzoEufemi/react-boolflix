import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function AppCard({title, original_title, poster, language, vote}) {

    const urlImg = "https://image.tmdb.org/t/p/w92";

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
        for (let i = 0; i < Math.ceil(vote / 2);i++){
            stars.push(<FontAwesomeIcon key={i} icon={faStar} />)
        }
        return stars
    };


    return (
        <div>
            <p>Titolo: {title}</p>
            <p>Titolo originale: {original_title}</p>
            <img src={`${urlImg}${poster}`} alt="poster del film" />
            <img src={flatLanguage(language)} alt="bandiera" />
            <p>{starsFilm(vote)}</p>


        </div>

    )
}
export default AppCard;