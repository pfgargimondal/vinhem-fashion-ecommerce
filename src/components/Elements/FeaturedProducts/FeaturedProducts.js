import "./FeaturedProducts.css";

export const FeaturedProducts = ({ featuredProduct }) => {
    return (
        <div className="dfgjhbdfg">
            <div className="images">
                <div className="image position-relative">
                    <img src={featuredProduct.img1} alt="not found" />

                    <img className="first" src={featuredProduct.img2} alt="not found" />

                    <div className="dbgdfhgv">
                        <button>QUICK ADD</button>
                    </div>

                    <div className="fdbdfgdfgdf">
                        <h6>{featuredProduct.title}</h6>
                        <h4>{featuredProduct.description}</h4>
                        <h5>${featuredProduct.price}</h5>
                    </div>
                    <div className="dsgdfgsdf">
                        <div className="selection-group">
                            <input id="a" type="radio" name="rate" defaultValue="a" />
                            <label htmlFor="a">
                                <img src="/images/color1 (1).jpg" alt=""/>
                            </label>

                            <input id="b" type="radio" name="rate" defaultValue="b" />
                            <label htmlFor="b">
                                <img src="/images/color1 (1).png" alt=""/>
                            </label>

                            <input id="c" type="radio" name="rate" defaultValue="c" defaultChecked="" />
                            <label htmlFor="c">
                                <img src="/images/color1 (2).png" alt=""/>
                            </label>
                        </div>
                        <p>MORE SIZE AVAILABLE</p>
                    </div>
                </div>
            </div>
        </div>
    )
}