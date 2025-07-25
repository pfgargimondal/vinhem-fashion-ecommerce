import { Link } from "react-router-dom";

import { UserProfileNavMenu } from "../../components";

import styles from "./Css/Wishlist.module.css";


export const Wishlist = () => {
    return (
        <div className={styles.ffhfdf}>
            <div className="ansjidnkuiweer container-fluid px-0">
                <div className={styles.fbghdfg}>
                    <div className="row">
                        <div className="col-lg-3">
                            <UserProfileNavMenu />
                        </div>

                        <div className="col-lg-9">
                            <div className={`${styles.fgcbdfgdf} pt-3 pb-5`}>
                                <div className={`${styles.dfjhdsbfsdf} mb-4`}>
                                    <h4 className="mb-0">Your Wishlist(5)</h4>

                                    <div className="dowehrkjwerwer d-flex align-items-center">
                                        <p className="ndiwhermweoewrr mb-0 me-3">
                                            <Link to="/"><i className="fa-solid me-1 fa-arrow-left"></i> Back To Home <i className="fa-solid ms-1 fa-house"></i></Link>
                                        </p>
                                        
                                        <button className="btn btn-main">Add To Cart <i class="fa-solid ms-1 fa-cart-arrow-down"></i></button>
                                    </div>
                                </div>

                                <div className={styles.fbgdfhgdfgdg}>
                                    <div className="row">
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
                                            <div className={styles.dfgjhbdfg}>
                                                <div className={styles.images}>
                                                    <div className={`${styles.image} position-relative`}>
                                                        <img src="/images/product1 (1).webp" alt="not found" />
                                                       
                                                        <img className={styles.first} src="/images/product1 (2).webp" alt="not found" />

                                                        <div className={styles.dbgdfhgv}>
                                                            <button>QUICK ADD</button>
                                                        </div>

                                                        <div className={styles.fdbdfgdfgdf}>
                                                            <h6>COLLETTE</h6>
                                                            
                                                            <h4>(Product 35) Sample - Clothing And Accessory Boutiques For Sale</h4>
                                                            
                                                            <h5>$48.99</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
                                            <div className={styles.dfgjhbdfg}>
                                                <div className={styles.images}>
                                                    <div className={`${styles.image} position-relative`}>
                                                        <img src="/images/product1 (1).webp" alt="not found" />
                                                       
                                                        <img className={styles.first} src="/images/product1 (2).webp" alt="not found" />

                                                        <div className={styles.dbgdfhgv}>
                                                            <button>QUICK ADD</button>
                                                        </div>

                                                        <div className={styles.fdbdfgdfgdf}>
                                                            <h6>COLLETTE</h6>
                                                            
                                                            <h4>(Product 35) Sample - Clothing And Accessory Boutiques For Sale</h4>
                                                            
                                                            <h5>$48.99</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
                                            <div className={styles.dfgjhbdfg}>
                                                <div className={styles.images}>
                                                    <div className={`${styles.image} position-relative`}>
                                                        <img src="/images/product1 (1).webp" alt="not found" />
                                                       
                                                        <img className={styles.first} src="/images/product1 (2).webp" alt="not found" />

                                                        <div className={styles.dbgdfhgv}>
                                                            <button>QUICK ADD</button>
                                                        </div>

                                                        <div className={styles.fdbdfgdfgdf}>
                                                            <h6>COLLETTE</h6>
                                                            
                                                            <h4>(Product 35) Sample - Clothing And Accessory Boutiques For Sale</h4>
                                                            
                                                            <h5>$48.99</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
                                            <div className={styles.dfgjhbdfg}>
                                                <div className={styles.images}>
                                                    <div className={`${styles.image} position-relative`}>
                                                        <img src="/images/product1 (1).webp" alt="not found" />
                                                       
                                                        <img className={styles.first} src="/images/product1 (2).webp" alt="not found" />

                                                        <div className={styles.dbgdfhgv}>
                                                            <button>QUICK ADD</button>
                                                        </div>

                                                        <div className={styles.fdbdfgdfgdf}>
                                                            <h6>COLLETTE</h6>
                                                            
                                                            <h4>(Product 35) Sample - Clothing And Accessory Boutiques For Sale</h4>
                                                            
                                                            <h5>$48.99</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
                                            <div className={styles.dfgjhbdfg}>
                                                <div className={styles.images}>
                                                    <div className={`${styles.image} position-relative`}>
                                                        <img src="/images/product1 (1).webp" alt="not found" />
                                                       
                                                        <img className={styles.first} src="/images/product1 (2).webp" alt="not found" />

                                                        <div className={styles.dbgdfhgv}>
                                                            <button>QUICK ADD</button>
                                                        </div>

                                                        <div className={styles.fdbdfgdfgdf}>
                                                            <h6>COLLETTE</h6>
                                                            
                                                            <h4>(Product 35) Sample - Clothing And Accessory Boutiques For Sale</h4>
                                                            
                                                            <h5>$48.99</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}