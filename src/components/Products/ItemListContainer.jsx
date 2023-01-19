import React from 'react'
import CardItem from './CardItem'
import './itemListContainer.css'

function ItemListContainer(props) {

  return (
    <div className='container d-flex justify-content-center align-items-center h-100 p-5'>
      <div className='row'>
        <div className='col-md-12'>
          <h1 style={{ color: "white" }} className='ms-1 mt-5 '>{props.greeting}</h1>
        </div>
        <div className='col-md-3'>
          <CardItem
            title="City Of God"
            img='/assets/images/movies/cityOfGod.png'
            stock={3}
          />
        </div>
        <div className='col-md-3'>
          <CardItem
            title="Inception"
            img='/assets/images/movies/inception.png'
            stock={3}
          />
        </div>
        <div className='col-md-3'>
          <CardItem
            title="Seven"
            img='/assets/images/movies/seven.png'
            stock={3}
          />
        </div>
        <div className='col-md-3'>
          <CardItem
            title="Parasite"
            img='/assets/images/movies/parasite.png'
            stock={3}
          />
        </div>
        <div className='col-md-3'>
          <CardItem
            title="Pulp Fiction"
            img='/assets/images/movies/pulpFiction.png'
            stock={3}
          />
        </div>
        <div className='col-md-3'>
          <CardItem
            title="Matrix"
            img='/assets/images/movies/matrix.png'
            stock={3}
          />
        </div>
        <div className='col-md-3'>
          <CardItem
            title="The Professional"
            img='/assets/images/movies/theProfessional.png'
            stock={3}
          />
        </div>
        <div className='col-md-3'>
          <CardItem
            title="Whiplash"
            img='/assets/images/movies/whiplash.png'
            stock={3}
          />
        </div>
        <div className='col-md-3'>
          <CardItem
            title="Green Mile"
            img='/assets/images/movies/greenMile.png'
            stock={3}
          />
        </div>
        <div className='col-md-3'>
          <CardItem
            title="Fight Club"
            img='/assets/images/movies/fightClub.png'
            stock={3}
          />
        </div>
        <div className='col-md-3'>
          <CardItem
            title="Interstellar"
            img='/assets/images/movies/interstellar.png'
            stock={3}
          />
        </div>
        <div className='col-md-3'>
          <CardItem
            title="GoodFellas"
            img='/assets/images/movies/goodfellas.png'
            stock={3}
          />
        </div>
        <div className='col-md-3'>
          <CardItem
            title="Psycho"
            img='/assets/images/movies/psycho.png'
            stock={3}
          />
        </div>
        <div className='col-md-3'>
          <CardItem
            title="Saving Private Ryan"
            img='/assets/images/movies/savingPrivateRyan.png'
            stock={3}
          />
        </div>
        <div className='col-md-3'>
          <CardItem
            title="Batman: The Dark Knight"
            img='/assets/images/movies/theDarkKnight.png'
            stock={3}
          />
        </div>
        <div className='col-md-3'>
          <CardItem
            title="The Prestige"
            img='/assets/images/movies/thePrestige.png'
            stock={3}
          />
        </div>
      </div>
    </div>
  )
}
export default ItemListContainer