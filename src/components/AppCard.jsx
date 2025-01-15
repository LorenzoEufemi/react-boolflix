import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function AppCard({ title, original_title, poster, language, vote, overview }) {

    const urlImg = "https://image.tmdb.org/t/p/w342";

    const flatLanguage = (language) => {
        let flat = ""
        if (language === "en") {
            flat = "/images/en.png"
        } else if (language === "it") {
            flat = "/images/it.png"
        } else {
            flat = "/images/placeholder.png"
        }
        return flat
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
                <img className='flat' src={flatLanguage(language)} alt="bandiera" />
                <p className='minu '><span className='gras'>Overview:</span> {overview}</p>
            </div>
            <div className='img'>
                <img src={`${urlImg}${poster}`} alt="poster del film" />
            </div>

        </div>

    )
}
export default AppCard;