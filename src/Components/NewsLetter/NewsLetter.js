import React from "react";
import "./NewsLetter.css";

export default function NewsLetter() {
    return (
        <section id="newsletter" class="section-p1 section-m1">
            <div class="newstext">
                <h4>به جمع شیک پوشانی ها بپیوندید</h4>
                <p>شماره تماس خود را ثبت کنید تا زود تر از همه از <span>تخفیف ویژه برخوردار شوید.</span></p>
            </div>
            <div class="form">
                <input type="tel" placeholder="شماره موبایل شما ..." class="telNumberInput"></input>
                <button class="normal newsPhoneNumberButten"> ثبت</button>
            </div>
        </section>
    )
}