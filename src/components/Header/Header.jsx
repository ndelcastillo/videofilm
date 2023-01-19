import React from 'react'
import './header.css'
import NavBar from '../NavBar/NavBar'
import CarouselImg from '../CarouselImg/CarouselImg'

function Header() {
    return (
        <div className='header pb-1'>
            <NavBar/>
            <CarouselImg/>
        </div>
    )
}
export default Header