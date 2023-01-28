import React from 'react'
import Card from 'react-bootstrap/Card';
import './itemDetail.css'

function ItemDetail({ movies }) {
    return (
        <div className=''>
            <div className='row'>
                <div className='col-md-12'>
                    <div className=''>
                        <Card className="bg-dark text-light">
                            <Card.Img src={movies.portada} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Img src={movies.img} id='itemDetailPortadaImg' className='position-absolute bottom-0 mb-3' />
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                </div>
            </div>
            <br />
            <div className='row'>
                <div className='col-md-12'>
                    <div className='d-flex flex-row justify-content-between'>
                        <h1 style={{ fontSize: "40px", color: "white" }} className=''>{movies.name}</h1>
                        <div className='d-flex justify-content-right'>
                            <h1 style={{ fontSize: "40px", color: "white" }} className=''>{movies.year}.</h1>
                        </div>
                    </div>
                </div>
                <hr style={{ color: "white" }} />
                <div className='col-md-12'>
                    <div className='d-flex flex-row justify-content-between'>
                        <h1 style={{ fontSize: "20px", color: "white" }} className=''>PLOT</h1>
                        <div className='d-flex justify-content-right'>
                            <h1 style={{ fontSize: "15px", color: "white" }} className='text-right'><i>{movies.plot}</i></h1>
                        </div>
                    </div>
                </div>
                <div className='col-md-12'>
                    <div className='d-flex flex-row justify-content-between'>
                        <h1 style={{ fontSize: "20px", color: "white" }} className=''>DIRECTOR</h1>
                        <div className='d-flex justify-content-right'>
                            <h1 style={{ fontSize: "15px", color: "white" }} className='text-right'><i>{movies.director}</i></h1>
                        </div>
                    </div>
                </div>
                <div className='col-md-12'>
                    <div className='d-flex flex-row justify-content-between'>
                        <h1 style={{ fontSize: "20px", color: "white" }} className=''>CAST</h1>
                        <div className='d-flex justify-content-right'>
                            <h1 style={{ fontSize: "15px", color: "white" }} className='text-right'><i>{movies.cast}</i></h1>
                        </div>
                    </div>
                </div>
                <div className='col-md-12'>
                    <div className='d-flex flex-row justify-content-between'>
                        <h1 style={{ fontSize: "20px", color: "white" }} className=''>GENRES</h1>
                        <div className='d-flex justify-content-right'>
                            <h1 style={{ fontSize: "15px", color: "white" }} className='text-right'><i>{movies.genres}</i></h1>
                        </div>
                    </div>
                </div>
            </div>
            {/*}
            <div className=''>
                <div className='row'>
                    <div className='d-flex'>
                        <div className='col-md-4'>
                            <div className="d-flex justify-content-start">
                                <img className='w-50 h-50 ' src={movies.img} alt="" />
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='d-flex flex-column justify-content-between'>
                                <hr style={{ color: "white" }} />
                                <h5>Plot:<p>{movies.plot}</p></h5>
                                <hr style={{ color: "white" }} />
                                <h5>Director: <p>{movies.director}</p></h5>
                                <hr style={{ color: "white" }} />
                                <h5>Cast: <p>{movies.cast}</p></h5>
                                <hr style={{ color: "white" }} />
                                <h5>Genres: <p>{movies.genres}</p></h5>
                            </div>
                        </div>
                        {/*}
                        <div className='col-md-4'>
                            <div className="d-flex justify-content-end">
                                <img className='w-50 h-50 ' src={movies.img} alt="" />
                            </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        */}
        </div>
    )
}
export default ItemDetail