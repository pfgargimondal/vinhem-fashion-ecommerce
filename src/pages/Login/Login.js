import { Link } from "react-router-dom";
import "./Css/Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../api/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });
  
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
  
    // 🔹 Handle input change
    const handleChange = (e) => {
      const { name, value } = e.target;
      setInputs({ ...inputs, [name]: value });
    };
  
    const validateInputs = (inputs) => {
        const newErrors = {};

        if (!inputs.email.trim()) {
          newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputs.email)) {
          newErrors.email = "Enter a valid email address";
        }

        if (!inputs.password) {
          newErrors.password = "Password is required";
        } else if (inputs.password.length < 6) {
          newErrors.password = "Password must be at least 6 characters";
        }

        return newErrors;
      };
  
  
    const handleLogin = async (e) => {
      e.preventDefault();
  
      const validationErrors = validateInputs(inputs);
  
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
          return;
        }
  
        setErrors({});
  
      try {
        const response = await login(inputs);
        
        if (response.data.success) {
              toast.success(response.data.message, {
                style: {
                  background: "#2ecc71",
                  color: "#fff",
                },
              });
  
              localStorage.setItem('jwt_token', response.data.token);
              navigate('/');
  
              setInputs({
                  email: '',
                  password: ''
              });
          }else{
            toast.error(response.data.message, {
                style: {
                  background: "#e74c3c", // red for error
                  color: "#fff",
                },
              });
              setInputs({
                  email: '',
                  password: ''
              });
          }
  
      } catch (err) {
        alert(err.response?.data?.message || 'Registration failed');
      }
    };

  return (
    <div className="register-login-wrapper container">
      <div className="card-custom row">
        <div className="col-lg-6 right-panel">
          <img
            src="/images/logo.png"
            className="reg-log-img mb-4 img-fluid"
            alt=""
          />

          <h2 className="welcome-title">Welcome Back</h2>
          <p className="welcome-subtitle">Please login to your account</p>

          <form onSubmit={handleLogin}>
            <input
              aria-label="Email address"
              className="form-control mb-3"
              placeholder="Email address"
              required=""
              type="email"
              name="email"
              onChange={handleChange}
              value={inputs.email}
            />
            <p style={{ color: "red" }}>{errors.name}</p>

            <div className="password-wrapper mb-1">
              <input
                aria-label="Password"
                className="form-control"
                id="passwordInput"
                placeholder="Password"
                required=""
                type="password"
                name="password"
                onChange={handleChange}
                value={inputs.password}
              />
              <p style={{ color: "red" }}>{errors.password}</p>

              <button
                aria-label="Toggle password visibility"
                className="toggle-password"
                type="button"
                onclick="togglePassword()"
              >
                <i className="fas fa-eye-slash"></i>
              </button>
            </div>

            <Link className="forgot-link my-3" to="/">
              {" "}
              Forgot password?
            </Link>

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
              Simplify
              <br />
              management with
              <br />
              our <u>dashboard.</u>
            </h1>
            <p>
              Simplify your e-commerce management with our user-friendly admin
              dashboard.
            </p>
          </div>

          <img
            alt="Two people standing, one holding coffee cup wearing glasses and another wearing yellow shirt"
            src="/images/21726902_6509982-removebg-preview-Photoroom.png"
            className="img-fluid"
          />
        </div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          style={{ zIndex: 9999999999 }}
        />
      </div>
    </div>
  );
};
