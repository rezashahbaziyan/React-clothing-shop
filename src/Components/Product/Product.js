import React from "react";
import "./Product.css";

export default function Product(props) {
    return (
        <div class="pro">
            <img src={props.imgUrl} alt=""></img>
            <div class="des">
                <span>{props.brand}</span>
                <h5>{props.name}</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>{props.price}</h4>
            </div>
            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
        </div>
    )
}