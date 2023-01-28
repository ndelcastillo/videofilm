import React from 'react'
import { useState, useEffect } from 'react'
import './cardItem.css'
import { Card, Button, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CardItem(props) {
    const {id, name, year, director, plot, cast,genres,img, trailer  } = props
    const urlDetalle = `/movies/top100/${id}`

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

    useEffect(() => (
        console.log("montaje")
    ), []
    )

    return (
        <div className='p-2 m-1'>
            <Card className='bg-dark text-light'>
                <div className='mx-auto w-100'>
                    <Card.Img variant="top" src={img} style={{ filter: imageOpacity ? "opacity(0.2)" : "opacity(1)" }} onClick={handleClickImgOpacity} className='mx-auto w-100' id='cardItemImg' alt='cardImg' />
                </div>
                <Card.Body className=''>
                    {/*<Card.Title style={{ fontSize: "14px" }}>{name}</Card.Title>*/}
                    <Stack className='justify-content-center p-2' direction='horizontal' gap={1}>
                        <Button onClick={handleClickColor1} style={{ backgroundColor: colorToggle1 ? "" : "grey" }} variant='outline-secondary' size="sm">🤮</Button>
                        <Button onClick={handleClickColor2} style={{ backgroundColor: colorToggle2 ? "" : "grey" }} variant='outline-secondary' size="sm">😒</Button>
                        <Button onClick={handleClickColor3} style={{ backgroundColor: colorToggle3 ? "" : "grey" }} variant='outline-secondary' size="sm">😐</Button>
                        <Button onClick={handleClickColor4} style={{ backgroundColor: colorToggle4 ? "" : "grey" }} variant='outline-secondary' size="sm">😲</Button>
                        <Button onClick={handleClickColor5} style={{ backgroundColor: colorToggle5 ? "" : "grey" }} variant='outline-secondary' size="sm">🤯</Button>
                    </Stack>
                    <Link to={urlDetalle} style={{ textDecoration:'none' }} >
                        <div className='text-center p-1 mt-1' style={{ fontSize: 'small', color: 'grey' }}>
                            See More
                        </div>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardItem 