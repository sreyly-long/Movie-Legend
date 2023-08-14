import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardCredite from './CardCredite';
import Video from './Video';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({})
  const [trailer, setTrailer] = useState([{}])
  const [credits, setCredits] = useState([{}])
  const fetchMovies = async (id) => {
    const Response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US`)
    return Response.json()

  }
  const getTrailer = (id) => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US`)
      .then(Response => Response.json())
      .then(Response => {
        setTrailer(Response.results)

      })

  }
  const getCredits = (id) => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US`)
      .then(Response => Response.json())
      .then(Response => {
        setCredits(Response.cast.slice(0, 6))

      })
  }
  useEffect(() => {
    fetchMovies(id)
      .then(Response => setMovie(Response))

    getTrailer(id);
    getCredits(id);


  }, [])

  return (
    <>
      <section className='movie-detail'>
        <div className='text-white mt-3 container-fluit '>
          <h2 className='m-3'>Movies Details</h2>
          <hr style={{ color: "red" }} />

        </div>
        <div className="container mt-5 ">
          <div className='row'>
            <div className="col s4 mt03 mb03 d-flex">
              <img src={`https://image.tmdb.org/t/p/w440_and_h660_face/` + movie.poster_path} style={{ width: 300 }} />
            </div>

            <div className="col s8 ">
              <div className="ml2 mr2">
                <table className=" mt-5">
                  <tbody className="justify ">
                    <tr>
                      <td>
                        <span className="text-white">Title:</span>
                      </td>
                      <td className='text-white'>&nbsp;:&nbsp;</td>
                      <td><span className="text-white">{movie.original_title}</span></td>
                    </tr>


                    <tr>
                      <td><span className="text-white">Running Time</span></td>
                      <td className='text-white'>&nbsp;:&nbsp;</td>
                      <td><span className="text-white">{movie.runtime}</span><span className="text-white">Minutes</span></td>
                    </tr>

                    <tr>
                      <td><span className="text-white">Release Date</span></td>
                      <td className='text-white'>&nbsp;:&nbsp;</td>
                      <td><span className="text-white">
                        <span className="text-white">{movie.release_date}</span>
                      </span>
                      </td>
                    </tr>

                    <tr>
                      <td><span className="text-white">Vote Average</span></td>
                      <td className='text-white'>&nbsp;:&nbsp;</td>
                      <td><span className="text-white">{movie.vote_average}</span></td>
                    </tr>

                    <tr>
                      <td colspan="3">
                        <span className="text-white ">
                          {movie.overview}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='trailer' >
        <h2 className='text-white m-3'>Trailer</h2>
        <hr style={{ color: "red" }} />
        <div className='container-fluit'>
          <div className='row'>
            {

                <Video
                video_key={trailer[0].key}
                name={trailer[0].name}
                />

            }

          </div>
        </div>
      </section>

      <section className='top billed case'>
        <h2 className='text-white m-3'>Top Billed Case</h2>
        <hr style={{ color: "red" }} />
        <div className='container'>
          <div className='row'>
            {
              credits.map(credit => (
                <CardCredite
                  profile_path={`https://image.tmdb.org/t/p/w440_and_h660_face/${credit.profile_path}`}
                  name={credit.name}

                />

              ))

            }

          </div>
        </div>
      </section>
    </>

  );
};

export default MovieDetails;