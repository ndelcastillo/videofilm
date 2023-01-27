import React from 'react'
import CardItem from './CardItem'
import './cardItem.css'

function ItemList(props) {
  return (
    <div className=''>
      <div className='row'>
        <div className='d-flex flex-row flex-wrap'>
          {props.movies.map((item) => {
            return <div className='col-md-3' key={item.id}>
              <CardItem
                key={item.id}
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