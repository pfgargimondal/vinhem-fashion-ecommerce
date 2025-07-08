import { Link } from "react-router-dom";
import "./Css/Login.css";

export const Login = () => {
  return (
    <div className="register-login-wrapper container">
      <div className="card-custom row">
        <div className="col-lg-6 right-panel">
          <img src="/images/logo.png" className="reg-log-img mb-4 img-fluid" alt="" />

          <h2 className="welcome-title">
            Welcome Back
          </h2>
          <p className="welcome-subtitle">
            Please login to your account
          </p>
 
          <form>
            <input aria-label="Email address" className="form-control mb-3" placeholder="Email address" required="" type="email" />

            <div className="password-wrapper mb-1">
              <input aria-label="Password" className="form-control" id="passwordInput" placeholder="Password" required="" type="password" />

              <button aria-label="Toggle password visibility" className="toggle-password" type="button" onclick="togglePassword()">
                <i className="fas fa-eye-slash"></i>
              </button>
            </div>

            <Link className="forgot-link my-3" to="/"> Forgot password?</Link>

            <button className="btn w-100 btn-main" type="submit">
              Login
            </button>
          </form>

          <p className="signup-text">
            Don't have an account? <Link to="/register">Signup</Link>
          </p>
        </div>

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
      </div>
    </div>
  )
}