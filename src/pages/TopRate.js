import { useEffect, useState } from "react";
import Cards from "../components/Cards";


const TopRate = () => {
    const [loading, setLoading] = useState(true)
    const [toprate, setTopRate] = useState([])
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1")
            .then(Response => Response.json())
            .then(dates => setTopRate(dates.results))
        setLoading(false)
    }, [])

    return (
        <section className="container">
            <div className="nowshowing"><h3>TOP RATE</h3></div>
            <div className="row">
                {
                    loading ? <h1 className="loading">Loading...</h1> : toprate.map(toprates => (
                        <Cards id={toprates.id}
                            poster_path={`https://image.tmdb.org/t/p/w440_and_h660_face/` + toprates.poster_path}
                            title={toprates.title}
                            release_date={toprates.release_date} />
                    ))
                }
            </div>
        </section>
    )
}
export default TopRate;