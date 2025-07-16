import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="container-fluid pt-5">
        <div className="row">
          <div className="col-lg-2 mb-4">
            <div className="dbewjbruwerwer_inner">
              <h5>Information</h5>
              {/* <img src="images/logo.png" className="img-fluid mb-4" alt="" /> */}

              <ul className="f-link mb-3 ps-0">
                <li><Link to="/about-us">About Us</Link></li>

                <li><Link to="/contact-us">Contact Us</Link></li>

                <li><Link to="/terms-&-condition">Terms & Condition</Link></li>

                <li><Link to="/">Blog</Link></li>
              </ul>

              <img src="/images/comodo.png" className="simg img-fluid" alt="" />
            </div>
          </div>

          <div className="col-lg-2 mb-4">
            <div className="dbewjbruwerwer_inner">
              <h5>My Account</h5>

              <ul className="f-link mb-0 ps-0">
                <li><Link to="">Become a Vendor</Link></li>

                <li><Link to="/login">Sign in</Link></li>

                <li><Link to="/register">Sign up</Link></li>

                <li><Link to="">Track Order</Link></li>

                <li><Link to="">F.A.Q</Link></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 mb-4">
            <div className="dbewjbruwerwer_inner">
              <h5>Customer Services</h5>

              <ul className="f-link mb-0 ps-0">
                <li><Link to="">Payment Option</Link></li>

                <li><Link to="">Testimonial</Link></li>

                <li><Link to="/career">Career</Link></li>

                <li><Link to="">Site Map</Link></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 mb-4">
            <div className="dbewjbruwerwer_inner">
              <h5>Policy</h5>

              <ul className="f-link mb-0 ps-0">
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>

                <li><Link to="/return-policy">Return Policy</Link></li>

                <li><Link to="/order-policy">Order Policy</Link></li>

                <li><Link to="/shipping-policy">Shipping Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 mb-4">
            <div className="dbewjbruwerwer_inner">
              <h5>Follow Us</h5>

              <ul className="f-fu-link mb-4 ps-0">
                <li><Link to=""><i class="bi bi-facebook"></i></Link></li>

                <li><Link to=""><i class="bi bi-instagram"></i></Link></li>

                <li><Link to=""><i class="bi bi-pinterest"></i></Link></li>

                <li><Link to=""><i class="bi bi-twitter-x"></i></Link></li>
              </ul>

              <h5>Newsletter Sign Up</h5>

              <p>Receive our latest updates about our products and promotions.</p>

              <input type="search" className="form-control" placeholder="Enter your email address" />

              <button className="btn btn-main w-100 mt-3">SUBMIT</button>
            </div>
          </div>
        </div>
      </div>

      <div className="idnweihrwerwe text-center py-3">
        <p className="jamdlkjwekrer mb-0"><i class="bi bi-c-circle"></i> 2025, Vinhem Fashion. All Rights Reserved. Designed & Developed by <Link to="">Passionate Futurist</Link></p>
      </div>        
    
      <div className="footer-bottom mt-3">
        <div className="container">
          <ul className="mb-3 d-flex justify-content-center align-items-center ps-0 imprtnt-list">
            <li><i class="bi me-1 bi-truck"></i> Worldwide Shipping</li>

            <li>|</li>

            <li><i class="bi me-1 bi-vignette"></i> Customized Tailoring</li>

            <li>|</li>

            <li><i class="bi me-1 bi-telephone"></i> +91 8981750096</li>

            <li>|</li>

            <li><i class="bi me-1 bi-whatsapp"></i> +91 8981750096</li>
          </ul>

          <p>Secure shopping from India for Sarees, Salwar Kameez, Lehenga Cholis, Mens Wear, Kids Wears, Jewellery & Accessories for delivery in USA,UK and Worldwide.</p>

          <ul className="fb-payment-options d-flex justify-content-center align-items-center ps-0 pb-3 mb-0">
            <li><img src="/images/ico-1.png" className="img-fluid" alt="" /></li>

            <li><img src="/images/ico-2.png" className="img-fluid" alt="" /></li>

            <li><img src="/images/ico-3.png" className="img-fluid" alt="" /></li>

            <li><img src="/images/ico-4.png" className="img-fluid" alt="" /></li>
          </ul>
        </div>        
      </div>    
    </footer>
  )
}