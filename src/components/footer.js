function Footer() {
    return (
        <>
            <footer class="footer spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="footer__about">
                                <div class="footer__about__logo">
                                    <a href="./index.html"><img src="img/logo.png" alt=""/></a>
                                </div>
                                <ul>
                                    <li>Địa chỉ: 123abc, Thành phố Hồ Chí Minh</li>
                                    <li>Điện thoại: 0866508347</li>
                                    <li>Email: khaihienprivate@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                            <div class="footer__widget">
                                <h6>Thông tin khác</h6>
                                <ul>
                                    <li><a href="#">Về chúng tôi</a></li>
                                    <li><a href="#">Sản phẩm</a></li>
                                    <li><a href="#">Tin tức</a></li>
                                    <li><a href="#">Liên hệ</a></li>
                                </ul>
                                
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12">
                            <div class="footer__widget">
                                <h6>Join Our Newsletter Now</h6>
                                <p>Get E-mail updates about our latest shop and special offers.</p>
                                <form action="#">
                                    <input type="text" placeholder="Enter your mail"/>
                                        <button type="submit" class="site-btn">Subscribe</button>
                                </form>
                                <div class="footer__widget__social">
                                    <a href="#"><i class="fa fa-facebook"></i></a>
                                    <a href="#"><i class="fa fa-instagram"></i></a>
                                    <a href="#"><i class="fa fa-twitter"></i></a>
                                    <a href="#"><i class="fa fa-pinterest"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="footer__copyright">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer