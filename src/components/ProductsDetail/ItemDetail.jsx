import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './itemDetail.css'
import { useState, useEffect } from 'react'
import { Card, Button, Stack } from 'react-bootstrap'
import ItemAction from '../ItemAction/ItemAction';

function ItemDetail({ movies }) {
    const [colorToggle1, setColorToggle1] = useState(true)
    const [colorToggle2, setColorToggle2] = useState(true)
    const [colorToggle3, setColorToggle3] = useState(true)
    const [colorToggle4, setColorToggle4] = useState(true)
    const [colorToggle5, setColorToggle5] = useState(true)
    const [imageOpacity, setImageOpacity] = useState(true)

    function handleClickColor1() {
        setColorToggle1(!colorToggle1)
        setImageOpacity(!imageOpacity)
    }
    function handleClickColor2() {
        setColorToggle2(!colorToggle2)
        setImageOpacity(!imageOpacity)
    }
    function handleClickColor3() {
        setColorToggle3(!colorToggle3)
        setImageOpacity(!imageOpacity)
    }
    function handleClickColor4() {
        setColorToggle4(!colorToggle4)
        setImageOpacity(!imageOpacity)
    }
    function handleClickColor5() {
        setColorToggle5(!colorToggle5)
        setImageOpacity(!imageOpacity)
    }
    function handleClickImgOpacity() {
        setImageOpacity(!imageOpacity)
    }


    return (
        <div className=''>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='d-flex flex-row justify-content-between mt-2 mb-3'>
                        <h1 style={{ fontSize: "40px", color: "white" }} className=''>{movies.name}</h1>
                        <div className='d-flex justify-content-right'>
                            <h1 style={{ fontSize: "40px", color: "white" }} className=''>{movies.year}.</h1>
                        </div>
                    </div>
                </div>
                <div className='col-md-12'>
                    <div className=''>
                        <Card className="bg-dark text-light">
                            <Card.Img src={movies.portada} alt="Card image" />
                            {/*}
                            <Card.ImgOverlay>
                                <Card.Img src={movies.img} id='itemDetailPortadaImg' className='position-absolute bottom-0 mb-3' />
                            </Card.ImgOverlay>
                            */}
                        </Card>
                    </div>
                </div>
            </div>
            <br />
            <div className='row'>
                <div className='d-flex justify-content-center'>
                    <div className='col-md-6'>
                        <div className='d-flex flex-column justify-content-center'>
                            <div className='col-md-12'>
                                <div className='d-flex flex-column justify-content-start'>
                                    <h1 style={{ fontSize: "15px", color: "white" }} className=''>{movies.plot}</h1>
                                    <hr style={{ color: "white" }} />
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className='d-flex flex-row justify-content-start'>
                                    <h1 style={{ fontSize: "15px", color: "white" }} className=''>Director:</h1>
                                    <h1 style={{ fontSize: "15px", color: "white" }} className='ms-1'>{movies.director}</h1>
                                </div>
                                <hr style={{ color: "white" }} />
                            </div>
                            <div className='col-md-12'>
                                <div className='d-flex flex-row justify-content-start'>
                                    <h1 style={{ fontSize: "15px", color: "white" }} className=''>Cast:</h1>
                                    <h1 style={{ fontSize: "15px", color: "white" }} className='ms-1'>{movies.cast}</h1>
                                </div>
                                <hr style={{ color: "white" }} />
                            </div>
                            <div className='col-md-12'>
                                <div className='d-flex flex-row justify-content-start'>
                                    <h1 style={{ fontSize: "15px", color: "white" }} className=''>Genres:</h1>
                                    <h1 style={{ fontSize: "15px", color: "white" }} className='ms-1'>{movies.genres}</h1>
                                </div>
                                <hr style={{ color: "white" }} />
                            </div>
                            <div className='col-md-12'>
                                <div className='d-flex flex-row justify-content-start'>
                                    <h1 style={{ fontSize: "15px", color: "white" }} className=''>Category:</h1>
                                    <h1 style={{ fontSize: "15px", color: "white" }} className='ms-1'>{movies.category}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 ps-3'>
                        <div className='d-flex flex-row justify-content-center'>
                            <div className='col-md-6'>
                                <div className='mx-auto w-75'>
                                    <Card.Img variant="top" src={movies.img} style={{ filter: imageOpacity ? "opacity(0.2)" : "opacity(1)" }} onClick={handleClickImgOpacity} className='mx-auto w-100' id='cardItemImg' alt='cardImg' />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <Card className='bg-dark tex-light'>
                                    <Card.Body className=''>
                                        <ItemAction />
                                        <div className='d-flex justify-content-center'>
                                            <hr style={{ color: "white", width: "400px" }} />
                                        </div>
                                        {/*<ItemCount />*/}
                                        <Stack className='justify-content-center ' direction='horizontal' gap={2}>
                                            <Button onClick={handleClickColor1} style={{ backgroundColor: colorToggle1 ? "" : "grey" }} variant='outline-secondary' size="sm">🤮</Button>
                                            <Button onClick={handleClickColor2} style={{ backgroundColor: colorToggle2 ? "" : "grey" }} variant='outline-secondary' size="sm">😒</Button>
                                            <Button onClick={handleClickColor3} style={{ backgroundColor: colorToggle3 ? "" : "grey" }} variant='outline-secondary' size="sm">😐</Button>
                                            <Button onClick={handleClickColor4} style={{ backgroundColor: colorToggle4 ? "" : "grey" }} variant='outline-secondary' size="sm">😲</Button>
                                            <Button onClick={handleClickColor5} style={{ backgroundColor: colorToggle5 ? "" : "grey" }} variant='outline-secondary' size="sm">🤯</Button>
                                        </Stack>
                                        <div className='d-flex justify-content-center'>
                                            <hr style={{ color: "white", width: "400px" }} />
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default ItemDetail