import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import useUserContext from '../userContext';

const AnotherComponent = ({}) => {}

const Navbar = () => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(sessionStorage.getItem("user"))
    );

    const { loggedIn ,logout} = useUserContext();

    const showLoginOptions = () => { 
        if (currentUser !== null || loggedIn) {
            return (
                <>
            <li className="nav-item">
                <button className="btn btn-danger" onClick={logout}>
                    Logout
                </button>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/profile">
                    Profile
                </NavLink>
            </li>
            </>
            );
        } else {
            return <>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                        Login
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/signup">
                        SignUp
                    </NavLink>
                </li>
            </>
        }
    }


    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Navbar
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/home">
                                Home
                            </NavLink>
                        </li>
                        
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/event">
                                Event Handling
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/state">
                                State Management
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/todolist">
                                To-Do List
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/blog">
                                Blog-Box
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/manage">
                                Manage-User
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/list">
                                product list
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">
                                Login
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/SignUp">
                                Sign Up
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/chatbox">
                                Chat-Box
                            </NavLink>
                        </li>
                        { showLoginOptions ()}


                        {/* <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Action
                                    </a>
                                </li>
                                {/* <li>
                                    <a className="dropdown-item" href="#">
                                        Another action
                                    </a>
                                </li> */}
                        {/* <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Something else here
                                    </a>
                                </li>
                            </ul>
                        </li> */}
                        {/* <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">
                                Disabled
                            </a>
                        </li> */}
                    </ul>
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>

    )
}

export default Navbar