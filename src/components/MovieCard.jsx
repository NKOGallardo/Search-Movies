import "../css/MoveCard.css";

function MovieCard({movie}) {

    function LikeClick() {
        alert("On")
    }

    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://images.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={LikeClick}>
                        🤍
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>
    )
}

export default MovieCard