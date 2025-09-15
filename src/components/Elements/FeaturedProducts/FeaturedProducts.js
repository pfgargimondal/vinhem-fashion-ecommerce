import { Link } from "react-router-dom";
import "./FeaturedProducts.css";
import { useAuth } from "../../../context/AuthContext";
// import useCart from "../../../hooks/useCart";
import useWishlist from "../../../hooks/useWishlist";

export const FeaturedProducts = ({ featuredProduct }) => {

    const { user } = useAuth();
    // const { addToCart } = useCart();
    const { addWishlist } = useWishlist();


    return (
        <div className="dfgjhbdfg">
            <div className="images">                          
                <div className="image position-relative">
                    <Link to={`product-details/${featuredProduct.slug}`}>
                        <div className="doiewjkrniuwewer position-relative overflow-hidden">
                            <img src={featuredProduct.encoded_image_url_1} alt="not found" />

                            <img className="first" src={featuredProduct.encoded_image_url_2} alt="not found" />

                            <div className="doikwenirnwekhrwer me-2 mt-2 d-flex position-relative">
                                {user ? (
                                    <>
                                    <button className="btn-cart mb-1"><i class="fa-solid fa-cart-arrow-down"></i></button>
                                    <button className="btn-wishlist" onClick={() => addWishlist(featuredProduct.id)}>
                                        <i class="fa-regular fa-heart"></i>
                                        <i class="fa-solid d-none fa-heart"></i>
                                    </button>
                                    </>
                                ) : (
                                    <>
                                    <Link to="/login"><button className="btn-cart mb-1"><i class="fa-solid fa-cart-arrow-down"></i></button></Link>
                                    <Link to="/login">
                                        <button className="btn-wishlist">
                                            <i class="fa-regular fa-heart"></i>
                                            <i class="fa-solid d-none fa-heart"></i>
                                        </button>
                                    </Link>
                                    </>
                                )}
                                
                            </div>

                            <div className="dbgdfhgv">
                                <button className="btn btn-main w-100">QUICK ADD</button>
                            </div>
                        </div>

                        <div className="fdbdfgdfgdf">
                            <h6>{featuredProduct.designer}</h6>

                            <h4>{featuredProduct.product_name}</h4>

                            <h5>{new Intl.NumberFormat('en-IN', {
                                style: 'currency',
                                currency: 'INR',
                                maximumFractionDigits: 0
                            }).format(featuredProduct.selling_price)}
                            </h5>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}