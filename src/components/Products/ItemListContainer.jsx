import React from 'react'
import { useState, useEffect } from 'react'
import './itemListContainer.css'
import { getItems } from "../../services/mockAPI"
import ItemList from './ItemList'

function ItemListContainer(props) {
  const [moviesState, setMoviesState] = useState([]);

  useEffect(() => {
    getItems()
      .then((responseMovies) => {
        setMoviesState(responseMovies)
        console.log('movies recibed', moviesState)
      })
      .catch((error) => {
        console.log('error recibidos', error)
      })
  }, []
  );

  return (
    <div>
      <div className='container justify-content-center align-items-center h-100 p-5'>
        <div className='row'>
          <div className='col-md-12'>
            <h1 id='itemListContainerMainPovTitle' className='pb-0 mb-0'>{props.greeting}</h1>
          </div>
        </div>
        <hr style={{ color: "white" }} />
        <div>
          <ItemList movies={moviesState} />
        </div>
      </div>
    </div>
  )
}
export default ItemListContainer