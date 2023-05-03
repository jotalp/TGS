/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "../App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";




const DropdownMenu = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="/Home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="About.js">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/Link">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/Link">Contact</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Trademarks                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};


export default DropdownMenu;
