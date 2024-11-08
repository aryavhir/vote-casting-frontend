import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css"; 
const Layout = ({ children }) =>    {
    return(
        <div>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/help">Help</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
        </div>
    );
};
export default Layout