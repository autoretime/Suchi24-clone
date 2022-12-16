import axios from "axios";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthUserContext from "../../../contexts/AuthUserContext";
import "bootstrap/dist/js/bootstrap.bundle";

const Logout = () => {
    const [authUser, setAuthUser] = useContext(AuthUserContext);
    const navigate = useNavigate();

    const logoutHandler = async () => {
        await axios.post("/api/logout");
        localStorage.removeItem("authUser");
        setAuthUser(null);
        navigate("/");
    };

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
                <div>
                    <div className="d-flex px-2 " style={{color: "#43A948"}}>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">
                                <span className="elementor-icon-list-icon">
                                    {" "}
                                    <i
                                        aria-hidden="true"
                                        className="fas fa-user-plus"
                                    ></i>{" "}
                                </span>
                                Login/{" "}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/registration">
                                Registration
                            </Link>
                        </li>
                    </div>
                </div>
            </>
        );
    };

    return component();
};

export default Logout;
