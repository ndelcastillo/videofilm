import React from 'react'
import './loginContainer.css'
import Login from './Login'

export default function LoginContainer() {
    return (
        <div className='container'>
            <div className='row'>
                <div style={{ width: "auto" }} className='d-flex flex-column jutify-content-around algin-items-center mx-auto text-center min-vh-100 mt-5 pt-5'>
                        <Login
                            text="Sin Vocales"
                            notallow="aeiou"
                            btn="Send"
                        />
                        <Login
                            text="Sin Consonantes"
                            notallow="zxcvbnmlkjhgfsdqwrtyp"
                            btn="Enviar"
                        />
                        <Login
                            text="Sin Numeros"
                            notallow="123456789"
                            btn="Go"
                        />
                        <Login
                            text="Sin Letras"
                            notallow="zxcvbnmasdfghjklqwertyuiop"
                            btn="Shoot"
                        />
                </div>
            </div>
        </div>
    )
}
