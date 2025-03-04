import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function AppCard({ title, original_title, poster, language, vote, overview }) {

    const urlImg = "https://image.tmdb.org/t/p/w342";

    const flagLanguage = (language) => {
        let flag = ""
        if (language === "en") {
            flag = "/images/en.png"
        } else if (language === "it") {
            flag = "/images/it.png"
        } else {
            flag = "/images/placeholder.png"
        }
        return flag
    };

    const starsFilm = (vote) => {
        let stars = [];
        for (let i = 0; i < Math.ceil(vote / 2); i++) {
            stars.push(<FontAwesomeIcon key={i} icon={faStar} />)
        }
        return stars
    };


    return (
        <div className='card'>
            <div className="card-details">
                <p className='minu'><span className='gras'>Titolo:</span> {title}</p>
                <p className='minu'><span className='gras'>Titolo originale:</span> {original_title}</p>
                <p className='yellow minu'><span className='white gras'>Voto:</span> {starsFilm(vote)}</p>
                <img className='flat' src={flagLanguage(language)} alt="bandiera" />
                <p className='minu '><span className='gras'>Overview:</span> {overview}</p>
            </div>
            <div className='img'>
                <img src={`${urlImg}${poster}`} alt="poster del film" />
            </div>

        </div>

    )
}
export default AppCard;