import React from 'react'
import { useState, useEffect } from 'react'
import { getSingleItem } from '../../services/mockAPI'
import './itemDetailContainer.css'
import ItemDetail from './ItemDetail'

function ItemDetailContainer(props) {
    const [moviesState, setMoviesState] = useState({});
    const [error, setError] = useState(false)

    useEffect(() => {
        getSingleItem()
            .then((responseMovies) => {
                setMoviesState(responseMovies)
            })
            .catch((errormsg) => {
                setError(errormsg.message)
                console.log('error recibed', error)
            })
    }, [])

    return (
        <div className='pt-5 mt-5'>
            <div className='container justify-content-center align-items-center h-100 p-5'>
                <div>
                    <ItemDetail movies={moviesState} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetailContainer