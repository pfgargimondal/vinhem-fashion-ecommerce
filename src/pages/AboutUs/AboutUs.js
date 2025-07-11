import { useEffect, useState } from "react";
import "./Css/AboutUs.css";
import http from "../../http";
import { useNavigate } from "react-router-dom";

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

      <div className="yudfdfgdfbgdfgdffgfg">
        <div className="container-fluid">
          <div className="dfgjhfdg2455f">
            <div className="fgnjhdf">
              <h6>
                There are many variations of passages of Lorem Ipsum available
              </h6>
            </div>

            <div className="dfghdfg654">
              <h6>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text:
              </h6>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet.
              </p>
            </div>

            <div className="dfghdfg654">
              <h6>Contrary to popular belief, Lorem Ipsum is not simply:</h6>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet.
              </p>
            </div>

            <div className="dfghdfg654">
              <h6>Contrary to popular belief, Lorem:</h6>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet.
              </p>
            </div>

            <div className="dfghdfg654">
              <h6>Contrary to popular belief, Lorem Ipsum is not simply:</h6>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet.
              </p>
            </div>
          </div>

          <div className="dfngjhdfgd5151fg">
            <div className="kdfbhjgdfg65468546">
              <div className="fbgfd">
                <h6>Featured Designers:</h6>
              </div>
              <div className="fbgdfgd">
                <a href="/">Paulmi and Harsh</a>
                <a href="/">Basanti - Kapde Aur Koffee </a>
                <a href="/">LASHKARAA</a>
                <a href="/">Sabyasachi </a>
                <a href="/">Kasbah</a>
                <a href="/">Aryavir Malhotra </a>
                <a href="/">Samyukta Singhania</a>
                <a href="/">KARAJ JAIPUR</a>
                <a href="/">Aariyana Couture</a>
                <a href="/">Fayon Kids </a>
                <a href="/">POMCHA JAIPUR</a>
                <a href="/">Masaba</a>
                <a href="/">Gulabo Jaipur</a>
                <a href="/">Chotibuti</a>
                <a href="/">Isha Gupta Tayal </a>
                <a href="/">Deepika Arora</a>
                <a href="/">Palak & Mehak</a>
                <a href="/">LABEL SHRISTI CHETANI </a>
                <a href="/">Nirmooha</a>
                <a href="/">Sheetal Batra</a>
                <a href="/">AFFROZ</a>
                <a href="/">Kasbah</a>
                <a href="/">Aryavir Malhotra </a>
                <a href="/">Samyukta Singhania</a>
                <a href="/">KARAJ JAIPUR</a>
                <a href="/">Aariyana Couture</a>
                <a href="/">Fayon Kids </a>
                <a href="/">POMCHA JAIPUR</a>
                <a href="/">Masaba</a>
                <a href="/">Gulabo Jaipur</a>
                <a href="/">Chotibuti</a>
                <a href="/">Paulmi and Harsh</a>
                <a href="/">Basanti - Kapde Aur Koffee </a>
                <a href="/">LASHKARAA</a>
                <a href="/">Sabyasachi </a>
                <a href="/">Kasbah</a>
                <a href="/">Aryavir Malhotra </a>
                <a href="/">Samyukta Singhania</a>
                <a href="/">KARAJ JAIPUR</a>
                <a href="/">Aariyana Couture</a>
              </div>
            </div>

            <div className="kdfbhjgdfg65468546">
              <div className="fbgfd">
                <h6>Top Designers for Wedding :</h6>
              </div>
              <div className="fbgdfgd">
                <a href="/">Paulmi and Harsh</a>
                <a href="/">Basanti - Kapde Aur Koffee </a>
                <a href="/">LASHKARAA</a>
                <a href="/">Sabyasachi </a>
                <a href="/">Kasbah</a>
                <a href="/">Aryavir Malhotra </a>
                <a href="/">Samyukta Singhania</a>
                <a href="/">KARAJ JAIPUR</a>
                <a href="/">Aariyana Couture</a>
                <a href="/">Fayon Kids </a>
                <a href="/">POMCHA JAIPUR</a>
                <a href="/">Masaba</a>
                <a href="/">Gulabo Jaipur</a>
                <a href="/">Chotibuti</a>
                <a href="/">Isha Gupta Tayal </a>
                <a href="/">Deepika Arora</a>
                <a href="/">Palak & Mehak</a>
                <a href="/">LABEL SHRISTI CHETANI </a>
                <a href="/">Nirmooha</a>
                <a href="/">Sheetal Batra</a>
                <a href="/">AFFROZ</a>
                <a href="/">Kasbah</a>
                <a href="/">Aryavir Malhotra </a>
                <a href="/">Samyukta Singhania</a>
                <a href="/">KARAJ JAIPUR</a>
                <a href="/">Aariyana Couture</a>
                <a href="/">Fayon Kids </a>
                <a href="/">POMCHA JAIPUR</a>
                <a href="/">Masaba</a>
                <a href="/">Gulabo Jaipur</a>
                <a href="/">Chotibuti</a>
                <a href="/">Paulmi and Harsh</a>
                <a href="/">Basanti - Kapde Aur Koffee </a>
                <a href="/">LASHKARAA</a>
                <a href="/">Sabyasachi </a>
                <a href="/">Kasbah</a>
                <a href="/">Aryavir Malhotra </a>
                <a href="/">Samyukta Singhania</a>
                <a href="/">KARAJ JAIPUR</a>
                <a href="/">Aariyana Couture</a>
              </div>
            </div>

            <div className="kdfbhjgdfg65468546">
              <div className="fbgfd">
                <h6>Celebrity Styles:</h6>
              </div>
              <div className="fbgdfgd">
                <a href="/">Paulmi and Harsh</a>
                <a href="/">Basanti - Kapde Aur Koffee </a>
                <a href="/">LASHKARAA</a>
                <a href="/">Sabyasachi </a>
                <a href="/">Kasbah</a>
                <a href="/">Aryavir Malhotra </a>
                <a href="/">Samyukta Singhania</a>
                <a href="/">KARAJ JAIPUR</a>
                <a href="/">Aariyana Couture</a>
                <a href="/">Fayon Kids </a>
                <a href="/">POMCHA JAIPUR</a>
                <a href="/">Masaba</a>
                <a href="/">Gulabo Jaipur</a>
                <a href="/">Chotibuti</a>
                <a href="/">Isha Gupta Tayal </a>
                <a href="/">Deepika Arora</a>
                <a href="/">Palak & Mehak</a>
                <a href="/">LABEL SHRISTI CHETANI </a>
                <a href="/">Nirmooha</a>
                <a href="/">Sheetal Batra</a>
                <a href="/">AFFROZ</a>
                <a href="/">Kasbah</a>
                <a href="/">Aryavir Malhotra </a>
                <a href="/">Samyukta Singhania</a>
                <a href="/">KARAJ JAIPUR</a>
                <a href="/">Aariyana Couture</a>
                <a href="/">Fayon Kids </a>
                <a href="/">POMCHA JAIPUR</a>
                <a href="/">Masaba</a>
                <a href="/">Gulabo Jaipur</a>
                <a href="/">Chotibuti</a>
                <a href="/">Paulmi and Harsh</a>
                <a href="/">Basanti - Kapde Aur Koffee </a>
                <a href="/">LASHKARAA</a>
                <a href="/">Sabyasachi </a>
                <a href="/">Kasbah</a>
                <a href="/">Aryavir Malhotra </a>
                <a href="/">Samyukta Singhania</a>
                <a href="/">KARAJ JAIPUR</a>
                <a href="/">Aariyana Couture</a>
              </div>
            </div>

            <div className="kdfbhjgdfg65468546">
              <div className="fbgfd">
                <h6>Shop By Occasions:</h6>
              </div>
              <div className="fbgdfgd">
                <a href="/">Paulmi and Harsh</a>
                <a href="/">Basanti - Kapde Aur Koffee </a>
                <a href="/">LASHKARAA</a>
                <a href="/">Sabyasachi </a>
                <a href="/">Kasbah</a>
                <a href="/">Aryavir Malhotra </a>
                <a href="/">Samyukta Singhania</a>
                <a href="/">KARAJ JAIPUR</a>
                <a href="/">Aariyana Couture</a>
                <a href="/">Fayon Kids </a>
                <a href="/">POMCHA JAIPUR</a>
                <a href="/">Masaba</a>
                <a href="/">Gulabo Jaipur</a>
                <a href="/">Chotibuti</a>
                <a href="/">Isha Gupta Tayal </a>
                <a href="/">Deepika Arora</a>
                <a href="/">Palak & Mehak</a>
                <a href="/">LABEL SHRISTI CHETANI </a>
                <a href="/">Nirmooha</a>
                <a href="/">Sheetal Batra</a>
                <a href="/">AFFROZ</a>
                <a href="/">Kasbah</a>
                <a href="/">Aryavir Malhotra </a>
                <a href="/">Samyukta Singhania</a>
                <a href="/">KARAJ JAIPUR</a>
                <a href="/">Aariyana Couture</a>
                <a href="/">Fayon Kids </a>
                <a href="/">POMCHA JAIPUR</a>
                <a href="/">Masaba</a>
                <a href="/">Gulabo Jaipur</a>
                <a href="/">Chotibuti</a>
                <a href="/">Paulmi and Harsh</a>
                <a href="/">Basanti - Kapde Aur Koffee </a>
                <a href="/">LASHKARAA</a>
                <a href="/">Sabyasachi </a>
                <a href="/">Kasbah</a>
                <a href="/">Aryavir Malhotra </a>
                <a href="/">Samyukta Singhania</a>
                <a href="/">KARAJ JAIPUR</a>
                <a href="/">Aariyana Couture</a>
              </div>
            </div>

            <div className="kdfbhjgdfg65468546">
              <div className="fbgfd">
                <h6>Aza Magazine:</h6>
              </div>
              <div className="fbgdfgd">
                <a href="/">Paulmi and Harsh</a>
                <a href="/">Basanti - Kapde Aur Koffee </a>
                <a href="/">LASHKARAA</a>
                <a href="/">Sabyasachi </a>
                <a href="/">Kasbah</a>
                <a href="/">Aryavir Malhotra </a>
                <a href="/">Samyukta Singhania</a>
                <a href="/">KARAJ JAIPUR</a>
                <a href="/">Aariyana Couture</a>
                <a href="/">Fayon Kids </a>
                <a href="/">POMCHA JAIPUR</a>
                <a href="/">Masaba</a>
                <a href="/">Gulabo Jaipur</a>
                <a href="/">Chotibuti</a>
                <a href="/">Isha Gupta Tayal </a>
                <a href="/">Deepika Arora</a>
                <a href="/">Palak & Mehak</a>
                <a href="/">LABEL SHRISTI CHETANI </a>
                <a href="/">Nirmooha</a>
                <a href="/">Sheetal Batra</a>
                <a href="/">AFFROZ</a>
                <a href="/">Kasbah</a>
                <a href="/">Aryavir Malhotra </a>
                <a href="/">Samyukta Singhania</a>
                <a href="/">KARAJ JAIPUR</a>
                <a href="/">Aariyana Couture</a>
                <a href="/">Fayon Kids </a>
                <a href="/">POMCHA JAIPUR</a>
                <a href="/">Masaba</a>
                <a href="/">Gulabo Jaipur</a>
                <a href="/">Chotibuti</a>
                <a href="/">Paulmi and Harsh</a>
                <a href="/">Basanti - Kapde Aur Koffee </a>
                <a href="/">LASHKARAA</a>
                <a href="/">Sabyasachi </a>
                <a href="/">Kasbah</a>
                <a href="/">Aryavir Malhotra </a>
                <a href="/">Samyukta Singhania</a>
                <a href="/">KARAJ JAIPUR</a>
                <a href="/">Aariyana Couture</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
