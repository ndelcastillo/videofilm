import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


import './cardItemMainPov.css'

function CardItemMainPov(props) {
    const { title, img, link } = props

    return (
        <div style={{cursor:"pointer"}}>
            <Link to={`/movies/${props.id}`}>
                <Card className='bg-dark text-light'>
                    <div className='mx-auto w-100'>
                        <Card.Img variant="top" src={img} className='mx-auto w-100' id='cardItemImg' alt='cardImg' />
                    </div>
                    <Card.Body>
                        <Card.Title style={{ fontSize: "14px" }}>{title}</Card.Title>
                        {/*<Card.Text>
              Hola
            </Card.Text>*/}
                        <Stack className='justify-content-center mt-3' direction=''>
                            <Button type='button' variant="outline-secondary" size='sm'>
                                <a style={{ textDecoration: "none", color: "lightgreen", size: '5px' }} href={link}>+ Whatchlist</a>
                            </Button>
                            <Button className='mt-2' type='button' variant="outline-secondary" size='sm'>
                                <a style={{ textDecoration: "none", color: "white" }} href={link}>► Trailer</a>
                            </Button>
                        </Stack>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    )
}

export default CardItemMainPov