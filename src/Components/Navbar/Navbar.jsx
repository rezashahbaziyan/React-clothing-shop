import React from "react";
import "./Navbar.css";
// import logo from '../../img/logo.png';

export default function Navbar() {
    return (
        <section className="header">
            <a href="#">
                <img src={logo} className="logo" alt="Logo" />
            </a>
            <div>
                <ul className="navbar">
                    <li><a className="active" href="farsi.html">خانه</a></li>
                    <li><a href="#">فروشگاه</a></li>
                    <li><a href="#">بلاگ</a></li>
                    <li><a href="#">درباره ما</a></li>
                    <li><a href="#">تماس با ما</a></li>
                    <li><a href="#"><i class="fa-regular fa-bag-shopping"></i></a></li>
                </ul>
            </div>
        </section>
    );
}


