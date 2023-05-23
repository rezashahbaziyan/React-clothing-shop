import React from "react";
import "./Footer.css";
import pay from "../../img/pay/pay.png";
import play from "../../img/pay/play.jpg";
import app from "../../img/pay/app.jpg";

export default function Footer() {
    return (
        <footer class="section-p1">
            <div class="couloms">
                <div class="col">
                    <img class="logo" src="img/logo.png" alt=""></img>
                    <h4>اطلاعات</h4>
                    <p> <strong>آدرس:</strong> ایران - تبریز - خیابان 35 متری لاله نبش خیابان قوام - ارزانسرای شیک پوشان
                        آذری</p>
                    <p> <strong>شماره تماس:</strong> +01 2222 365 /(+91)012345 6789</p>
                    <p> <strong>ساعت کاری:</strong> 11:00 صبح تا 11:00 شب</p>
                    <div class="follow">
                        <h4>مارا دنبال کنید</h4>
                        <div class="icon">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-pinterest"></i>
                            <i class="fab fa-youtube"></i>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <h4>درباره</h4>
                    <a href="aboutfarsi.html">در باره ما</a>
                    <a href="#">اطلاعات تحویل</a>
                    <a href="#">اطلاعات حریم خصوصی</a>
                    <a href="#">شرایط و ضوابط</a>
                    <a href="tamasbama.html">تماس با ما</a>
                </div>
                <div class="col">
                    <h4>حساب من</h4>
                    <a href="signup.html">ثبت نام</a>
                    <a href="cart.html">سبد خرید</a>
                    <a href="#">لیست علاقمندی های من</a>
                    <a href="#">سفارش من را پیگیری کنید</a>
                    <a href="#">کمک</a>
                </div>
                <div class="col install">
                    <h4>نصب اپلیکیشن</h4>
                    <p>از app Store یا google play</p>
                    <div class="row">
                        <img src={app} alt=""></img>
                        <img src={play} alt=""></img>
                    </div>
                    <p>واسط های پرداخت امن </p>
                    <img src={pay} alt=""></img>
                </div>
            </div>
        </footer >
    )
}
