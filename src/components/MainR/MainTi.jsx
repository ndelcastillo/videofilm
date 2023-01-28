import React from 'react'
import './mainTi.css'
import Card from 'react-bootstrap/Card';

function MainTi() {
    return (
        <div className='justify-content-center align-items-center h-100 mt-4 pt-4'>
            <div className='row'>
                <div className='col-md-12'>
                    <h1 style={{fontSize:"medium", color:"white"}}className='pb-0 mb-0'>TOP INTERVIEWS</h1>
                </div>
            </div>
            <hr style={{ color: "white" }} />
            <div className='row d-flex justify-content-between'>
                <div className='col-md-4 mt-1'>
                    <div className='w-100'>
                        <Card className="bg-dark text-secondary">
                            <div style={{ height: "100%" }}>
                                <iframe variant="top" className='w-100 h-100 mw-100 mh-100' src="https://www.youtube.com/embed/mWSVB7FMmoE?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </div>
                            <Card.Body>
                                <Card.Text style={{ fontSize: "small" }}>
                                    New Interview of <em><strong>Emma Watson</strong> </em> with People/EW Network!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-md-4 mt-1'>
                    <div className='w-100' id='mainLnBox2'>
                        <Card className="bg-dark text-secondary">
                            <div style={{ height: "100%" }}>
                                <iframe variant="top" className='w-100 h-100 mw-100 mh-100' src="https://www.youtube.com/embed/TO6a_5e5M3U?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </div>
                            <Card.Body>
                                <Card.Text style={{ fontSize: "small" }}>
                                    <em><strong>Robert Pattinson</strong></em> on Playing Batman, Tom Holland Manifesting Spider-Man & Advice From Christian Bale
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-md-4 mt-1'>
                    <div className='w-100' id='mainLnBox2'>
                        <Card className="bg-dark text-secondary">
                            <div style={{ height: "100%" }}>
                                <iframe variant="top" className='w-100 h-100 mw-100 mh-100' src="https://www.youtube.com/embed/8waAh4v01QQ?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </div>
                            <Card.Body>
                                <Card.Text style={{ fontSize: "small" }}>
                                    <em><strong>Liam Neeson</strong></em>On Being Unlikely Action Star At 70, Landing Role In 'Schindler’s List’
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainTi