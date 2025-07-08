import { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import { FeaturedProducts } from "../../components";

import "swiper/css";
import "./Css/Home.css";
import "./Css/HomeResponsive.css";

export const Home = () => {

  // eslint-disable-next-line
  const [featuredProducts, setFeaturedProducts] = useState([
    {
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
    }

  ]);
  // eslint-disable-next-line
  const [topCategories, setTopCategories] = useState([
    { id: "t1", img: "./images/fapo (1).jpg", ctgy: "Activewear" },
    { id: "t2", img: "./images/fapo (1).webp", ctgy: "Activewear" },
    { id: "t3", img: "./images/fapo (1).webp", ctgy: "Activewear" },
    { id: "t4", img: "./images/fapo (2).webp", ctgy: "Co-ords" },
    { id: "t5", img: "./images/fapo (3).webp", ctgy: "Activewear" },
    { id: "t6", img: "./images/fapo (4).webp", ctgy: "Activewear" },
    { id: "t7", img: "./images/fapo (5).webp", ctgy: "Jeans" },
    { id: "t8", img: "./images/fapo (6).webp", ctgy: "Activewear" },
    { id: "t9", img: "./images/fapo (7).webp", ctgy: "Lingeries" },
    { id: "t10", img: "./images/fapo (8).webp", ctgy: "Activewear" },
    { id: "t11", img: "./images/fapo (8).webp", ctgy: "Skirts & Tops" },
    { id: "t12", img: "./images/fapo (1).webp", ctgy: "Activewear" },
    { id: "t13", img: "./images/fapo (3).webp", ctgy: "Activewear" },
    { id: "t14", img: "./images/fapo (6).webp", ctgy: "Activewear" },
    { id: "t15", img: "./images/fapo (2).webp", ctgy: "Activewear" },
  ]);

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


  // //top categories

  // useEffect(() => {
  //   const fetchTopCategories = async () => {
  //     const URL = "http://localhost:8000/top_categories";
  //     const response = await fetch(URL);
  //     const data = await response.json();
  //     setTopCategories(data);
  //     console.log(data)
  //   }

  //   fetchTopCategories();
  // }, []);



  return (
    <>
      <div className="dfgdfvsdfsdfsdf">
        <div className="container-fluid">
          <div className="sdfsdfd">
            <div className="row">
              <div className="col-lg-4 ps-0 pe-0">
                <div className="gdfgdf215">
                  <img src="./images/fashion (3).jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-4 ps-0 pe-0">
                <div
                  className="lvjhfbvdf558"
                  style={{
                    backgroundImage: "url('./images/bgc.jpg')",
                    backgroundSize: "100% 100%"
                  }}
                >
                  <div className="jhsbfsdf">
                    <h6>Set Your Style</h6>
                    <h2>INSTILEY</h2>
                    <p>
                      Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
                      consectetur adipisci velit sed quia non numquam eius modi
                      tempora incidunto.
                    </p>
                  </div>
                  <div className="dfbfbhgfdg">
                    <div className="row">
                      <div className="col-lg-6">
                        <button className="jdfhbtn">SHOP WOMEN</button>
                      </div>
                      <div className="col-lg-6">
                        <button className="jdfhbtn">SHOP MEN</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 ps-0 pe-0">
                <div className="gdfgdf215">
                  <img src="./images/fashion (2).jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="jdfgdfg65dfdf">
        <div className="container-fluid">
          <div className="dfghdfg548">
            <div className="row">
              <div className="col-6">
                <div className="dfkhgdfgdf">
                  <h2>FREE SHIPPING OVER $99*</h2>
                  <p>Plus, two-day delivery on thousands of items.</p>
                </div>
              </div>
              <div className="col-6">
                <div className="dfkhgdfgdf">
                  <h2>AMAZING VALUE EVERY DAY</h2>
                  <p>Items you love at prices that fit your budget.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fbgvdsdfd6568">
        <div className="container-fluid">
          <div className="ghbgfgdf">
            <div className="row align-items-center">
              <div className="col-3">
                <div className="dfnghfd">
                  <div className="row align-items-center">
                    <div className="col-2">
                      <div className="sdhgdfg">
                        <img src="./images/fagift (1).png" alt="" />
                      </div>
                    </div>
                    <div className="col-10">
                      <div className="cfgncfgb">
                        <h4>FREE GIFT WRAPPING</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="dfnghfd">
                  <div className="row align-items-center">
                    <div className="col-2">
                      <div className="sdhgdfg">
                        <img src="./images/fagift (2).png" alt="" />
                      </div>
                    </div>
                    <div className="col-10">
                      <div className="cfgncfgb">
                        <h4>FREE GIFT WRAPPING</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="dfnghfd">
                  <div className="row align-items-center">
                    <div className="col-2">
                      <div className="sdhgdfg">
                        <img src="./images/fagift (3).png" alt="" />
                      </div>
                    </div>
                    <div className="col-10">
                      <div className="cfgncfgb">
                        <h4>STUDENT DISCOUNT</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="dfnghfd5">
                  <div className="row align-items-center">
                    <div className="col-2">
                      <div className="sdhgdfg">
                        <img src="./images/fagift (4).png" alt="" />
                      </div>
                    </div>
                    <div className="col-10">
                      <div className="cfgncfgb">
                        <h4>100% SECURE SHOPPING</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dfndfjhdfgdf">
        <div className="container-fluid">
          <div className="dfhdfgd464">
            <h2>Top Categories</h2>
          </div>

          <div className="fgjdfgf3298">
            {topCategories.map((topCategorie) => (
              <div className="dfhdfg" key={topCategorie.id}>
                <div className="fbdfg">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="dfgh">
                        <img src={topCategorie.img} alt={topCategorie.ctgy} />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="fbsdsdf">
                        <h4 className="mb-0">
                          <Link to="/">{topCategorie.ctgy}</Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}            
          </div>
        </div>
      </div>
      <div className="sdfnjhdfbgdfg">
        <div className="container-fluid">
          <div className="fgnhfgh">
            <h2>#MUST Have</h2>
          </div>
          <div className="dfhgudfg">
            <div className="row">
              <div className="col-lg-6 pe-0 ps-0">
                <div className="fhdfgdf">
                  <img src="./images/poster (1).png" alt="" />
                </div>
              </div>
              <div className="col-lg-6  pe-0 ps-0">
                <div className="fhdfgdf">
                  <img src="./images/poster (2).png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="xfdjgdfgdfg"
        style={{
          background: "url('./images/downbanner (3).png')",
          backgroundSize: "100% 100%"
        }}
      >
        <div className="container-fluid">
          <div className="dfbghd5488"></div>
        </div>
      </div>
      <div className="xfbxdfgsdf">
        <div className="container-fluid">
          <div className="dfngjhdfgdfg">
             {/* eslint-disable-next-line */}
            <marquee behavior="" direction="" className="gfjhfgjfg">
              <span>
                USE CODE: SALE70 <i className="fa-solid fa-bolt" />
              </span>{" "}
              <span className="hfg55543">
                SALE 70% OFF <i className="fa-solid fa-bolt" />
              </span>{" "}
              <span>
                END OF SEASON
                <i className="fa-solid fa-bolt" />
              </span>
            </marquee>
          </div>
        </div>
      </div>
      <div className="fbnghksdfsdfsf">
        <div className="container-fluid">
          <div className="sdf58sdfs">
            <h4>Brand We Love</h4>
          </div>
          <div className="dfgnhdfgdf">
            <div className="row">
              <div className="col-lg-4 ps-0 pe-0">
                <div className="nhgf65dfgdf">
                  <img src="./images/fashiondwn3 (1).png" alt="" />
                </div>
              </div>
              <div className="col-lg-4 ps-0 pe-0">
                <div className="nhgf65dfgdf">
                  <img src="./images/fashiondwn3 (2).png" alt="" />
                </div>
              </div>
              <div className="col-lg-4 ps-0 pe-0">
                <div className="nhgf65dfgdf">
                  <img src="./images/fashiondwn3 (3).png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fvbhgfbfgvf5865">
        <div className="container-fluid">
          <div className="gbfhdvgdfg">
            <div className="row">
              <div className="col-lg-3 ps-0 pe-0">
                <div className="dfdfdffd">
                  <img src="./images/fashion40.png" alt="" />
                </div>
              </div>
              <div className="col-lg-9 ps-0 pe-0">
                <div className="dfdfdffd">
                  <img src="./images/fashion39.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fcknjhfvgdf">
        <div className="container-fluid">
          <div className="sdf58sdfs">
            <h4>New Arrivals</h4>
          </div>
          <div
            className="sdfsdfsdfsd"
            style={{ backgroundImage: "url('./images/new-arrivle.png')" }}
          ></div>
        </div>
      </div>
      <div className="kdnfghdfsdf">
        <div className="container-fluid">
          <div className="sdf58sdfs">
            <h4>#Trend Now</h4>
          </div>
          <div className="dfdfhgdf65">
            <div className="row">
              <div className="col-lg-4">
                <div
                  className="dfgyhdfgdf"
                  style={{ backgroundImage: "url('./images/new-product.png')" }}
                >
                  <div className="dfdfsdf">
                    <h4>
                      <span>NEW IN</span>{" "}
                    </h4>
                    <h2>
                      <span className="dftgh525">
                        SHOES &amp; <br /> BOOTS
                      </span>{" "}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="dfgyhdfgdf"
                  style={{ backgroundImage: "url('./images/new-product (2).png')" }}
                >
                  <div className="dfdfsdf">
                    <h4>
                      <span>MUST HAVE</span>
                    </h4>
                    <h2>
                      <span className="dftgh525">
                        EDITOR'S <br /> PICKS
                      </span>{" "}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="dfgyhdfgdf"
                  style={{ backgroundImage: "url('./images/new-product (3).png')" }}
                >
                  <div className="dfdfsdf">
                    <h4>
                      <span>NEW IN</span>{" "}
                    </h4>
                    <h2>
                      <span className="dftgh525">
                        SHOES &amp; <br /> BOOTS
                      </span>{" "}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dfbgghdfdfgdf">
        <div className="container-fluid">
          <div className="sdf58sdfs">
            <h4>Featured Products</h4>
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