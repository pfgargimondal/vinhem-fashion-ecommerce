import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import "./Css/Checkout.css";
import "swiper/css";
import RecentlyViewed from "../../hooks/RecentlyViewed";
import TrandingProduct from "../../hooks/TrandingProduct";
import { useCallback, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import http from "../../http";
import { useCurrency } from "../../context/CurrencyContext";

export const Checkout = () => {

    const { token } = useAuth();
    const [biToggle, setBiToggle] = useState(true);
    const [onChecked, setOnChecked] = useState(false);
    const { selectedCurrency } = useCurrency();
    const [couponItems, setcouponItems] = useState([]);
    // eslint-disable-next-line
    const [cartItems, setcartItems] = useState([]);
    // eslint-disable-next-line
    const [totalPrice, settotalPrice] = useState([]);
    
    useEffect(() => {
        if (!token) return;

        const fetchCoupon = async () => {
        try {
            const res = await http.get("/user/get-all-coupon", {
            headers: { Authorization: `Bearer ${token}` },
            });
            setcouponItems(res.data.data || []);
        } catch (error) {
            console.error("Failed to fetch cart list", error);
        }
        };

        fetchCoupon();
    }, [token]);

    const ValidityDate = (expiryDate) => {
        const date = new Date(expiryDate);
        const options = { month: "long", year: "numeric" };
        const formattedDate = date.toLocaleDateString("en-US", options);
        return `${formattedDate}`;
    }

    const fetchCartProduct = useCallback(async () => {
        if (!token || !selectedCurrency) return;

        try {
        const res = await http.post(
            "/user/get-cart-allProduct",
            { country: selectedCurrency.country_name },
            { headers: { Authorization: `Bearer ${token}` } }
        );
        setcartItems(res.data.data || []);
        settotalPrice(res.data.total_cart_price || "");
        } catch (error) {
        console.error("Failed to fetch cart list", error);
        }
    }, [token, selectedCurrency]);

    useEffect(() => {
        fetchCartProduct();
    }, [fetchCartProduct]);

    const handleChecked = (e) => {
        setOnChecked(e.target.checked);
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
                                <Link to={'/cart'}>
                                    <button className="btn px-3 me-2 btn-main">
                                        <i class="fa-solid me-1 fa-arrow-left"></i> Back To Cart
                                    </button>
                                </Link>
                                <Link to={'/all-products'}>
                                    <button className="btn px-3 btn-main">
                                        Continue Shopping
                                    </button>
                                </Link>
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
                                        <Link to="/shipping-policy">Shipping Policy</Link>
                                    </li>

                                    <li>
                                        <Link to="/">Help</Link>
                                    </li>

                                    <li>
                                        <Link to="/contact-us">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="diwebjrwert_right sticky-top">
                            <div className="oiasmdjweijrwerwer">
                                <h4>Coupon Code</h4>

                                {couponItems?.map((couponItemsVal) => (
                                <div className="jidnwenjrwerwer mb-2">
                                    <div class="coupon">
                                    <div class="left">
                                        <div>Coupon</div>
                                    </div>

                                    <div class="center">
                                        <div>
                                        <h3>Get Extra</h3>

                                        <h2 className="mb-0"><i class="bi bi-currency-rupee"></i>{parseInt(couponItemsVal.value)} OFF</h2>

                                        <small>Valid until {ValidityDate(
                                                    couponItemsVal.expiry_date
                                                )}
                                        </small>
                                        </div>
                                    </div>

                                    <div class="right">
                                        <div>{couponItemsVal.code}</div>
                                    </div>
                                    </div>
                                </div>
                                ))}

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

                                                <p className="mb-1">Customize: <span><a href="/">Add Details</a></span></p>
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
                     <TrandingProduct />
                </div>
            </div>

            <div className="col-lg-12">
                <div className="diweurbhwer_inner mt-4">
                    <RecentlyViewed />
                </div>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={3000}
                style={{ zIndex: 9999999999 }}
            />
        </div>
    )
}