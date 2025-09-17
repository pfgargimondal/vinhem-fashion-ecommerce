import { useEffect, useState } from "react";
import { Link, useNavigate , useLocation } from "react-router-dom";
import "./Css/Filter.css";
import "./Css/FilterResponsive.css";
import http from "../../http";
import useWishlist from "../../hooks/useWishlist";
import { useAuth } from "../../context/AuthContext";
import { ToastContainer } from "react-toastify";

export const Filter = () => {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [selectedTheme, setSelectedTheme] = useState("dark");
  const [viewType, setViewType] = useState(false);
  const [resFltrMenu, setResFltrMenu] = useState(false);
  const [allProductdata, SetallProduct] = useState([]);
  const [allFilterMappingdata, SetallFilterMappingdata] = useState([]);

  const toTitleCase = (s = "") =>
  s
    .toString()
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();

  useEffect(() => {
    console.log("Selected Theme:", selectedTheme);
  }, [selectedTheme]);
  //Res Filter Page No-scroll
  useEffect(() => {
    const body = document.querySelector("html");

    resFltrMenu
      ? body.classList.add("overflow-hidden")
      : body.classList.remove("overflow-hidden");
  }, [resFltrMenu]);

  const handleFilterChange = (value) => {
    navigate(`/${value}`);
  };


    const segments = location.pathname.split("/").filter(Boolean);
    let category = null;
    let subcategory = null;

    if (segments.length === 1) {
      category = segments[0];
    } else if (segments.length >= 2) {
      category = segments[0];
      subcategory = segments[1];
    }


  useEffect(() => {
    const fetchAllProduct = async () => {
      try {
        // Send to API
        const response = await http.post("/fetch-product", {
          category,
          subcategory,
        });

        SetallProduct(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchAllProduct();
  }, [location.pathname, category, subcategory]);

  const { wishlistIds, addToWishlist, removeFromWishlist } = useWishlist();

  const toggleWishlist = (productId) => {
    if (wishlistIds.includes(productId)) {
      removeFromWishlist(productId);
    } else {
      addToWishlist(productId);
    }
  };

  useEffect(() => {
    const fetchFilterMapping = async () => {
      try {
        // Send to API
        const response = await http.post("/fetch-filter-details", {
          category,
          subcategory,
        });

        SetallFilterMappingdata(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchFilterMapping();
  }, [location.pathname, category, subcategory]);


  return (
    <div className="filter-wrapper pt-2">
      <div className="container-fluid">
        <div className="breadcrumb">
          <ul className="ps-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            {category && (
              <>
                <li className="mx-2">/</li>
                <li>
                  <Link to={`/${category}`}>{category}</Link>
                </li>
              </>
            )}
            {subcategory && (
              <>
                <li className="mx-2">/</li>
                <li>
                  <Link to={`/${category}/${subcategory}`}>{subcategory}</Link>
                </li>
              </>
            )}
          </ul>
        </div>

        <div className="alosjdjkhrjfse">
          <h4 className="mb-0">
            {category === "all-produtcs"
            ? "All Products"
            : subcategory
              ? `${toTitleCase(subcategory)} For ${toTitleCase(category)}`
              : `All Products For ${toTitleCase(category)}`}
          <span> - Showing {allProductdata?.all_product?.length ?? 0} Results</span>
          </h4>
        </div>

        <div
          className="advtsmnt-bnnr my-4 overflow-hidden"
          style={{ borderRadius: "1rem" }}
        >
          {allProductdata?.filter_banner
            ? (
                <img
                  src={`${allProductdata?.banner_image_url}/${allProductdata?.filter_banner?.image ?? ""}`}
                  className="img-fluid"
                  alt=""
                />
              )
            : (
                <img
                  src="images/fltrdbnnr.png"
                  className="img-fluid"
                  alt=""
                />
              )}
          {/* <img src="images/fltrdbnnr.png" className="img-fluid" alt="" /> */}
        </div>

        {resFltrMenu && (
          <div
            className="res-fltr-bckdrp position-fixed w-100 h-100"
            onClick={() => setResFltrMenu(false)}
          ></div>
        )}

        <div className="row mt-5">
          <div className="col-lg-3">
            <div className="filter-options">
              <div className="oidenjwihrwer mb-4 d-flex align-items-center justify-content-between">
                <h5
                  className="mb-0"
                  id="res-filtr-btn"
                  onClick={() => setResFltrMenu(true)}
                >
                  <i class="fa-solid me-1 fa-filter"></i> Filter
                </h5>

                <i class="bi bi-chevron-bar-left"></i>
              </div>

              <div
                className={`saojdkjierwerwer ${
                  resFltrMenu ? "" : "res-filtr-nav-hide"
                }`}
                id="res-filtr-nav"
              >
              {allFilterMappingdata?.map((FilterMappingdata) => (
                <div className="dkewjriwehrnjhweijrwer mb-4">
                  <div className="disenihrenjr mb-3 py-4 d-flex align-items-center justify-content-between">
                    <h5 className="mb-0">{toTitleCase(FilterMappingdata.filter_option)}</h5>

                    <i class="bi bi-chevron-down"></i>
                  </div>

                  <div className="doewjkrnhweiurwer">
                    {FilterMappingdata.filter_values.split(",").map((item, index) => (
                      <div key={index} class="radio-wrapper-5">
                        <label htmlFor="example-5" className="forCircle">
                          <input
                            id="example-5"
                            type="radio"
                            name="radio-examples"
                          />
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3.5 w-3.5"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                            >
                              <circle data-name="ellipse" cx={8} cy={8} r={8} />
                            </svg>
                          </span>
                        </label>
                        <label htmlFor="example-5">{item.trim()}</label>
                    </div>
                    ))}
                    
                  </div>
                </div>
              ))}
{/* 
                <div className="dkewjriwehrnjhweijrwer mb-4">
                  <div className="disenihrenjr mb-3 py-4 d-flex align-items-center justify-content-between">
                    <h5 className="mb-0">Manufacturer</h5>

                    <i class="bi bi-chevron-down"></i>
                  </div>

                  <div className="doewjkrnhweiurwer">
                    <div class="radio-wrapper-5">
                      <label htmlFor="example-5" className="forCircle">
                        <input
                          id="example-5"
                          type="radio"
                          name="radio-examples"
                        />
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                          >
                            <circle data-name="ellipse" cx={8} cy={8} r={8} />
                          </svg>
                        </span>
                      </label>

                      <label htmlFor="example-5">Adidas(4)</label>
                    </div>

                    <div class="radio-wrapper-5">
                      <label htmlFor="example-5" className="forCircle">
                        <input
                          id="example-5"
                          type="radio"
                          name="radio-examples"
                        />
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                          >
                            <circle data-name="ellipse" cx={8} cy={8} r={8} />
                          </svg>
                        </span>
                      </label>

                      <label htmlFor="example-5">Amber(26)</label>
                    </div>

                    <div class="radio-wrapper-5">
                      <label htmlFor="example-5" className="forCircle">
                        <input
                          id="example-5"
                          type="radio"
                          name="radio-examples"
                        />
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                          >
                            <circle data-name="ellipse" cx={8} cy={8} r={8} />
                          </svg>
                        </span>
                      </label>

                      <label htmlFor="example-5">Puma(4)</label>
                    </div>

                    <div class="radio-wrapper-5">
                      <label htmlFor="example-5" className="forCircle">
                        <input
                          id="example-5"
                          type="radio"
                          name="radio-examples"
                        />
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                          >
                            <circle data-name="ellipse" cx={8} cy={8} r={8} />
                          </svg>
                        </span>
                      </label>

                      <label htmlFor="example-5">Reebok(7)</label>
                    </div>

                    <div class="radio-wrapper-5">
                      <label htmlFor="example-5" className="forCircle">
                        <input
                          id="example-5"
                          type="radio"
                          name="radio-examples"
                        />
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                          >
                            <circle data-name="ellipse" cx={8} cy={8} r={8} />
                          </svg>
                        </span>
                      </label>

                      <label htmlFor="example-5">Nike(9)</label>
                    </div>
                  </div>
                </div>

                <div className="dkewjriwehrnjhweijrwer mb-4">
                  <div className="disenihrenjr mb-3 py-4 d-flex align-items-center justify-content-between">
                    <h5 className="mb-0">Color</h5>

                    <i class="bi bi-chevron-down"></i>
                  </div>

                  <div className="doewjkrnhweiurwer osdmcfosjrserr">
                    <div id="content">
                      <label htmlFor="dark">
                        <input
                          type="radio"
                          name="theme"
                          id="dark"
                          className="colored-radio"
                          data-color="#1C1C1C"
                          checked={selectedTheme === "dark"}
                          onChange={() => setSelectedTheme("dark")}
                          style={{
                            backgroundColor:
                              selectedTheme === "dark"
                                ? "#1C1C1C"
                                : "transparent",
                          }}
                        />
                        Dark
                      </label>

                      <label htmlFor="green">
                        <input
                          type="radio"
                          name="theme"
                          id="green"
                          className="colored-radio"
                          data-color="#2EFE64"
                          checked={selectedTheme === "green"}
                          onChange={() => setSelectedTheme("green")}
                          style={{
                            backgroundColor:
                              selectedTheme === "green"
                                ? "#2EFE64"
                                : "transparent",
                          }}
                        />
                        Green
                      </label>

                      <label htmlFor="rose">
                        <input
                          type="radio"
                          name="theme"
                          id="rose"
                          className="colored-radio"
                          data-color="#F781BE"
                          checked={selectedTheme === "rose"}
                          onChange={() => setSelectedTheme("rose")}
                          style={{
                            backgroundColor:
                              selectedTheme === "rose"
                                ? "#F781BE"
                                : "transparent",
                          }}
                        />
                        Rose
                      </label>

                      <label htmlFor="blue">
                        <input
                          type="radio"
                          name="theme"
                          id="blue"
                          className="colored-radio"
                          data-color="#2E9AFE"
                          checked={selectedTheme === "blue"}
                          onChange={() => setSelectedTheme("blue")}
                          style={{
                            backgroundColor:
                              selectedTheme === "blue"
                                ? "#2E9AFE"
                                : "transparent",
                          }}
                        />
                        Blue
                      </label>
                    </div>
                  </div>
                </div>

                <div className="dkewjriwehrnjhweijrwer mb-4">
                  <div className="disenihrenjr mb-3 py-4 d-flex align-items-center justify-content-between">
                    <h5 className="mb-0">Size</h5>

                    <i class="bi bi-chevron-down"></i>
                  </div>

                  <div className="doewjkrnhweiurwer">
                    <div class="radio-wrapper-5">
                      <label htmlFor="example-5" className="forCircle">
                        <input
                          id="example-5"
                          type="radio"
                          name="radio-examples"
                        />
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                          >
                            <circle data-name="ellipse" cx={8} cy={8} r={8} />
                          </svg>
                        </span>
                      </label>

                      <label htmlFor="example-5">XS</label>
                    </div>

                    <div class="radio-wrapper-5">
                      <label htmlFor="example-5" className="forCircle">
                        <input
                          id="example-5"
                          type="radio"
                          name="radio-examples"
                        />
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                          >
                            <circle data-name="ellipse" cx={8} cy={8} r={8} />
                          </svg>
                        </span>
                      </label>

                      <label htmlFor="example-5">XSmall</label>
                    </div>

                    <div class="radio-wrapper-5">
                      <label htmlFor="example-5" className="forCircle">
                        <input
                          id="example-5"
                          type="radio"
                          name="radio-examples"
                        />
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                          >
                            <circle data-name="ellipse" cx={8} cy={8} r={8} />
                          </svg>
                        </span>
                      </label>

                      <label htmlFor="example-5">S</label>
                    </div>

                    <div class="radio-wrapper-5">
                      <label htmlFor="example-5" className="forCircle">
                        <input
                          id="example-5"
                          type="radio"
                          name="radio-examples"
                        />
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                          >
                            <circle data-name="ellipse" cx={8} cy={8} r={8} />
                          </svg>
                        </span>
                      </label>

                      <label htmlFor="example-5">Small</label>
                    </div>

                    <div class="radio-wrapper-5">
                      <label htmlFor="example-5" className="forCircle">
                        <input
                          id="example-5"
                          type="radio"
                          name="radio-examples"
                        />
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                          >
                            <circle data-name="ellipse" cx={8} cy={8} r={8} />
                          </svg>
                        </span>
                      </label>

                      <label htmlFor="example-5">M</label>
                    </div>

                    <div class="radio-wrapper-5">
                      <label htmlFor="example-5" className="forCircle">
                        <input
                          id="example-5"
                          type="radio"
                          name="radio-examples"
                        />
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                          >
                            <circle data-name="ellipse" cx={8} cy={8} r={8} />
                          </svg>
                        </span>
                      </label>

                      <label htmlFor="example-5">Medium</label>
                    </div>

                    <div class="radio-wrapper-5">
                      <label htmlFor="example-5" className="forCircle">
                        <input
                          id="example-5"
                          type="radio"
                          name="radio-examples"
                        />
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                          >
                            <circle data-name="ellipse" cx={8} cy={8} r={8} />
                          </svg>
                        </span>
                      </label>

                      <label htmlFor="example-5">L</label>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="filtered-products">
              <div className="iduhweihriweurwerwer row align-items-center pb-3">
                <div className="col-lg-9">
                  <div className="idasijhdmsiejr d-flex align-items-center">
                    <div className="view-options d-flex me-3 align-items-center">
                      <div
                        className={`grid-view me-1 ${
                          !viewType ? "active" : ""
                        }`}
                        onClick={() => setViewType(!viewType)}
                      >
                        <i class="bi bi-grid-3x3-gap"></i>
                      </div>

                      <div
                        className={`list-view ${viewType ? "active" : ""}`}
                        onClick={() => setViewType(!viewType)}
                      >
                        <i class="bi bi-card-list"></i>
                      </div>
                    </div>
                    <div className="doewnkrhwer">
                      <input
                        type="checkbox"
                        className="d-none"
                        id="huidweujr"
                        checked={category === "new-in"}
                        onChange={() => handleFilterChange("new-in")}
                      />
                      <label htmlFor="huidweujr" className="btn btn-main me-1">
                        <i className="bi me-1 bi-plus-circle-dotted"></i> New
                      </label>
                    </div>

                    <div className="doewnkrhwer">
                      <input
                        type="checkbox"
                        className="d-none"
                        id="huidweujrjuhjkh"
                        checked={category === "ready-to-ship"}
                        onChange={() => handleFilterChange("ready-to-ship")}
                      />
                      <label
                        htmlFor="huidweujrjuhjkh"
                        className="btn btn-main me-1"
                      >
                        <i className="bi me-1 bi-lightning-charge"></i> Ready to
                        Ship
                      </label>
                    </div>
                    <Link to={'/on-sale'}>
                      <div className="btn btn-main">
                          <i class="bi me-1 bi-receipt"></i> On Sale
                      </div>
                    </Link>
                    <button className="btn btn-main">
                      <i class="bi me-1 bi-vignette"></i> Custom-fit
                    </button>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="podwejorjwierwer">
                    <select name="" className="form-select" id="">
                      <option value="" selected disabled>
                        Sort By: Recommended
                      </option>
                      <option value="">Popularity</option>
                      <option value="">New Arrivals</option>
                      <option value="">New Arrivals</option>
                      <option value="">Price Low to High</option>
                      <option value="">Price High to Low</option>
                      <option value="">Discount High to Low</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="products-wrapper filtr-wrppr mt-5">
                <div className="row">
                  {/* <div className={`smdflcsdlpfkselkrpr ${!viewType ? "col-lg-3" : "col-lg-12"} mb-4`}>
                    <div className="dfgjhbdfg">
                        <div className="images">                          
                          <div className="image row mx-0 position-relative">
                            <div className={`doiewjkrniuwewer position-relative overflow-hidden ${!viewType ? "col-lg-12" : "col-lg-3"}`}>
                              <img src="/images/product1 (1).webp" alt="not found" />

                              <img className="first" src="/images/product1 (2).webp" alt="not found" />

                              <div className="doikwenirnwekhrwer me-2 mt-2 d-flex position-relative">
                                <button className="btn-cart mb-1"><i class="fa-solid fa-cart-arrow-down"></i></button>

                                <button className="btn-wishlist">
                                  <i class="fa-regular fa-heart"></i>

                                  <i class="fa-solid d-none fa-heart"></i>
                                </button>
                              </div>

                              <div className="dbgdfhgv">
                                <button className="btn btn-main w-100">QUICK ADD</button>
                              </div>
                            </div>

                            <div className={`fdbdfgdfgdf ${!viewType ? "col-lg-12" : "col-lg-9"}`}>
                              <h6>COLLETTE</h6>

                              <h4>Clothing And Accessory Boutiques For Sale</h4>

                              <h5>$48.99</h5>

                              <div className="dlksfskjrewrwere d-flex align-items-center justify-content-between mt-5">
                                <div className="doikwenirnwekhrwer position-relative">
                                  <button className="btn-cart me-1 mb-1"><i class="fa-solid fa-cart-arrow-down"></i></button>

                                  <button className="btn-wishlist">
                                    <i class="fa-regular fa-heart"></i>

                                    <i class="fa-solid d-none fa-heart"></i>
                                  </button>
                                </div>

                                <div className="dbgdfhgv">
                                    <button className="btn btn-main w-100">QUICK ADD</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div> */}
                  {allProductdata?.all_product?.map((product) => (
                    <div
                      className={`smdflcsdlpfkselkrpr ${
                        !viewType ? "col-lg-3" : "col-lg-12"
                      } mb-4`}
                    >
                      <div className="dfgjhbdfg">
                        <div className="images">
                          <div className="image row mx-0 position-relative">
                            <div
                              className={`doiewjkrniuwewer position-relative overflow-hidden ${
                                !viewType ? "col-lg-12" : "col-lg-3"
                              }`}
                            >
                              <Link to={`/products/${product.slug}`}>
                                <img
                                  src={product.encoded_image_url_1}
                                  alt={product.product_name}
                                />

                                <img
                                  className="first"
                                  src={product.encoded_image_url_2}
                                  alt={product.product_name}
                                />
                              </Link>

                              <div className="doikwenirnwekhrwer me-2 mt-2 d-flex position-relative">
                                {user ? (
                                  <>
                                    <button
                                      className="btn-cart mb-1"
                                      type="button"
                                    >
                                      <i class="fa-solid fa-cart-arrow-down"></i>
                                    </button>
                                    <button
                                      onClick={() => toggleWishlist(product.id)}
                                    >
                                      <i
                                        className={
                                          wishlistIds.includes(product.id)
                                            ? "fa-solid fa-heart"
                                            : "fa-regular fa-heart"
                                        }
                                      ></i>
                                    </button>
                                  </>
                                ) : (
                                  <>
                                    <Link to="/login">
                                      <button
                                        className="btn-cart mb-1"
                                        type="button"
                                      >
                                        <i class="fa-solid fa-cart-arrow-down"></i>
                                      </button>
                                    </Link>
                                    <Link to="/login">
                                      <button
                                        className="btn-wishlist"
                                        type="button"
                                      >
                                        <i class="fa-regular fa-heart"></i>
                                        <i class="fa-solid d-none fa-heart"></i>
                                      </button>
                                    </Link>
                                  </>
                                )}
                              </div>

                              <div className="dbgdfhgv">
                                <button className="btn btn-main w-100">
                                  QUICK ADD
                                </button>
                              </div>
                            </div>
                            <div
                              className={`fdbdfgdfgdf ${
                                !viewType ? "col-lg-12" : "col-lg-9"
                              }`}
                            >
                              <h6>{product.designer}</h6>

                              <h4>{product.product_name}</h4>

                              <h5>
                                {new Intl.NumberFormat("en-IN", {
                                  style: "currency",
                                  currency: "INR",
                                  maximumFractionDigits: 0,
                                }).format(product.selling_price)}
                              </h5>

                              <div className="dlksfskjrewrwere d-flex align-items-center justify-content-between mt-5">
                                <div className="doikwenirnwekhrwer position-relative">
                                  {user ? (
                                    <>
                                      <button
                                        className="btn-cart mb-1"
                                        type="button"
                                      >
                                        <i class="fa-solid fa-cart-arrow-down"></i>
                                      </button>
                                      <button
                                        onClick={() =>
                                          toggleWishlist(product.id)
                                        }
                                      >
                                        <i
                                          className={
                                            wishlistIds.includes(product.id)
                                              ? "fa-solid fa-heart"
                                              : "fa-regular fa-heart"
                                          }
                                        ></i>
                                      </button>
                                    </>
                                  ) : (
                                    <>
                                      <Link to="/login">
                                        <button
                                          className="btn-cart mb-1"
                                          type="button"
                                        >
                                          <i class="fa-solid fa-cart-arrow-down"></i>
                                        </button>
                                      </Link>
                                      <Link to="/login">
                                        <button
                                          className="btn-wishlist"
                                          type="button"
                                        >
                                          <i class="fa-regular fa-heart"></i>
                                          <i class="fa-solid d-none fa-heart"></i>
                                        </button>
                                      </Link>
                                    </>
                                  )}
                                </div>

                                <div className="dbgdfhgv">
                                  <button className="btn btn-main w-100">
                                    QUICK ADD
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="idwejrhewres pb-5 mt-5">
          <div
            className="pt-4"
            dangerouslySetInnerHTML={{
              __html: allProductdata?.filter_content?.description && (allProductdata?.filter_content.description),
            }}
          />
        </div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          style={{ zIndex: 9999999999 }}
        />
      </div>
    </div>
  );
};
