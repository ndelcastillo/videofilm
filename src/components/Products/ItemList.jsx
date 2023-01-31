import React from 'react'
import CardItem from './CardItem'
import './cardItem.css'

function ItemList(props) {
  return (
    <div>
      <div className='row'>
        <div className='d-flex flex-row flex-wrap'>
          {props.movies.map((item) => {
            return <div className='col-md-2' key={item.id}>
              <CardItem
                key={item.id}
                id={item.id}
                name={item.name}
                year={item.year}
                director={item.director}
                plot={item.plot}
                cast={item.cast}
                genres={item.genres}
                img={item.img}
              />
            </div>
          })
          }
        </div>
      </div>
    </div>
  )
}

export default ItemList