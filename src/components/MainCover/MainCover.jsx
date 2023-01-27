import React from 'react'
import './mainCover.css'
import Carousel from 'react-bootstrap/Carousel';

function MainCover() {

    return (
        <div className='mt-5 pt-4 rounded justify-content-center align-items-center h-100'>
            <div className='row  d-flex justify-content-center'>
                <div className=' col-md-12'>
                    <div className='w-100 ' id=''>
                        <img className='w-100' style={{height:"100px"}} src="/assets/images/main/mainCover7.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='row d-flex justify-content-start'>
                <div className=' col-md-6 '>
                    <div className='w-100' id=''>
                        <div style={{ height: "100%" }}>
                            <div className='w-100 h-100 mw-100 mh-100'>
                                <Carousel className='justify-content-center mt-4' variant="light">
                                    {/*}
                                    <Carousel.Item className=''>
                                        <img
                                            className="d-block w-100 rounded"
                                            src="/assets/images/main/mainCover1.png"
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    */}
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100 rounded"
                                            src="/assets/images/movies/aftersun.png"
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="/assets/images/movies/theMenu.png"
                                            alt="Second slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="/assets/images/movies/theLastOfUs.png"
                                            alt="Third slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="/assets/images/movies/theWhale.png"
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="/assets/images/movies/beauIsAfraid.png"
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' col-md-6 '>
                    <div className='w-100' id=''>
                        <div style={{ height: "100%" }}>
                            <div className='w-100 h-100 mw-100 mh-100'>
                                <Carousel className='justify-content-center mt-4' variant="light">
                                    {/*}
                                    <Carousel.Item className=''>
                                        <img
                                            className="d-block w-100 rounded"
                                            src="/assets/images/main/mainCover1.png"
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    */}
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="/assets/images/movies/topGun.png"
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="/assets/images/movies/glassOnion.png"
                                            alt="Second slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="/assets/images/movies/everythingEverywhereAllAtOnce.png"
                                            alt="Third slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="/assets/images/movies/dontWorryDarling.png"
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="/assets/images/movies/beauIsAfraid.png"
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCover
