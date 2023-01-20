import React from 'react'
import './mainCover.css'
import Carousel from 'react-bootstrap/Carousel';

function MainCover() {
    return (
        <div className='mt-5 pt-4 rounded justify-content-center align-items-center h-100'>
            <div className='row  d-flex justify-content-center'>
                <div className=' col-md-12'>
                    <div className='w-100 ' id=''>
                        <img className='w-100 ' src="/assets/images/main/mainCover8.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='row d-flex justify-content-start'>
                <div className=' col-md-6 '>
                    <div className='w-100' id=''>
                        <div style={{ height: "100%" }}>
                            <div className='w-100 h-100 mw-100 mh-100'>
                                <Carousel className='justify-content-center p-3' variant="light">
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
                                <Carousel className='justify-content-center p-3' variant="light">
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
                                            className="d-block w-100 "
                                            src="/assets/images/movies/topGun.png"
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100 "
                                            src="/assets/images/movies/glassOnion.png"
                                            alt="Second slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100 "
                                            src="/assets/images/movies/everythingEverywhereAllAtOnce.png"
                                            alt="Third slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100 "
                                            src="/assets/images/movies/dontWorryDarling.png"
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100 "
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

/*
<div className='mt-5 pt-5'>
<div className='row d-flex justify-content-between'>
    <div className=' col-md-6 '>
        <div className='w-100' id='box1'>
            <div style={{ height: "100%" }}>
                <iframe className='w-100 h-100 mw-100 mh-100' src="https://www.youtube.com/embed/ZdajBh9vAk8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    </div>
    <div className='col-md-6 d-flex flex-column justify-content-between '>
        <div className='w-100' id='box2'>
            <div style={{ height: "100%" }}>
                <iframe className='w-100 h-100 mw-100 mh-100' src="https://www.youtube.com/embed/jYRtFFa4hT8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
        <div className='w-100' id='box3'>
            <div style={{ height: "100%" }}>
                <iframe   src="https://www.youtube.com/embed/1Vnghdsjmd0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</div>
</div>
*/