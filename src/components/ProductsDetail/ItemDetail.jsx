import React from 'react'
import Card from 'react-bootstrap/Card';

function ItemDetail({ movies }) {
    return (
        <div className='container h-100'>
            <div className='row'>
                <div className='col-md-12'>
                    <h1 id='itemListContainerMainPovTitle' className='pb-0 mb-0'>{movies.name}</h1>
                </div>
            </div>
            <div className='row d-flex justify-content-center ms-5 ps-5'>
                <div className='col-md-4'>
                    <div style={{ height: "100%", width: "100%" }} className="d-flex justify-content-center ms-3">
                        <img className='w-100 h-100 ' src={"/assets/images/movies/inception.png"} alt="" />
                    </div>
                </div>
                <div className='col-md-4'>
                    <div style={{ height: "100%", width: "100%" }} className="d-flex justify-content-center">
                        <iframe className='w-100 h-100' src="https://www.youtube.com/embed/8hP9D6kZseM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='d-flex flex-column'>
                        <div style={{ height: "100%", width: "100%" }} className="">
                            <img className='w-50 h-100 mw-100 mh-100' src="/assets/images/movies/fightClub.png" alt="" />
                        </div>
                        <div style={{ height: "100%", width: "100%" }} className="mt-2">
                            <img className='w-50 h-100 mw-100 mh-100' src="/assets/images/movies/interstellar.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='row d-flex'>
                <div className='col-md-6'>
                    <div>
                        <h5>{movies.year}</h5>
                        <p>{movies.plot}</p>
                        <hr style={{ color: "white" }} />
                        <h5>Director: <p>{movies.director}</p></h5>
                        <hr style={{ color: "white" }} />
                        <h5>Cast: <p>{movies.cast}</p></h5>
                        <hr style={{ color: "white" }} />
                        <h5>Genres: <p>{movies.genres}</p></h5>
                    </div>
                </div>
                <div className='col-md-6'>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}
export default ItemDetail