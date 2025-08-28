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
                <h2 className="chkout-heading text-center mb-3">ONE STEP CHECKOUT</h2>

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

                            <div className="omweojuirhwerrr pt-4">
                                <h4 className="mb-3">SELECT PAYMENT METHOD</h4>

                                <div className="doiweuijrwerwer">
                                    <div className="radio-wrapper-26 mb-3">
                                        <label htmlFor="example-26sda">
                                            <div className="inputAndLeftText d-flex">
                                                <input id="example-26sda" type="radio" name="radio-examples" />
                                                
                                                <div className="ms-2">
                                                    <span className="title">UPI (Gpay, PhonePe, Paytm etc)</span>
                                                </div>
                                            </div>
                                        </label>
                                    </div>

                                    <div className="radio-wrapper-26 mb-3">
                                        <label htmlFor="example-26sweda">
                                            <div className="inputAndLeftText d-flex">
                                                <input id="example-26sweda" type="radio" name="radio-examples" />
                                                
                                                <div className="ms-2">
                                                    <span className="title">Credit Card</span>
                                                </div>
                                            </div>
                                        </label>
                                    </div>

                                    <div className="radio-wrapper-26 mb-3">
                                        <label htmlFor="example-sdsd">
                                            <div className="inputAndLeftText d-flex">
                                                <input id="example-sdsd" type="radio" name="radio-examples" />
                                                
                                                <div className="ms-2">
                                                    <span className="title">Debit Card</span>
                                                </div>
                                            </div>
                                        </label>
                                    </div>

                                    <div className="radio-wrapper-26 mb-3">
                                        <label htmlFor="example-sddsw">
                                            <div className="inputAndLeftText d-flex">
                                                <input id="example-sddsw" type="radio" name="radio-examples" />
                                                
                                                <div className="ms-2">
                                                    <span className="title">Netbanking</span>
                                                </div>
                                            </div>
                                        </label>
                                    </div>

                                    <div className="radio-wrapper-26 mb-3">
                                        <label htmlFor="example-sader">
                                            <div className="inputAndLeftText d-flex">
                                                <input id="example-sader" type="radio" name="radio-examples" />
                                                
                                                <div className="ms-2">
                                                    <span className="title">Razor Pay</span>
                                                </div>
                                            </div>
                                        </label>
                                    </div>

                                    <div className="radio-wrapper-26 mb-3">
                                        <label htmlFor="example-rerr">
                                            <div className="inputAndLeftText d-flex">
                                                <input id="example-rerr" type="radio" name="radio-examples" />
                                                
                                                <div className="ms-2">
                                                    <span className="title">Pay Pal</span>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                <div className="dfiwehrwerwe mb-5">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue=""
                                            id="flexCheckDefasadsult"
                                        />

                                        <label className="form-check-label" htmlFor="flexCheckDefasadsult">
                                            I agree to the terms and conditions (read T&C)
                                        </label>
                                    </div>
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
                            <div className="oiasmdjweijrwerwer">
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

                            <div className="d-flex justify-content-between mt-4 mb-3 align-items-center">
                                <h4 className="mb-0">Order Details - <span>1 Item(s)</span></h4>

                                <i class="fa-solid fa-angle-up"></i>
                            </div>

                            {/* <div className="doejwojrwerwe">
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
                            </div> */}

                            <div className="doiwehirhweker p-2">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="idjkewerr_left">
                                            <img src="/images/product1 (1).webp" alt="" />
                                        </div>
                                    </div>

                                    <div className="col-lg-9">
                                        <div className="idjkewerr_right">
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                                <h4 className="mb-0">Megha Pitti</h4>

                                                <div className="asojerdmjer">
                                                    <i class="fa-regular me-3 fa-heart"></i>

                                                    <i class="fa-regular me-3 fa-trash-can"></i>
                                                </div>
                                            </div>

                                            <p className="mb-1">Forest Print Long Kurta Set</p>

                                            <div className="d-flex align-items-center">
                                                <p className="mb-1">Color: <span>Pink</span></p>

                                                <p className="mb-1">Size: <span>S</span></p>

                                                <p className="mb-1">Customize: <span><a href="">Add Details</a></span></p>
                                            </div>

                                            <p className="mb-1">Price: <span><i class="fa-solid fa-indian-rupee-sign"></i>22,000</span></p>

                                            <p><i class="bi me-1 bi-truck"></i> 3 days return/exchange available</p>                                            
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="dweoihrwerwer sdverewerrr p-2 my-4">
                                <h4 className="mb-2 pb-2">Price Details</h4>

                                <Table responsive>
                                    <tbody>
                                        <tr>
                                            <td>Bag Total</td>

                                            <td>
                                                <i class="bi bi-currency-rupee"></i>29,995
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

                                <div className="deoiwjirwer p-2 mt-2 text-center">
                                    <p className="mb-0"><i class="fa-solid me-1 fa-truck"></i> Add items worth <i class="fa-solid fa-indian-rupee-sign"></i>12502 to get free shipping.</p>
                                </div>

                                <div className="sfdvsrfewewerer">
                                    <div className="oiasmdjweijrwerwer pt-2 cvsdfeerrr mb-2 d-flex align-items-center justify-content-between zsdvfdesdeadfrer mt-4">
                                        <h4 className="mb-0">TOTAL PAYABLE</h4>

                                        <h4 className="mb-0">
                                            <i class="bi bi-currency-rupee"></i>35994
                                        </h4>
                                    </div>

                                    <div className="oiasmdjweijrwerwer fsdgwederetert pt-2 fdgreerewwr mb-2 d-flex align-items-center justify-content-between zsdvfdesdeadfrer">
                                        <h4 className="mb-0">YOUR TOTAL SAVINGS</h4>

                                        <h4 className="mb-0">
                                            <i class="bi bi-currency-rupee"></i>0
                                        </h4>
                                    </div>
                                </div>
                            </div>                            

                            <div className="fregrwrget">
                                <button className="btn btn-main w-100 mb-3">
                                    Place Order
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