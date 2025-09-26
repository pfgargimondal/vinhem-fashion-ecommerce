import { Link } from "react-router-dom";
import "./FeaturedProducts.css";
import { useAuth } from "../../../context/AuthContext";
import { useCart } from "../../../context/CartContext";
import { useWishlist } from "../../../context/WishlistContext";

export const FeaturedProducts = ({ featuredProduct }) => {

    const { user } = useAuth();
    const { addToCart } = useCart();

    const { wishlistIds, addToWishlist, removeFromWishlist } = useWishlist(); // ✅ from context
    const isWishlisted = wishlistIds.includes(featuredProduct.id);

    const toggleWishlist = () => {
        if (isWishlisted) {
        removeFromWishlist(featuredProduct.id);
        } else {
        addToWishlist(featuredProduct.id);
        }
    };


    return (
        <div className="dfgjhbdfg">
            <div className="images">                          
                <div className="image row mx-0 position-relative">
                    {featuredProduct?.discount && (
                        <div className="dscnt-prce px-0">
                        <span className="price">{featuredProduct?.discount}% OFF</span>
                        </div>
                    )}

                    {(featuredProduct?.new_arrival.toLowerCase() === "yes") && (
                        <div className="nw-arrvl px-0">
                        <span className="price">New Arrival</span>
                        </div>
                    )}   
                    <div className="doiewjkrniuwewer position-relative overflow-hidden">
                        <Link to={`/products/${featuredProduct.slug}`}>
                            <img src={featuredProduct.encoded_image_url_1} alt="not found" />

                            <img className="first" src={featuredProduct.encoded_image_url_2} alt="not found" />
                        </Link>

                        <div className="doikwenirnwekhrwer me-2 mt-2 d-flex position-relative">
                            {user ? (
                                <>
                                <button className="btn-cart mb-1" type="button" onClick={() => addToCart(featuredProduct.id)}><i class="fa-solid fa-cart-arrow-down"></i></button>
                                {/* <button className="btn-wishlist" type="button" onClick={() => addToWishlist (featuredProduct.id)}>
                                    <i class="fa-regular fa-heart"></i>
                                    <i class="fa-solid d-none fa-heart"></i>
                                </button> */}

                                <button
                                    className="btn-wishlist"
                                    type="button"
                                    onClick={toggleWishlist}
                                >
                                    {isWishlisted ? (
                                        <i className="fa-solid fa-heart"></i>
                                    ) : (
                                        <i className="fa-regular fa-heart"></i>
                                    )}
                                </button>
                                </>
                            ) : (
                                <>
                                <Link to="/login"><button className="btn-cart mb-1" type="button"><i class="fa-solid fa-cart-arrow-down"></i></button></Link>
                                <Link to="/login">
                                    <button className="btn-wishlist" type="button">
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
                        <h6 className="me-1"><i class="bi me-1 bi-truck"></i> Ships in {featuredProduct.shipping_time}</h6>

                        {featuredProduct.product_category === "READY TO SHIP" && (
                        <h6><i class="bi bi-rocket-takeoff"></i> Ready to ship</h6>
                        )}

                        <h4>{featuredProduct.product_name}</h4>

                        <h5>{new Intl.NumberFormat('en-IN', {
                            style: 'currency',
                            currency: 'INR',
                            maximumFractionDigits: 0
                        }).format(featuredProduct.selling_price)}
                        </h5>
                    </div>
                    
                </div>
            </div>

            
        </div>
    )
}