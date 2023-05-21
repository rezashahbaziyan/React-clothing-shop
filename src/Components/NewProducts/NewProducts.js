import React from "react";
import Product from "../Product/Product";
import f1 from "../../img/products/f1.jpg"
import f2 from "../../img/products/f2.jpg"
import f3 from "../../img/products/f3.jpg"
import f4 from "../../img/products/f4.jpg"
import f5 from "../../img/products/f5.jpg"
import f6 from "../../img/products/f6.jpg"
import f7 from "../../img/products/f7.jpg"
import f8 from "../../img/products/f8.jpg"

export default function NewProducts() {
    return (
        <section id="prodoct1" class="section-p1">
            <h2>اجناس جدید</h2>
            <p>اجناس تابستانی شیک و مد روز</p>
            <div class="pro-container">
                <Product brand="adidas" name="تیشرت مردانه تابستانی" price="75,000" imgUrl={f1} />
                <Product brand="nike" name="تیشرت مردانه تابستانی" price="65,000" imgUrl={f2} />
                <Product brand="poma" name="تیشرت مردانه تابستانی" price="55,000" imgUrl={f3} />
                <Product brand="adidas" name="تیشرت مردانه تابستانی" price="88,000" imgUrl={f4} />
                <Product brand="jordan" name="تیشرت مردانه تابستانی" price="99,000" imgUrl={f5} />
                <Product brand="adidas" name="تیشرت مردانه تابستانی" price="15,000" imgUrl={f6} />
                <Product brand="adidas" name="تیشرت مردانه تابستانی" price="155,000" imgUrl={f7} />
                <Product brand="adidas" name="تیشرت مردانه تابستانی" price="35,000" imgUrl={f8} />
                <Product brand="adidas" name="تیشرت مردانه تابستانی" price="35,000" imgUrl={f8} />
                <Product brand="adidas" name="تیشرت مردانه تابستانی" price="35,000" imgUrl={f8} />
                <Product brand="adidas" name="تیشرت مردانه تابستانی" price="35,000" imgUrl={f8} />
                <Product brand="adidas" name="تیشرت مردانه تابستانی" price="35,000" imgUrl={f8} />
                <Product brand="adidas" name="تیشرت مردانه تابستانی" price="35,000" imgUrl={f8} />
                <Product brand="adidas" name="تیشرت مردانه تابستانی" price="35,000" imgUrl={f8} />
                <Product brand="adidas" name="تیشرت مردانه تابستانی" price="35,000" imgUrl={f8} />
            </div>
        </section>

    )
}