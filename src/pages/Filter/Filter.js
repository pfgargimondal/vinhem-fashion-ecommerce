import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Css/Filter.css";

export const Filter = () => {
  const [selectedTheme, setSelectedTheme] = useState('dark');

  useEffect(() => {
    console.log('Selected Theme:', selectedTheme);
  }, [selectedTheme]);

  return (
    <div className="filter-wrapper pt-2">
      <div className="container-fluid">
        <div className="breadcrumb">
          <ul className="ps-0">
            <li><Link>Home</Link></li>

            <li><Link>/</Link></li>

            <li><Link>Women</Link></li>

            <li><Link>/</Link></li>

            <li>Designer Kurta Sets For Women</li>
          </ul>
        </div>

        <div className="alosjdjkhrjfse">
          <h4 className="mb-0">Designer Kurta Sets For Women <span>- Showing 66,154 Results</span></h4>
        </div>

        <div className="advtsmnt-bnnr my-4 overflow-hidden" style={{borderRadius: "1rem"}}>
          <img src="images/fltrdbnnr.png" className="img-fluid" alt="" />
        </div>

        <div className="row mt-5">
          <div className="col-lg-3">
            <div className="filter-options">
              <div className="oidenjwihrwer mb-4 d-flex align-items-center justify-content-between">
                <h5 className="mb-0">Filter</h5>

                <i class="bi bi-chevron-bar-left"></i>
              </div>

              <div className="dkewjriwehrnjhweijrwer mb-4">
                <div className="disenihrenjr mb-3 py-4 d-flex align-items-center justify-content-between">
                  <h5 className="mb-0">Categories</h5>

                  <i class="bi bi-chevron-down"></i>
                </div>

                <div className="doewjkrnhweiurwer">
                  <div class="radio-wrapper-5">
                    <label htmlFor="example-5" className="forCircle">
                      <input id="example-5" type="radio" name="radio-examples" />
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

                    <label htmlFor="example-5">Anarkali Sets(10)</label>
                  </div>

                  <div class="radio-wrapper-5">
                    <label htmlFor="example-5" className="forCircle">
                      <input id="example-5" type="radio" name="radio-examples" />
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

                    <label htmlFor="example-5">Cosmopolis(8)</label>
                  </div>

                  <div class="radio-wrapper-5">
                    <label htmlFor="example-5" className="forCircle">
                      <input id="example-5" type="radio" name="radio-examples" />
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

                    <label htmlFor="example-5">Izabella(1)</label>
                  </div>

                  <div class="radio-wrapper-5">
                    <label htmlFor="example-5" className="forCircle">
                      <input id="example-5" type="radio" name="radio-examples" />
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

                    <label htmlFor="example-5">Printed Kurta Sets(9)</label>
                  </div>

                  <div class="radio-wrapper-5">
                    <label htmlFor="example-5" className="forCircle">
                      <input id="example-5" type="radio" name="radio-examples" />
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

                    <label htmlFor="example-5">Fusion Style Sets(3)</label>
                  </div>

                  <div class="radio-wrapper-5">
                    <label htmlFor="example-5" className="forCircle">
                      <input id="example-5" type="radio" name="radio-examples" />
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

                    <label htmlFor="example-5">Palazzo Sets(7)</label>
                  </div>
                </div>
              </div>

              <div className="dkewjriwehrnjhweijrwer mb-4">
                <div className="disenihrenjr mb-3 py-4 d-flex align-items-center justify-content-between">
                  <h5 className="mb-0">Manufacturer</h5>

                  <i class="bi bi-chevron-down"></i>
                </div>

                <div className="doewjkrnhweiurwer">
                  <div class="radio-wrapper-5">
                    <label htmlFor="example-5" className="forCircle">
                      <input id="example-5" type="radio" name="radio-examples" />
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
                      <input id="example-5" type="radio" name="radio-examples" />
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
                      <input id="example-5" type="radio" name="radio-examples" />
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
                      <input id="example-5" type="radio" name="radio-examples" />
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
                      <input id="example-5" type="radio" name="radio-examples" />
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
                        checked={selectedTheme === 'dark'}
                        onChange={() => setSelectedTheme('dark')}
                        style={{
                          backgroundColor:
                            selectedTheme === 'dark' ? '#1C1C1C' : 'transparent',
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
                        checked={selectedTheme === 'green'}
                        onChange={() => setSelectedTheme('green')}
                        style={{
                          backgroundColor:
                            selectedTheme === 'green' ? '#2EFE64' : 'transparent',
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
                        checked={selectedTheme === 'rose'}
                        onChange={() => setSelectedTheme('rose')}
                        style={{
                          backgroundColor:
                            selectedTheme === 'rose' ? '#F781BE' : 'transparent',
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
                        checked={selectedTheme === 'blue'}
                        onChange={() => setSelectedTheme('blue')}
                        style={{
                          backgroundColor:
                            selectedTheme === 'blue' ? '#2E9AFE' : 'transparent',
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
                      <input id="example-5" type="radio" name="radio-examples" />
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
                      <input id="example-5" type="radio" name="radio-examples" />
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
                      <input id="example-5" type="radio" name="radio-examples" />
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
                      <input id="example-5" type="radio" name="radio-examples" />
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
                      <input id="example-5" type="radio" name="radio-examples" />
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
                      <input id="example-5" type="radio" name="radio-examples" />
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
                      <input id="example-5" type="radio" name="radio-examples" />
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
              </div>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="filtered-products">

              <div className="iduhweihriweurwerwer row align-items-center justify-content-between pb-3">
                <div className="col-lg-6">
                  <div className="d-flex align-items-center">
                    <h5 className="mb-0 view-list me-3">View As</h5>

                    <span className="divider me-2">|</span>

                    <div className="view-options d-flex me-4 align-items-center">
                      <div className="grid-view me-2"><i class="bi bi-grid-3x3-gap active"></i></div>

                      <div className="list-view"><i class="bi bi-card-list"></i></div>
                    </div>

                    <button className="btn btn-main"><i class="bi me-1 bi-vignette"></i> Custom-fit</button>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="podwejorjwierwer">
                    <select name="" className="form-select" id="">
                      <option value="" selected disabled>Sort By: Recommended</option>

                      <option value="">Price: Low to High</option>

                      <option value="">Price: High to Low</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="products-wrapper mt-5">
                <div className="row">
                  <div className="col-lg-3 mb-4">
                    <div className="dfgjhbdfg">
                      <div className="images">
                        <div className="image position-relative">
                          <img src="/images/product1 (1).webp" alt="not found" />

                          <img className="first" src="/images/product1 (2).webp" alt="not found" />

                          <div className="dbgdfhgv">
                            <button>QUICK ADD</button>
                          </div>

                          <div className="fdbdfgdfgdf">
                            <h6>COLLETTE</h6>
                            <h4>(Product 35) Sample - Clothing And Accessory Boutiques For Sale</h4>
                            <h5>$48.99</h5>
                          </div>
                          <div className="dsgdfgsdf">
                            <div className="selection-group">
                              <input id="a" type="radio" name="rate" defaultValue="a" />
                              <label htmlFor="a">
                                <img src="/images/color1 (1).jpg" alt="" />
                              </label>

                              <input id="b" type="radio" name="rate" defaultValue="b" />
                              <label htmlFor="b">
                                <img src="/images/color1 (1).png" alt="" />
                              </label>

                              <input id="c" type="radio" name="rate" defaultValue="c" defaultChecked="" />
                              <label htmlFor="c">
                                <img src="/images/color1 (2).png" alt="" />
                              </label>
                            </div>
                            <p>MORE SIZE AVAILABLE</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 mb-4">
                    <div className="dfgjhbdfg">
                      <div className="images">
                        <div className="image position-relative">
                          <img src="/images/product1 (1).webp" alt="not found" />

                          <img className="first" src="/images/product1 (2).webp" alt="not found" />

                          <div className="dbgdfhgv">
                            <button>QUICK ADD</button>
                          </div>

                          <div className="fdbdfgdfgdf">
                            <h6>COLLETTE</h6>
                            <h4>(Product 35) Sample - Clothing And Accessory Boutiques For Sale</h4>
                            <h5>$48.99</h5>
                          </div>
                          <div className="dsgdfgsdf">
                            <div className="selection-group">
                              <input id="a" type="radio" name="rate" defaultValue="a" />
                              <label htmlFor="a">
                                <img src="/images/color1 (1).jpg" alt="" />
                              </label>

                              <input id="b" type="radio" name="rate" defaultValue="b" />
                              <label htmlFor="b">
                                <img src="/images/color1 (1).png" alt="" />
                              </label>

                              <input id="c" type="radio" name="rate" defaultValue="c" defaultChecked="" />
                              <label htmlFor="c">
                                <img src="/images/color1 (2).png" alt="" />
                              </label>
                            </div>
                            <p>MORE SIZE AVAILABLE</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 mb-4">
                    <div className="dfgjhbdfg">
                      <div className="images">
                        <div className="image position-relative">
                          <img src="/images/product1 (1).webp" alt="not found" />

                          <img className="first" src="/images/product1 (2).webp" alt="not found" />

                          <div className="dbgdfhgv">
                            <button>QUICK ADD</button>
                          </div>

                          <div className="fdbdfgdfgdf">
                            <h6>COLLETTE</h6>
                            <h4>(Product 35) Sample - Clothing And Accessory Boutiques For Sale</h4>
                            <h5>$48.99</h5>
                          </div>
                          <div className="dsgdfgsdf">
                            <div className="selection-group">
                              <input id="a" type="radio" name="rate" defaultValue="a" />
                              <label htmlFor="a">
                                <img src="/images/color1 (1).jpg" alt="" />
                              </label>

                              <input id="b" type="radio" name="rate" defaultValue="b" />
                              <label htmlFor="b">
                                <img src="/images/color1 (1).png" alt="" />
                              </label>

                              <input id="c" type="radio" name="rate" defaultValue="c" defaultChecked="" />
                              <label htmlFor="c">
                                <img src="/images/color1 (2).png" alt="" />
                              </label>
                            </div>
                            <p>MORE SIZE AVAILABLE</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 mb-4">
                    <div className="dfgjhbdfg">
                      <div className="images">
                        <div className="image position-relative">
                          <img src="/images/product1 (1).webp" alt="not found" />

                          <img className="first" src="/images/product1 (2).webp" alt="not found" />

                          <div className="dbgdfhgv">
                            <button>QUICK ADD</button>
                          </div>

                          <div className="fdbdfgdfgdf">
                            <h6>COLLETTE</h6>
                            <h4>(Product 35) Sample - Clothing And Accessory Boutiques For Sale</h4>
                            <h5>$48.99</h5>
                          </div>
                          <div className="dsgdfgsdf">
                            <div className="selection-group">
                              <input id="a" type="radio" name="rate" defaultValue="a" />
                              <label htmlFor="a">
                                <img src="/images/color1 (1).jpg" alt="" />
                              </label>

                              <input id="b" type="radio" name="rate" defaultValue="b" />
                              <label htmlFor="b">
                                <img src="/images/color1 (1).png" alt="" />
                              </label>

                              <input id="c" type="radio" name="rate" defaultValue="c" defaultChecked="" />
                              <label htmlFor="c">
                                <img src="/images/color1 (2).png" alt="" />
                              </label>
                            </div>
                            <p>MORE SIZE AVAILABLE</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 mb-4">
                    <div className="dfgjhbdfg">
                      <div className="images">
                        <div className="image position-relative">
                          <img src="/images/product1 (1).webp" alt="not found" />

                          <img className="first" src="/images/product1 (2).webp" alt="not found" />

                          <div className="dbgdfhgv">
                            <button>QUICK ADD</button>
                          </div>

                          <div className="fdbdfgdfgdf">
                            <h6>COLLETTE</h6>
                            <h4>(Product 35) Sample - Clothing And Accessory Boutiques For Sale</h4>
                            <h5>$48.99</h5>
                          </div>
                          <div className="dsgdfgsdf">
                            <div className="selection-group">
                              <input id="a" type="radio" name="rate" defaultValue="a" />
                              <label htmlFor="a">
                                <img src="/images/color1 (1).jpg" alt="" />
                              </label>

                              <input id="b" type="radio" name="rate" defaultValue="b" />
                              <label htmlFor="b">
                                <img src="/images/color1 (1).png" alt="" />
                              </label>

                              <input id="c" type="radio" name="rate" defaultValue="c" defaultChecked="" />
                              <label htmlFor="c">
                                <img src="/images/color1 (2).png" alt="" />
                              </label>
                            </div>
                            <p>MORE SIZE AVAILABLE</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 mb-4">
                    <div className="dfgjhbdfg">
                      <div className="images">
                        <div className="image position-relative">
                          <img src="/images/product1 (1).webp" alt="not found" />

                          <img className="first" src="/images/product1 (2).webp" alt="not found" />

                          <div className="dbgdfhgv">
                            <button>QUICK ADD</button>
                          </div>

                          <div className="fdbdfgdfgdf">
                            <h6>COLLETTE</h6>
                            <h4>(Product 35) Sample - Clothing And Accessory Boutiques For Sale</h4>
                            <h5>$48.99</h5>
                          </div>
                          <div className="dsgdfgsdf">
                            <div className="selection-group">
                              <input id="a" type="radio" name="rate" defaultValue="a" />
                              <label htmlFor="a">
                                <img src="/images/color1 (1).jpg" alt="" />
                              </label>

                              <input id="b" type="radio" name="rate" defaultValue="b" />
                              <label htmlFor="b">
                                <img src="/images/color1 (1).png" alt="" />
                              </label>

                              <input id="c" type="radio" name="rate" defaultValue="c" defaultChecked="" />
                              <label htmlFor="c">
                                <img src="/images/color1 (2).png" alt="" />
                              </label>
                            </div>
                            <p>MORE SIZE AVAILABLE</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 mb-4">
                    <div className="dfgjhbdfg">
                      <div className="images">
                        <div className="image position-relative">
                          <img src="/images/product1 (1).webp" alt="not found" />

                          <img className="first" src="/images/product1 (2).webp" alt="not found" />

                          <div className="dbgdfhgv">
                            <button>QUICK ADD</button>
                          </div>

                          <div className="fdbdfgdfgdf">
                            <h6>COLLETTE</h6>
                            <h4>(Product 35) Sample - Clothing And Accessory Boutiques For Sale</h4>
                            <h5>$48.99</h5>
                          </div>
                          <div className="dsgdfgsdf">
                            <div className="selection-group">
                              <input id="a" type="radio" name="rate" defaultValue="a" />
                              <label htmlFor="a">
                                <img src="/images/color1 (1).jpg" alt="" />
                              </label>

                              <input id="b" type="radio" name="rate" defaultValue="b" />
                              <label htmlFor="b">
                                <img src="/images/color1 (1).png" alt="" />
                              </label>

                              <input id="c" type="radio" name="rate" defaultValue="c" defaultChecked="" />
                              <label htmlFor="c">
                                <img src="/images/color1 (2).png" alt="" />
                              </label>
                            </div>
                            <p>MORE SIZE AVAILABLE</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="idwejrhewres pb-5 mt-5">
          <h4>Lorem ipsum dolor, sit amet consectetur adipisicing.</h4>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum officiis placeat tenetur reiciendis est, sint sapiente magni soluta blanditiis eligendi quis ipsam? Deleniti odit, cumque architecto sint porro eligendi provident, magnam voluptate assumenda temporibus ullam possimus facilis veritatis ab cupiditate delectus facere beatae quo perspiciatis dolore dignissimos soluta corrupti deserunt. Minus officiis, ea, fugit possimus, reiciendis aspernatur itaque alias facere provident molestiae voluptatibus. Amet obcaecati molestiae quaerat dolor voluptates nam dolorem, maiores qui fuga eos itaque, nisi excepturi sequi cum libero aperiam vel! Omnis eum iste voluptatem dignissimos laudantium ducimus ipsa, libero perferendis enim doloremque dolores dolor quidem voluptate adipisci veritatis consectetur saepe aliquam odit fugit illum at. Quo assumenda eveniet voluptatum blanditiis modi nisi molestias temporibus praesentium explicabo nihil?</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum officiis placeat tenetur reiciendis est, sint sapiente magni soluta blanditiis eligendi quis ipsam? Deleniti odit, cumque architecto sint porro eligendi provident, magnam voluptate assumenda temporibus ullam possimus facilis veritatis ab cupiditate delectus facere beatae quo perspiciatis dolore dignissimos soluta corrupti deserunt. Minus officiis, ea, fugit possimus, reiciendis aspernatur itaque alias facere provident molestiae voluptatibus. Amet obcaecati molestiae quaerat dolor voluptates nam dolorem, maiores qui fuga eos itaque, nisi excepturi sequi cum libero aperiam vel! Omnis eum iste voluptatem dignissimos laudantium ducimus ipsa, libero perferendis enim doloremque dolores dolor quidem voluptate adipisci veritatis consectetur saepe aliquam odit fugit illum at. Quo assumenda eveniet voluptatum blanditiis modi nisi molestias.</p>
        </div>
      </div>
    </div>
  )
}