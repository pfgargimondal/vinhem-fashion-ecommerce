import { useEffect, useState } from "react";
import "./ContactUs.css";
import http from "../../http";
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

  return (
    <div>
      <div class="container">
        <h1> {ContactUsDetails.data?.title && ContactUsDetails.data.title} </h1>
        <div class="p1"
            dangerouslySetInnerHTML={{
              __html:
                ContactUsDetails.data?.description &&
                ContactUsDetails.data.description,
            }}
        />
        <div class="address-section">
          <div
            dangerouslySetInnerHTML={{
              __html:
                ContactUsDetails.data?.regd_address &&
                ContactUsDetails.data.regd_address,
            }}
          />
          <div
            dangerouslySetInnerHTML={{
              __html:
                ContactUsDetails.data?.branch_office_address &&
                ContactUsDetails.data.branch_office_address,
            }}
          />
          <div
            dangerouslySetInnerHTML={{
              __html:
                ContactUsDetails.data?.wholeale_address &&
                ContactUsDetails.data.wholeale_address,
            }}
          />
          <br />
          <p>
            <span class="highlight"> MOB : </span> +91 {ContactUsDetails.data?.mobile && ContactUsDetails.data.mobile} (Timings: IST
            10 to 7){" "}
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html:
                ContactUsDetails.data?.timing &&
                ContactUsDetails.data.timing,
            }}
          />
          <br />
          <p>
            <strong> Email Support: </strong> For Product Queries, Order &
            Shipping, Payments Made, Please find details below:
          </p>
          <p>
            <strong> By Mail : </strong>
            <a href={`mailto:${ContactUsDetails.data?.support_email}`}>
              {ContactUsDetails.data?.support_email}
            </a>
            <br />
            <strong> For Wholesale : </strong>
            <a href={`mailto:${ContactUsDetails.data?.wholesale_mail}`}>
              {ContactUsDetails.data?.wholesale_mail}
            </a>
          </p>
        </div>
        <p>
          If you are still finding queries or have any other opinion, you can
          always fill this form, and contact us with your valuable ideas. We are
          here waiting for you.
        </p>
        <div class="form-map-wrapper">
          <div class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.900142126295!2d-73.9881131!3d40.7588956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855d76b0c65%3A0xaaf37d3b750d2ad9!2sTimes%20Square%2C%20New%20York%2C%20NY%2010036!5e0!3m2!1sen!2sus!4v1720458423374!5m2!1sen!2sus"
              allowfullscreen
            ></iframe>
          </div>
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="text" placeholder="Contact No" required />
            <input type="email" placeholder="E-Mail Address" required />
            <input type="text" placeholder="Postal Address" />
            <textarea placeholder="Enquiry" required></textarea>
            <div class="form-buttons">
              <button type="submit">SUBMIT</button>
              <button type="reset">RESET</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
