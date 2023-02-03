import React from 'react'
import './itemAction.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { faClockFour } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'


function ItemAction({handleAddToWatchlist}) {

    let styleIcons = {
        fontSize: "50px",
        color: "lightgrey",
        filter: "opacity(0.8)"
    }

    {/*
    let styleIcons = {
        fontSize:"50px",
        color:"lightgrey",
        border:"1px solid silver",
        borderRadius: "0.25em",
        borderColor: "lightgrey",
        padding: "0.3em"
    }
    */}

    return (
        <div className='container h-100'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='d-flex justify-content-around'>
                        <div className='d-flex flex-column'>
                            <div className=''>
                                <span style={styleIcons}>
                                    <i><FontAwesomeIcon icon={faEye} onClick={handleAddToWatchlist} /></i>
                                </span>
                            </div>
                            <div className=''>
                                <h6 className='text-center itemActionText'>Watch</h6>
                            </div>
                        </div>
                        <div className='d-flex flex-column'>
                            <div className=''>
                                <span style={styleIcons}>
                                    <i><FontAwesomeIcon icon={faHeart} /></i>
                                </span>
                            </div>
                            <div className=''>
                                <h6 className='text-center itemActionText'>Like</h6>
                            </div>
                        </div>
                        <div className='d-flex flex-column'>
                            <div className=''>
                                <span style={styleIcons}>
                                    <i><FontAwesomeIcon /* className='fa-solid fa-heart fa-beat' style={{ animationDuration: "5s" }} */ icon={faClockFour} /></i>
                                </span>
                            </div>
                            <div className=''>
                                <h6 className='text-center itemActionText'>Watchlist</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemAction