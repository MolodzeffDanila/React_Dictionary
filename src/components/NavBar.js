import {useSelector} from "react-redux";
import {useState} from "react";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <div id="navbarSupportedContent" className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item navbar_custom">
                            <a aria-current="page" href="/"
                                                                  className="nav-link active">Main page</a>
                        </li>
                        <li className="nav-item navbar_custom">
                            <a aria-current="page" href="/favourites"
                                                                  className="nav-link active">List of favourities</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;