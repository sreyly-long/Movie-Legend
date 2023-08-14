import { useEffect, useState } from "react";
import Cards from "../components/Cards";
const Popular = () => {
    const [popular, setPopular] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en- US&page=1')
            .then(Response => Response.json())
            .then(dates => setPopular(dates.results))
        setLoading(false)
    }, [])
    return (
        <>

            <section className="container">
                <div className="nowshowing"><h3>POPULAR</h3></div>
                <div className="row">
                    {
                        loading ? <h1 className="loading">Loading...</h1> : popular && popular.map(populars => (
                            <Cards id={populars.id}
                                poster_path={`https://image.tmdb.org/t/p/w440_and_h660_face/` + populars.poster_path}
                                title={populars.title}
                                release_date={populars.release_date} />
                        ))
                    }
                </div>
            </section>
        </>
    )
}
export default Popular;