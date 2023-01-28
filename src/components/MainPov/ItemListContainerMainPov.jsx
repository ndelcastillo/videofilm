import React from 'react'
import CardItemMainPov from './CardItemMainPov'
import './itemListContainerMainPov.css'

function ItemListContainerMainPov() {
  return (
    <div className='justify-content-center align-items-center h-100 mt-4 pt-4'>
      <div className='row'>
        <div className='col-md-12'>
          <h1 style={{fontSize:"medium", color:"white"}} className='pb-0 mb-0'>POPULAR ON VIDEOFILM</h1>
        </div>
      </div>
      <hr style={{ color: "white" }} />
      <div className='row ' /*style={{backgroundImage:"url(https://mdbcdn.b-cdn.net/img/Photos/Others/images/76.webp)"}} */ >
        <div className='col-md-2 rounded'>
          <CardItemMainPov 
            title="City Of God"
            img='/assets/images/movies/cityOfGod.png'
          />
        </div>
        <div className='col-md-2'>
          <CardItemMainPov
            title="Inception"
            img='/assets/images/movies/inception.png'
          />
        </div>
        <div className='col-md-2'>
          <CardItemMainPov
            title="Seven"
            img='/assets/images/movies/seven.png'
          />
        </div>
        <div className='col-md-2'>
          <CardItemMainPov
            title="Parasite"
            img='/assets/images/movies/parasite.png'
          />
        </div>
        <div className='col-md-2'>
          <CardItemMainPov
            title="Saving Private Ryan"
            img='/assets/images/movies/savingPrivateRyan.png'
          />
        </div>
        <div className='col-md-2'>
          <CardItemMainPov
            title="The Dark Knight"
            img='/assets/images/movies/theDarkKnight.png'
          />
        </div>
      </div>
    </div >
  )
}

export default ItemListContainerMainPov