import React from 'react'
import './mainCover.css'

function MainCover() {
    return (
        <div className='container mt-5 pt-5'>
            <div className='row d-flex justify-content-between'>
                <div className=' col-md-6 w-50 ' id='box1'>
                    <div style={{ height: "100%" }}>
                        <iframe className='w-100 h-100 mw-100 mh-100' src="https://www.youtube.com/embed/ZdajBh9vAk8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                <div className='col-md-6 d-flex flex-column justify-content-between '>
                    <div className='w-100 ms-2' id='box2'>
                        <div style={{ height: "100%" }}>
                            <iframe className='w-100 h-100 mw-100 mh-100 p-1' src="https://www.youtube.com/embed/jYRtFFa4hT8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className='w-100 ms-2' id='box3'>
                        <div style={{ height: "100%" }}>
                            <iframe className='w-100 h-100 mw-100 mh-100 p-1' src="https://www.youtube.com/embed/1Vnghdsjmd0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCover