import React from 'react'
import { useState } from 'react'
import { Button, Stack } from 'react-bootstrap'
import './itemCount.css'

export default function ItemCount() {
    const [qty, setQty] = useState(1)

    function handlePlus() {
        if (qty < 10)
        setQty(qty + 1)
    }

    function handleMinus() {
        if (qty > 1)
        setQty(qty - 1)
    }

    function onAdd() {

    }

    return (
        <div className='row'>
            <div className='col-md-12'>
                <Stack className='justify-content-center' direction='' gap={2}>
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
        </div>
    )
}