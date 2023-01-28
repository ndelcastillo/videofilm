import React from 'react'
import { useState, useEffect } from 'react'
import './itemListContainer.css'
import { getItems } from "../../services/mockAPI"
import ItemList from './ItemList'

function ItemListContainer(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getItems()
      .then((responseMovies) =>
        setMovies(responseMovies))
      .catch((error) =>
        console.log('error recibidos', error)
      )
  }, []
  );

  return (
    <div className='mt-5 pt-3'>
      <div className='container justify-content-center align-items-center h-100 p-5'>
        <div className='row'>
          <div className='col-md-12'>
            <h1 style={{fontSize:"large", color:"white"}} className='pb-0 mb-0'>{props.greeting}</h1>
          </div>
        </div>
        <hr style={{ color: "white" }} />
        <div>
          <ItemList movies={movies} />
        </div>
      </div>
    </div>
  )
}
export default ItemListContainer