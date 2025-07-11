import http from "../../http";
import { useEffect, useState } from "react";
import { PolicyComponent } from "../PolicyComponent/PolicyComponent";

export const PrivacyPolicy = () => {

    // const [loading, setLoading] = useState(false);
    const [PrivacyPolicyDetails, setPrivacyPolicyDetails] = useState({});

    useEffect(() => {
        const fetchPrivacyPolicyData = async () => {
            // setLoading(true);
            try {
                const getresponse = await http.get("/get-privacy-policy-content");
                setPrivacyPolicyDetails(getresponse.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            } finally{
                // setLoading(false);
            }
        };

        fetchPrivacyPolicyData();
    }, []);

  return (
    <div>
        {/* {loading && <Loader />}      */}
        <PolicyComponent PolicyDetails={PrivacyPolicyDetails}/>
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
                <h6>Vinhem Fashion Magazine:</h6>
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
