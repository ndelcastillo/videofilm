import React from 'react'
import { useState } from 'react'
import './cardItem.css'
import Stack from 'react-bootstrap/Stack'
import { Button } from 'react-bootstrap'

function CardItem(props) {
    const { title, img, price } = props

    const [colorToggle1, setColorToggle1] = useState(true)
    const [colorToggle2, setColorToggle2] = useState(true)
    const [colorToggle3, setColorToggle3] = useState(true)
    const [colorToggle4, setColorToggle4] = useState(true)
    const [colorToggle5, setColorToggle5] = useState(true)
    const [imageOpacity, setImageOpacity] = useState(true)

    function handleClickColor1() {
        setColorToggle1(!colorToggle1)
        setImageOpacity(!imageOpacity)
    }
    function handleClickColor2() {
        setColorToggle2(!colorToggle2)
        setImageOpacity(!imageOpacity)
    }
    function handleClickColor3() {
        setColorToggle3(!colorToggle3)
        setImageOpacity(!imageOpacity)
    }
    function handleClickColor4() {
        setColorToggle4(!colorToggle4)
        setImageOpacity(!imageOpacity)
    }
    function handleClickColor5() {
        setColorToggle5(!colorToggle5)
        setImageOpacity(!imageOpacity)
    }
    function handleClickImgOpacity() {
        setImageOpacity(!imageOpacity)
    }

    return (
        <div className='container'>
            <div className='cardItem mt-5 mx-auto w-100 text-center'>
                <img src={img} style={{ filter: imageOpacity ? "opacity(0.3)" : "opacity(1)" }} onClick={handleClickImgOpacity} className='cardImg mx-auto w-100' id='cardItemImg' alt='cardImg' />
                <div className='cardBody'>
                    {/*<h4 className='mt-3' id='cardItemTitle' style={{fontWeight: fontWeightNew, textDecoration: textDecoration}} onClick={handleClickTxt}  >{title}</h4>*/}
                    <Stack className='justify-content-center mt-3' direction='horizontal' gap={1}>
                        <Button onClick={handleClickColor1} style={{ backgroundColor: colorToggle1 ? "" : "grey", filter: imageOpacity ? "opacity(1)" : "opacity(1)" }} variant='outline-secondary' size="sm">🤮</Button>
                        <Button onClick={handleClickColor2} style={{ backgroundColor: colorToggle2 ? "" : "grey", filter: imageOpacity ? "opacity(1)" : "opacity(1)" }} variant='outline-secondary' size="sm">😒</Button>
                        <Button onClick={handleClickColor3} style={{ backgroundColor: colorToggle3 ? "" : "grey", filter: imageOpacity ? "opacity(1)" : "opacity(1)" }} variant='outline-secondary' size="sm">😐</Button>
                        <Button onClick={handleClickColor4} style={{ backgroundColor: colorToggle4 ? "" : "grey", filter: imageOpacity ? "opacity(1)" : "opacity(1)" }} variant='outline-secondary' size="sm">😲</Button>
                        <Button onClick={handleClickColor5} style={{ backgroundColor: colorToggle5 ? "" : "grey", filter: imageOpacity ? "opacity(1)" : "opacity(1)" }} variant='outline-secondary' size="sm">🤯</Button>
                    </Stack>
                </div>
            </div>
        </div>
    )
}

export default CardItem 