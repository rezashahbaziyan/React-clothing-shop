import React from "react";
import "./Feature.css";
import img1 from '../../img/features/f1.png';
import img2 from '../../img/features/f2.png';
import img3 from '../../img/features/f3.png';
import img4 from '../../img/features/f4.png';
import img5 from '../../img/features/f5.png';
import img6 from '../../img/features/f6.png';

export default function Feature() {
    return (
        <section id="feature" className="section-p1" dir="rtl">
            <div className="fe-box">
                <img src={img1} alt="" />
                <h6>خرید آسان</h6>
            </div>
            <div className="fe-box">
                <img src={img2} alt="" />
                <h6>سفارش آنلاین</h6>
            </div>
            <div className="fe-box">
                <img src={img3} alt="" />
                <h6>خریدارزان</h6>
            </div>
            <div className="fe-box">
                <img src={img4} alt="" />
                <h6>مد روز </h6>
            </div>
            <div className="fe-box">
                <img src={img5} alt="" />
                <h6>همیشه بدرخشید</h6>
            </div>
            <div className="fe-box">
                <img src={img6} alt="" />
                <h6>پشتیبانی 24/7 </h6>
            </div>
        </section>
    );
}
