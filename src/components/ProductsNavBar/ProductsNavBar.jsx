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
                                    <span className='ms-1 d-none d-sm-inline'>Movies</span>
                                </Link>
                            </li>
                            <li>
                                <Link className='nav-link ' to="/categoria/series">
                                    <span className='ms-1 d-none d-sm-inline'>Series</span>
                                </Link>
                            </li>
                        </ul>
                        <hr style={{ color: "white" }} />
                        <ul className='d-flex flex-column align-items-start mt-3'>
                            <li>
                                <Link className='nav-link ' to="">
                                    <span className='ms-1 d-none d-sm-inline'>Popular</span>
                                </Link>
                            </li>
                            <li>
                                <Link className='nav-link ' to="">
                                    <span className='ms-1 d-none d-sm-inline'>New</span>
                                </Link>
                            </li>
                            <li>
                                <Link className='nav-link ' to="">
                                    <span className='ms-1 d-none d-sm-inline'>Featured</span>
                                </Link>
                            </li>
                        </ul>
                        <hr style={{ color: "white" }} />
                        <ul className='d-flex flex-column align-items-start mt-3'>
                            <li>
                                <Link className='nav-link ' to="">
                                    <span className='ms-1 d-none d-sm-inline'>Top</span>
                                </Link>
                            </li>
                            <li>
                                <Link className='nav-link ' to="">
                                    <span className='ms-1 d-none d-sm-inline'>Action</span>
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link className='nav-link ' to="">
                                    <span className='ms-1 d-none d-sm-inline'>Adventure</span>
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link className='nav-link' to="">
                                    <span className='ms-1 d-none d-sm-inline'>Animation</span>
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link className='nav-link' to="">
                                    <span className='ms-1 d-none d-sm-inline'>Comedy</span>
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link className='nav-link' to="">
                                    <span className='ms-1 d-none d-sm-inline'>Crime</span>
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link className='nav-link' to="">
                                    <span className='ms-1 d-none d-sm-inline'>Documentary</span>
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link className='nav-link' to="">
                                    <span className='ms-1 d-none d-sm-inline'>Drama</span>
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link className='nav-link' to="">
                                    <span className='ms-1 d-none d-sm-inline'>History</span>
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link className='nav-link' to="">
                                    <span className='ms-1 d-none d-sm-inline'>Horror</span>
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link className='nav-link' to="">
                                    <span className='ms-1 d-none d-sm-inline'>Mistery</span>
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link className='nav-link' to="">
                                    <span className='ms-1 d-none d-sm-inline'>Romance</span>
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link className='nav-link' to="">
                                    <span className='ms-1 d-none d-sm-inline'>Sci-Fi</span>
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link className='nav-link' to="">
                                    <span className='ms-1 d-none d-sm-inline'>Sport</span>
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link className='nav-link' to="">
                                    <span className='ms-1 d-none d-sm-inline'>Thriller</span>
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link className='nav-link' to="">
                                    <span className='ms-1 d-none d-sm-inline'>War</span>
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