import React from 'react'

import './cardItemMainPov.css'

function CardItemMainPov(props) {
    const { title, img, price } = props

    return (
        <div className=''>
            <div className='mx-auto w-100'>
                <img src={img} className='mx-auto w-100' id='cardItemImg' alt='cardImg' />
            </div>
        </div>
    )
}

export default CardItemMainPov