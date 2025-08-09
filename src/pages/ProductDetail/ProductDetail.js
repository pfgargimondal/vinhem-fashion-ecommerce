import { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Mousewheel } from "swiper/modules";

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Modal from 'react-bootstrap/Modal';

import { FeaturedProducts } from "../../components";

import "./Css/ProductDetail.css";
import "./Css/ProductDetailResponsive.css";
import "swiper/css";
import { FooterTopComponent } from "../../components/Others/FooterTopComponent";

export const ProductDetail = () => {
  const [show, setShow] = useState(false);
  const [showMjri, setShowMjri] = useState(false);

  //turbon modal

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //mojri modal

  const handleMClose = () => setShowMjri(false);
  const handleMShow = () => setShowMjri(true);

  // eslint-disable-next-line
  const [featuredProducts, setFeaturedProducts] = useState([
    {
      id: 1000,
      img1: "/images/1.jpg",
      img2: "/images/2.jpg",
      title: "COLLETTE",
      description:
        "Sample - Clothing And Accessory Boutiques For Sale",
      price: "48.99",
    },
    {
      id: 1001,
      img1: "/images/3.jpg",
      img2: "/images/4.jpg",
      title: "COLLETTE",
      description:
        "Sample - Clothing And Accessory Boutiques For Sale",
      price: "48.99",
    },
    {
      id: 1002,
      img1: "/images/2.jpg",
      img2: "/images/4.jpg",
      title: "COLLETTE",
      description:
        "Sample - Clothing And Accessory Boutiques For Sale",
      price: "48.99",
    },
    {
      id: 1003,
      img1: "/images/3.jpg",
      img2: "/images/4.jpg",
      title: "COLLETTE",
      description:
        "Sample - Clothing And Accessory Boutiques For Sale",
      price: "48.99",
    },
    {
      id: 1004,
      img1: "/images/1.jpg",
      img2: "/images/4.jpg",
      title: "COLLETTE",
      description:
        "Sample - Clothing And Accessory Boutiques For Sale",
      price: "48.99",
    },
    {
      id: 1005,
      img1: "/images/4.jpg",
      img2: "/images/5.jpg",
      title: "COLLETTE",
      description:
        "Sample - Clothing And Accessory Boutiques For Sale",
      price: "48.99",
    },
    {
      id: 1006,
      img1: "/images/3.jpg",
      img2: "/images/2.jpg",
      title: "COLLETTE",
      description:
        "Sample - Clothing And Accessory Boutiques For Sale",
      price: "48.99",
    },
  ]);
  // eslint-disable-next-line
  const [activeTab, setActiveTab] = useState("tab-1");
  const [showTabs, setShowTabs] = useState(false);
  const [showSizeModal, setShowSizeModal] = useState(false);

  //featured products

  const swiperConfig = {
    spaceBetween: 20,
    slidesPerView: 5,
    navigation: true,
    pagination: { clickable: true },
    breakpoints: {
      320: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 4 },
      1200: { slidesPerView: 5 },
    },
  };

  const handleShowModal = (e) => {
    e.preventDefault(); // ✅ fixed spelling
    setShowSizeModal(!showSizeModal);    // ✅ your modal function
  };

  // useEffect(() => {
  //   const fetchFeaturedProducts = async () => {
  //     const URL = "http://localhost:8000/featured_products";
  //     const response = await fetch(URL);
  //     const data = await response.json();
  //     setFeaturedProducts(data);
  //   }

  //   fetchFeaturedProducts();
  // }, []);

  return (
    <>
      <div className="fvjhfbdf">
        <div className="derthnjmfghu">
          <div className="fgnbdfgdf">
            <div className="row">
              <div className="col-lg-6">
                <div className="sticky-top">
                  <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                      <Col xs={3} className="small-image-tabs">
                        <Nav variant="pills" className="flex-column">
                          <Nav.Item>
                            <Nav.Link eventKey="first">
                              <img src="../../images/1.jpg" alt="" />
                            </Nav.Link>
                          </Nav.Item>
                          
                          <Nav.Item>
                            <Nav.Link eventKey="second">
                              <img src="../../images/2.jpg" alt="" />
                            </Nav.Link>
                          </Nav.Item>

                          <Nav.Item>
                            <Nav.Link eventKey="third">
                              <img src="../../images/3.jpg" alt="" />
                            </Nav.Link>
                          </Nav.Item>

                          <Nav.Item>
                            <Nav.Link eventKey="fourth">
                              <img src="../../images/4.jpg" alt="" />
                            </Nav.Link>
                          </Nav.Item>

                          <Nav.Item>
                            <Nav.Link eventKey="fifth">
                              <img src="../../images/5.jpg" alt="" />
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Col>
                      
                      <Col xs={9} className="large-image-tab">
                        <Tab.Content>
                          <Tab.Pane eventKey="first">
                            <img src="../../images/1.jpg" alt="" />
                          </Tab.Pane>
                          
                          <Tab.Pane eventKey="second">
                            <img src="../../images/2.jpg" alt="" />
                          </Tab.Pane>

                          <Tab.Pane eventKey="third">
                            <img src="../../images/3.jpg" alt="" />
                          </Tab.Pane>

                          <Tab.Pane eventKey="fourth">
                            <img src="../../images/4.jpg" alt="" />
                          </Tab.Pane>

                          <Tab.Pane eventKey="fifth">
                            <img src="../../images/5.jpg" alt="" />
                          </Tab.Pane>
                        </Tab.Content>
                      </Col>
                    </Row>
                  </Tab.Container>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="dfghjdfgdfgf ps-2 pt-2">
                  <div className="dsfbsdghfjs">
                    <div className="fgnjdfgfd">
                      <h2>
                        Neha Khullar X Vinhem Fashion
                        {/* <i className="fa-solid fa-greater-than" /> */}
                      </h2>
                    </div>

                    <div className="dfhdfhd">
                      <i className="fa-solid fa-arrow-up-from-bracket" />
                      <i className="fa-regular fa-heart" />
                    </div>
                  </div>

                  <div className="fhdfgh">
                    <p>Item ID: PMN124-S87LAZO4TH | View 309</p>
                  </div>

                  <div className="dfjghdfgdff58 mb-4">
                    <h4 className="d-flex mb-1">
                      <span className="discounted-price d-flex align-items-center">
                        <i class="bi bi-currency-rupee"></i> 30,322
                      </span>

                      <span className="gdfg55 d-flex align-items-center ms-2">
                        <i class="bi bi-currency-rupee"></i> 37,902
                      </span>

                      <span className="fghfgg114 d-flex align-items-center ms-2">
                        20%OFF
                      </span>
                    </h4>

                    <p className="mb-0">(inclusive of all taxes)</p>
                  </div>

                  <div className="jdfbdfgdf">
                    
                    <div class="diwenjrbwebrwehgrwer mt-5">
                      <h4 class="pb-2">Stitching Options</h4>

                      <hr class="mt-0" />
                    </div>

                    <div className="saoijhdekjwirwer row align-items-center mb-3">
                      <div className="col-lg-4 col-md-6 col-sm-6 col-6 dowekrwerwer">
                        <input type="radio" name="so" id="unstdf" className="d-none position-absolute" />

                        <label htmlFor="unstdf" className="p-3">Unstitched Fabric <br /> <span>+<i class="bi bi-currency-rupee"></i>0.00</span></label>
                      </div>

                      <div className="col-lg-4 col-md-6 col-sm-6 col-6 dowekrwerwer">
                        <input type="radio" name="so" id="cf" className="d-none position-absolute" />

                        <label htmlFor="cf" className="p-3" id="cstm-fit-btn">Custom-Fit <br /> <span>+<i class="bi bi-currency-rupee"></i>1000.00</span></label>
                      </div>
                    </div>

                    <div className="ikasdnjiknswjirhwer mb-4">
                      <p className="mb-1">Submit Measurement: <span><Link to="" onClick={(e) => handleShowModal(e)}>CLICK HERE</Link></span> or Later</p>

                      <p className="mb-0">+3 days, for your chosen stitching options.</p>
                    </div>
                    
                    {/* id="custmze-otft-btn"> */}

                    <div className="row sdfasdctgerrrrwe">
                      <div className="col-lg-5 col-md-8 col-sm-8 col-8">
                        <div className="dgndfjgdf">
                          <select name="" id="" className="form-select">
                            <option value="">Select Size</option>


                            <option value="">Select Size</option>


                            <option value="">Select Size</option>


                            <option value="">Select Size</option>


                            <option value="">Select Size</option>
                          </select>

                          <p>Only Few Left</p>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                        <div className="dokewhkjrhuiwerwer skdncfjsdbcfksdnf">
                          <button className="btn btn-main"><img src="/images/ruler.png" alt="" /> Size Guide</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="fvgndfjgf">
                    <label htmlFor="" className="me-1">
                      Qty:
                    </label>

                    <select name="" id="">
                      <option value="">1</option>

                      <option value="">1</option>
                    </select>
                  </div>

                  <div className="sadfvfghbrsd mt-4">
                    <div className="col-lg-12">
                      <div className="kcwenjkkwenkrhwer">
                        <div className="opjdjwerwer mb-3 col-lg-9 row align-items-center justify-content-between">
                          <div className="doweriwejrwer col-lg-6 col-md-8 col-sm-8 col-8">
                            <div class="checkbox-wrapper-33">
                              <label class="checkbox">
                                <input class="checkbox__trigger visuallyhidden" type="checkbox" />
                                
                                <span class="checkbox__symbol">
                                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 14l8 7L24 7"></path>
                                  </svg>
                                </span>

                                <p class="checkbox__textwrapper">Matching Turban</p>
                              </label>
                            </div>
                          </div>       

                          <p className="chngd-price mb-0 col-lg-4 col-md-4 col-sm-4 col-4">USD 23.20</p>
                        </div>
                        
                        <div className="slkdnfkmslkmr row align-items-center">
                          <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                            <select name="" className="form-select" id="">
                              <option value="" disabled selected>Select Size</option>

                              <option value="">1</option>
                            </select>
                          </div>

                          <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                            <p className="chrt-sze mb-0" onClick={handleShow}><i class="fa-solid fa-maximize"></i> Size Chart</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="sadfvfghbrsd mt-4">
                    <div className="col-lg-12">
                      <div className="kcwenjkkwenkrhwer">
                        <div className="opjdjwerwer mb-3 row col-lg-9 align-items-center justify-content-between">
                          <div className="doweriwejrwer col-lg-6 col-md-8 col-sm-8 col-8">
                            <div class="checkbox-wrapper-33">
                              <label class="checkbox">
                                <input class="checkbox__trigger visuallyhidden" type="checkbox" />
                                
                                <span class="checkbox__symbol">
                                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 14l8 7L24 7"></path>
                                  </svg>
                                </span>

                                <p class="checkbox__textwrapper">Matching Stole</p>
                              </label>
                            </div>
                          </div>

                          <p className="chngd-price mb-0 col-lg-4 col-md-4 col-sm-4 col-4">USD 6.96</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="sadfvfghbrsd mt-4">
                    <div className="col-lg-12">
                      <div className="kcwenjkkwenkrhwer">
                        <div className="opjdjwerwer mb-3 row col-lg-9 align-items-center justify-content-between">
                          <div className="doweriwejrwer col-lg-8 col-md-8 col-sm-8 col-8">
                            <div class="checkbox-wrapper-33">
                              <label class="checkbox">
                                <input class="checkbox__trigger visuallyhidden" type="checkbox" />
                                
                                <span class="checkbox__symbol">
                                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 14l8 7L24 7"></path>
                                  </svg>
                                </span>

                                <p class="checkbox__textwrapper">Matching Mojri</p>
                              </label>
                            </div>
                          </div>

                          <p className="chngd-price mb-0 col-lg-4 col-md-4 col-sm-4 col-4">USD 14.50</p>
                        </div>

                        <div className="slkdnfkmslkmr row align-items-center">
                          <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                            <select name="" className="form-select" id="">
                              <option value="" disabled selected>Select Size</option>

                              <option value="">1</option>
                            </select>
                          </div>

                          <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                            <p className="chrt-sze mb-0" onClick={handleMShow}><i class="fa-solid fa-maximize"></i> Size Chart</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="dowejkrnwerwer d-flex align-items-center mt-4">
                    <h4 className="mb-0 me-2">You Pay: <span><i class="fa-solid fa-indian-rupee-sign"></i> 1230,322</span></h4>

                    <div className="dfgndfjhgdf">
                      <button className="btn btn-main px-4 me-3">
                        <i class="bi bi-bag me-1"></i> Add To Cart
                      </button>
        
                      <button className="btn btn-main btn-transparent px-4">
                        <i class="bi bi-bag me-1"></i> Buy Now
                      </button>
                    </div>  
                  </div>

                  <div className="kjidbwejgrwerwer col-lg-10 position-relative mt-5">
                    <i class="bi bi-geo-alt position-absolute"></i>

                    <input
                      type="number"
                      className="form-control"
                      placeholder="ex. 700001"
                    />

                    <button className="btn btn-main position-absolute">
                      Change
                    </button>
                  </div>

                  <div className="doiejnwkhrwer mt-4">
                    <p className="mb-1">
                      Delivering to GURDASPUR by 18th July 2025. Order within
                      11h 49m
                    </p>
                  </div>

                  <div className="diwenjrbwebrwehgrwer mt-5">
                    <h4 className="pb-2">Need Assistance</h4>

                    <hr className="mt-0" />

                    <div className="row">
                      <div className="col-lg-6">
                        <ul className="mb-0 ps-0">
                          <li>
                            <i class="bi me-1 bi-check2-circle"></i>{" "}
                            Non-returnable/non-exchangeable
                          </li>
                        </ul>
                      </div>

                      <div className="col-lg-6">
                        <ul className="mb-0 ps-0">
                          <li>
                            <i class="bi me-1 bi-check2-circle"></i> Premium
                            Quality
                          </li>
                        </ul>
                      </div>

                      <div className="col-lg-6">
                        <ul className="mb-0 ps-0">
                          <li>
                            <i class="bi me-1 bi-check2-circle"></i> Free
                            Shipping
                          </li>
                        </ul>
                      </div>

                      <div className="col-lg-6">
                        <ul className="mb-0 ps-0">
                          <li>
                            <i class="bi me-1 bi-check2-circle"></i>{" "}
                            Personalized Styling
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="diwenjrbwebrwehgrwer mt-5">
                    <div className="d-flex align-items-center mb-2">
                      <h4 className="pb-2 me-2 mb-0">Speak To Us</h4>
                      
                      <div className="doiejnwkhrwer">
                        <p className="mb-0">
                          <i class="bi me-1 bi-whatsapp"></i> Need it by a
                          specific date? <Link to="/">Chat with us</Link>
                        </p>
                      </div>
                    </div>

                    <hr className="mt-0" />

                    <div className="dopwejoirjhwer row">
                      <div className="col-lg-4">
                        <button className="btn w-100 btn-main">
                          <i class="bi me-1 bi-chat-left-text"></i> Chat Now
                        </button>
                      </div>

                      <div className="col-lg-4">
                        <button className="btn w-100 btn-transparent">
                          <i class="bi me-1 bi-telephone-forward"></i> Call Us
                        </button>
                      </div>

                      <div className="col-lg-4">
                        <button className="btn w-100 btn-main">
                          <i class="bi me-1 bi-envelope"></i> Mail Us
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* <div className="diwenjrbwebrwehgrwer mt-5">
                    <h4 className="pb-2">Offers</h4>

                    <hr className="mt-0" />

                    <div className="row align-items-center">
                      <div className="col-lg-8 mb-4">
                        <div className="doinewghrwer_inner">
                          <p className="mb-0">Best Coupon: CREDIT12 <i class="bi ms-1 bi-copy"></i></p>
                        </div>
                      </div>

                      <div className="col-lg-4 mb-4">
                        <div className="doinewghrwer_inner">
                          <button className="btn py-0 btn-transparent">+ 6 More <i class="bi ms-1 bi-arrow-right-circle"></i></button>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>

              <div className="col-lg-9 mt-5">
                <div className="odnwejihrwerwer mt-5">
                  <div className="dowehjkrhweirwer mb-5">
                    <div className="podmkwejrwer d-flex justify-content-between align-items-center">
                      <h4 className="mb-0">Product Descriptions</h4>

                      <i class="bi bi-chevron-down"></i>
                    </div>

                    <hr />

                    <p className="mb-4">
                      Yellow saree made from 2x4 organza featuring intricate
                      embroidery along the border. Paired with a padded silk
                      chanderi blouse with a back tie-up detail.
                    </p>

                    <div className="dikewnirhwerjwer">
                      <Tabs
                        defaultActiveKey="specification"
                        id="uncontrolled-tab-example"
                        className="sticky-top mb-3"
                      >
                        <Tab eventKey="specification" title="Specification">
                          <div className="row">
                            <div className="col-lg-6 mb-4">
                              <div className="idnewihrwer_inner">
                                <div className="odjjkwehrihwerewr mb-4">
                                  <p>
                                    No of Component <br /> <span>3</span>
                                  </p>
                                </div>

                                <div className="odjjkwehrihwerewr mb-4">
                                  <p>
                                    Noteworthy Feature <br />{" "}
                                    <span>
                                      Intricate embroidery detailing on blouse
                                      and saree border., Back tie-up detail on
                                      blouse with tassel accents.
                                    </span>
                                  </p>
                                </div>

                                <div className="odjjkwehrihwerewr mb-4">
                                  <p>
                                    Style Genre <br />{" "}
                                    <span>Classic Indian style saree</span>
                                  </p>
                                </div>

                                <div className="odjjkwehrihwerewr mb-4">
                                  <p>
                                    Type of Work <br /> <span>Embroidery</span>
                                  </p>
                                </div>

                                <div className="odjjkwehrihwerewr mb-4">
                                  <p>
                                    Color <br /> <span>Yellow</span>
                                  </p>
                                </div>

                                <div className="odjjkwehrihwerewr mb-4">
                                  <p>
                                    Sleeve Style <br />{" "}
                                    <span>Fitted Sleeve</span>
                                  </p>
                                </div>

                                <div className="odjjkwehrihwerewr mb-4">
                                  <p>
                                    Weight Details <br />{" "}
                                    <span>
                                      Approximate Product Weight: 500 g
                                    </span>
                                  </p>
                                </div>

                                <div className="odjjkwehrihwerewr mb-4">
                                  <p>
                                    Visible Items not included <br />{" "}
                                    <span>
                                      Only saree, blouse, and petticoat are
                                      being sold.
                                    </span>
                                  </p>
                                </div>

                                <div className="odjjkwehrihwerewr mb-4">
                                  <p>
                                    Manufactured / Packed & Marketed By – <br />{" "}
                                    <span>
                                      Vinhem Fashion Pvt Ltd, Assembled in India
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-6 mb-4">
                              <div className="idnewihrwer_inner">
                                <div className="odjjkwehrihwerewr mb-4">
                                  <p>
                                    Components <br />{" "}
                                    <span>Saree, Blouse, Petticoat</span>
                                  </p>
                                </div>

                                <div className="odjjkwehrihwerewr mb-4">
                                  <p>
                                    Occasions <br />{" "}
                                    <span>
                                      Suitable for weddings and festive
                                      occasions
                                    </span>
                                  </p>
                                </div>

                                <div className="odjjkwehrihwerewr mb-4">
                                  <p>
                                    Pattern <br />{" "}
                                    <span>Solid, Embroidered</span>
                                  </p>
                                </div>

                                <div className="odjjkwehrihwerewr mb-4">
                                  <p>
                                    Fabric <br />{" "}
                                    <span>Organza, Silk, Chanderi</span>
                                  </p>
                                </div>

                                <div className="odjjkwehrihwerewr mb-4">
                                  <p>
                                    Neckline Style <br />{" "}
                                    <span>Plunge Neck</span>
                                  </p>
                                </div>

                                <div className="odjjkwehrihwerewr mb-4">
                                  <p>
                                    Size Details <br />{" "}
                                    <span>
                                      Saree Length: 45 inches, Blouse Length: 13
                                      inches
                                    </span>
                                  </p>
                                </div>

                                <div className="odjjkwehrihwerewr mb-4">
                                  <p>
                                    Fit <br />{" "}
                                    <span>
                                      Fit: Blouse: Slim Fit, Saree: Regular Fit
                                    </span>
                                  </p>
                                </div>

                                <div className="odjjkwehrihwerewr mb-4">
                                  <p>
                                    Care Instruction <br />{" "}
                                    <span>Dry clean</span>
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-12">
                              <div className="idnewihrwer_inner dsclmer p-3">
                                <div className="odjjkwehrihwerewr">
                                  <p className="mb-0">
                                    Disclaimer <br />{" "}
                                    <span>
                                      Color of the actual product may vary from
                                      the image. These are made to order
                                      designer styles, hence expect a slight
                                      variation from the image displayed.
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Tab>
                      </Tabs>
                    </div>
                  </div>

                  <div className="dowehjkrhweirwer mlkdfgmlkmlkmlk">
                    <div className="podmkwejrwer d-flex justify-content-between align-items-center">
                      <h4 className="mb-0">Shipping & Returns</h4>

                      <i class="bi bi-chevron-down"></i>
                    </div>

                    <hr className="mb-4" />

                    <h6>Shipping & Returns</h6>

                    <p className="mb-1">
                      Product will be shipped by 12 July 2025
                    </p>

                    <p className="mb-3">
                      For customizations & early delivery, chat with us on
                      WhatsApp at <a href="/">+91 8291990059</a> or call us at{" "}
                      <a href="/">022-42792123</a>
                    </p>

                    <p className="mb-2">Return Policy</p>

                    <p>
                      This product is non-returnable.{" "}
                      <Link to="/">More Details</Link>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 mt-5">
                <div className="odnwejihrwerwer sticky-top mt-5">
                  <div className="dowehjkrhweirwer mb-5">
                    <div className="podmkwejrwer">
                      <h4 className="mb-0">Matching Products</h4>
                    </div>

                    <hr />

                    <div className="coisdefisdhifhsdjifjhosd" style={{ height: '100vh' }}>
                      <Swiper
                        modules={[Autoplay, Pagination, Navigation, Mousewheel]}
                        direction="vertical"
                        slidesPerView={4}
                        spaceBetween={30}
                        loop={true}
                        mousewheel={true}
                        pagination={{ clickable: true }}
                        navigation={true}
                        autoplay={{
                          delay: 3000,
                          disableOnInteraction: false,
                        }}
                        className="mySwiper"
                        style={{ height: "100%" }}
                      >
                        <SwiperSlide>
                          <div className="dfgjhbdfg sdfvdscsddfgdfg p-2 mb-3">
                            <div className="images">
                                <div className="image d-flex position-relative">
                                    <div className="doiewjkrniuwewer position-relative col-lg-4 overflow-hidden">
                                        <img src="/images/91EEQIClSCL._UY1100_.jpg" alt="not found" />

                                        <img className="first" src="/images/91JmoXA-H9L._UY350_.jpg" alt="not found" />
                                    </div>

                                    <div className="fdbdfgdfgdf col-lg-8">
                                        <h4>Clothing And Accessory Boutiques For Sale</h4>
                                        
                                        <h5>$48.99</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="dfgjhbdfg sdfvdscsddfgdfg p-2 mb-3">
                            <div className="images">
                                <div className="image d-flex position-relative">
                                    <div className="doiewjkrniuwewer col-lg-4 position-relative overflow-hidden">
                                        <img src="/images/91EEQIClSCL._UY1100_.jpg" alt="not found" />

                                        <img className="first" src="/images/91JmoXA-H9L._UY350_.jpg" alt="not found" />
                                    </div>

                                    <div className="fdbdfgdfgdf col-lg-8">
                                        <h4>Clothing And Accessory Boutiques For Sale</h4>
                                        
                                        <h5>$48.99</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="dfgjhbdfg sdfvdscsddfgdfg p-2 mb-3">
                            <div className="images">
                                <div className="image d-flex position-relative">
                                    <div className="doiewjkrniuwewer col-lg-4 position-relative overflow-hidden">
                                        <img src="/images/91EEQIClSCL._UY1100_.jpg" alt="not found" />

                                        <img className="first" src="/images/91JmoXA-H9L._UY350_.jpg" alt="not found" />
                                    </div>

                                    <div className="fdbdfgdfgdf col-lg-8">
                                        <h4>Clothing And Accessory Boutiques For Sale</h4>
                                        
                                        <h5>$48.99</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="dfgjhbdfg sdfvdscsddfgdfg p-2 mb-3">
                              <div className="images">
                                  <div className="image d-flex position-relative">
                                      <div className="doiewjkrniuwewer col-lg-4 position-relative overflow-hidden">
                                          <img src="/images/91EEQIClSCL._UY1100_.jpg" alt="not found" />

                                          <img className="first" src="/images/91JmoXA-H9L._UY350_.jpg" alt="not found" />
                                      </div>

                                      <div className="fdbdfgdfgdf col-lg-8">
                                          <h4>Clothing And Accessory Boutiques For Sale</h4>
                                          
                                          <h5>$48.99</h5>
                                      </div>
                                  </div>
                              </div>
                          </div>
                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="dfgjhbdfg sdfvdscsddfgdfg p-2 mb-3">
                              <div className="images">
                                  <div className="image d-flex position-relative">
                                      <div className="doiewjkrniuwewer col-lg-4 position-relative overflow-hidden">
                                          <img src="/images/91EEQIClSCL._UY1100_.jpg" alt="not found" />

                                          <img className="first" src="/images/91JmoXA-H9L._UY350_.jpg" alt="not found" />
                                      </div>

                                      <div className="fdbdfgdfgdf col-lg-8">
                                          <h4>Clothing And Accessory Boutiques For Sale</h4>
                                          
                                          <h5>$48.99</h5>
                                      </div>
                                  </div>
                              </div>
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="diweurbhwer_inner mt-4">
                  <div className="dfbgghdfdfgdf">
                    <div className="sdf58sdfs">
                      <h4 className="pb-2">Similar Items</h4>
                    </div>

                    <div className="fgjhdfgdfgdf py-4">
                      <Swiper {...swiperConfig}>
                        {featuredProducts.map((featuredProduct) => (
                          <SwiperSlide key={featuredProduct.id}>
                            <FeaturedProducts
                              featuredProduct={featuredProduct}
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="diweurbhwer_inner mt-4">
                  <div className="dfbgghdfdfgdf">
                    <div className="sdf58sdfs">
                      <h4 className="pb-2">Customer Also Viewed</h4>
                    </div>

                    <div className="fgjhdfgdfgdf py-4">
                      <Swiper {...swiperConfig}>
                        {featuredProducts.map((featuredProduct) => (
                          <SwiperSlide key={featuredProduct.id}>
                            <FeaturedProducts
                              featuredProduct={featuredProduct}
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="diweurbhwer_inner mt-4">
                  <div className="dfbgghdfdfgdf">
                    <div className="sdf58sdfs">
                      <h4 className="pb-2">Recently Viewed</h4>
                    </div>

                    <div className="fgjhdfgdfgdf py-4">
                      <Swiper {...swiperConfig}>
                        {featuredProducts.map((featuredProduct) => (
                          <SwiperSlide key={featuredProduct.id}>
                            <FeaturedProducts
                              featuredProduct={featuredProduct}
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      
      {showSizeModal && (<div className="customize-modal-backdrop position-fixed w-100 h-100"></div>)}

      {showSizeModal && (<div className="customize-modal overflow-hidden position-fixed bg-white">
        <div className="okdjeiwirwejrwerwer bg-white px-4 pt-4 mb-3">
          <h4>Customize Options</h4>

          <i className="bi position-absolute bi-x" id="co-close-btn" onClick={() => setShowSizeModal(false)}></i>
        </div>

        <div className="dhwekrwerwer px-4 py-4">
          <p className="mb-3">For further assistance, Chat with us <button className="btn btn-main"><i className="bi me-1 bi-whatsapp"></i> Chat With Us</button></p>

          <p className="mb-3">Choose a size to be customized:</p>

          <div className="okemlkwnjrirwer mb-3 d-flex align-items-center">
            <div className="doeiwjrkweirwe">
              <input id="s1" name="s-optns" type="radio" className="d-none position-absolute" />

              <label htmlFor="s1" className="text-center p-2"><span className="mb-1">31,500</span> <br /> XS</label>
            </div>

            <div className="doeiwjrkweirwe">
              <input id="s2" name="s-optns" type="radio" className="d-none position-absolute" />

              <label htmlFor="s2" className="text-center p-2"><span className="mb-1">31,500</span> <br /> S</label>
            </div>

            <div className="doeiwjrkweirwe">
              <input id="s3" name="s-optns" type="radio" className="d-none position-absolute" />

              <label htmlFor="s3" className="text-center p-2"><span className="mb-1">31,500</span> <br /> L</label>
            </div>

            <div className="doeiwjrkweirwe">
              <input id="s4" name="s-optns" type="radio" className="d-none position-absolute" />

              <label htmlFor="s4" className="text-center p-2"><span className="mb-1">31,500</span> <br /> XL</label>
            </div>

            <div className="doeiwjrkweirwe">
              <input id="s5" name="s-optns" type="radio" className="d-none position-absolute" />

              <label htmlFor="s5" className="text-center p-2"><span className="mb-1">31,500</span> <br /> XXL</label>
            </div>

            <div className="doeiwjrkweirwe">
              <input id="s6" name="s-optns" type="radio" className="d-none position-absolute" />

              <label htmlFor="s6" className="text-center p-2"><span className="mb-1">36,225</span> <br /> 3XL</label>
            </div>

            <div className="doeiwjrkweirwe">
              <input id="s7" name="s-optns" type="radio" className="d-none position-absolute" />

              <label htmlFor="s7" className="text-center p-2"><span className="mb-1">36,225</span> <br /> 4XL</label>
            </div>

            <div className="doeiwjrkweirwe">
              <input id="s8" name="s-optns" type="radio" className="d-none position-absolute" />

              <label htmlFor="s8" className="text-center p-2"><span className="mb-1">36,225</span> <br /> 5XL</label>
            </div>

            <div className="doeiwjrkweirwe">
              <input id="s9" name="s-optns" type="radio" className="d-none position-absolute" />

              <label htmlFor="s9" className="text-center p-2"><span className="mb-1">36,225</span> <br /> 6XL</label>
            </div>
          </div>

          <p>Customized orders can take minimum 7 extra working days along with customization charges (if applicable). Our team may contact you to assist with your order.</p>

          <div className="idjnejwhrewrwerwer mt-4">
            <h5 className="d-flex align-items-center justify-content-between">
              <span><i className="bi me-1 bi-arrows-expand-vertical"></i> Do you want to enter your measurements?</span>
            
              <div className="checkbox-wrapper-5 d-flex align-items-center">
                <span>Yes</span>

                <div className="check ms-2">
                  <input id="check-5" type="checkbox" onChange={(e) => setShowTabs(e.target.checked)} />
                  
                  <label for="check-5"></label>
                </div>
              </div>
            </h5>

            {showTabs && (
              <div className="doiewnjkrhwerwerwer mt-3">
                <Tabs
                  defaultActiveKey="customizesize"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="customizesize" title="Customize Size">
                    Customize Size
                  </Tab>
                  <Tab eventKey="changecolor" title="Change Color">
                    Change Color
                  </Tab>
                </Tabs>
              </div>
            )}

            <div className="doeiwhrewrwer mt-4">
              <p className="mb-0">Note: Additional delivery time & customization chanrges may apply post confirmation with the designer.</p>
            </div>
          </div>
        </div>

        <div className="doewrjhwerwerwer d-flex align-items-center justify-content-between p-4">
          <p className="mb-0">0 Customizations selected</p>

          <button className="btn btn-main">Add to Cart</button>
        </div>
      </div>)}

      {/* turbon chart size */}

      <Modal show={show} className="men-chart-size" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Turbon Chart Size</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          <img src="/images/turban.jpg" className="img-fluid" alt="" />
        </Modal.Body>
      </Modal>

      {/* mojri chart size */}

      <Modal show={showMjri} className="men-chart-size" onHide={handleMClose}>
        <Modal.Header closeButton>
          <Modal.Title>Turbon Chart Size</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          <img src="/images/mojri.jpg" className="img-fluid" alt="" />
        </Modal.Body>
      </Modal>

      <FooterTopComponent />
      </>
  );
};
