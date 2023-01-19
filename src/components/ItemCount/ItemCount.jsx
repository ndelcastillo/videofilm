import React from 'react'
import { useState } from 'react'
import { Button, Stack } from 'react-bootstrap'
import './itemCount.css'

export default function ItemCount() {
    const [qty, setQty] = useState(1)

    function handlePlus() {
        setQty(qty + 1)
    }

    function handleMinus() {
        setQty(qty - 1)
    }

    function onAdd() {

    }

    return (
        <div className='text-center itemCountAll'>
            <Stack className='justify-content-center mt-3' direction='' gap={2}>
                <div className='text-center'>
                    <Button className='itemCountHandleMinus' variant='outline-secondary' size="sm" onClick={handleMinus}>-</Button>
                    <span className='' variant='outline-secondary' size="sm">{qty}</span>
                    <Button className='itemCountHandlePlus ' variant='outline-secondary' size="sm" onClick={handlePlus}>+</Button>
                </div>
                {/*
                <div className='text-center'>
                    <Button className='' variant='outline-secondary' size="sm" onClick={onAdd} >
                        Agregar al carrito
                    </Button>
                </div>
                */}   
            </Stack>
        </div>
    )
}