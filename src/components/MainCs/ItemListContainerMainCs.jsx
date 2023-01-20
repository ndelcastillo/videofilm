import React from 'react'
import CardItemMainCs from "./CardItemMainCs"
import './itemListContainerMainCs.css'

function ItemListContainerMainCs() {
    return (
        <div>
            <div className='justify-content-center align-items-center h-100 mt-4 pt-4'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1 id='itemListContainerMainPovTitle' className='pb-0 mb-0'>COMING SOON</h1>
                    </div>
                </div>
                <hr style={{ color: "white" }} />
                <div className='row mt-1'>
                    <div className='col-md-2'>
                        <CardItemMainCs
                            title="Gladiator"
                            img='/assets/images/movies/gladiator.png'
                            link='https://www.youtube.com/watch?v=lsDdsvKVbMo'
                        />
                    </div>
                    <div className='col-md-2'>
                        <CardItemMainCs
                            title="The Intouchables"
                            img='/assets/images/movies/theIntouchables.png'
                            link='https://www.youtube.com/watch?v=34WIbmXkewU'
                        />
                    </div>
                    <div className='col-md-2'>
                        <CardItemMainCs
                            title="The Usual Suspects"
                            img='/assets/images/movies/theUsualSuspects.png'
                            link='https://www.youtube.com/watch?v=Q0eCiCinc4E'
                        />
                    </div>
                    <div className='col-md-2'>
                        <CardItemMainCs
                            title="Life Is Beautiful"
                            img='/assets/images/movies/lifeIsBeautiful.png'
                            link='https://www.youtube.com/watch?v=8CTjcVr9Iao'
                        />
                    </div>
                    <div className='col-md-2'>
                        <CardItemMainCs
                            title="12 Angry Men"
                            img='/assets/images/movies/12AngryMen.png'
                            link='https://www.youtube.com/watch?v=TEN-2uTi2c0'
                        />
                    </div>
                    <div className='col-md-2'>
                        <CardItemMainCs
                            title="Green Mile"
                            img='/assets/images/movies/greenMile.png'
                            link='https://www.youtube.com/watch?v=Ki4haFrqSrw'
                        />
                    </div>
                </div>
            </div >
        </div>
    )
}

export default ItemListContainerMainCs