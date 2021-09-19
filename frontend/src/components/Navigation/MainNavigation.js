import AuthContext from "../Context/authContext";
import { NavLink } from "react-router-dom";
import "./MainNavigation.css";
import React from "react";

const mainNavigation = (props) => (
    <AuthContext.Consumer>
        {(context) => {
            return (
                <header className="main-navigation">
                    <div className="main-navigation__logo">
                        <h1>Questions & Answers</h1>
                    </div>
                    <nav className="main-navigation__items">
                        <ul>
                            {!context.token && (
                                <li>
                                    <NavLink to="/auth">Authentication</NavLink>
                                </li>
                            )}
                            <li>
                                <NavLink to="/questions">Questions</NavLink>
                            </li>
                            {context.token && (
                                <React.Fragment>
                                    <li>
                                        <button onClick={context.logout}>Logout</button>
                                    </li>
                                </React.Fragment>
                            )}
                        </ul>
                    </nav>
                </header>
            );
        }}
    </AuthContext.Consumer>
);

export default mainNavigation;