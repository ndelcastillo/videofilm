import React from 'react'
import './mainLn.css'
import Card from 'react-bootstrap/Card';

function MainLn() {
    return (
        <div className='justify-content-center align-items-center h-100 mt-4 pt-4'>
            <div className='row'>
                <div className='col-md-12'>
                    <h1 id='itemListContainerMainPovTitle' className='pb-0 mb-0'>LATEST NEWS</h1>
                </div>
            </div>
            <hr style={{ color: "white" }} />
            <div className='row d-flex justify-content-between'>
                <div className='col-md-6 mt-1'>
                    <Card className="bg-dark text-secondary">
                        <div>
                            <div style={{ height: "100%" }}>
                                <Card.Img className='w-100 h-100 mw-100 mh-100' src="/assets/images/movies/arg1985.png" alt="Card image" />
                            </div>
                            <Card.ImgOverlay style={{ backgroundColor: "rgb(0,0,0,0.6)" }}>
                                <Card.Title className=' position-absolute bottom-0 w-100 text-light mb-4' >1985</Card.Title>
                                <Card.Text className='position-absolute bottom-0 w-100 text-light mb-2 ms-1' style={{ fontSize: "8px" }}>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                        </div>
                    </Card>
                </div>
                <div className='col-md-6 mt-1'>
                    <Card className="bg-dark text-secondary">
                        <div>
                            <div style={{ height: "100%" }}>
                                <Card.Img className='w-100 h-100 mw-100 mh-100' src="/assets/images/movies/theOffice.png" alt="Card image" />
                            </div>
                            <Card.ImgOverlay style={{ backgroundColor: "rgb(0,0,0,0.6)" }}>
                                <Card.Title className=' position-absolute bottom-0 w-100 text-light mb-4' >The Office</Card.Title>
                                <Card.Text className='position-absolute bottom-0 w-100 text-light mb-2 ms-1' style={{ fontSize: "8px" }}>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default MainLn