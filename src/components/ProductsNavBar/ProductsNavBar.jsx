import React from 'react'
import { Link } from 'react-router-dom'
import './productsNavBar.css'

function ProductsNavBar() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div style={{ width: "auto" }} className='col-auto min-vh-100 bg-dark'>
                    <div className='d-flex flex-column'>
                        <ul className='d-flex flex-column align-items-start mt-4'>
                            <li>
                                <Link className='nav-link' to="/categoria/movies">
                                    <p style={{fontSize:"large"}} className='me-4 d-none d-sm-inline'>Movies</p>
                                </Link>
                            </li>
                            <li>
                                <Link className='nav-link ' to="/categoria/movies"> {/* aca debe ir "/categoria/series" */}
                                    <p style={{fontSize:"larger"}} className='me-4 d-none d-sm-inline'>Series</p>
                                </Link>
                            </li>
                        </ul>
                        <hr style={{ color: "white" }} />
                        <ul className='d-flex flex-column align-items-start'>
                            <li>
                                <Link className='nav-link ' to="">
                                    <p  className='me-4 d-none d-sm-inline'>Popular</p>
                                </Link>
                            </li>
                            <li>
                                <Link className='nav-link ' to="">
                                    <p className='me-4 d-none d-sm-inline'>New</p>
                                </Link>
                            </li>
                            <li>
                                <Link className='nav-link ' to="">
                                    <p className='me-4 d-none d-sm-inline'>Featured</p>
                                </Link>
                            </li>
                        </ul>
                        <hr style={{ color: "white" }} />
                        <ul className='d-flex flex-column align-items-start'>
                            <li>
                                <Link className='nav-link ' to="">
                                    <p className='me-4 d-none d-sm-inline'>Top</p>
                                </Link>
                            </li>
                            <li>
                                <Link className='nav-link ' to="/genero/action">
                                    <p className='me-4 d-none d-sm-inline'>Action</p>
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link className='nav-link ' to="/genero/adventure">
                                    <p className='me-4 d-none d-sm-inline'>Adventure</p>
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link className='nav-link' to="/genero/animation">
                                    <p className='me-4 d-none d-sm-inline'>Animation</p>
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link className='nav-link' to="/genero/biography">
                                    <p className='me-4 d-none d-sm-inline'>Biography</p>
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link className='nav-link' to="/genero/comedy">
                                    <p className='me-4 d-none d-sm-inline'>Comedy</p>
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link className='nav-link' to="/genero/crime">
                                    <p className='me-4 d-none d-sm-inline'>Crime</p>
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link className='nav-link' to="/genero/documentary">
                                    <p className='me-4 d-none d-sm-inline'>Documentary</p>
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link className='nav-link' to="/genero/drama">
                                    <p className='me-4 d-none d-sm-inline'>Drama</p>
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link className='nav-link' to="/genero/fantasy">
                                    <p className='me-4 d-none d-sm-inline'>Fantasy</p>
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link className='nav-link' to="/genero/history">
                                    <p className='me-4 d-none d-sm-inline'>History</p>
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link className='nav-link' to="/genero/horror">
                                    <p className='me-4 d-none d-sm-inline'>Horror</p>
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link className='nav-link' to="/genero/mistery">
                                    <p className='me-4 d-none d-sm-inline'>Mistery</p>
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link className='nav-link' to="/genero/music">
                                    <p className='me-4 d-none d-sm-inline'>Music</p>
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link className='nav-link' to="/genero/romance">
                                    <p className='me-4 d-none d-sm-inline'>Romance</p>
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link className='nav-link' to="/genero/scifi">
                                    <p className='me-4 d-none d-sm-inline'>Sci-Fi</p>
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link className='nav-link' to="/genero/sport">
                                    <p className='me-4 d-none d-sm-inline'>Sport</p>
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link className='nav-link' to="/genero/thriller">
                                    <p className='me-4 d-none d-sm-inline'>Thriller</p>
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link className='nav-link' to="/genero/war">
                                    <p className='me-4 d-none d-sm-inline'>War</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsNavBar