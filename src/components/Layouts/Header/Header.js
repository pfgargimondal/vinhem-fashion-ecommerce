  // eslint-disable-next-line
import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { SwiperSlide } from 'swiper/react';
import { useAuth } from "../../../context/AuthContext";
import { DropdownLoggedIn } from "../../Elements/Dropdown/DropdownLoggedIn";
import http from "../../../http";
import Logo from "../../../assets/images/logo.png";

import "./Css/Header.css";
import "./Css/HeaderResponsive.css";
import 'swiper/css';
import { useCart } from "../../../context/CartContext";
import { useWishlist } from "../../../context/WishlistContext";
import { useCurrency } from "../../../context/CurrencyContext";

export const Header = ({ shouldHideHeader, shouldHideFullHeaderFooterRoutes }) => {
  const [resMenu, setResMenu] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const [searchBarToggle, setSearchBarToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const { selectedCurrency, setSelectedCurrency } = useCurrency();

  useEffect(() => {
    const body = document.querySelector("html");

    if (resMenu) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
  }, [resMenu]);

  const { user } = useAuth();

  const [mainCategory, SetmainCategory] = useState([]);
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

            const defaultCurrency = allresponse.data?.find(c => c.choice === 1);
            if (defaultCurrency) {
              setSelectedCurrency(defaultCurrency);
            }

        } catch (error) {
            console.error("Error fetching currency:", error);
        }
    };
    fetchCurrency();
  }, [setSelectedCurrency]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
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

          <div className={`header-sticky-wrapper ${isSticky ? "fixed-top" : ""}`}>
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
                        <Form.Select
                          className="me-2"
                          aria-label="Select currency"
                          value={selectedCurrency?.id || currency.find(c => c.choice === 1)?.id || ""}
                          onChange={(e) => {
                            const selectedObj = currency.find(c => c.id === parseInt(e.target.value));
                            setSelectedCurrency(selectedObj);
                          }}
                        >
                          {currency.map((allCurrency) => (
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
                        {/* {user ? (
                          <> */}
                            <Link to={`/wishlist`}><li><i class="bi bi-heart"></i> &nbsp;Wishlist <span>{wishlistCount}</span></li></Link>
                            <li className="infrm-menu-divider">|</li>
                            <Link to={`/cart`}><li><i class="bi bi-handbag"></i> Bag <span>{cartCount}</span></li></Link>
                          {/* </>
                        ):(
                          <>
                            <Link to={`/login`}><li><i class="bi bi-heart"></i> &nbsp;Wishlist <span>0</span></li></Link>
                            <li className="infrm-menu-divider">|</li>
                            <Link to={`/login`}><li><i class="bi bi-handbag"></i> Bag <span>0</span></li></Link>
                          </>
                        )} */}

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
            <div className="header-main bg-white py-2 position-relative">       
              <div className="header-main-wrapper">
                  {mainCategory?.map((category) => (
                  <SwiperSlide key={category.id}>
                    <NavLink to={`/${category.mainCategory_slug}`} end>
                      {category.mainCategory_name}
                    </NavLink>

                    <div className="header-mega-menu position-absolute w-100">
                      <div className="h-m-m-inner bg-white py-2 mt-3">
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-lg-8">
                              <div className="ojkmiweee_left py-3">
                                <div className="row">

                                  {category.head_categories?.map((headCat) => (
                                    <div className="col-lg-3" key={headCat.id}>
                                      <div className="oieniuiewr_inner">
                                        <h5>{headCat.headCategories_name}</h5>
                                        <ul className="mb-0 ps-0">
                                          {headCat.sub_categories?.map((subCat) => (
                                            <li key={subCat.id}>
                                              <Link to={`/${category.mainCategory_slug}/${subCat.subCategories_slug}`}>{subCat.subCategories_name}</Link>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                  ))}

                                  {/* <div className="col-lg-3">
                                    <div className="oieniuiewr_inner">
                                      <h5>Designers</h5>

                                      <ul className="mb-0 ps-0">
                                        <li>
                                          <Link>Vishwa By Pinki Sinha</Link>
                                        </li>

                                        <li>
                                          <Link>Ekaya Banaras</Link>
                                        </li>

                                        <li>
                                          <Link>Rishi and Vibhuti</Link>
                                        </li>

                                        <li>
                                          <Link>Anamika Khanna</Link>
                                        </li>

                                        <li>
                                          <Link>Preeti S Kapoor</Link>
                                        </li>

                                        <li>
                                          <Link>Chandrima</Link>
                                        </li>

                                        <li>
                                          <Link>Gulabo Jaipur</Link>
                                        </li>

                                        <li>
                                          <Link>DiyaRajv vi</Link>
                                        </li>

                                        <li>
                                          <Link>Ajiesh Oberoi</Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>

                                  <div className="col-lg-3">
                                    <div className="oieniuiewr_inner">
                                      <h5>Trending</h5>

                                      <ul className="mb-0 ps-0">
                                        <li>
                                          <Link>Buzworthy Styles</Link>
                                        </li>

                                        <li>
                                          <Link>Resort Ready</Link>
                                        </li>

                                        <li>
                                          <Link>The Bridesmaid Edit</Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>

                                  <div className="col-lg-3">
                                    <div className="oieniuiewr_inner">
                                      <h5>Trending</h5>

                                      <ul className="mb-0 ps-0">
                                        <li>
                                          <Link>Buzworthy Styles</Link>
                                        </li>

                                        <li>
                                          <Link>Resort Ready</Link>
                                        </li>

                                        <li>
                                          <Link>The Bridesmaid Edit</Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div> */}
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-4">
                              <div className="ojkmiweee_right">
                                <div className="row">
                                  {category.mainCategory_banner?.map((CategoryBanner) => (
                                    <div className="col-lg-6" key={CategoryBanner.id}>
                                      <div className="pkopkerrwer text-center">
                                        <img src={`${CategoryBanner.category_bannerImage_url}/${CategoryBanner.category_bannerImage}`} className="w-100" alt="" />
                                        <div className="dkewbjnrkwejrwer mt-2">
                                          <h5>{CategoryBanner.category_bannerTitle}</h5>
                                          <a href={`${CategoryBanner.category_bannerURL}`}>SHOW NOW</a>
                                        </div>
                                      </div>
                                    </div>
                                  ))}

                                  {/* <div className="col-lg-6">
                                    <div className="pkopkerrwer text-center">
                                      <img src="./images/black-potli-bag-model_97de0a76-00e0-4ce6-b705-b9666518483c.webp" className="w-100" alt="" />

                                      <div className="dkewbjnrkwejrwer mt-2">
                                        <h5>Vishwa By Pinki Sinha</h5>

                                        <a href="/">SHOW NOW</a>
                                      </div>
                                    </div>
                                  </div> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}  
              </div>    
            </div>
            ) }
          </div>
        </header>
      ) }
    </>
  )
}