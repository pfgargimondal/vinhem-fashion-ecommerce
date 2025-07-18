  // eslint-disable-next-line
import { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { Swiper, SwiperSlide } from 'swiper/react';

import { DropdownLoggedIn } from "../../Elements/Dropdown/DropdownLoggedIn";

import Logo from "../../../assets/images/logo.png";

import "./Css/Header.css";
import "./Css/HeaderResponsive.css";
import 'swiper/css';

export const Header = ({ shouldHideHeader }) => {
  const [resMenu, setResMenu] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);

    // eslint-disable-next-line
  const handleResMenuToggle = () => {
    const html = document.querySelector("html");

    html.classList.toggle("overflow-hidden");
    setResMenu(!resMenu);
  }


  return (
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
                </div>
              </div>

              <div className="col-lg-6">
                <div className="doiwehrwehirnwerwer row align-items-center">
                  <div className="col-lg-2">
                    <Form.Select aria-label="Default select example">
                      <option>INR (₹)</option>

                      <option value="1">Dollar ($)</option>
                    </Form.Select>
                  </div>

                  <div className="col-lg-10">
                    <div className="search-field position-relative">
                      <input type="text" className="form-control rounded-pill ps-3" placeholder="Search for Pre-stitched saree" />

                      <i class="bi position-absolute bi-search"></i>
                    </div>
                  </div>               
                </div>
              </div>

              <div className="col-lg-4">
                <div className="doewhruiwerwer_right">
                  <ul className="mb-0 ps-0 d-flex justify-content-between align-items-center">
                    <li><i class="bi bi-headset"></i> Help</li>

                    <li className="infrm-menu-divider">|</li>

                    <li><i class="bi bi-heart"></i> &nbsp;Wishlist <span>0</span></li>

                    <li className="infrm-menu-divider">|</li>

                    <li><i class="bi bi-handbag"></i> Bag <span>0</span></li>

                    <li className="infrm-menu-divider">|</li>

                    <li className="position-relative">
                      <Link to="/register" onClick={() => setUserDropdown(!userDropdown)}><i class="bi bi-person"></i> Account</Link>

                      { userDropdown && <DropdownLoggedIn /> }
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
            <SwiperSlide><NavLink to="" end>New In</NavLink></SwiperSlide>

            <SwiperSlide><NavLink to="">Women</NavLink></SwiperSlide>

            <SwiperSlide><NavLink to="">Men</NavLink></SwiperSlide>

            <SwiperSlide><NavLink to="">Kids Wear</NavLink></SwiperSlide>

            <SwiperSlide><NavLink to="">Wedding</NavLink></SwiperSlide>

            <SwiperSlide><NavLink to="">Jewellery</NavLink></SwiperSlide>

            <SwiperSlide><NavLink to="">Ready To Ship</NavLink></SwiperSlide>

            <SwiperSlide><NavLink to="">On Sale</NavLink></SwiperSlide>

            <SwiperSlide><NavLink to="">Eid Store</NavLink></SwiperSlide>

            <SwiperSlide><NavLink to="">Diwali</NavLink></SwiperSlide>

            <SwiperSlide><NavLink to="">Holi</NavLink></SwiperSlide>
          </Swiper>     
        </div>
      ) }      
    </header>
  )
}