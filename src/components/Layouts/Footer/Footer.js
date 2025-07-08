import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="container-fluid pt-5">
        <div className="row">
          <div className="col-lg-3 mb-4">
            <div className="dbewjbruwerwer_inner">
              <img src="images/logo.png" className="img-fluid mb-4" alt="" />

              <p>685 Market Street <br />
                San Francisco, CA 94105, <br />
                United States</p>

              <p className="mb-1"><i class="bi me-2 bi-chat-left-dots-fill"></i> Text: <a href="/">(090) 123-Vinhem</a></p>

              <p><i class="bi me-2 bi-envelope-fill"></i> <a href="/">email@domain.com</a></p>
            </div>
          </div>

          <div className="col-lg-2 mb-4">
            <div className="dbewjbruwerwer_inner">
              <h5>Shop By</h5>

              <ul className="f-link mb-0 ps-0">
                <li><Link to="">New In</Link></li>

                <li><Link to="">Women</Link></li>

                <li><Link to="">Men</Link></li>

                <li><Link to="">Shoes</Link></li>

                <li><Link to="">Bags & Accessories</Link></li>

                <li><Link to="">Top Brands</Link></li>

                <li><Link to="">Sale & Special Offers</Link></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 mb-4">
            <div className="dbewjbruwerwer_inner">
              <h5>Information</h5>

              <ul className="f-link mb-0 ps-0">
                <li><Link to="">About Us</Link></li>

                <li><Link to="">Blog</Link></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 mb-4">
            <div className="dbewjbruwerwer_inner">
              <h5>Customer Service</h5>

              <ul className="f-link mb-0 ps-0">
                <li><Link to="">Search Terms</Link></li>

                <li><Link to="">Advanced Search</Link></li>

                <li><Link to="">Orders And Returns</Link></li>

                <li><Link to="">Contact Us</Link></li>

                <li><Link to="">Themes FAQs</Link></li>

                <li><Link to="">Consultant</Link></li>

                <li><Link to="">Store Locations</Link></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 mb-4">
            <div className="dbewjbruwerwer_inner">
              <h5>Follow Us</h5>

              <ul className="f-fu-link mb-5 ps-0">
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

        <div className="footer-bottom d-flex mt-5 justify-content-between align-items-center">
          <p className="jamdlkjwekrer mb-0"><i class="bi bi-c-circle"></i> 2025, Vinhem Fashion. All Rights Reserved. Designed & Developed by <Link to="">Passionate Futurist</Link></p>

          <ul className="fb-payment-options ps-0 mb-0">
            <li><img src="images/visa.png" alt="" /></li>

            <li><img src="images/visa.png" alt="" /></li>

            <li><img src="images/visa.png" alt="" /></li>

            <li><img src="images/visa.png" alt="" /></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}