import React from "react";
import "../css/footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    {/* about */}
                    <div className="col-md-3 col-sm-6 mb-4">
                        <h5><a href="/about">About Us</a></h5>
                    </div>

                    {/* links */}
                    <div className="col-md-3 col-sm-6 mb-4">
                        <h5>Quick Links</h5>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/plants">Plants</a></li>
                            <li><a href="/gardeningkit">Gardening Kit</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>

                    {/* contact */}
                    <div className="col-md-3 col-sm-6 mb-4">
                        <h5><a href="/contact">Contact Us</a></h5>
                        <ul>
                            <li>
                                <a href="https://wa.me/917034165867" target="_blank">
                                    <i className="fab fa-whatsapp"></i> +91 7034165867
                                </a>
                            </li>
                            <li>
                                <a href="mailto:plantifyinfo@gmail.com" target="_blank">
                                    <i className="fa fa-envelope"></i> plantifyinfo@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="https://share.google/43c51iZISiIimeAol" target="_blank">
                                    <i className="fa fa-map-marker-alt"></i> Mavoor Rd, Kozhikode, India
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* logo */}
                    <div className="col-md-3 col-sm-6 mb-4 footer-logo-container">
                        <a href="/" className="logo-link">
                            <img
                                src="/logo.png"
                                alt="plantify"
                                width="40"
                                height="40"
                            />
                            <h2 className="footer-logo">Plantify</h2>
                        </a>
                    </div>

                </div>

                {/* social media */}
                <div className="row footer-bottom">
                    <div className="col-md-6 mb-3 social-container">
                        <h6 className="social-title">Social Media</h6>
                        <div className="social-icons">
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>

                    {/* app badges */}
                    <div className="col-md-3 col-sm-6 mb-4 app-badges">
                        <div className="badge-list">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1200px-Download_on_the_App_Store_Badge.svg.png"
                                alt="App Store"
                            />
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1200px-Google_Play_Store_badge_EN.svg.png"
                                alt="Google Play"
                            />
                        </div>
                    </div>
                </div>


                {/* copyright */}
                <div className="row">
                    <div className="col-12 text-center copyright">
                        <p>© 2025 Plantify Plants. All rights reserved.</p>
                        <p>Privacy Policy | Terms of Use | Cookie Preferences</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
