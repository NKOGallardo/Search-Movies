import "../../css/Favorites.css";

function Favorites() {
    return (
        <div className="favorites">
            <div className="favorites-empty">
                <span className="favorites-empty-icon" aria-hidden="true">♥</span>
                <h2>No Favorite Movies Yet</h2>
                <p>Start adding movies to your favorites and they will appear here.</p>
            </div>
        </div>
    )
}

export default Favorites;