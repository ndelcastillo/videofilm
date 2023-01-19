import React from 'react'
import MainCover from '../MainCover/MainCover'
import ItemListContainerMainPov from '../MainPov/ItemListContainerMainPov'
import './mainAll.css'

function MainAll() {
  return (
    <div className='container '>
        <MainCover/>
        <ItemListContainerMainPov/>
    </div>
  )
}

export default MainAll