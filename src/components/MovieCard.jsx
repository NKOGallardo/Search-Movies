import "../css/MoveCard.css";

function MovieCard({movie}) {

    function LikeClick() {
        alert("On")
    }

    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title}/>
                <div className="move-overlay">
                    <button className="favorite-btn" onClick={LikeClick}>
                 
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
    )
}

export default MovieCard