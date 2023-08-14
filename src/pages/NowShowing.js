import { useEffect, useState } from "react";
import Cards from "../components/Cards";

const NowShowing = () => {
    const [nowShowings, setNowShowings] = useState([])
    const [loading, setLoading] = useState(true)
    const getNowShowing = () => {
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=2")
            .then(Response => Response.json())
            .then(Response => {
                setNowShowings(Response.results)
                setLoading(false)
                
            })

    }
    useEffect(() => {
        getNowShowing()
    }, [])


    return (
        <>
           
            <section className="container">
                <div className="nowshowing"><h3>NOW SHOWING</h3></div>
                <div className="row">
                    {
                       loading ? <h1 className="loading">Loading...</h1> : nowShowings.map(showing => (
                            <Cards id={showing.id}
                                poster_path={`https://image.tmdb.org/t/p/w440_and_h660_face/` + showing.poster_path}
                                title={showing.title}
                                release_date={showing.release_date} />
                        ))
                    }
                </div>
            </section>
        </>


    )
}
export default NowShowing;