import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import Cards from "../components/Cards";

const Search = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const title = searchParams.get('title');
    const [searchResults, setSearchResults] = useState([]);
    const getSearch = (title) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=4113f3ad734e747a5b463cde8c55de42&language=en- US&query=${title}`)
            .then(Response => Response.json())
            .then(Response => {
                setSearchResults(Response.results)
            })
    }
    useEffect(() => {
        getSearch(title);
    })

    return (
        <>
            <section className="container mt-5">
                <div className="row">
                    {
                        searchResults.map(movie => (
                            <Cards id={movie.id}
                                poster_path={`https://image.tmdb.org/t/p/w440_and_h660_face/` + movie.poster_path}
                                title={movie.title}
                                release_date={movie.release_date} />
                        ))
                    }
                </div>
            </section>
        </>

    )
}
export default Search;