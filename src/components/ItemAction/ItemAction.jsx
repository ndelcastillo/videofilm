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
        <div className='container h-100'>
            <div className='row'>
                <div className='col-md-12'>
                        <div style={styleFooterLogos} className='d-flex justify-content-around  '>
                            <div className='d-flex flex-column'>
                                <li><ImEye className='itemActionIconImEye' /></li>
                                <h6 className='text-center itemActionText mt-1'>Watched</h6>
                            </div>
                            <div className='d-flex flex-column'>
                                <li><FaRegHeart className='itemActionIconFaRegHeart' /></li>
                                <h6 className='text-center itemActionText mt-2'>Like</h6>
                            </div>
                            <div className='d-flex flex-column'>
                                <li><HiClock className='itemActionIconHiClock ' /></li>
                                <h6 className='text-center itemActionText mt-1'>Watchlist</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ItemAction