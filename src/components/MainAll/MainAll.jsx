import React from 'react'
import MainCover from '../MainCover/MainCover'
import MainTi from '../MainR/MainTi'
import MainLn from '../MainLn/MainLn'
import ItemListContainerMainPov from '../MainPov/ItemListContainerMainPov'
import './mainAll.css'
import ItemListContainerMainCs from '../MainCs/ItemListContainerMainCs'
import MainRe from '../MainRe/MainRe'

function MainAll() {
  return (
    <div className='container p-5'>
        <MainCover/>
        <ItemListContainerMainPov/>
        <MainLn/>
        <ItemListContainerMainCs/>
        <MainTi/>
        <MainRe/>
    </div>
  )
}

export default MainAll