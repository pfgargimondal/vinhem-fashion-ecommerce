import "./Css/FAQ.css";
import http from "../../http";
import { useEffect, useState } from "react";
import { FooterTopComponent } from "../../components/Others/FooterTopComponent";

export const FAQ = () => {

  const [FAQDetails, setFAQDetails] = useState({});
  // const [FAQContentDetails, setFAQContentDetails] = useState([]);
  const [FAQBannerDetails, setFAQBannerDetails] = useState(null);

  useEffect(() => {
    const fetchFAQData = async () => {
      try {
        const getresponse = await http.get("/faq");
        const all_response = getresponse.data;

        setFAQDetails(all_response);                          // whole response
        setFAQBannerDetails(all_response.data.faq_banners[0]); // first banner object

      } catch (error) {
        console.error("Error fetching FAQ:", error);
      }
    };

    fetchFAQData();
  }, []);


  return (
    <div>
      {/* Banner Section */}
      <div className="fgyfgfd5215g">
        <div className="container">
          <div
            className="aboutusbannr55"
            style={{
              backgroundImage: `url(${FAQDetails?.image_url}/${FAQBannerDetails?.banner_image})`,
              backgroundSize: "100% 100%",
              height: "450px",
            }}
          >
            <div className="dfgnhdfjhgdf">
              <div className="row">
                <div className="col-lg-7"></div>
                <div className="col-lg-5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="fjgnfg55d">
        <div className="wrapper">
          <div className="container">
            <h1 className="mb-4">
              {FAQBannerDetails?.banner_title}
            </h1>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  FAQBannerDetails?.banner_description }}
            />
          </div>
        </div>
      </div>

      <hr />
      <FooterTopComponent />
    </div>
  );
};
