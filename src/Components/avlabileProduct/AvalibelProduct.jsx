import React from "react";
import n1 from "../../img/products/n1.jpg"
import n2 from "../../img/products/n2.jpg"
import n3 from "../../img/products/n3.jpg"
import n4 from "../../img/products/n4.jpg"
import n5 from "../../img/products/n5.jpg"
import n6 from "../../img/products/n6.jpg"
import n7 from "../../img/products/n7.jpg"
// import n8 from "../../img/products/n8.jpg"
import Product from "../Product/Product";

export default function AvalibelProduct(props) {
    return (
        <section id="prodoct1" class="section-p1">
            <h2>{props.title}</h2>
            <p>{props.disciption}</p>
            <div class="pro-container">
                <Product brand="adidas" name="تیشرت مردانه تابستانی" price="75,000" imgUrl={n1} />
                <Product brand="nike" name="تیشرت مردانه تابستانی" price="65,000" imgUrl={n2} />
                <Product brand="poma" name="تیشرت مردانه تابستانی" price="55,000" imgUrl={n3} />
                <Product brand="adidas" name="تیشرت مردانه تابستانی" price="88,000" imgUrl={n4} />
                <Product brand="jordan" name="تیشرت مردانه تابستانی" price="99,000" imgUrl={n5} />
                <Product brand="adidas" name="تیشرت مردانه تابستانی" price="15,000" imgUrl={n6} />
                <Product brand="adidas" name="تیشرت مردانه تابستانی" price="155,000" imgUrl={n7} />
                {/* <Product brand="adidas" name="تیشرت مردانه تابستانی" price="35,000" imgUrl={n8} /> */}
            </div>
        </section>
    )
}