import axios from 'axios';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthUserContext from '../../contexts/AuthUserContext';
import "bootstrap/dist/js/bootstrap.bundle";


const Logout = () => {
    const [authUser, setAuthUser] =useContext(AuthUserContext);

    const logoutHandler= async() => {
        await axios.post('/api/logout');
        localStorage.removeItem('authUser');
        setAuthUser(null);
    }

    const component = () => {
        if (authUser) {
            return (
                <li className="nav-item dropdown">
                    <a
                        className="nav-link dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        data-toggle="dropdown"
                    >
                        {authUser.name}
                    </a>
                    <ul className="dropdown-menu dropdown-right">
                        <li>
                            <Link className="dropdown-item" to="/admin">
                                Admin
                            </Link>
                        </li>
                        <li>
                            <a
                                className="dropdown-item"
                                onClick={logoutHandler}
                            >
                                Logout
                            </a>
                        </li>
                    </ul>
                </li>
            );
        }

        return (
            <>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/registration">Registration</Link>
                </li>
            </>
        );
    }

    return component();
}

export default Logout;
