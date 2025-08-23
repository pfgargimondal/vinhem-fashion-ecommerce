import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { Swiper, SwiperSlide } from "swiper/react";
// eslint-disable-next-line
import { Autoplay, Pagination, Navigation, Mousewheel } from "swiper/modules";
import "./Css/Checkout.css";
import "swiper/css";
import { FeaturedProducts } from "../../components";
import { useState } from "react";

export const Checkout = () => {
    // eslint-disable-next-line
    const [featuredProducts, setFeaturedProducts] = useState([
        {
            id: 1000,
            img1: "/images/golden-polished-temple-choker-necklace-set-v1-jpm6528.webp",
            img2: "/images/temple-jewelry.webp",
            title: "COLLETTE",
            description:
                "(Product 35) Sample - Clothing And Accessory Boutiques For Sale",
            price: "48.99",
        },
        {
            id: 1001,
            img1: "/images/1716298202051_1.webp",
            img2: "/images/1749818038130_1.webp",
            title: "COLLETTE",
            description:
                "(Product 35) Sample - Clothing And Accessory Boutiques For Sale",
            price: "48.99",
        },
        {
            id: 1002,
            img1: "/images/how-to-find-matching-saree-jewellery-320120_750x.webp",
            img2: "/images/1723646143986_1.webp",
            title: "COLLETTE",
            description:
                "(Product 35) Sample - Clothing And Accessory Boutiques For Sale",
            price: "48.99",
        },
        {
            id: 1003,
            img1: "/images/black-potli-bag-model_97de0a76-00e0-4ce6-b705-b9666518483c.webp",
            img2: "/images/JJ_JIMMY_WHITE_(6)_zoom.jpg",
            title: "COLLETTE",
            description:
                "(Product 35) Sample - Clothing And Accessory Boutiques For Sale",
            price: "48.99",
        },
        {
            id: 1004,
            img1: "/images/1708949940342_1.webp",
            img2: "/images/1719656075415_1.webp",
            title: "COLLETTE",
            description:
                "(Product 35) Sample - Clothing And Accessory Boutiques For Sale",
            price: "48.99",
        },
        {
            id: 1005,
            img1: "/images/61n+KozlFVL._UF1000,1000_QL80_.jpg",
            img2: "/images/images (2).jpg",
            title: "COLLETTE",
            description:
                "(Product 35) Sample - Clothing And Accessory Boutiques For Sale",
            price: "48.99",
        },
        {
            id: 1006,
            img1: "/images/1656282-0958632001659958447.webp",
            img2: "/images/Untitled_design_-_2024-08-28T121432.760_480x480.webp",
            title: "COLLETTE",
            description:
                "(Product 35) Sample - Clothing And Accessory Boutiques For Sale",
            price: "48.99",
        },
    ]);

    const [biToggle, setBiToggle] = useState(true);

    const [onChecked, setOnChecked] = useState(false);


    const handleChecked = (e) => {
        setOnChecked(e.target.checked);
    };

    const swiperConfig = {
        spaceBetween: 20,
        slidesPerView: 5,
        navigation: true,
        pagination: { clickable: true },
        breakpoints: {
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
        },
    };



    return (
        <div>
            <div className="cart-wrapper py-4">
                <div className="row justify-content-between">
                    <div className="col-lg-7">
                        <div className="diwebjrwert_left">
                            <div className="djikewirwerwer">
                                <div className="inmoijjrwerwe mb-4">
                                    <div className="jbdjnewnllr d-flex align-items-center justify-content-between">
                                        <h4 className="mb-3">Billing Information</h4>

                                        <i onClick={() => setBiToggle(!biToggle)} class={`fa-solid ${!biToggle ? "fa-angle-down" : "fa-angle-up"}`}></i>
                                    </div>

                                    { biToggle && (
                                        <div className="iudghweewr">
                                            <form>
                                                <div className="mb-3">
                                                    <label className="form-label">Recipients Name</label>

                                                    <input type="text" className="form-control" placeholder="Enter Full Name" />
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label">Email</label>

                                                    <input type="text" className="form-control" placeholder="Enter Email" />
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label">Phone Number</label>

                                                    <input type="text" className="form-control" placeholder="Enter Phone Number" />
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label">Pincode</label>

                                                    <input type="text" className="form-control" placeholder="Enter Pin Code" />
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label">City</label>

                                                    <input type="text" className="form-control" placeholder="Enter City" />
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label">State</label>

                                                    <input type="text" className="form-control" placeholder="Enter State" />
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label">Country</label>

                                                    <input type="text" className="form-control" placeholder="Enter Country" />
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label">Full Address</label>

                                                    <textarea name="" id="" className="form-control" placeholder="Enter Address"></textarea>
                                                </div>
                                            </form>
                                        </div>
                                    ) }
                                </div>

                                <div className="inmoijjrwerwe dfghbefestewerr mb-4">
                                    <div className="form-check mb-4">
                                        <input className="form-check-input ihdinwehwwwee" onChange={handleChecked} type="checkbox" value="" id="flexCheckDefault" />
                                        
                                        <label className="form-check-label" for="flexCheckDefault">
                                            <h6 className="mb-0">Check if shipping address is different</h6>
                                        </label>
                                    </div>  

                                    { onChecked && (
                                        <div className="iudghweewr">
                                            <h4 className="mb-3 text-uppercase">Shipping Details</h4>

                                            <form>
                                                <div className="mb-3">
                                                    <label className="form-label">Recipients Name</label>

                                                    <input type="text" className="form-control" placeholder="Enter Full Name" />
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label">Email</label>

                                                    <input type="text" className="form-control" placeholder="Enter Email" />
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label">Phone Number</label>

                                                    <input type="text" className="form-control" placeholder="Enter Phone Number" />
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label">Pincode</label>

                                                    <input type="text" className="form-control" placeholder="Enter Pin Code" />
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label">City</label>

                                                    <input type="text" className="form-control" placeholder="Enter City" />
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label">State</label>

                                                    <input type="text" className="form-control" placeholder="Enter State" />
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label">Country</label>

                                                    <input type="text" className="form-control" placeholder="Enter Country" />
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label">Full Address</label>

                                                    <textarea name="" id="" className="form-control" placeholder="Enter Address"></textarea>
                                                </div>
                                            </form>
                                        </div>
                                    ) }
                                </div>
                            </div>

                            <div className="uiwdhiwerwerwer d-flex align-items-center justify-content-between aksbdjbererre dojweirkwejirwer">
                                <button className="btn px-3 me-2 btn-main">
                                    <i class="fa-solid me-1 fa-arrow-left"></i> Back To Cart
                                </button>

                                <button className="btn px-3 btn-main">
                                    Continue Shopping
                                </button>
                            </div>

                            <div className="dweihriwerwerw mt-4">
                                <p className="mb-1">
                                    *Once your order has been placed no subsequent changes can be
                                    made in it.
                                </p>

                                <p className="mb-1">
                                    *Shipping cost may vary depending on the delivery destination.
                                </p>

                                <p className="mb-1">
                                    *Please check the final amount on the order summary page
                                    before completing the payment.
                                </p>

                                <p className="mb-1">
                                    *An item's price may vary according to the size selected.
                                </p>

                                <ul className="mb-0 ps-0">
                                    <li>
                                        <Link to="/">Shipping Policy</Link>
                                    </li>

                                    <li>
                                        <Link to="/">Help</Link>
                                    </li>

                                    <li>
                                        <Link to="/">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="diwebjrwert_right sticky-top">
                            <h4 className="mb-4">Your Product Details</h4>

                            <div className="doejwojrwerwe">
                                <Table responsive>
                                    <tbody>
                                        <tr>
                                            <th>Item</th>

                                            <th>Quantity</th>

                                            <th>Item Cost(<i class="bi bi-currency-rupee"></i>)</th>

                                            <th>Sub Total(<i class="bi bi-currency-rupee"></i>)</th>
                                        </tr>

                                        <tr>
                                            <td>
                                                <span className="idheiwnrwer d-block">Designer Banarasi Silk Green Color A Line Lehenga</span>
                                            </td>

                                            <td>
                                                1
                                            </td>

                                            <td>
                                                29,995
                                            </td>

                                            <td>
                                                29,995
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>

                            <div className="dweoihrwerwer aiksndjhugwerwerw d-flex align-items-center justify-content-between p-2">
                                <div className="doewjirwerwer">
                                    <input type="checkbox" id="gft" className="m-1" />

                                    <label htmlFor="gft">This is a gift item</label>
                                </div>

                                <span>(Know More)</span>
                            </div>

                            <div className="oiasmdjweijrwerwer mt-4">
                                <h4>Coupon Code</h4>

                                <div className="jidnwenjrwerwer">
                                    <div class="coupon">
                                        <div class="left">
                                            <div>Coupon</div>
                                        </div>

                                        <div class="center">
                                            <div>
                                                <h3>Get Extra</h3>

                                                <h2 className="mb-0">5% OFF</h2>

                                                <small>Valid until October, 2025</small>
                                            </div>
                                        </div>

                                        <div class="right">
                                            <div>EXTRA5</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="dewuihrwe position-relative mt-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Coupon Code"
                                    />

                                    <button className="btn position-absolute btn-main">
                                        Apply
                                    </button>
                                </div>
                            </div>

                            <div className="dweoihrwerwer p-2 my-4">
                                <Table responsive>
                                    <tbody>
                                        <tr>
                                            <td>Sub Total</td>

                                            <td>
                                                <i class="bi bi-currency-rupee"></i>29,995
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>Total Discount</td>

                                            <td>
                                                (-) <i class="bi bi-currency-rupee"></i>5,999
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>Shipping Charges</td>

                                            <td>
                                                <i class="bi bi-currency-rupee"></i>0
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>

                            <div className="oiasmdjweijrwerwer pb-2 mb-3 d-flex align-items-center justify-content-between zsdvfdesdeadfrer mt-4">
                                <h4>Total Payable</h4>

                                <h4>
                                    <i class="bi bi-currency-rupee"></i>35994
                                </h4>
                            </div>

                            <div className="diewrwerhytrt mb-4 pb-2">
                                <h4>Payment Mode</h4>

                                <div className="diuhweoiejrwrer d-flex align-items-center justify-content-between">
                                    <div class="radio-wrapper-7">
                                        <label class="radio-wrapper-7" for="payment-optionsa">
                                            <input id="payment-optionsa" type="radio" name="payment-options" />
                                            
                                            <span>COD</span>
                                        </label>
                                    </div>

                                    <div class="radio-wrapper-7">
                                        <label class="radio-wrapper-7" for="payment-optionsb">
                                            <input id="payment-optionsb" type="radio" name="payment-options" />
                                            
                                            <span>RazorPay</span>
                                        </label>
                                    </div>

                                    <div class="radio-wrapper-7">
                                        <label class="radio-wrapper-7" for="payment-optionsc">
                                            <input id="payment-optionsc" type="radio" name="payment-options" disabled />
                                            
                                            <span>Paypal</span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="uiwdhiwerwerwer">
                                <button className="btn btn-main w-100 mb-3">
                                    Make Payment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-12">
                <div className="diweurbhwer_inner mt-4">
                    <div className="dfbgghdfdfgdf">
                        <div className="sdf58sdfs">
                            <h4 className="pb-2">Tranding Products</h4>
                        </div>

                        <div className="fgjhdfgdfgdf py-4">
                            <Swiper {...swiperConfig}>
                                {featuredProducts.map((featuredProduct) => (
                                    <SwiperSlide key={featuredProduct.id}>
                                        <FeaturedProducts featuredProduct={featuredProduct} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-12">
                <div className="diweurbhwer_inner mt-4">
                    <div className="dfbgghdfdfgdf">
                        <div className="sdf58sdfs">
                            <h4 className="pb-2">Recently Viewed Products</h4>
                        </div>

                        <div className="fgjhdfgdfgdf py-4">
                            <Swiper {...swiperConfig}>
                                {featuredProducts.map((featuredProduct) => (
                                    <SwiperSlide key={featuredProduct.id}>
                                        <FeaturedProducts featuredProduct={featuredProduct} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}