import React from 'react'
import { useState, useEffect } from 'react'
import { getSingleItem } from '../../services/mockAPI'
import { useParams } from 'react-router-dom'
import './itemDetailContainer.css'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
    const [movies, setMovies] = useState({});
    const [error, setError] = useState(false)

    const { id } = useParams();
    console.log("Params:", useParams())

    useEffect(() => {
        getSingleItem(id)
            .then((responseMovies) => setMovies(responseMovies))
            .catch((errormsg) => {
                setError(errormsg.message)
            })
    }, [id]);

    return (
        <div className='pt-5 mt-5'>
            <div className='container h-100 '>
                <div>
                    <ItemDetail movies={movies} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetailContainer