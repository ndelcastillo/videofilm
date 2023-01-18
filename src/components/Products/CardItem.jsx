import React from 'react'
import './cardItem.css'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

function CardItem(props) {
    const { title, img, price } = props
    return (
        <div className='container'>
            <div className='cardItem mt-5 mx-auto w-100 text-center'>
                <img src={img} className='cardImg mx-auto w-100' alt='cardImg' />
                <div className='cardBody'>
                    {/*<h4 className='mt-3'>{title}</h4>*/}
                    <Stack className='justify-content-center mt-3' direction='horizontal' gap={2}>
                        <Button variant='outline-secondary' size="sm">✓</Button>
                        <Button variant='outline-secondary' size="sm">✕</Button>
                    </Stack>
                </div>
            </div>
        </div>
    )
}

export default CardItem 