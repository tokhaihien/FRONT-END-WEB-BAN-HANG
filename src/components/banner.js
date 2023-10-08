function Banner() {
    return (
        <>
            <section class="hero">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="hero__categories">
                                <div class="hero__categories__all">
                                    <i class="fa fa-bars"></i>
                                    <span>Tất cả danh mục</span>
                                </div>
                                <ul>
                                    <li><a href="#">Danh mục 01</a></li>
                                    <li><a href="#">Danh mục 02</a></li>
                                    <li><a href="#">Danh mục 03</a></li>
                                    <li><a href="#">Danh mục 04</a></li>
                                    <li><a href="#">Danh mục 05</a></li>
                                    <li><a href="#">Danh mục 06</a></li>
                                    <li><a href="#">Danh mục 07</a></li>
                                    <li><a href="#">Danh mục 08</a></li>
                                    <li><a href="#">Danh mục 09</a></li>
                                    <li><a href="#">Danh mục 10</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-9">
                            <div class="hero__search">
                                <div class="hero__search__form">
                                    <form action="#">
                                        <div class="hero__search__categories">
                                            Tất cả danh mục
                                            <span class="arrow_carrot-down"></span>
                                        </div>
                                        <input type="text" placeholder="Nhập tên sản phẩm cần tìm ?" />
                                        <button type="submit" class="site-btn">tìm</button>
                                    </form>
                                </div>
                                <div class="hero__search__phone">
                                    <div class="hero__search__phone__icon">
                                        <i class="fa fa-phone"></i>
                                    </div>
                                    <div class="hero__search__phone__text">
                                        <h5>0866 508 347</h5>
                                        <span>Hỗ trợ 24/7</span>
                                    </div>
                                </div>
                            </div>
                            <div class="hero__item set-bg" data-setbg="img/hero/banner.jpg">
                                <div class="hero__text">
                                    <span>FRUIT FRESH</span>
                                    <h2>Vegetable <br />100% Organic</h2>
                                    <p>Giao hàng miễn phí</p>
                                    <a href="#" class="primary-btn">SẢN PHẨM</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Banner