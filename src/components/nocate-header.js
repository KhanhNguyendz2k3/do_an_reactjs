import { NavLink } from "react-router-dom"
export function NocateHeader() {
    return (
        <>
            <header className="header shop">

                <div className="topbar">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-12">

                                <div className="top-left">
                                    <ul className="list-main">
                                        <li><i className="ti-headphone-alt"></i> +090 (090) 123-456</li>
                                        <li><i className="ti-email"></i> support@newphone.com</li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-lg-8 col-md-12 col-12">

                                <div className="right-content">
                                    <ul className="list-main">
                                        <li><i className="ti-location-pin"></i> Store location</li>
                                        <li><i className="ti-alarm-clock"></i> <a href="#">Daily deal</a></li>
                                        <li><i className="ti-user"></i> <a href="#">My account</a></li>
                                        <li><i className="ti-power-off"></i><a href="login.html#">Login</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="middle-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-12">

                                <div className="logo">
                                    <NavLink to="/"><img src="images/test_logo.png" alt="logo" /></NavLink>
                                </div>

                                <div className="search-top">
                                    <div className="top-search"><a href="#0"><i className="ti-search"></i></a></div>

                                    <div className="search-top">
                                        <form className="search-form">
                                            <input type="text" placeholder="Search here..." name="search" />
                                            <button value="search" type="submit"><i className="ti-search"></i></button>
                                        </form>
                                    </div>

                                </div>

                                <div className="mobile-nav"></div>
                            </div>
                            <div className="col-lg-8 col-md-7 col-12">
                                <div className="search-bar-top">
                                    <div className="search-bar">
                                        <form>
                                            <input name="search" placeholder="Search Products Here....." type="search" />
                                            <button className="btnn"><i className="ti-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-12">
                                <div className="right-bar">

                                    <div className="sinlge-bar">
                                        <a href="#" className="single-icon"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                    </div>
                                    <div className="sinlge-bar">
                                        <a href="#" className="single-icon"><i className="fa fa-user-circle-o" aria-hidden="true"></i></a>
                                    </div>
                                    <div className="sinlge-bar shopping">
                                        <a href="#" className="single-icon"><i className="ti-bag"></i> <span className="total-count">2</span></a>

                                        <div className="shopping-item">
                                            <div className="dropdown-cart-header">
                                                <span>2 Items</span>
                                                <a href="#">View Cart</a>
                                            </div>
                                            <ul className="shopping-list">
                                                <li>
                                                    <a href="#" className="remove" title="Remove this item"><i className="fa fa-remove"></i></a>
                                                    <a className="cart-img" href="#"><img src="https://via.placeholder.com/70x70" alt="#" /></a>
                                                    <h4><a href="#">Woman Ring</a></h4>
                                                    <p className="quantity">1x - <span className="amount">$99.00</span></p>
                                                </li>
                                                <li>
                                                    <a href="#" className="remove" title="Remove this item"><i className="fa fa-remove"></i></a>
                                                    <a className="cart-img" href="#"><img src="https://via.placeholder.com/70x70" alt="#" /></a>
                                                    <h4><a href="#">Woman Necklace</a></h4>
                                                    <p className="quantity">1x - <span className="amount">$35.00</span></p>
                                                </li>
                                            </ul>
                                            <div className="bottom">
                                                <div className="total">
                                                    <span>Total</span>
                                                    <span className="total-amount">$134.00</span>
                                                </div>
                                                <a href="checkout.html" className="btn animate">Checkout</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header-inner">
                    <div className="container">
                        <div className="cat-nav-head">
                            <div className="row">
                                <div className="col-lg-3">

                                </div>
                                <div className="col-lg-9 col-12">
                                    <div className="menu-area">

                                        <nav className="navbar navbar-expand-lg">
                                            <div className="navbar-collapse">
                                                <div className="nav-inner">
                                                    <ul className="nav main-menu menu navbar-nav">
                                                        <li className="active"><NavLink to="/">Home</NavLink></li>
                                                        <li><NavLink to="/product">Product</NavLink></li>
                                                        <li><a href="#">Payment<i className="ti-angle-down"></i><span className="new">New</span></a>
                                                            <ul className="dropdown">
                                                                <li><NavLink to="/cart">Cart</NavLink></li>
                                                                <li><NavLink to="/checkout">Checkout</NavLink></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="contact.html">Contact Us</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </nav>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
        </>
    )
}