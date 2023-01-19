import React from 'react'
import './footer.css'
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube, FaSpotify } from 'react-icons/fa'

function Footer(props) {

    let styleFooter = {
        backgroundColor: "rgb(44,52,64)",
        minHeight: "20vh"
    }

    let styleFooterGreeting = {
        color: "white"
    }

    let styleFooterText1 = {
        textDecoration: "none",
        listStyle: "none",
    }

    let styleFooterText2 = {
        textDecoration: "none",
        listStyle: "none",
        color: "grey",
        fontSize: "x-small"
    }

    let styleFooterLogos = {
        textDecoration: "none",
        listStyle: "none",
    }

    return (
        <div style={styleFooter} className='d-flex align-items-center justify-content-center mt-5' >
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className=''>
                            <ul style={styleFooterText1} className='d-flex flex-wrap justify-content-end ' >
                                <li className=''>About</li>
                                <li className='ms-3'>News</li>
                                <li className='ms-3'>Podcast</li>
                                <li className='ms-3'>Help</li>
                                <li className='ms-3'>Terms</li>
                                <li className='ms-3'>Contact</li>
                                <li className='ms-3'>FAQ</li>
                            </ul>
                        </div>
                        <div className=''>
                            <ul className='d-flex flex-wrap justify-content-end me-0' >
                                <li style={styleFooterText2} className=''>© VideoFilm Limited. Made by <strong> ndelcastillo </strong> in Buenos Aires Argentina 2023. </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <ul style={styleFooterLogos} className='d-flex flex-wrap justify-content-center'>
                            <li><FaFacebook className='footerIcons' /></li>
                            <li><FaInstagram className='footerIcons ms-4' /></li>
                            <li><FaTwitter className='footerIcons ms-4' /></li>
                            <li><FaYoutube className='footerIcons ms-4' /></li>
                            <li><FaSpotify className='footerIcons ms-4' /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer



