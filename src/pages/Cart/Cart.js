import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

import "./Css/Cart.css";

export const Cart = () => {
    return (
        <div className="container">
            <div className="cart-wrapper py-4">
                <div className="row justify-content-between">
                    <div className="col-lg-8">
                        <div className="diwebjrwert_left">
                            <h4 className="mb-4">Your Shopping Cart</h4>

                            <div className="odnwejirhwerwer py-2 px-3">
                                <p className="mb-0 d-flex align-items-center">Shop for ₹6,004 more to get additional offers on your order. To know more <button className="btn ms-2 py-2 btn-main"><i class="bi me-1 bi-whatsapp"></i> Chat With Us</button></p>
                            </div>

                            <div className="dowejroihwrt_wrapper mt-4">
                                <div className="dfgjhbdfg position-relative p-3 mb-4">
                                    <div className="row">
                                        <div className="col-lg-2">
                                            <div className="donweihrwewer">
                                                <img src="/images/product1 (1).webp" alt="not found" />
                                            </div>
                                        </div>

                                        <div className="col-lg-10">
                                            <div className="dowehriwerwer">
                                                <div className="dknwekhwe py-2">
                                                    <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                        <h4 className="mb-0">Sample - Clothing And Accessory Boutiques For...</h4>

                                                        <h5 className="mb-0"><span className="old-price"><i class="bi bi-currency-rupee"></i>29,995</span> <span><i class="bi bi-currency-rupee"></i>23,996</span></h5>
                                                    </div>

                                                    <span className="dscnt-offr text-white position-absolute py-1 px-2">20% OFF</span>
                                                </div>

                                                <div className="dnweghbjewrwer">
                                                    <p className="mb-1">Purple Splendid Silk Mirror Work</p>

                                                    <span className="copn-cde">CODE: D344TGG56544</span>

                                                    <div className="doewrwerwer">
                                                        <div className="row">
                                                            <div className="col-lg-3 mt-2 mb-3">
                                                                <div className="deiwnriwehrwer">
                                                                    <label htmlFor="" className="form-label mb-1">Choose Size:</label>

                                                                    <select name="" className="form-select py-1" id="">
                                                                        <option value="">XS</option>

                                                                        <option value="">S</option>

                                                                        <option value="">M</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-3 mt-2 mb-3">
                                                                <div className="deiwnriwehrwer">
                                                                    <label htmlFor="" className="form-label mb-1">Choose Qty:</label>

                                                                    <select name="" className="form-select py-1" id="">
                                                                        <option value="">1</option>

                                                                        <option value="">2</option>

                                                                        <option value="">3</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="djkwehrwerwer d-flex align-items-center justify-content-between">
                                                        <h6 className="mb-0"><i class="bi me-1 bi-calendar-week"></i> Estimated Shipping Date: <span>20th of August</span></h6>

                                                        <div className="dewhrowerwer">
                                                            <i class="bi me-2 bi-heart"></i>

                                                            <i class="bi bi-x-lg"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="dweihriwerwerw mt-4">
                                <p className='mb-1'>*Once your order has been placed no subsequent changes can be made in it.</p>
                                
                                <p className='mb-1'>*Shipping cost may vary depending on the delivery destination.</p>
                                
                                <p className='mb-1'>*Please check the final amount on the order summary page before completing the payment.</p>
                                
                                <p className='mb-1'>*An item's price may vary according to the size selected.</p>

                                <ul className="mb-0 ps-0">
                                    <li><Link to="/">Shipping Policy</Link></li>

                                    <li><Link to="/">Help</Link></li>

                                    <li><Link to="/">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="diwebjrwert_right sticky-top">
                            <h4 className="mb-4">Cart Summary</h4>

                            <div className="dweoihrwerwer p-2 mb-4">
                                <Table responsive>
                                    <tbody>
                                        <tr>
                                            <td>Cart Total</td>

                                            <td><i class="bi bi-currency-rupee"></i>29,995</td>
                                        </tr>

                                        <tr>
                                            <td>Total Discount</td>

                                            <td>(-) <i class="bi bi-currency-rupee"></i>5,999</td>
                                        </tr>
                                        
                                        <tr>
                                            <td>Shipping</td>

                                            <td><i class="bi bi-currency-rupee"></i>0</td>
                                        </tr>
                                    </tbody>
                                </Table>

                                <p className="px-2">Shipping charges to be calculated on Checkout</p>
                            </div>

                            <div className="dweoihrwerwer aiksndjhugwerwerw d-flex align-items-center justify-content-between p-2">
                                <div className="doewjirwerwer">
                                    <input type="checkbox" id='gft' className='m-1' />

                                    <label htmlFor="gft">This is a gift item</label>
                                </div>

                                <span>(Know More)</span>
                            </div>

                            <div className="oiasmdjweijrwerwer mt-4">
                                <h4>Coupon Code</h4>

                                <div className="dewuihrwe position-relative">
                                    <input type="text" className='form-control' placeholder='Enter Coupon Code' />

                                    <button className='btn position-absolute btn-main'>Apply</button>
                                </div>
                            </div>

                            <div className="oiasmdjweijrwerwer pb-2 mb-4 d-flex align-items-center justify-content-between zsdvfdesdeadfrer mt-4">
                                <h4>Total Payable</h4>

                                <h4><i class="bi bi-currency-rupee"></i>23,996</h4>
                            </div>

                            <div className="uiwdhiwerwerwer">
                                <button className='btn btn-main w-100 mb-3'>Proceed To Checkout</button>

                                <button className='btn btn-main w-100'>Continue Shopping</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}