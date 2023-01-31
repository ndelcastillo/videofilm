import React from 'react'
import { useState, useEffect } from 'react'
import './cardItem.css'
import { Card, Button, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProductsNavBar from '../ProductsNavBar/ProductsNavBar'

function CardItem(props) {
    const { id, name, year, director, plot, cast, genres, img, trailer } = props
    const urlDetalle = `/movies/${id}-${name}`

    useEffect(() => (
        console.log("montaje")
    ), []
    )

    return (
        <div className='p-2 m-1'>
            <Link to={urlDetalle} style={{ textDecoration: 'none' }} >
                <Card className='bg-dark text-light' id='cardItemCardImg'>
                    <div className='mx-auto w-100'>
                        <Card.Img variant="top" src={img} className='mx-auto w-100' id='cardItemImg' alt='cardImg' />
                    </div>
                </Card>
            </Link>
        </div>
    )
}

export default CardItem 