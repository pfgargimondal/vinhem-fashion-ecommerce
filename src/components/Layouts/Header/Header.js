  // eslint-disable-next-line
import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useAuth } from "../../../context/AuthContext";
import { DropdownLoggedIn } from "../../Elements/Dropdown/DropdownLoggedIn";
import http from "../../../http";
import Logo from "../../../assets/images/logo.png";

import "./Css/Header.css";
import "./Css/HeaderResponsive.css";
import 'swiper/css';

export const Header = ({ shouldHideHeader, shouldHideFullHeaderFooterRoutes }) => {
  const [resMenu, setResMenu] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const [searchBarToggle, setSearchBarToggle] = useState(false);

  useEffect(() => {
    const body = document.querySelector("html");

    if (resMenu) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
  }, [resMenu]);

  const { user } = useAuth();

  const [mainCategory, SetmainCategory] = useState({});
  const [currency, Setcurrency] = useState([]);

  useEffect(() => {
      const fetchMainCategory = async () => {
          try {
              const getresponse = await http.get("/product-category");
              const allresponse = getresponse.data;
              SetmainCategory(allresponse.data); 
          } catch (error) {
              console.error("Error fetching main category:", error);
          }
      };

      fetchMainCategory();
  }, []);

  useEffect(() => {
    const fetchCurrency = async () => {
        try {
            const getresponse = await http.get("/get-currency-content");
            const allresponse = getresponse.data;
            Setcurrency(allresponse.data || []); 
        } catch (error) {
            console.error("Error fetching currency:", error);
        }
    };
    fetchCurrency();
  }, []);

  return (
    <>
      { !shouldHideFullHeaderFooterRoutes && (
        <header>
          <div className="advertisement-slider position-relative" style={{background: "url('/images/csadad.jpg') no-repeat", backgroundPosition: "top", backgroundSize: "cover"}}>
          <div className="marquee-container">
            <div className="marquee-track marquee-left">
              <div className="scroll-card">
                <p className="mb-0"><a href="/">SUMMER SALE: UP TO 70% OFF SELECTED ITEMS</a></p>
              </div>

              <div className="scroll-card">
                <p className="mb-0"><a href="/">SUMMER SALE: UP TO 70% OFF SELECTED ITEMS</a></p>
              </div>

              <div className="scroll-card">
                <p className="mb-0"><a href="/">SUMMER SALE: UP TO 70% OFF SELECTED ITEMS</a></p>
              </div>

              <div className="scroll-card">
                <p className="mb-0"><a href="/">SUMMER SALE: UP TO 70% OFF SELECTED ITEMS</a></p>
              </div>

              <div className="scroll-card">
                <p className="mb-0"><a href="/">SUMMER SALE: UP TO 70% OFF SELECTED ITEMS</a></p>
              </div>

              <div className="scroll-card">
                <p className="mb-0"><a href="/">SUMMER SALE: UP TO 70% OFF SELECTED ITEMS</a></p>
              </div>

              <div className="scroll-card">
                <p className="mb-0"><a href="/">SUMMER SALE: UP TO 70% OFF SELECTED ITEMS</a></p>
              </div>

              <div className="scroll-card">
                <p className="mb-0"><a href="/">SUMMER SALE: UP TO 70% OFF SELECTED ITEMS</a></p>
              </div>
            </div>
          </div>
          </div>

          { !shouldHideHeader && (
          <div className="header-top py-2">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-2">
                  <div className="doeiwhrkwdeor">
                    <Link to="/"><img src={Logo} className="img-fluid" alt="" /></Link>

                    <div className="dwerkwenrwer d-none">
                      <i class="bi me-2 bi-search" onClick={() => setSearchBarToggle(!searchBarToggle)}></i>

                      <Form.Select className="me-2" aria-label="Default select example">
                        {currency.map(allCurrency => (
                          <option
                            key={allCurrency.id}
                            value={allCurrency.id}
                            selected={allCurrency.choice === 1}
                          >
                            {allCurrency.currency_type} ({allCurrency.currency_code})
                          </option>
                        ))}
                      </Form.Select>

                      <i class="fa-solid fa-bars" id="res-toggle-btn" onClick={() => setResMenu(true)}></i>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="doiwehrwehirnwerwer aosndkjnjhasekwewt row align-items-center">
                    <div className="col-lg-2">
                      <Form.Select aria-label="Default select example">
                        {currency.map(allCurrency => (
                          <option
                            key={allCurrency.id}
                            value={allCurrency.id}
                            selected={allCurrency.choice === 1}
                          >
                            {allCurrency.currency_type} ({allCurrency.currency_code})
                          </option>
                        ))}
                      </Form.Select>
                    </div>

                    <div className="col-lg-10">
                      <div className={`search-field ${searchBarToggle ? "" : "search-field-hide"} position-relative`}>
                        <input type="text" className="form-control rounded-pill ps-3" placeholder="Search for Pre-stitched saree" />

                        <i class="bi position-absolute bi-search"></i>
                      </div>
                    </div>               
                  </div>
                </div>

                <div className="col-lg-4">
                  {resMenu && (<div className="res-menu-backdrop position-fixed w-100 h-100" onClick={() => setResMenu(false)}></div>)}

                  <div className={`doewhruiwerwer_right ${resMenu ? "" : "doewhruiwerwer_right-hide"}`}>
                    <Link to="/"><img src={Logo} className="img-fluid d-none" alt="" /></Link>

                    <ul className="mb-0 ps-0 d-flex justify-content-between align-items-center">
                      <li><i class="bi bi-headset"></i> Help</li>

                      <li className="infrm-menu-divider">|</li>

                      <li><i class="bi bi-heart"></i> &nbsp;Wishlist <span>0</span></li>

                      <li className="infrm-menu-divider">|</li>

                      <li><i class="bi bi-handbag"></i> Bag <span>0</span></li>

                      <li className="infrm-menu-divider">|</li>

                        <li className="position-relative">
                        {user ? (
                          <>
                            <i className="bi bi-person" onClick={() => setUserDropdown(!userDropdown)}></i> <div className="mjeimojwjikrrr">{user.name}</div>
                            {userDropdown && <DropdownLoggedIn />}
                          </>
                        ) : (
                          <Link to="/register">
                            <i className="bi bi-person"></i> Account
                          </Link>
                        )}
                      </li>     
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ) }      

          { !shouldHideHeader && (
          <div className="header-main bg-white pt-4 pb-2">       
            <Swiper
              slidesPerView="auto"
              spaceBetween={10}
              breakpoints={{
                640: {
                  slidesPerView: "auto",
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: "auto",
                  spaceBetween: 20,
                },
                1000: {
                  slidesPerView: "auto",
                  spaceBetween: 20,
                },
              }}
              className="mySwiper"
            >

              {mainCategory?.main_categories?.map((category) => (
                <SwiperSlide key={category.id}>
                  <NavLink to={`/${category.slug}`} end>
                    {category.category}
                  </NavLink>
                </SwiperSlide>
              ))}
              {/* <SwiperSlide><NavLink to="/new-in" end>New In</NavLink></SwiperSlide>
              <SwiperSlide><NavLink to="">Women</NavLink></SwiperSlide>
              <SwiperSlide><NavLink to="">Men</NavLink></SwiperSlide>
              <SwiperSlide><NavLink to="">Kids Wear</NavLink></SwiperSlide>
              <SwiperSlide><NavLink to="">Wedding</NavLink></SwiperSlide>
              <SwiperSlide><NavLink to="">Jewellery</NavLink></SwiperSlide>
              <SwiperSlide><NavLink to="">Ready To Ship</NavLink></SwiperSlide>
              <SwiperSlide><NavLink to="/on-sale">On Sale</NavLink></SwiperSlide>
              <SwiperSlide><NavLink to="">Eid Store</NavLink></SwiperSlide>
              <SwiperSlide><NavLink to="">Diwali</NavLink></SwiperSlide>
              <SwiperSlide><NavLink to="">Holi</NavLink></SwiperSlide> */}
            </Swiper>     
          </div>
          ) }
        </header>
      ) }
    </>
  )
}