import { useEffect, useState } from "react";
import styles from "./ContactUs.module.css";
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
    <div className={styles.jvjhubjkjoij}>
      <div className="container">
        <h1> {ContactUsDetails.data?.title && ContactUsDetails.data.title} </h1>
        <div className={styles.p1}
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
            <span className={styles.highlight}> MOB : </span> +91 {ContactUsDetails.data?.mobile && ContactUsDetails.data.mobile} (Timings: IST
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
            <strong className={styles.jhsdrgbzxcfbv}> Email Support: </strong> For Product Queries, Order &
            Shipping, Payments Made, Please find details below:
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
          {ContactUsDetails.data?.form_title && ContactUsDetails.data.form_title}
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
          <form className="col-lg-6">
            <input className="forn-control" type="text" placeholder="Full Name" required />
            <input className="forn-control" type="text" placeholder="Contact No" required />
            <input className="forn-control" type="email" placeholder="E-Mail Address" required />
            <input className="forn-control" type="text" placeholder="Postal Address" />
            <textarea className="forn-control" placeholder="Enquiry" required></textarea>
            <div className="">
              <button type="submit" className="btn btn-main">SUBMIT</button>
              <button type="reset" className="btn btn-tranparent" style={{textDecoration: 'underline'}}>RESET</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
