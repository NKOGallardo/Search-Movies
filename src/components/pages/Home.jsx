import MovieCard from "../MovieCard";
import { useState, useEffect } from "react";
import "../../css/Home.css";
import { searchMovies, getPopularMovies } from "../../services/api";    
import { cache } from "react";

function Home() {
    const [searchQuery, setSearchQuery] = useState(""); 
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [louding, setlouding] = useState(true);

    useEffect(() => {
        const loudPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                console.log(err)
                setError("failed to load movies...")
            }
            finally {
                setlouding(false)
            }
        }

        loudPopularMovies()
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return
        if (louding) return

        setlouding(true)
        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch (err) {
            console.log(err)
            setError("failed to search movies...")
        } finally {
            setlouding(false)
        }

        setSearchQuery("");
    };
    
    return(
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for movies... " 
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            <button type="submit" className="search-button">Search</button>
            </form>

            {error && <div className="error-message">{error}</div>}

        {        louding ? ( 
            <div className="louding">Loading...</div> 
        ) : (
            <div className="movie-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>  
        )}
        </div>
    );
}

export default Home;