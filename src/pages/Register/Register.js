import { Link } from "react-router-dom";

import "./Css/Register.css";

export const Register = () => {
  return (
    <div className="register-login-wrapper container">
      <div className="card-custom row">
        <div className="col-lg-6 left-panel d-flex flex-column">
          <div>
            <h1>
              Simplify<br />
              management with<br />
              our <u>dashboard.</u>
            </h1>
            <p>
              Simplify your e-commerce management with our user-friendly admin dashboard.
            </p>
          </div>

          <img alt="Two people standing, one holding coffee cup wearing glasses and another wearing yellow shirt" src="/images/21726902_6509982-removebg-preview-Photoroom.png" className="img-fluid" />
        </div>

        <div className="col-lg-6 right-panel">
          <img src="/images/logo.png" className="reg-log-img mb-4 img-fluid" alt="" />

          <h2 className="welcome-title">
            Happy To Have You On-board
          </h2>
          <p className="welcome-subtitle">
            Please fill up the fields below to create a new account
          </p>

          <form>
            <input aria-label="Email address" className="form-control mb-3" placeholder="Full Name" required="" type="email" />

            <input aria-label="Email address" className="form-control mb-3" placeholder="Email address" required="" type="email" />

            <input aria-label="Email address" className="form-control mb-3" placeholder="Phone Number" required="" type="email" />

            <div className="password-wrapper mb-3">
              <input aria-label="Password" className="form-control" id="passwordInput" placeholder="Password" required="" type="password" />
              
              <button aria-label="Toggle password visibility" className="toggle-password" type="button">
                <i className="fas fa-eye-slash"></i>
              </button>
            </div>

            <div className="password-wrapper mb-3">
              <input aria-label="Password" className="form-control" id="passwordInput" placeholder="Confirm Password" required="" type="password" />
              
              <button aria-label="Toggle password visibility" className="toggle-password" type="button">
                <i className="fas fa-eye-slash"></i>
              </button>
            </div>

            <button className="btn w-100 btn-main" type="submit">
              Sign Up
            </button>
          </form>

          <p className="signup-text">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  )
}