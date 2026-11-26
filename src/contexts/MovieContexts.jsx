import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if (storedFavs) {
            try {
                const parsedFavs = JSON.parse(storedFavs)
                if (Array.isArray(parsedFavs)) setFavorites(parsedFavs)
            } catch {
                localStorage.removeItem("favorites")
            }
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (movie) => {
        setFavorites(prev =>
            prev.some(favorite => favorite.id === movie.id)
                ? prev
                : [...prev, movie]
        )
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}