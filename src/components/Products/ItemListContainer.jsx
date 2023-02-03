import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './itemListContainer.css'
import { getItems, getItemsByCategory, getItemsByGenres } from "../../services/mockAPI"
import ItemList from './ItemList'
import ProductsNavBar from '../ProductsNavBar/ProductsNavBar'

function ItemListContainer(props) {
  const [movies, setMovies] = useState([]);
  console.log(useParams())

  const { gen } = useParams()

  useEffect(() => {
    if (gen === undefined) {
      getItems()
        .then((responseMovies) => setMovies(responseMovies))
    } else {
      getItemsByGenres(gen)
        .then((responseMoviesFiltrados) => setMovies(responseMoviesFiltrados))
    }
  }, [gen]);

  return (
    <div className='mt-5 pt-3'>
      <div className='container'>
        <div className='justify-content-center align-items-center h-100 p-5'>
          <div className='row'>
            <div className='col-md-12'>
              <h1 style={{ fontSize: "large", color: "white" }} className='pb-0 mb-0'>{props.greeting}</h1>
            </div>
          </div>
          <hr style={{ color: "white" }} />
          <div className='d-flex'>
            <div>
              <div className='pt-3'>
                <ProductsNavBar />
              </div>
            </div>
            <div>
              <ItemList movies={movies} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ItemListContainer