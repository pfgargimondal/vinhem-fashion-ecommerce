import { useEffect, useState } from "react";
import styles from "./ContactUs.module.css";
import http from "../../http";
import { ToastContainer, toast } from "react-toastify";

export const ContactUs = () => {
  const [ContactUsDetails, setContactUsDetails] = useState({});

  useEffect(() => {
    const fetchContactUsData = async () => {
      // setLoading(true);
      try {
        const getresponse = await http.get("/get-contact-us-details");
        setContactUsDetails(getresponse.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        // setLoading(false);
      }
    };

    fetchContactUsData();
  }, []);

  const [inputs, setInputs] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  // 🔹 Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  // 🔹 Validation logic
  const validateInputs = (inputs) => {
    const newErrors = {};

    if (!inputs.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(inputs.name)) {
      newErrors.name = "Name can only contain letters and spaces";
    }

    if (!inputs.mobile.trim()) {
      newErrors.mobile = "Phone number is required";
    } else if (!/^\d{10}$/.test(inputs.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit phone number";
    }

    if (!inputs.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputs.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!inputs.address) {
      newErrors.address = "Address is required";
    }

    if (!inputs.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  // 🔹 Form submission
  const submitForm = async (e) => {
    e.preventDefault();

    const validationErrors = validateInputs(inputs);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    // loading(true);

    try {
      const response = await http.post("/store-enquiry", inputs);

      if (response.data.success) {
        toast.success(response.data.message, {
          style: {
            background: "#2ecc71",
            color: "#fff",
          },
        });

        setInputs({
          name: "",
          mobile: "",
          email: "",
          address: "",
          message: "",
        });
      } else {
        toast.error(response.data.message, {
          style: {
            background: "#e74c3c", // red for error
            color: "#fff",
          },
        });
        setInputs({
          name: "",
          mobile: "",
          email: "",
          address: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong.");
    } finally {
      // loading(false);
    }
  };

  return (
    <div className={styles.jvjhubjkjoij}>
      <div className="container">
        <h1> {ContactUsDetails.data?.title && ContactUsDetails.data.title} </h1>
        <div
          className={styles.p1}
          dangerouslySetInnerHTML={{
            __html:
              ContactUsDetails.data?.description &&
              ContactUsDetails.data.description,
          }}
        />
        <div className={styles.addressSection}>
          <h3 className={styles.sjkdefnvb}>Regd. Office Address: </h3>
          <div
            dangerouslySetInnerHTML={{
              __html:
                ContactUsDetails.data?.regd_address &&
                ContactUsDetails.data.regd_address,
            }}
          />
          <h3> Branch Office Address: (Operation Center) </h3>
          <div
            dangerouslySetInnerHTML={{
              __html:
                ContactUsDetails.data?.branch_office_address &&
                ContactUsDetails.data.branch_office_address,
            }}
          />
          <h3> Warehouse Address: (Operation Center) </h3>
          <div
            dangerouslySetInnerHTML={{
              __html:
                ContactUsDetails.data?.wholeale_address &&
                ContactUsDetails.data.wholeale_address,
            }}
          />
          <br />
          <p>
            <span className={styles.highlight}> MOB : </span> +91{" "}
            {ContactUsDetails.data?.mobile && ContactUsDetails.data.mobile}{" "}
            (Timings: IST 10 to 7){" "}
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html:
                ContactUsDetails.data?.timing && ContactUsDetails.data.timing,
            }}
          />
          <br />
          <p>
            <strong className={styles.jhsdrgbzxcfbv}> Email Support: </strong>{" "}
            For Product Queries, Order & Shipping, Payments Made, Please find
            details below:
          </p>
          <p>
            <strong className={styles.jhsdrgbzxcfbv}> By Mail : </strong>
            <a href={`mailto:${ContactUsDetails.data?.support_email}`}>
              {ContactUsDetails.data?.support_email}
            </a>
            <br />
            <strong className={styles.jhsdrgbzxcfbv}> For Wholesale : </strong>
            <a href={`mailto:${ContactUsDetails.data?.wholesale_mail}`}>
              {ContactUsDetails.data?.wholesale_mail}
            </a>
          </p>
        </div>
        <p>
          {ContactUsDetails.data?.form_title &&
            ContactUsDetails.data.form_title}
        </p>
        <div className="row">
          <div className="col-lg-6">
            {/* eslint-disable-next-line */}
            {ContactUsDetails.data?.map_link && (
              <iframe
                src={`${ContactUsDetails.data.map_link}`}
                allowfullscreen
                title="Google Map"
              ></iframe>
            )}
          </div>
          <form className="col-lg-6" noValidate onSubmit={submitForm}>
            <input
              className="forn-control"
              type="text"
              name="name"
              placeholder="Full Name"
              value={inputs.name}
              onChange={handleChange}
            />
            <p style={{ color: "red" }}>{errors.name}</p>
            <input
              className="forn-control"
              type="text"
              name="mobile"
              maxLength={10}
              oninput="this.value = this.value.replace(/[^0-9.]/g, '');"
              placeholder="Contact No"
              value={inputs.mobile}
              onChange={handleChange}
            />
            <p style={{ color: "red" }}>{errors.mobile}</p>
            <input
              className="forn-control"
              type="email"
              name="email"
              placeholder="E-Mail Address"
              value={inputs.email}
              onChange={handleChange}
            />
            <p style={{ color: "red" }}>{errors.email}</p>
            <input
              className="forn-control"
              type="text"
              name="address"
              placeholder="Postal Address"
              value={inputs.address}
              onChange={handleChange}
            />
            <p style={{ color: "red" }}>{errors.address}</p>
            <textarea
              className="forn-control"
              placeholder="Enquiry"
              name="message"
              value={inputs.message}
              onChange={handleChange}
            ></textarea>
            <p style={{ color: "red" }}>{errors.message}</p>
            <div className="">
              <button className="btn btn-main">
                SUBMIT
              </button>
              {/* <button
                type="reset"
                className="btn btn-tranparent"
                style={{ textDecoration: "underline" }}
              >
                RESET
              </button> */}
            </div>
          </form>
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
