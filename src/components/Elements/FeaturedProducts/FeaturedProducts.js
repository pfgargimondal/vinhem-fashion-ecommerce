import "./FeaturedProducts.css";

export const FeaturedProducts = ({ featuredProduct }) => {
    return (
        <div className="dfgjhbdfg">
            <div className="images">                          
                <div className="image position-relative">
                    <div className="doiewjkrniuwewer position-relative overflow-hidden">
                        <img src={featuredProduct.img1} alt="not found" />

                        <img className="first" src={featuredProduct.img2} alt="not found" />

                        <div className="doikwenirnwekhrwer me-2 mt-2 d-flex position-relative">
                            <button className="btn-cart mb-1"><i class="fa-solid fa-cart-arrow-down"></i></button>

                            <button className="btn-wishlist">
                                <i class="fa-regular fa-heart"></i>

                                <i class="fa-solid d-none fa-heart"></i>
                            </button>
                        </div>

                        <div className="dbgdfhgv">
                            <button className="btn btn-main w-100">QUICK ADD</button>
                        </div>
                    </div>

                    <div className="fdbdfgdfgdf">
                        <h6>{featuredProduct.title}</h6>

                        <h4>{featuredProduct.description}</h4>

                        <h5>${featuredProduct.price}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}