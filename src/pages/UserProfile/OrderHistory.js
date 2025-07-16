import "./Css/OrderHistory.css";

export const OrderHistory = () =>{
  return (
    <div>
       <div class="ffhfdf">
        <div class="container-fluid">
            <div class="fbghdfg">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="hdkgdfg">
                            <div class="dfbdf">
                                <h5>Settings</h5>
                                <p>You Can Find all settings here...</p>

                            </div>
                            <button class="dfgdfg1">
                                <i class="fa-solid fa-user"></i> My Profile

                            </button>

                             <button class="dfgdfg1">
                                <i class="fa-regular fa-heart"></i> Wishlist

                            </button>

                             <button class="dfgdfg">
                                <i class="fa-solid fa-clock-rotate-left"></i> Order History

                            </button>

                             <button class="dfgdfg1">
                                <i class="fa-solid fa-ban"></i> Cancel Order

                            </button>

                             <button class="dfgdfg1">
                               <i class="fa-solid fa-eye-low-vision"></i> Password Change

                            </button>
                            <div class="xfbjhxfvgfx">
                                <button><i class="fa-solid fa-circle-info"></i> Get Help</button> <br/>
                                <button><i class="fa-solid fa-right-from-bracket"></i> Logout</button>
                            </div>


                        </div>
                    </div>
                    <div class="col-lg-9">
                        <div class="fgcbdfgdf">
                            <div class="dfjhdsbfsdf">
                                <div class="fbhdfs">
                                    <h4>Order History</h4>
                                    <button><i class="fa-solid fa-pen"></i> Edit</button>
                                </div>
                            </div>

                            <div class="dfghdfgdf">
                                <div class="sdfjhsdfs"><img src="./images/testiphoto (3).png" alt="" /></div>
                                <div class="dfbghdfg">
                                    <h5>Ravindra Jadeja</h5>
                                    <p>Customer Service  Maneger</p>
                                </div>
                             
                            </div>

                            <hr />



                            <div class="dfgndfjhbgdfgdf">
                                <table>
                                   
                                    <thead>
                                        <tr>
                                        <th >Order Id</th>
                                        <th >Product</th>
                                        <th >Date</th>
                                        <th >Total Amount</th>
                                        <th >Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td data-label="Order-Id">DC1487845</td>
                                        <td data-label="Product">
                                            <div class="sdfsdf">
                                                <div class="dsfhsd"><img src="./images/product2 (2).webp" alt="" /></div>
                                                <div class="dbhdsf512">
                                                    <h6>World's Most Expensive T Shirt</h6>
                                                    <p>Women's Clothes</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td data-label="Date">17-07-25</td>
                                        <td data-label="Total-Amount"><b>$1,190</b> </td>
                                        <td data-label="Status"> 
                                           <button class="dfgfd5544">Delivery</button>
                                        </td>

                                        </tr>
                                        <tr>
                                        <td scope="row" data-label="Order-Id">AC7875845</td>
                                        <td data-label="Product">
                                            <div class="sdfsdf">
                                                <div class="dsfhsd"><img src="./images/product1 (1).webp" alt="" /></div>
                                                <div class="dbhdsf512">
                                                    <h6>World's Most Expensive T Shirt</h6>
                                                    <p>Women's Clothes</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td data-label="Date">17-07-25</td>
                                        <td data-label="Total-Amount"><b>$1,190</b> </td>
                                        <td data-label="Status"> 
                                           <button class="dfgfd5544a">Cancel</button>
                                        </td>

                                        </tr>
                                        <tr>
                                        <td scope="row" data-label="Order-Id">FC1474785</td>
                                        <td data-label="Product">
                                            <div class="sdfsdf">
                                                <div class="dsfhsd"><img src="./images/product1 (2).webp" alt="" /></div>
                                                <div class="dbhdsf512">
                                                    <h6>World's Most Expensive T Shirt</h6>
                                                    <p>Women's Clothes</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td data-label="Date">17-07-25</td>
                                        <td data-label="Total-Amount"><b>$1,190</b> </td>
                                        <td data-label="Status"> 
                                           <button class="dfgfd5544b">Shipping</button>
                                        </td>

                                        </tr>
                                        <tr>
                                        <td scope="row" data-label="Order-Id">DC5247485</td>
                                        <td data-label="Product">
                                            <div class="sdfsdf">
                                                <div class="dsfhsd"><img src="./images/product2 (1).webp" alt="" /></div>
                                                <div class="dbhdsf512">
                                                    <h6>World's Most Expensive T Shirt</h6>
                                                    <p>Women's Clothes</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td data-label="Date">17-07-25</td>
                                        <td data-label="Total-Amount"><b>$1,190</b> </td>
                                        <td data-label="Status"> 
                                           <button class="dfgfd5544c">Pending</button>
                                        </td>
                                        </tr>
                                    </tbody>
                                    </table>
                            </div>
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
