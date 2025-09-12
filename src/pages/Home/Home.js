import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Mousewheel } from "swiper/modules";
import http from "../../http";
import { FeaturedProducts } from "../../components";

import "swiper/css";
import "./Css/Home.css";
import "./Css/HomeResponsive.css";
import { FooterTopComponent } from "../../components/Others/FooterTopComponent";

export const Home = () => {

   const [homepage, Sethomepage] = useState({});

    useEffect(() => {
        const fetchOnSale = async () => {
            try {
                const getresponse = await http.get("/fetch-home-page");
                // console.log("API response:", getresponse.data);
                Sethomepage(getresponse.data); 
            } catch (error) {
                console.error("Error fetching homepage data:", error);
            }
        };

        fetchOnSale();
    }, []);


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
    modules: [Autoplay, Pagination, Navigation, Mousewheel],
    slidesPerView: 5,
    navigation: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: { clickable: true },
    breakpoints: {
      320: { slidesPerView: 1 },
      576: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 4 },
      1200: { slidesPerView: 5 },
    },
  };


  return (
    <>
      <div className="dfgdfvsdfsdfsdf">
        <div className="rehbgdfgnjh">
          <div className="sdfsdfd">
            <div className="row">
              <Link to={homepage?.data?.url}>
              <div className="col-lg-12">
                <div className="gdfgdf215">
                  <img src={`${homepage?.image_url}/${homepage?.data?.banner_image1}`} alt="" />
                </div>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="jdfgdfg65dfdf">
        <div className="sadasdc">
          <div className="dfghdfg548">
            <img src={`${homepage?.image_url}/${homepage?.data?.banner_image2}`} className="w-100" alt="" />
          </div>
        </div>
      </div>

      <div className="fbgvdsdfd6568 pt-3 pb-5 mb-4">
        <div className="container-fluid">
          <div className="ghbgfgdf">
           <img src={`${homepage?.image_url}/${homepage?.data?.banner_image3}`} className="w-100" alt="" />
          </div>
        </div>
      </div>

      {/* <div className="fbgvdsdfd6568 pt-3 pb-5 mb-4">
        <div className="container-fluid">
          <div className="ghbgfgdf">
            <div className="row align-items-center">
              <div className="col-3">
                <div className="dfnghfd">
                  <div className="row align-items-center">
                    <div className="col-2">
                      <div className="sdhgdfg">
                        <img src={`${homepage?.image_url}/${homepage?.data?.last_image1}`} alt="" />
                      </div>
                    </div>
                    <div className="col-10">
                      <div className="cfgncfgb">
                        <h4>{homepage?.data?.last_title1}</h4>
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
                        <img src={`${homepage?.image_url}/${homepage?.data?.last_image2}`} alt="" />
                      </div>
                    </div>
                    <div className="col-10">
                      <div className="cfgncfgb">
                        <h4>{homepage?.data?.last_title2}</h4>
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
                        <img src={`${homepage?.image_url}/${homepage?.data?.last_image3}`} alt="" />
                      </div>
                    </div>
                    <div className="col-10">
                      <div className="cfgncfgb">
                        <h4>{homepage?.data?.last_title3}</h4>
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
                        <img src={`${homepage?.image_url}/${homepage?.data?.last_image3}`} alt="" />
                      </div>
                    </div>
                    <div className="col-10">
                      <div className="cfgncfgb">
                        <h4>{homepage?.data?.last_title4}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      
      <div className="dfndfjhdfgdf pb-5 mb-4">
        <div className="container-fluid">
          <div className="dfhdfgd464">
            <h2 className="mb-3">Top Categories</h2>
          </div>

          <div className="fgjdfgf3298">
            {topCategories.map((topCategorie) => (
              <div className="dfhdfg" key={topCategorie.id}>
                <div className="fbdfg">
                  <div className="d-flex sdvsdfdvgdfg align-items-center">
                    <div className="dbfggfhfh">
                      <img src={topCategorie.img} className="img-fluid" alt={topCategorie.ctgy} />
                    </div>

                    <div className="adfdfddgdfg">
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

      <div className="sdfnjhdfbgdfg pb-5 mb-4">
        <div className="container-fluid">
          <div className="fgnhfgh">
            <h2 className="mb-3">{homepage?.data?.section1_title1}</h2>
          </div>
          <div className="dfhgudfg">
            <div className="row">
              <div className="col-lg-6">
                <div className="fhdfgdf">
                  <img src={`${homepage?.image_url}/${homepage?.data?.section1_image1}`} alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="fhdfgdf">
                  <img src={`${homepage?.image_url}/${homepage?.data?.section1_image2}`} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="xfdjgdfgdfg mb-5"
        style={{
          backgroundImage: `url(${homepage?.image_url}/${homepage?.data?.section2_image})`,
          backgroundSize: "100% 100%"
        }}
      >
        <div className="container-fluid">
          <div className="dfbghd5488"></div>
        </div>
      </div>

      <div className="xfbxdfgsdf d-none">
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

      <div className="fbnghksdfsdfsf mt-5 pt-3 pb-5 mb-4">
        <div className="container-fluid">
          <div className="sdf58sdfs">
            <h4 className="mb-3">Brand We Love</h4>
          </div>
          <div className="dfgnhdfgdf">
            <div className="row">
              <div className="col-lg-4">
                <div className="nhgf65dfgdf">
                  <img src={`${homepage?.image_url}/${homepage?.data?.section3_image1}`} alt="" />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="nhgf65dfgdf">
                  <img src={`${homepage?.image_url}/${homepage?.data?.section3_image2}`} alt="" />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="nhgf65dfgdf">
                  <img src={`${homepage?.image_url}/${homepage?.data?.section3_image3}`} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fvbhgfbfgvf5865 pb-5 mb-4">
        <div className="container-fluid">
          <div className="gbfhdvgdfg">
            <div className="row">
              <div className="col-lg-3">
                <div className="dfdfdffd">
                  <img src={`${homepage?.image_url}/${homepage?.data?.section3_image4}`} alt="" />
                </div>
              </div>
              <div className="col-lg-9">
                <div className="dfdfdffd">
                  <img src={`${homepage?.image_url}/${homepage?.data?.section3_image5}`} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fcknjhfvgdf pb-5 mb-4">
        <div className="container-fluid">
          <div className="sdf58sdfs">
            <h4 className="mb-3">{homepage?.data?.section4_title}</h4>
          </div>
          <div
            className="sdfsdfsdfsd"
            style={{ backgroundImage: `url(${homepage?.image_url}/${homepage?.data?.section4_image})`, }}
          ></div>
        </div>
      </div>

      <div className="kdnfghdfsdf pb-5 mb-4">
        <div className="container-fluid">
          <div className="sdf58sdfs">
            <h4 className="mb-3">{homepage?.data?.section5_title1}</h4>
          </div>
          <div className="dfdfhgdf65">
            <div className="row">
              <div className="col-lg-4">
                <div
                  className="dfgyhdfgdf"
                  style={{ backgroundImage: `url(${homepage?.image_url}/${homepage?.data?.section5_image1})`, }}
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
                  style={{ backgroundImage: `url(${homepage?.image_url}/${homepage?.data?.section5_image2})`, }}
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
                  style={{ backgroundImage: `url(${homepage?.image_url}/${homepage?.data?.section5_image3})`, }}
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

      <div className="lknaknjdoijweewpr py-4 mb-5">
        <div className="container-fluid">
          <img src="./images/Home-page-Edit.jpg" className="img-fluid" alt="" />
        </div>
      </div>

      <div className="dfbgghdfdfgdf pt-0 mb-4">
        <div className="container-fluid">
          <div className="sdf58sdfs">
            <h4 className="mb-3">Featured Products</h4>
          </div>

          <div className="fgjhdfgdfgdf">
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
      <FooterTopComponent />

    </>
  )
}