import { Link } from "react-router-dom";
import "./Css/Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginAPI } from "../../api/auth";
import { useAuth } from "../../context/AuthContext"; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";

export const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [captchaToken, setCaptchaToken] = useState("");

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const { login } = useAuth();

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

  const handleCaptcha = (token) => {
    setCaptchaToken(token);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const validationErrors = validateInputs(inputs);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (!captchaToken) {
      alert("Please verify reCAPTCHA");
      return;
    }

    setErrors({});

    try {
      const response = await loginAPI({
        ...inputs,
        recaptcha_token: captchaToken,
      }); // Renamed to avoid conflict

      if (response.data.success) {
        toast.success(response.data.message, {
          style: {
            background: "#2ecc71",
            color: "#fff",
          },
        });

        // 👇 Use the login() from AuthContext
        login(response.data.data.jwtToken, response.data.data); // save token & user

        navigate("/");
        setInputs({ email: "", password: "" });
      } else {
        toast.error(response.data.message, {
          style: {
            background: "#e74c3c",
            color: "#fff",
          },
        });
      }
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="register-login-wrapper container">
      <div className="card-custom row">
        <div className="col-lg-6 right-panel text-center">
          <img
            src="/images/logo.png"
            className="reg-log-img mb-4 mx-auto img-fluid"
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
            {/* ✅ reCAPTCHA Widget */}
            <ReCAPTCHA
              sitekey="6Lfg6HwrAAAAAIFNXRViSAvHT3R3edYCk8Hg_pHA" // 🔁 Replace this
              onChange={handleCaptcha}
              className="mb-3"
            />
            {!captchaToken && (
              <p style={{ color: "red" }}>Please verify reCAPTCHA</p>
            )}

            <button className="btn w-100 btn-main" type="submit">
              Login
            </button>
          </form>

          <div className="dwdwerwerwerr row my-4 align-items-center justify-content-center">
            <div className="col-lg-3 pe-0">
              <span></span>
            </div>

            <div className="col-lg-3">
              <p className="mb-0">Or Login with</p>
            </div>

            <div className="col-lg-3 ps-0">
              <span></span>
            </div>
          </div>

          <div className="doiwejojweojrwer row align-items-center">
            <div className="col-lg-6">
              <div className="dwenriwerwer_inner">
                <button className="btn btn-main w-100">
                  <img src="/images/search (2).png" alt="" /> Google
                </button>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="dwenriwerwer_inner">
                <button className="btn btn-main w-100">
                  <img src="/images/facebook (4)-Photoroom.png" alt="" />{" "}
                  Facebook
                </button>
              </div>
            </div>
          </div>

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
