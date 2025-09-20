import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import "./Css/Cart.css";
import "swiper/css";
import RecentlyViewed from "../../hooks/RecentlyViewed";
import { ToastContainer } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import http from "../../http";
import { useWishlist } from "../../context/WishlistContext";
import TrandingProduct from "../../hooks/TrandingProduct";
import { useCurrency } from "../../context/CurrencyContext";

export const Cart = () => {
  const { token } = useAuth();
  const [cartItems, setcartItems] = useState([]);
  const [totalPrice, settotalPrice] = useState([]);
  const [couponItems, setcouponItems] = useState([]);

  const { selectedCurrency } = useCurrency();

  useEffect(() => {
     if (!token || !selectedCurrency) return;

    const fetchCartlist = async () => {
      try {
        const res = await http.post(
        "/user/get-cart-user",
        {
          country: selectedCurrency.country_name, // ✅ safe now
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
        setcartItems(res.data.data || []);
        settotalPrice(res.data.total_cart_price || "");
      } catch (error) {
        console.error("Failed to fetch cart list", error);
      }
    };

    fetchCartlist();
  }, [token, selectedCurrency]);

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

  const getEstimatedShippingDate = (shipping_time) => {
    const days = parseInt(shipping_time);
    if (isNaN(days)) return "";

    const date = new Date();
    date.setDate(date.getDate() + days);

    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    // const year = date.getFullYear();

    return `${day}${getDaySuffix(day)} of ${month}`;
  };

  const getDaySuffix = (day) => {
    if (day >= 11 && day <= 13) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };


  const ValidityDate = (expiryDate) => {
      const date = new Date(expiryDate);

      const options = { month: "long", year: "numeric" };
      const formattedDate = date.toLocaleDateString("en-US", options);

      return `${formattedDate}`;
  }
  const { wishlistIds, addToWishlist, removeFromWishlist } = useWishlist(); // ✅ from context

  const toggleWishlist = (productId) => {
    if (wishlistIds.includes(productId)) {
      removeFromWishlist(productId);
    } else {
      addToWishlist(productId);
    }
  };

  const handleRemoveItem = async (cartItemId) => {
    if (!token) return;

    try {
      await http.post(
        "/user/remove-product-from-cart",
        { cart_item_id: cartItemId },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // Remove locally from state
      setcartItems((prev) => prev.filter((item) => item.id !== cartItemId));
    } catch (error) {
      console.error("Failed to remove item", error);
    }
  };

  return (
    <div>
      <div className="cart-wrapper py-4">
        <div className="row justify-content-between">
          <div className="col-lg-8">
            <div className="diwebjrwert_left">
              <h4 className="mb-4">Your Shopping Cart</h4>

              <div className="odnwejirhwerwer py-2 px-3">
                <p className="mb-0 d-flex align-items-center">
                  Shop for ₹6,004 more to get additional offers on your order.
                  To know more{" "}
                  <button className="btn ms-2 py-2 btn-main">
                    <i class="bi me-1 bi-whatsapp"></i> Chat With Us
                  </button>
                </p>
              </div>

              <div className="dowejroihwrt_wrapper mt-4">
                {cartItems?.length === 0 && <p>No items in cart</p>}
                {cartItems?.map((cartItemsVal) => (
                  <div className="dfgjhbdfg position-relative p-3 mb-4">
                    <div className="row">
                      <div className="col-lg-2">
                        <div className="donweihrwewer">
                          <img
                            src={cartItemsVal.encoded_image_url_1}
                            alt={cartItemsVal.product_name}
                          />
                        </div>
                      </div>

                      <div className="col-lg-10">
                        <div className="dowehriwerwer">
                          <div className="dknwekhwe py-2">
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                              <h4 className="mb-0">
                                {cartItemsVal.product_name}
                              </h4>

                              <h5 className="mb-0">
                                <span className="old-price">
                                  <i class="bi bi-currency-rupee"></i>
                                  {cartItemsVal.mrp_price}
                                </span>
                                <span>
                                  <i class="bi bi-currency-rupee"></i>
                                  {cartItemsVal.selling_price}
                                </span>
                              </h5>
                            </div>

                            <span className="dscnt-offr text-white position-absolute py-1 px-2">
                              {cartItemsVal.discount}% OFF
                            </span>
                          </div>

                          <div className="dnweghbjewrwer">
                            <p className="mb-1">{cartItemsVal.designer}</p>

                            <span className="copn-cde">
                              CODE: {cartItemsVal.vendor_sku}
                            </span>

                            <div className="doewrwerwer">
                              <div className="row">
                                <div className="col-lg-3 mt-2 mb-3">
                                  <div className="deiwnriwehrwer">
                                    <label
                                      htmlFor=""
                                      className="form-label mb-1"
                                    >
                                      Choose Size:
                                    </label>

                                    <select
                                      name=""
                                      className="form-select py-1"
                                      id=""
                                    >
                                      {cartItemsVal.size_chart?.map(
                                        (sizeChartVal) => (
                                          <option
                                            value={sizeChartVal.size_name}
                                          >
                                            {sizeChartVal.size_name}
                                          </option>
                                        )
                                      )}
                                    </select>
                                  </div>
                                </div>

                                <div className="col-lg-3 mt-2 mb-3">
                                  <div className="deiwnriwehrwer">
                                    <label
                                      htmlFor=""
                                      className="form-label mb-1"
                                    >
                                      Choose Qty:
                                    </label>

                                    <select
                                      name=""
                                      className="form-select py-1"
                                      id=""
                                    >
                                      <option value="">1</option>

                                      <option value="">2</option>

                                      <option value="">3</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="djkwehrwerwer d-flex align-items-center justify-content-between">
                              <h6 className="mb-0">
                                <i class="bi me-1 bi-calendar-week"></i>
                                Estimated Shipping Date:
                                <span>
                                  {getEstimatedShippingDate(
                                    cartItemsVal.shipping_time
                                  )}
                                </span>
                              </h6>

                              <div className="dewhrowerwer">
                                <i
                                  onClick={() =>
                                    toggleWishlist(
                                      cartItemsVal.products_table_id
                                    )
                                  }
                                  className={
                                    wishlistIds.includes(
                                      cartItemsVal.products_table_id
                                    )
                                      ? "fa-solid fa-heart"
                                      : "fa-regular fa-heart"
                                  }
                                  style={{ cursor: "pointer" }}
                                ></i>

                                <i
                                  class="bi bi-x-lg"
                                  onClick={() =>
                                    handleRemoveItem(cartItemsVal.id)
                                  }
                                ></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="uiwdhiwerwerwer dojweirkwejirwer">
                <Link to={"/all-produtcs"}>
                  <button className="btn px-5 btn-main">
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

          <div className="col-lg-4">
            <div className="diwebjrwert_right sticky-top">
              <h4 className="mb-4">Cart Summary</h4>

              <div className="dweoihrwerwer p-2 mb-4">
                <Table responsive>
                  <tbody>
                    <tr>
                      <td>Cart Total</td>

                      <td>
                        <i class="bi bi-currency-rupee"></i>
                        {totalPrice.total_selling_price}
                      </td>
                    </tr>

                    <tr>
                      <td>Total Discount</td>

                      <td>
                        (-) <i class="bi bi-currency-rupee"></i>{totalPrice.total_discount_price}
                      </td>
                    </tr>

                    <tr>
                      <td>Shipping</td>

                      <td>
                        <i class="bi bi-currency-rupee"></i>0
                      </td>
                    </tr>
                  </tbody>
                </Table>

                <p className="px-2">
                  Shipping charges to be calculated on Checkout
                </p>
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

              <div className="oiasmdjweijrwerwer pb-2 mb-4 d-flex align-items-center justify-content-between zsdvfdesdeadfrer mt-4">
                <h4>Total Payable</h4>

                <h4>
                  <i class="bi bi-currency-rupee"></i>{totalPrice.total_selling_price}
                </h4>
              </div>

              <div className="uiwdhiwerwerwer">
                <button className="btn btn-main w-100 mb-3">
                  Proceed To Checkout
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
  );
};
