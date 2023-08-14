import { useEffect, useState } from "react";
import Cards from "../components/Cards";

const ComingSoon = () => {
    const [loading, setLoading] = useState(true)
    const [upComing, setUpComing] = useState([])
    const getComingSoon = () => {
        fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1")
            .then(Response => Response.json())
            .then(Response => {
                setUpComing(Response.results)
                setLoading(false)
            })

    }
    useEffect(() => {
        getComingSoon()
    }, [])
    return (
        <>
            
            <section className="container">
                <div className="nowshowing"><h3>COMING SOON</h3></div>
                <div className="row">
                    {
                        loading ? <h1 className="loading">Loading...</h1> : upComing.map(coming => (
                            <Cards id={coming.id}
                                poster_path={`https://image.tmdb.org/t/p/w440_and_h660_face/` + coming.poster_path}
                                title={coming.title}
                                release_date={coming.release_date}
                            />
                        ))
                    }

                </div>
            </section>
        </>


    )
}
export default ComingSoon;