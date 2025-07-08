import { useState } from "react";
import { Link } from "react-router-dom";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Swiper, SwiperSlide } from "swiper/react";

import { FeaturedProducts } from "../../components";

import "./Css/ProductDetail.css";
import "swiper/css";


export const ProductDetail = () => {
  // eslint-disable-next-line
  const [featuredProducts, setFeaturedProducts] = useState([{
      id: 1000,
      img1: "/images/product1 (1).webp",
      img2: "/images/product1 (2).webp",
      title: "COLLETTE",
      description: "(Product 35) Sample - Clothing And Accessory Boutiques For Sale",
      price: "48.99"
    },
    {
      id: 1001,
      img1: "/images/product3 (1).webp",
      img2: "/images/product3 (2).webp",
      title: "COLLETTE",
      description: "(Product 35) Sample - Clothing And Accessory Boutiques For Sale",
      price: "48.99"
    },
    {
      id: 1002,
      img1: "/images/product2 (1).webp",
      img2: "/images/product2 (2).webp",
      title: "COLLETTE",
      description: "(Product 35) Sample - Clothing And Accessory Boutiques For Sale",
      price: "48.99"
    },
    {
      id: 1003,
      img1: "/images/raquel-gambin-kS3YkVtf85U-unsplash.jpg",
      img2: "/images/h-co-cp-VMJ-mdKs-unsplash.jpg",
      title: "COLLETTE",
      description: "(Product 35) Sample - Clothing And Accessory Boutiques For Sale",
      price: "48.99"
    },
    {
      id: 1004,
      img1: "/images/r-n-tyfqOL1FAQc-unsplash.jpg",
      img2: "/images/oleg-ivanov-sg_gRhbYXhc-unsplash.jpg",
      title: "COLLETTE",
      description: "(Product 35) Sample - Clothing And Accessory Boutiques For Sale",
      price: "48.99"
    },
    {
      id: 1005,
      img1: "/images/product1 (1).webp",
      img2: "/images/product1 (2).webp",
      title: "COLLETTE",
      description: "(Product 35) Sample - Clothing And Accessory Boutiques For Sale",
      price: "48.99"
    },
    {
      id: 1006,
      img1: "/images/product2 (1).webp",
      img2: "/images/product2 (2).webp",
      title: "COLLETTE",
      description: "(Product 35) Sample - Clothing And Accessory Boutiques For Sale",
      price: "48.99"
    }]);

  //featured products
  
    const swiperConfig = {
      spaceBetween: 20,
      slidesPerView: 4,
      navigation: true,
      pagination: { clickable: true },
      breakpoints: {
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1200: { slidesPerView: 4 },
      },
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
        <div className="container">
          <div className="fgnbdfgdf">
            <div className="row">
              <div className="col-lg-6">
                <div className="fhsdfsdf sticky-top">
                  <div className="bbb55525">
                    <div className="row">
                      <div className="col-lg-3">
                        <div className="gdgsd">
                          <ul className="dfgdfgdfgjlk tabs">
                            <li className="tab-link current" data-tab="tab-1">
                              <div className="fgdf5545">
                                <img src="../../images/product-eco (1).jpg" alt="" />
                              </div>
                            </li>
                            <li className="tab-link" data-tab="tab-2">
                              <div className="fgdf5545">
                                <img src="../../images/product-eco (2).jpg" alt="" />
                              </div>
                            </li>
                            <li className="tab-link" data-tab="tab-3">
                              <div className="fgdf5545">
                                <img src="../../images/product-eco (3).jpg" alt="" />
                              </div>
                            </li>
                            <li className="tab-link" data-tab="tab-4">
                              <div className="fgdf5545">
                                <img src="../../images/product-eco (4).jpg" alt="" />
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="col-lg-9">
                        <div className="gdgsd">
                          <div id="tab-1" className="tab-content current">
                            <div className="dfuihdfgvdf">
                              <img src="../../images/product-eco (1).jpg" alt="" />
                            </div>
                          </div>
                          <div id="tab-2" className="tab-content">
                            <div className="dfuihdfgvdf">
                              <img src="../../images/product-eco (2).jpg" alt="" />
                            </div>
                          </div>
                          <div id="tab-3" className="tab-content">
                            <div className="dfuihdfgvdf">
                              <img src="../../images/product-eco (3).jpg" alt="" />
                            </div>
                          </div>
                          <div id="tab-4" className="tab-content">
                            <div className="dfuihdfgvdf">
                              <img src="../../images/product-eco (4).jpg" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>                  
                </div>
              </div>

              <div className="col-lg-6">
                <div className="dfghjdfgdfgf ps-5 pt-2">
                  <div className="dsfbsdghfjs">
                    <div className="fgnjdfgfd">
                      <h2>
                        Neha Khullar X AZA

                        <i className="fa-solid fa-greater-than" />
                      </h2>
                    </div>

                    <div className="dfhdfhd">
                      <i className="fa-solid fa-arrow-up-from-bracket" />
                      <i className="fa-regular fa-heart" />
                    </div>
                  </div>

                  <div className="fhdfgh">
                    <p>
                      Yellow Organza, Silk, Chanderi Embroidery Plunge Neck Saree
                      Set
                    </p>
                  </div>

                  <div className="dfjghdfgdff58 mb-4">
                    <h4 className="d-flex mb-1">
                      <span className="discounted-price d-flex align-items-center"><i class="bi bi-currency-rupee"></i> 30,322</span>

                      <span className="gdfg55 d-flex align-items-center ms-2"><i class="bi bi-currency-rupee"></i> 37,902</span>

                      <span className="fghfgg114 d-flex align-items-center ms-2">20%OFF</span>
                    </h4>

                    <p className="mb-0">(inclusive of all taxes)</p>
                  </div>

                  <div className="jdfbdfgdf">
                    <div className="row">
                      <div className="col-lg-6">
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

                      <div className="col-lg-6">
                        <div className="dokewhkjrhuiwerwer">
                          <button className="btn btn-main"><i class="bi me-1 bi-bounding-box"></i> Size Guide</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="fvgndfjgf">
                    <label htmlFor="" className="me-1">Qty:</label>

                    <select name="" id="">
                      <option value="">1</option>

                      <option value="">1</option>
                    </select>
                  </div>

                  <div className="dfgndfjhgdf mt-4">
                    <button className="btn btn-main px-5 me-3">
                      <i class="bi bi-bag me-1"></i> Add To Cart
                    </button>

                    <button className="btn btn-main btn-transparent px-5">
                      <i class="bi bi-bag me-1"></i> Speak To Us
                    </button>
                  </div>

                  <div className="kjidbwejgrwerwer col-lg-8 position-relative mt-5">
                    <i class="bi bi-geo-alt position-absolute"></i>

                    <input type="number" className="form-control" placeholder="ex. 700001" />

                    <button className="btn btn-main position-absolute">Change</button>
                  </div>

                  <div className="doiejnwkhrwer mt-4">
                    <p className="mb-1">Delivering to GURDASPUR by 18th July 2025. Order within 11h 49m</p>

                    <p className="mb-0"><i class="bi me-1 bi-whatsapp"></i> Need it by a specific date? <Link to="/">Chat with us</Link></p>
                  </div>

                  <div className="diwenjrbwebrwehgrwer mt-5">
                    <h4 className="pb-2">Customer Info</h4>

                    <hr className="mt-0" />

                    <div className="row">
                      <div className="col-lg-6">
                        <ul className="mb-0 ps-0">
                          <li><i class="bi me-1 bi-check2-circle"></i> Non-returnable/non-exchangeable</li>
                        </ul>
                      </div>

                      <div className="col-lg-6">
                        <ul className="mb-0 ps-0">
                          <li><i class="bi me-1 bi-check2-circle"></i> Premium Quality</li>
                        </ul>
                      </div>

                      <div className="col-lg-6">
                        <ul className="mb-0 ps-0">
                          <li><i class="bi me-1 bi-check2-circle"></i> Free Shipping</li>
                        </ul>
                      </div>

                      <div className="col-lg-6">
                        <ul className="mb-0 ps-0">
                          <li><i class="bi me-1 bi-check2-circle"></i> Personalized Styling</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="diwenjrbwebrwehgrwer mt-5">
                    <h4 className="pb-2">Customer Support</h4>

                    <hr className="mt-0" />

                    <div className="dopwejoirjhwer row">
                      <div className="col-lg-6">
                        <button className="btn w-100 btn-main"><i class="bi me-1 bi-chat-left-text"></i> Chat now</button>
                      </div>

                      <div className="col-lg-6">
                        <button className="btn w-100 btn-transparent"><i class="bi me-1 bi-telephone-forward"></i> +91 85478 95458</button>
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
                      <h4 className="mb-0">Product Details</h4>

                      <i class="bi bi-chevron-down"></i>
                    </div>

                    <hr />

                    <p className="mb-4">Yellow saree made from 2x4 organza featuring intricate embroidery along the border. Paired with a padded silk chanderi blouse with a back tie-up detail.</p>

                    <div className="dikewnirhwerjwer">
                      <Tabs defaultActiveKey="about" id="uncontrolled-tab-example" className="sticky-top mb-3" >
                        <Tab eventKey="about" title="About">
                          <div className="row">
                            <div className="col-lg-6 mb-4">
                              <div className="idnewihrwer_inner">
                                <div className="odjjkwehrihwerewr mb-4">
                                  <p>No of Component <br /> <span>3</span></p>
                                </div>

                                <div className="odjjkwehrihwerewr mb-4">
                                  <p>Noteworthy Feature <br /> <span>Intricate embroidery detailing on blouse and saree border., Back tie-up detail on blouse with tassel accents.</span></p>
                                </div>

                                <div className="odjjkwehrihwerewr mb-4">
                                  <p>Style Genre <br /> <span>Classic Indian style saree</span></p>
                                </div>

                                <div className="odjjkwehrihwerewr mb-4">
                                  <p>Type of Work <br /> <span>Embroidery</span></p>
                                </div>

                                <div className="odjjkwehrihwerewr mb-4">
                                  <p>Color <br /> <span>Yellow</span></p>
                                </div>

                                <div className="odjjkwehrihwerewr mb-4">
                                  <p>Sleeve Style <br /> <span>Fitted Sleeve</span></p>
                                </div>

                                <div className="odjjkwehrihwerewr mb-4">
                                  <p>Weight Details <br /> <span>Approximate Product Weight: 500 g</span></p>
                                </div>

                                <div className="odjjkwehrihwerewr mb-4">
                                  <p>Visible Items not included <br /> <span>Only saree, blouse, and petticoat are being sold.</span></p>
                                </div>

                                <div className="odjjkwehrihwerewr mb-4">
                                  <p>Item ID <br /> <span>650986</span></p>
                                </div>

                                <div className="odjjkwehrihwerewr mb-4">
                                  <p>Manufactured / Packed by <br /> <span>Vinhem Fashion Pvt Ltd, Assembled in India</span></p>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-6 mb-4">
                              <div className="idnewihrwer_inner">
                                <div className="odjjkwehrihwerewr mb-4">
                                  <p>Components <br /> <span>Saree, Blouse, Petticoat</span></p>
                                </div>

                                <div className="odjjkwehrihwerewr mb-4">
                                  <p>Occasions <br /> <span>Suitable for weddings and festive occasions</span></p>
                                </div>

                                <div className="odjjkwehrihwerewr mb-4">
                                  <p>Pattern <br /> <span>Solid, Embroidered</span></p>
                                </div>

                                <div className="odjjkwehrihwerewr mb-4">
                                  <p>Fabric <br /> <span>Organza, Silk, Chanderi</span></p>
                                </div>

                                <div className="odjjkwehrihwerewr mb-4">
                                  <p>Neckline Style <br /> <span>Plunge Neck</span></p>
                                </div>

                                <div className="odjjkwehrihwerewr mb-4">
                                  <p>Size Details <br /> <span>Saree Length: 45 inches, Blouse Length: 13 inches</span></p>
                                </div>

                                <div className="odjjkwehrihwerewr mb-4">
                                  <p>Fit <br /> <span>Fit: Blouse: Slim Fit, Saree: Regular Fit</span></p>
                                </div>

                                <div className="odjjkwehrihwerewr mb-4">
                                  <p>Care Instruction <br /> <span>Dry clean</span></p>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-12">
                              <div className="idnewihrwer_inner dsclmer p-3">
                                <div className="odjjkwehrihwerewr">
                                  <p className="mb-0">Disclaimer <br /> <span>Color of the actual product may vary from the image. These are made to order designer styles, hence expect a slight variation from the image displayed.</span></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Tab>

                        <Tab eventKey="saree" title="Saree">
                          Tab content for Profile
                        </Tab>

                        <Tab eventKey="blouse" title="Blouse">
                          Tab content for Profile
                        </Tab>

                        <Tab eventKey="petticoat" title="Petticoat">
                          Tab content for Profile
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

                    <p className="mb-1">Product will be shipped by 12 July 2025</p>

                    <p className="mb-3">For customizations & early delivery, chat with us on WhatsApp at  <a href="/">+91 8291990059</a>  or call us at <a href="/">022-42792123</a></p>

                    <p className="mb-2">Return Policy</p>

                    <p>This product is non-returnable. <Link to="/">More Details</Link></p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 mt-5">
                <div className="odnwejihrwerwer sticky-top mt-5">
                  <div className="dowehjkrhweirwer mb-5">
                    <div className="podmkwejrwer">
                      <h4 className="mb-0">Related Products</h4>
                    </div>

                    <hr />

                    <div className="coisdefisdhifhsdjifjhosd">
                      <div className="dfgjhbdfg p-2 mb-4">
                        <div className="images">
                          <div className="image position-relative">
                            <img src="/images/raquel-gambin-kS3YkVtf85U-unsplash.jpg" alt="not found" />
                            
                            <img className="first" src="/images/h-co-cp-VMJ-mdKs-unsplash.jpg" alt="not found" />

                            <div className="fdbdfgdfgdf">
                              <h4>(Product 35) Sample - Clothing And Accessory Boutiques For Sale</h4>
                              
                              <h5>$48.99</h5>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="dfgjhbdfg p-2 mb-4">
                        <div className="images">
                          <div className="image position-relative">
                            <img src="/images/r-n-tyfqOL1FAQc-unsplash.jpg" alt="not found" />
                            
                            <img className="first" src="/images/oleg-ivanov-sg_gRhbYXhc-unsplash.jpg" alt="not found" />

                            <div className="fdbdfgdfgdf">
                              <h4>(Product 35) Sample - Clothing And Accessory Boutiques For Sale</h4>
                              
                              <h5>$48.99</h5>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="dfgjhbdfg p-2 mb-4">
                        <div className="images">
                          <div className="image position-relative">
                            <img src="/images/product1 (1).webp" alt="not found" />
                            
                            <img className="first" src="/images/product1 (2).webp" alt="not found" />

                            <div className="fdbdfgdfgdf">
                              <h4>(Product 35) Sample - Clothing And Accessory Boutiques For Sale</h4>
                              
                              <h5>$48.99</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <button className="btn btn-main">View All</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="diweurbhwer_inner mt-4">
                  <div className="dfbgghdfdfgdf">
                    <div className="sdf58sdfs">
                      <h4 className="pb-2">Featured Products</h4>
                    </div>
          
                    <div className="fgjhdfgdfgdf py-4">
                      <Swiper {...swiperConfig}>
                        {featuredProducts.map((featuredProduct) => (
                          <SwiperSlide key={featuredProduct.id}>
                            <FeaturedProducts featuredProduct={featuredProduct} />
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
                Contrary to popular belief, Lorem Ipsum is not simply random text:
              </h6>
              <p>
                There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable. If you are going to use a passage of Lorem Ipsum, you
                need to be sure there isn't anything embarrassing hidden in the
                middle of text. All the Lorem Ipsum generators on the Internet tend
                to repeat predefined chunks as necessary, making this the first true
                generator on the Internet.
              </p>
            </div>
            <div className="dfghdfg654">
              <h6>Contrary to popular belief, Lorem Ipsum is not simply:</h6>
              <p>
                There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable. If you are going to use a passage of Lorem Ipsum, you
                need to be sure there isn't anything embarrassing hidden in the
                middle of text. All the Lorem Ipsum generators on the Internet tend
                to repeat predefined chunks as necessary, making this the first true
                generator on the Internet.
              </p>
            </div>
            <div className="dfghdfg654">
              <h6>Contrary to popular belief, Lorem:</h6>
              <p>
                There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable. If you are going to use a passage of Lorem Ipsum, you
                need to be sure there isn't anything embarrassing hidden in the
                middle of text. All the Lorem Ipsum generators on the Internet tend
                to repeat predefined chunks as necessary, making this the first true
                generator on the Internet.
              </p>
            </div>
            <div className="dfghdfg654">
              <h6>Contrary to popular belief, Lorem Ipsum is not simply:</h6>
              <p>
                There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable. If you are going to use a passage of Lorem Ipsum, you
                need to be sure there isn't anything embarrassing hidden in the
                middle of text. All the Lorem Ipsum generators on the Internet tend
                to repeat predefined chunks as necessary, making this the first true
                generator on the Internet.
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
                <a href="/">Palak &amp; Mehak</a>
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
                <a href="/">Palak &amp; Mehak</a>
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
                <a href="/">Palak &amp; Mehak</a>
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
                <a href="/">Palak &amp; Mehak</a>
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
                <a href="/">Palak &amp; Mehak</a>
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
    </>
  )
}