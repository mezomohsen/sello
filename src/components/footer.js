import React from 'react';
import logoImg from '../assets/imgs/logo.png';

function Footer(){

    return (
       <div className="">
          <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="company">
                            <img src={logoImg} alt="logo" />
                            <ul>
                                <li><i className="fas fa-map-marker-alt"></i> 184 Main Rd E, St Albans VIC 3021, Australia</li>
                                <li><i className="fas fa-envelope"></i> contact@company.com</li>
                                <li><i className="fas fa-phone"></i> +001 2233 456</li>
                                <li><div className="row">
                                    <a href=""><i className="fab fa-facebook-f"></i></a>
                                    <a href=""><i className="fab fa-twitter"></i></a>
                                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a href=""><i className="fab fa-instagram"></i></a>
                                    <a href=""><i className="fab fa-pinterest-p"></i></a>
                                    </div></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="info">
                            <h3>INFORMATION</h3>
                            <ul>
                                <a href="#"><li>About Us</li></a>
                                <a href="#"><li>Contact Us</li></a>
                                <a href="#"><li>Terms & Conditions</li></a>
                                <a href="#"><li>Returns & Exchanges</li></a>
                                <a href="#"><li>Shipping & Delivery</li></a>
                                <a href="#"><li>Privacy Policy</li></a>

                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="info">
                            <h3>QUICK LINKS</h3>
                            <ul>
                                <a href="#"><li>Store Location</li></a>
                                <a href="#"><li>My Account</li></a>
                                <a href="#"><li>Orders Tracking</li></a>
                                <a href="#"><li>Size Guide</li></a>
                                <a href="#"><li>FAQs</li></a>

                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="info">
                            <h3>PAYMENT</h3>
                            <ul>
                                <a href="#"><li>Account</li></a>
                                <a href="#"><li>Free Shipping</li></a>
                                <a href="#"><li>Support 24/7</li></a>
                                <a href="#"><li>30 Days Product Returns</li></a>
                                <a href="#"><li>100% Payment Secure</li></a>
                                <a href="#"><li>Supported All Cards</li></a>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        
        <div className="copyright">
            <div className="container">
                <div className="row">
                    <div className="txt-copy">
                        Copyright © 2019 Sello all rights reserved. Powered by Moaaz Mohsen
                    </div>
                    <div className="row">
                        <a href="#">Home</a>
                        <a href="#">Product</a>
                        <a href="#">Blog</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
            </div>
        </div>

       </div>
    )
}

export default Footer;