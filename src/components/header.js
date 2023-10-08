function Header() {
    return (
        <>
            <header class="header">
                <div class="header__top">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-7 col-md-7">
                                <div class="header__top__left">
                                    <ul>
                                        <li><i class="fa fa-envelope"></i> khaihienprivate@gmail.com</li>
                                        {/* <li>Free S  hipping for all Order of $99</li> */}
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-5 col-md-5">
                                <div class="header__top__right">
                                    <div class="header__top__right__social">
                                        <a href="#"><i class="fa fa-facebook"></i></a>
                                        {/* <a href="#"><i class="fa fa-twitter"></i></a>
                                        <a href="#"><i class="fa fa-linkedin"></i></a>
                                        <a href="#"><i class="fa fa-pinterest-p"></i></a> */}
                                    </div>
                                    
                                    <div class="header__top__right__auth mx-3">
                                        <a href="#"><i class="fa fa-user"></i> Đăng ký</a>
                                        
                                    </div>
                                    <div class="header__top__right__auth mx-3">
                                        <a href="#"><i class="fa fa-user"></i> Đăng nhập</a>
                                        
                                    </div>

                                    <div class="header__top__right__language">
                                    <i class="fa fa-user mx-2"/>
                                            <div>Tài khoản</div>
                                            <span class="arrow_carrot-down"></span>
                                            <ul>
                                                <li><a href="#">Quản lý tài khoản</a></li>
                                                <li><a href="#">Quản lý đơn hàng</a></li>
                                                <li><a href="#">Đổi mật khẩu</a></li>
                                                <li><a href="#">Đăn xuất</a></li>
                                            </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-2">
                            <div class="header__logo">
                                <a href="./index.html"><img src="img/logo.png" alt=""/></a>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <nav class="header__menu">
                                <ul>
                                    {/* <li class="active"><a href="/">Trang chủ</a></li> */}
                                    <li><a href="/">Trang chủ</a></li>
                                    <li><a href="./shop-grid.html">Về chúng tôi</a></li>
                                    {/* <li><a href="#">Pages</a>
                                        <ul class="header__menu__dropdown">
                                            <li><a href="./shop-details.html">Shop Details</a></li>
                                            <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                                            <li><a href="./checkout.html">Check Out</a></li>
                                            <li><a href="./blog-details.html">Blog Details</a></li>
                                        </ul>
                                    </li> */}
                                    <li><a href="./san-pham">Sản phẩm</a></li>
                                    <li><a href="./contact.html">Tin tức</a></li>
                                    <li><a href="./contact.html">Liên hệ</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div class="col-lg-2">
                            <div class="header__cart">
                                <ul>
                                    {/* <li><a href="#"><i class="fa fa-heart"></i> <span>1</span></a></li> */}
                                    <li><a href="#"><i class="fa fa-shopping-bag"></i> <span>3</span></a></li>
                                </ul>
                                {/* <div class="header__cart__price">item: <span>$150.00</span></div> */}
                            </div>
                        </div>
                    </div>
                    <div class="humberger__open">
                        <i class="fa fa-bars"></i>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header