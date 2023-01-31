import React from 'react'
import './itemAction.css'
import { ImEyePlus, ImEye } from 'react-icons/im'
import { AiFillLike } from 'react-icons/ai'
import { HiClock } from 'react-icons/hi'
import { FaRegHeart } from 'react-icons/fa'

function ItemAction() {

    let styleFooterLogos = {
        textDecoration: "none",
        listStyle: "none",
    }

    return (
        <div className='row'>
            <div className='col-md-12'>
                <div style={styleFooterLogos} className='d-flex justify-content-around  '>
                    <div className='d-flex flex-column'>
                        <li><ImEye className='footerIcons' /></li>
                        <h7 className='text-center itemActionText'>Watched</h7>
                    </div>
                    <div className='d-flex flex-column'>
                        <li><FaRegHeart className='footerIcons' /></li>
                        <h7 className='text-center itemActionText'>Like</h7>
                    </div>
                    <div className='d-flex flex-column'>
                        <li><HiClock className='footerIcons ms-1' /></li>
                        <h7 className='text-center itemActionText'>Watchlist</h7>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemAction