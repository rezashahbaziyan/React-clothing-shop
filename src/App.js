import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./style.css";
import Hero from "./Components/Hero/Hero";
import Feature from "./Components/Feature/Feature";
import NewProducts from "./Components/NewProducts/NewProducts";
import Banner from "./Components/Banner/Banner";
import AvalibelProduct from "./Components/avlabileProduct/AvalibelProduct";

export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Feature />
            <NewProducts title="اجناس جدید" disciption="اجناس تابستانی شیک و مد روز" />
            <Banner />
            <AvalibelProduct title="اجناس موجود" disciption="جنس های پر طرفدار موجود در فروشگاه" />
        </div>
    )
}