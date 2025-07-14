import { useEffect, useState } from "react";
import "./Css/AboutUs.css";
import http from "../../http";
import { useNavigate } from "react-router-dom";
import { FooterTopComponent } from "../../components/Others/FooterTopComponent";

export const AboutUs = () => {

 
  const navigate = useNavigate();

  const [AboutUsDetails, setAboutUsDetails] = useState({});
  
    useEffect(() => {
      const fetchAboutUsData = async () => {
        // setLoading(true);
        try {
          const getresponse = await http.get("/get-about-us-details");
          setAboutUsDetails(getresponse.data);
        } catch (error) {
          console.error("Error fetching users:", error);
        } finally {
          // setLoading(false);
        }
      };
  
      fetchAboutUsData();
    }, []);

  return (
    <div>
      <div
        className="aboutusbannr"
        style={{
          backgroundImage: AboutUsDetails?.image_url && AboutUsDetails?.data?.banner_image
            ? `url(${AboutUsDetails.image_url}/${AboutUsDetails.data.banner_image})`
            : "none",
        }}
      >
        <div className="container-fluid">
          <div className="dfgnhdfjhgdf">
            <div className="row">
              <div className="col-lg-7"></div>
              <div className="col-lg-5">
                <div className="dfbhdf">
                  <h2>{AboutUsDetails.data?.banner_title && AboutUsDetails.data.banner_title}</h2>
                  <p>
                    {AboutUsDetails.data?.banner_description && AboutUsDetails.data.banner_description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="xfnhvjhdfbvgdfg">
        <div className="container">
          <div className="sdfhdfgdf">
            <div className="row">
              <div className="col-lg-4">
                <div className="fghdfgdf">
                  <div className="dfgdf">
                    {AboutUsDetails.data?.second_section_image_one && (
                      <img
                        src={`${AboutUsDetails.image_url}/${AboutUsDetails.data.second_section_image_one}`}
                        alt=""
                      />
                    )}
                  </div>
                  <div className="fbgdfg">
                    <h4>{AboutUsDetails.data?.second_section_title_one && AboutUsDetails.data.second_section_title_one}</h4>
                    <p>{AboutUsDetails.data?.banner_description && AboutUsDetails.data.banner_description}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="fghdfgdf">
                  <div className="dfgdf">
                    {AboutUsDetails.data?.second_section_image_two && (
                      <img
                        src={`${AboutUsDetails.image_url}/${AboutUsDetails.data.second_section_image_two}`}
                        alt=""
                      />
                    )}
                  </div>
                  <div className="fbgdfg">
                    <h4>{AboutUsDetails.data?.second_section_title_two && AboutUsDetails.data.second_section_title_two}</h4>
                    <p>{AboutUsDetails.data?.second_section_description_two && AboutUsDetails.data.second_section_description_two}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="fghdfgdf">
                  <div className="dfgdf">
                    {AboutUsDetails.data?.second_section_image_three && (
                      <img
                        src={`${AboutUsDetails.image_url}/${AboutUsDetails.data.second_section_image_three}`}
                        alt=""
                      />
                    )}
                  </div>
                  <div className="fbgdfg">
                    <h4>{AboutUsDetails.data?.second_section_title_three && AboutUsDetails.data.second_section_title_three}</h4>
                    <p>{AboutUsDetails.data?.second_section_description_three && AboutUsDetails.data.second_section_description_three}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dfgjhdfbgdfgd">
        <div className="container-fluid">
          <div className="dfdfhsdff">
            <div className="row">
              <div className="col-lg-6">
                <div className="dfngjhdfgfd">
                  {AboutUsDetails.data?.third_section_image && (
                      <img
                        src={`${AboutUsDetails.image_url}/${AboutUsDetails.data.third_section_image}`}
                        alt=""
                      />
                    )}
                </div>
              </div>
              <div className="col-lg-6"> 
                <div className="gdfngjhdfg">
                  <h4>
                    Vinhem <span>Fashion</span>
                  </h4>
                  <h2>{AboutUsDetails.data?.third_section_title && AboutUsDetails.data.third_section_title}</h2>
                  <div
                      dangerouslySetInnerHTML={{
                        __html:
                          AboutUsDetails.data?.third_section_description &&
                          AboutUsDetails.data.third_section_description,
                      }}
                    />
                  <button onClick={() => navigate('/products')}>
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sdfgbdfghgdfgd">
        <div className="container-fluid">
          <div className="gdfbgjhdfgd">
            <h2>
             {AboutUsDetails.data?.fourth_section_title && AboutUsDetails.data.fourth_section_title}
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  AboutUsDetails.data?.fourth_section_description &&
                  AboutUsDetails.data.fourth_section_description,
              }}
            />
          </div>
          <div className="jhdfdfgdfsg">
            <div className="dfgbdfdf">
              {AboutUsDetails.data?.fourth_section_image_one && (
                  <img
                    src={`${AboutUsDetails.image_url}/${AboutUsDetails.data.fourth_section_image_one}`}
                    alt=""
                  />
                )}
            </div>

            <div className="dfgbdfdf dfdf ">
              {AboutUsDetails.data?.fourth_section_image_two && (
                <img
                  src={`${AboutUsDetails.image_url}/${AboutUsDetails.data.fourth_section_image_two}`}
                  alt=""
                />
              )}
            </div>

            <div className="dfgbdfdf  ">
              {AboutUsDetails.data?.fourth_section_image_three && (
                <img
                  src={`${AboutUsDetails.image_url}/${AboutUsDetails.data.fourth_section_image_three}`}
                  alt=""
                />
              )}
            </div>

            <div className="dfgbdfdf dfdf">
              {AboutUsDetails.data?.fourth_section_image_four && (
                <img
                  src={`${AboutUsDetails.image_url}/${AboutUsDetails.data.fourth_section_image_four}`}
                  alt=""
                />
              )}
            </div>

            <div className="dfgbdfdf">
              {AboutUsDetails.data?.fourth_section_image_five && (
                <img
                  src={`${AboutUsDetails.image_url}/${AboutUsDetails.data.fourth_section_image_five}`}
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <hr />

      <FooterTopComponent />
    </div>
  );
};
