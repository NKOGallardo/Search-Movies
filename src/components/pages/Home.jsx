import MovieCard from "../MovieCard";
import { useState } from "react";
import "../../css/Home.css";

function Home() {
    const [searchQuery, setSearchQuery] = useState(""); 

    const movies = [
        { id:1, title:"Sad-NKO", release_date:"2022" },
        { id:2, title:"bad-NKO", release_date:"2025" },
        { id:3, title:"cook-NKO", release_date:"2002" },
        { id:4, title:"me-NKO", release_date:"2009" }
    ];

    const handleSearch = () => {
        e.preventDafault();
        alert(searchQuery);
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
            </form>
            <button type="submit" className="search-button">Search</button>

            <div className="movie-grid">
                {movies.map((movie) => (
                        <MovieCard movie={movie} key={movies.id} />
                    )
                )}
            </div>
        </div>
    );
}

export default Home;