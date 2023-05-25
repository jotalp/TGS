import "../App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUpModal from "./signUpComponent";




function DropdownMenu() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/"> <img src="1.png" />  </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/src/About">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/pricing">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact</a>
                    </li>
                    <li className="nav-item">
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/components/Shopping">Cart</a>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Trademarks
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="/trademarks/trademark1">Trademark 1</a>
                            <a className="dropdown-item" href="/trademarks/trademark2">Trademark 2</a>
                            <a className="dropdown-item" href="/trademarks/trademark3">Trademark 3</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/components/Login">Login</a>
                    </li>
                </ul>

                <SignUpModal />

            </div>
        </nav>
    );
}

export default DropdownMenu;