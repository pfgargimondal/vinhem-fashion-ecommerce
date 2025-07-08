import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import Logo from "../../../assets/images/logo.png";

import "./Css/Header.css";
import "./Css/HeaderResponsive.css";

export const Header = () => {
  const [resMenu, setResMenu] = useState(false);

  const handleResMenuToggle = () => {
    const html = document.querySelector("html");

    html.classList.toggle("overflow-hidden");
    setResMenu(!resMenu);
  }


  return (
    <header>
      <div className="header-top">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="doeiwhrkwdeor">
              <ul className="mb-0 ps-0">
                <li><NavLink to="/product" end>GENTLEMAN</NavLink></li>

                <li><NavLink to="/product1">Belle Doll</NavLink></li>

                <li><NavLink to="/product2">Amber.</NavLink></li>

                <li><NavLink to="/product3">GLASSY</NavLink></li>   
              </ul>
            </div>
          </div>

          <div className="col-lg-6 ps-0">
            <div className="doewhruiwerwer_right">
              <ul className="mb-0 ps-0 me-4">
                <li className="me-2"><p className="mb-0">Extra 10% OFF ON FIRST ORDER</p></li>

                <li><Link to="/register"><i class="bi bi-person"></i></Link></li>

                <li><i class="bi bi-heart"></i> <span>0</span></li>

                <li><i class="bi bi-handbag"></i> <span>0</span></li>

                <li><i class="bi bi-headset"></i></li>

                <li><i class="bi bi-globe"></i></li>                
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header-main bg-white py-3">
        <div className="container-fluid px-4">
          <div className="row align-items-center">
            <div className="col-lg-2">
              <div className="doiewhirw_left">
                <Link to="/"><img src={Logo} className="img-fluid" alt="" /></Link>

                <div className="doewhruiwerwer_right kjsdnfkniretertert d-none align-items-center justify-content-between">
                  <ul className="mb-0 ps-0 me-4">
                    <li><i class="bi bi-person"></i></li>

                    <li><i class="bi bi-handbag"></i> <span>0</span></li>             
                  </ul>

                  <i class="bi bi-list" onClick={handleResMenuToggle} id="res-toggle-btn"></i>
                </div>                
              </div>
            </div>

            <div className="col-lg-10">
              <div className={resMenu ? "doiewhirw_right header-menu-responsive-show" : "doiewhirw_right"} id="header-menu-responsive">
                <div className="fdgyhurfsdrerer justify-content-between d-none align-items-center">
                  <Link to="/"><img src="images/logo.png" className="img-fluid res-logo" alt="" /></Link>

                  <i class="bi bi-x" id="res-close-btn" onClick={handleResMenuToggle}></i>
                </div>

                <ul className="header-menu mb-0 ps-0">
                  <li>
                    <NavLink to="">Shop</NavLink>

                    <div className="diewhrkewr_dropdown">
                      <div className="doewjrlkjweuirhwer p-4 bg-white">
                        <div className="container">
                          <div className="row">
                            <div className="dowiehrwer_left">
                              <div className="row">
                                <div className="col-lg-3 mb-4">
                                  <div className="fdpoewjrwer_inner">
                                    <p>Lorem Ipsum</p>

                                    <ul className="mb-0 ps-0">
                                      <li><Link to="">Dincidunteros</Link></li>

                                      <li><Link to="">Loremous</Link></li>

                                      <li><Link to="">Comodianos</Link></li>

                                      <li><Link to="">Gravidas</Link></li>

                                      <li><Link to="">Montemous</Link></li>
                                    </ul>
                                  </div>
                                </div>

                                <div className="col-lg-3 mb-4">
                                  <div className="fdpoewjrwer_inner">
                                    <p>Milancelos Lanos</p>

                                    <ul className="mb-0 ps-0">
                                      <li><Link to="">Dincidunteros</Link></li>

                                      <li><Link to="">Loremous</Link></li>

                                      <li><Link to="">Comodianos</Link></li>

                                      <li><Link to="">Gravidas</Link></li>

                                      <li><Link to="">Montemous</Link></li>
                                    </ul>
                                  </div>
                                </div>

                                <div className="col-lg-3 mb-4">
                                  <div className="fdpoewjrwer_inner">
                                    <p>Lynn Cosmopolis</p>

                                    <ul className="mb-0 ps-0">
                                      <li><Link to="">Dincidunteros</Link></li>

                                      <li><Link to="">Loremous</Link></li>

                                      <li><Link to="">Comodianos</Link></li>

                                      <li><Link to="">Gravidas</Link></li>

                                      <li><Link to="">Montemous</Link></li>
                                    </ul>
                                  </div>
                                </div>

                                <div className="col-lg-3 mb-4">
                                  <div className="fdpoewjrwer_inner">
                                    <img src="images/fashion39.png" className="img-fluid" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <NavLink to="">Product</NavLink>
                  
                    <div className="diewhrkewr_dropdown">
                      <div className="doewjrlkjweuirhwer p-4 bg-white">
                        <div className="container">
                          <div className="row">
                            <div className="dowiehrwer_left">
                              <div className="row">
                                <div className="col-lg-3 mb-4">
                                  <div className="fdpoewjrwer_inner">
                                    <p>Lorem Ipsum</p>

                                    <ul className="mb-0 ps-0">
                                      <li><Link to="">Dincidunteros</Link></li>

                                      <li><Link to="">Loremous</Link></li>

                                      <li><Link to="">Comodianos</Link></li>

                                      <li><Link to="">Gravidas</Link></li>

                                      <li><Link to="">Montemous</Link></li>
                                    </ul>
                                  </div>
                                </div>

                                <div className="col-lg-3 mb-4">
                                  <div className="fdpoewjrwer_inner">
                                    <p>Milancelos Lanos</p>

                                    <ul className="mb-0 ps-0">
                                      <li><Link to="">Dincidunteros</Link></li>

                                      <li><Link to="">Loremous</Link></li>

                                      <li><Link to="">Comodianos</Link></li>

                                      <li><Link to="">Gravidas</Link></li>

                                      <li><Link to="">Montemous</Link></li>
                                    </ul>
                                  </div>
                                </div>

                                <div className="col-lg-3 mb-4">
                                  <div className="fdpoewjrwer_inner">
                                    <p>Lynn Cosmopolis</p>

                                    <ul className="mb-0 ps-0">
                                      <li><Link to="">Dincidunteros</Link></li>

                                      <li><Link to="">Loremous</Link></li>

                                      <li><Link to="">Comodianos</Link></li>

                                      <li><Link to="">Gravidas</Link></li>

                                      <li><Link to="">Montemous</Link></li>
                                    </ul>
                                  </div>
                                </div>

                                <div className="col-lg-3 mb-4">
                                  <div className="fdpoewjrwer_inner">
                                    <img src="images/fashion39.png" className="img-fluid" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <NavLink to="">Blog</NavLink>
                    
                    <div className="diewhrkewr_dropdown">
                      <div className="doewjrlkjweuirhwer p-4 bg-white">
                        <div className="container">
                          <div className="row">
                            <div className="dowiehrwer_left">
                              <div className="row">
                                <div className="col-lg-3 mb-4">
                                  <div className="fdpoewjrwer_inner">
                                    <p>Lorem Ipsum</p>

                                    <ul className="mb-0 ps-0">
                                      <li><Link to="">Dincidunteros</Link></li>

                                      <li><Link to="">Loremous</Link></li>

                                      <li><Link to="">Comodianos</Link></li>

                                      <li><Link to="">Gravidas</Link></li>

                                      <li><Link to="">Montemous</Link></li>
                                    </ul>
                                  </div>
                                </div>

                                <div className="col-lg-3 mb-4">
                                  <div className="fdpoewjrwer_inner">
                                    <p>Milancelos Lanos</p>

                                    <ul className="mb-0 ps-0">
                                      <li><Link to="">Dincidunteros</Link></li>

                                      <li><Link to="">Loremous</Link></li>

                                      <li><Link to="">Comodianos</Link></li>

                                      <li><Link to="">Gravidas</Link></li>

                                      <li><Link to="">Montemous</Link></li>
                                    </ul>
                                  </div>
                                </div>

                                <div className="col-lg-3 mb-4">
                                  <div className="fdpoewjrwer_inner">
                                    <p>Lynn Cosmopolis</p>

                                    <ul className="mb-0 ps-0">
                                      <li><Link to="">Dincidunteros</Link></li>

                                      <li><Link to="">Loremous</Link></li>

                                      <li><Link to="">Comodianos</Link></li>

                                      <li><Link to="">Gravidas</Link></li>

                                      <li><Link to="">Montemous</Link></li>
                                    </ul>
                                  </div>
                                </div>

                                <div className="col-lg-3 mb-4">
                                  <div className="fdpoewjrwer_inner">
                                    <img src="images/fashion39.png" className="img-fluid" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <NavLink to="">New In</NavLink>
                    
                    <div className="diewhrkewr_dropdown">
                      <div className="doewjrlkjweuirhwer p-4 bg-white">
                        <div className="container">
                          <div className="row">
                            <div className="dowiehrwer_left">
                              <div className="row">
                                <div className="col-lg-3 mb-4">
                                  <div className="fdpoewjrwer_inner">
                                    <p>Lorem Ipsum</p>

                                    <ul className="mb-0 ps-0">
                                      <li><Link to="">Dincidunteros</Link></li>

                                      <li><Link to="">Loremous</Link></li>

                                      <li><Link to="">Comodianos</Link></li>

                                      <li><Link to="">Gravidas</Link></li>

                                      <li><Link to="">Montemous</Link></li>
                                    </ul>
                                  </div>
                                </div>

                                <div className="col-lg-3 mb-4">
                                  <div className="fdpoewjrwer_inner">
                                    <p>Milancelos Lanos</p>

                                    <ul className="mb-0 ps-0">
                                      <li><Link to="">Dincidunteros</Link></li>

                                      <li><Link to="">Loremous</Link></li>

                                      <li><Link to="">Comodianos</Link></li>

                                      <li><Link to="">Gravidas</Link></li>

                                      <li><Link to="">Montemous</Link></li>
                                    </ul>
                                  </div>
                                </div>

                                <div className="col-lg-3 mb-4">
                                  <div className="fdpoewjrwer_inner">
                                    <p>Lynn Cosmopolis</p>

                                    <ul className="mb-0 ps-0">
                                      <li><Link to="">Dincidunteros</Link></li>

                                      <li><Link to="">Loremous</Link></li>

                                      <li><Link to="">Comodianos</Link></li>

                                      <li><Link to="">Gravidas</Link></li>

                                      <li><Link to="">Montemous</Link></li>
                                    </ul>
                                  </div>
                                </div>

                                <div className="col-lg-3 mb-4">
                                  <div className="fdpoewjrwer_inner">
                                    <img src="images/fashion39.png" className="img-fluid" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <NavLink to="">Trend</NavLink>
                    
                     <div className="diewhrkewr_dropdown">
                      <div className="doewjrlkjweuirhwer p-4 bg-white">
                        <div className="container">
                          <div className="row">
                            <div className="dowiehrwer_left">
                              <div className="row">
                                <div className="col-lg-3 mb-4">
                                  <div className="fdpoewjrwer_inner">
                                    <p>Lorem Ipsum</p>

                                    <ul className="mb-0 ps-0">
                                      <li><Link to="">Dincidunteros</Link></li>

                                      <li><Link to="">Loremous</Link></li>

                                      <li><Link to="">Comodianos</Link></li>

                                      <li><Link to="">Gravidas</Link></li>

                                      <li><Link to="">Montemous</Link></li>
                                    </ul>
                                  </div>
                                </div>

                                <div className="col-lg-3 mb-4">
                                  <div className="fdpoewjrwer_inner">
                                    <p>Milancelos Lanos</p>

                                    <ul className="mb-0 ps-0">
                                      <li><Link to="">Dincidunteros</Link></li>

                                      <li><Link to="">Loremous</Link></li>

                                      <li><Link to="">Comodianos</Link></li>

                                      <li><Link to="">Gravidas</Link></li>

                                      <li><Link to="">Montemous</Link></li>
                                    </ul>
                                  </div>
                                </div>

                                <div className="col-lg-3 mb-4">
                                  <div className="fdpoewjrwer_inner">
                                    <p>Lynn Cosmopolis</p>

                                    <ul className="mb-0 ps-0">
                                      <li><Link to="">Dincidunteros</Link></li>

                                      <li><Link to="">Loremous</Link></li>

                                      <li><Link to="">Comodianos</Link></li>

                                      <li><Link to="">Gravidas</Link></li>

                                      <li><Link to="">Montemous</Link></li>
                                    </ul>
                                  </div>
                                </div>

                                <div className="col-lg-3 mb-4">
                                  <div className="fdpoewjrwer_inner">
                                    <img src="images/fashion39.png" className="img-fluid" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <NavLink to="">Collections</NavLink>
                    
                    <div className="diewhrkewr_dropdown">
                      <div className="doewjrlkjweuirhwer p-4 bg-white">
                        <div className="container">
                          <div className="row">
                            <div className="dowiehrwer_left">
                              <div className="row">
                                <div className="col-lg-3 mb-4">
                                  <div className="fdpoewjrwer_inner">
                                    <p>Lorem Ipsum</p>

                                    <ul className="mb-0 ps-0">
                                      <li><Link to="">Dincidunteros</Link></li>

                                      <li><Link to="">Loremous</Link></li>

                                      <li><Link to="">Comodianos</Link></li>

                                      <li><Link to="">Gravidas</Link></li>

                                      <li><Link to="">Montemous</Link></li>
                                    </ul>
                                  </div>
                                </div>

                                <div className="col-lg-3 mb-4">
                                  <div className="fdpoewjrwer_inner">
                                    <p>Milancelos Lanos</p>

                                    <ul className="mb-0 ps-0">
                                      <li><Link to="">Dincidunteros</Link></li>

                                      <li><Link to="">Loremous</Link></li>

                                      <li><Link to="">Comodianos</Link></li>

                                      <li><Link to="">Gravidas</Link></li>

                                      <li><Link to="">Montemous</Link></li>
                                    </ul>
                                  </div>
                                </div>

                                <div className="col-lg-3 mb-4">
                                  <div className="fdpoewjrwer_inner">
                                    <p>Lynn Cosmopolis</p>

                                    <ul className="mb-0 ps-0">
                                      <li><Link to="">Dincidunteros</Link></li>

                                      <li><Link to="">Loremous</Link></li>

                                      <li><Link to="">Comodianos</Link></li>

                                      <li><Link to="">Gravidas</Link></li>

                                      <li><Link to="">Montemous</Link></li>
                                    </ul>
                                  </div>
                                </div>

                                <div className="col-lg-3 mb-4">
                                  <div className="fdpoewjrwer_inner">
                                    <p>Lynn Cosmopolis</p>

                                    <ul className="mb-0 ps-0">
                                      <li><Link to="">Dincidunteros</Link></li>

                                      <li><Link to="">Loremous</Link></li>

                                      <li><Link to="">Comodianos</Link></li>

                                      <li><Link to="">Gravidas</Link></li>

                                      <li><Link to="">Montemous</Link></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <NavLink to="">Buy Ella</NavLink>
                    
                    <div className="diewhrkewr_dropdown">
                      <div className="doewjrlkjweuirhwer p-4 bg-white">
                        <div className="container">
                          <div className="row">
                            <div className="dowiehrwer_left">
                              <div className="row">
                                <div className="col-lg-3 mb-4">
                                  <div className="fdpoewjrwer_inner">
                                    <p>Lorem Ipsum</p>

                                    <ul className="mb-0 ps-0">
                                      <li><Link to="">Dincidunteros</Link></li>

                                      <li><Link to="">Loremous</Link></li>

                                      <li><Link to="">Comodianos</Link></li>

                                      <li><Link to="">Gravidas</Link></li>

                                      <li><Link to="">Montemous</Link></li>
                                    </ul>
                                  </div>
                                </div>

                                <div className="col-lg-3 mb-4">
                                  <div className="fdpoewjrwer_inner">
                                    <p>Milancelos Lanos</p>

                                    <ul className="mb-0 ps-0">
                                      <li><Link to="">Dincidunteros</Link></li>

                                      <li><Link to="">Loremous</Link></li>

                                      <li><Link to="">Comodianos</Link></li>

                                      <li><Link to="">Gravidas</Link></li>

                                      <li><Link to="">Montemous</Link></li>
                                    </ul>
                                  </div>
                                </div>

                                <div className="col-lg-3 mb-4">
                                  <div className="fdpoewjrwer_inner">
                                    <p>Lynn Cosmopolis</p>

                                    <ul className="mb-0 ps-0">
                                      <li><Link to="">Dincidunteros</Link></li>

                                      <li><Link to="">Loremous</Link></li>

                                      <li><Link to="">Comodianos</Link></li>

                                      <li><Link to="">Gravidas</Link></li>

                                      <li><Link to="">Montemous</Link></li>
                                    </ul>
                                  </div>
                                </div>

                                <div className="col-lg-3 mb-4">
                                  <div className="fdpoewjrwer_inner">
                                    <img src="images/fashion39.png" className="img-fluid" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <NavLink to="">Pages</NavLink>
                    
                    <div className="diewhrkewr_dropdown">
                      <div className="doewjrlkjweuirhwer p-4 bg-white">
                        <div className="container">
                          <div className="row">
                            <div className="dowiehrwer_left">
                              <div className="row">
                                <div className="col-lg-3 mb-4">
                                  <div className="fdpoewjrwer_inner">
                                    <p>Lorem Ipsum</p>

                                    <ul className="mb-0 ps-0">
                                      <li><Link to="">Dincidunteros</Link></li>

                                      <li><Link to="">Loremous</Link></li>

                                      <li><Link to="">Comodianos</Link></li>

                                      <li><Link to="">Gravidas</Link></li>

                                      <li><Link to="">Montemous</Link></li>
                                    </ul>
                                  </div>
                                </div>

                                <div className="col-lg-3 mb-4">
                                  <div className="fdpoewjrwer_inner">
                                    <p>Milancelos Lanos</p>

                                    <ul className="mb-0 ps-0">
                                      <li><Link to="">Dincidunteros</Link></li>

                                      <li><Link to="">Loremous</Link></li>

                                      <li><Link to="">Comodianos</Link></li>

                                      <li><Link to="">Gravidas</Link></li>

                                      <li><Link to="">Montemous</Link></li>
                                    </ul>
                                  </div>
                                </div>

                                <div className="col-lg-3 mb-4">
                                  <div className="fdpoewjrwer_inner">
                                    <p>Lynn Cosmopolis</p>

                                    <ul className="mb-0 ps-0">
                                      <li><Link to="">Dincidunteros</Link></li>

                                      <li><Link to="">Loremous</Link></li>

                                      <li><Link to="">Comodianos</Link></li>

                                      <li><Link to="">Gravidas</Link></li>

                                      <li><Link to="">Montemous</Link></li>
                                    </ul>
                                  </div>
                                </div>

                                <div className="col-lg-3 mb-4">
                                  <div className="fdpoewjrwer_inner">
                                    <p>Lynn Cosmopolis</p>

                                    <ul className="mb-0 ps-0">
                                      <li><Link to="">Dincidunteros</Link></li>

                                      <li><Link to="">Loremous</Link></li>

                                      <li><Link to="">Comodianos</Link></li>

                                      <li><Link to="">Gravidas</Link></li>

                                      <li><Link to="">Montemous</Link></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}