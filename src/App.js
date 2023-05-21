import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./style.css";
import Hero from "./Components/Hero/Hero";
import Feature from "./Components/Feature/Feature";
import NewProducts from "./Components/NewProducts/NewProducts";

export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Feature />
            <NewProducts />
        </div>
    )
}