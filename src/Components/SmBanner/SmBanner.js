import React from "react";
import "./SmBanner.css";

export default function SmBanner() {
    return (
        <section id="sm-banner" class="section-p1">
            <div class="banner-box">
                <h4>پیشنهادات جذاب</h4>
                <h2>یکی بخر یکی ببر</h2>
                <span>بهترین و باکیفیت ترین اجناس ارزان</span>
                <button class="withe">بیشتر بدان !</button>
            </div>
            <div class="banner-box banner-box2">
                <h4>زمستان / تابستان</h4>
                <h2>فصل جدید در راه است</h2>
                <span>بهترین اجناس برای فصل آینده</span>
                <button class="withe">مجموعه</button>
            </div>
        </section>
    )
}