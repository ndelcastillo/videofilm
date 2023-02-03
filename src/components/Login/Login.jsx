import React from 'react'
import './login.css'

export default function Login(props) {
    /* 
    //OPC1: harcodeado
    function handleInput (evt){
        console.log(evt)
        let target = evt.target
        let value = evt.key.toLowerCase()
        let vocals = ["a", "e", "i", "o", "u"]
        if (vocals.includes(value)) {
            evt.preventDefault()
            alert("no vocales")
        }
    }
    */
    //OPC2: dinamico
    function handleInput(evt) {
        console.log(evt)
        let target = evt.target
        let value = evt.key.toLowerCase()
        if (props.notallow.includes(value)) {
            evt.preventDefault()
        }
    }

    return (
        <div className='mt-5'>
            <form className=''>
                <div className='form-group text-start'>
                    <label className='text-muted ' htmlFor="ejemplo">
                        <small>{props.text}</small>
                    </label>
                    <input
                        onKeyDown={handleInput}
                        type="ejemplo"
                        className='form-control'
                        id='ejemplo'
                        aria-describedby='ejemplo'
                        placeholder='Ingresa el texto'
                    />
                </div>
                <div className='mt-3 btn-group' role='group'>
                    <button type='submit' className='btn btn-secondary'>
                        {props.btn}
                    </button>
                </div>
            </form>
        </div>
    )
}


//al usar el "evt", cuando escribo en el input me muestra en la consola que es un "evento sintetico"