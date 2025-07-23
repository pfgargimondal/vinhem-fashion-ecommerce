import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';

import { UserProfileNavMenu } from "../../components";

import styles from "./Css/OrderHistory.module.css";

export const OrderHistory = () => {
    return (
        <div className={styles.ffhfdf}>
            <div className="ansjidnkuiweer container-fluid px-0">
                <div className={styles.fbghdfg}>
                    <div className="row">
                        <div className="col-lg-3">
                            <UserProfileNavMenu />
                        </div>

                        <div className="col-lg-9">
                            <div className={`${styles.fgcbdfgdf} pt-3 pb-5`}>
                                <div className={`${styles.dfjhdsbfsdf} mb-4`}>
                                    <h4 className="mb-0">Order History</h4>

                                    <p className="ndiwhermweoewrr mb-0">
                                        <Link to="/"><i className="fa-solid me-1 fa-arrow-left"></i> Back To Home <i className="fa-solid ms-1 fa-house"></i></Link>
                                    </p>
                                </div>

                                <div className={styles.dfgndfjhbgdfgdf}>
                                    <Table striped responsive bordered hover>
                                        <thead>
                                            <tr>
                                                <th>Order Id</th>

                                                <th>Product</th>

                                                <th>Date</th>

                                                <th>Total Amount</th>

                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        
                                        <tbody>
                                            <tr>
                                                <td>DC1487845</td>

                                                <td>
                                                    <div className={styles.sdfsdf}>
                                                        <div className={styles.dsfhsd}>
                                                            <img src="./images/product2 (2).webp" alt="" />
                                                        </div>
                                                        <div className={styles.dbhdsf512}>
                                                            <h6>World's Most Expensive T Shirt</h6>
                                                            <p>Women's Clothes</p>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td>17-07-25</td>

                                                <td>$1,190</td>

                                                <td>
                                                    <button className={styles.dfgfd5544}>Delivery</button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>AC7875845</td>

                                                <td>
                                                    <div className={styles.sdfsdf}>
                                                        <div className={styles.dsfhsd}>
                                                            <img src="./images/product1 (1).webp" alt="" />
                                                        </div>
                                                        <div className={styles.dbhdsf512}>
                                                            <h6>World's Most Expensive T Shirt</h6>
                                                            <p>Women's Clothes</p>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td>17-07-25</td>

                                                <td>$1,190</td>

                                                <td>
                                                    <button className={styles.dfgfd5544a}>Cancel</button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>FC1474785</td>

                                                <td>
                                                    <div className={styles.sdfsdf}>
                                                        <div className={styles.dsfhsd}>
                                                            <img src="./images/product1 (2).webp" alt="" />
                                                        </div>
                                                        <div className={styles.dbhdsf512}>
                                                            <h6>World's Most Expensive T Shirt</h6>
                                                            <p>Women's Clothes</p>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td>17-07-25</td>

                                                <td>$1,190</td>

                                                <td>
                                                    <button className={styles.dfgfd5544b}>Shipping</button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>DC5247485</td>

                                                <td>
                                                    <div className={styles.sdfsdf}>
                                                        <div className={styles.dsfhsd}>
                                                            <img src="./images/product2 (1).webp" alt="" />
                                                        </div>
                                                        <div className={styles.dbhdsf512}>
                                                            <h6>World's Most Expensive T Shirt</h6>
                                                            <p>Women's Clothes</p>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td>17-07-25</td>

                                                <td>$1,190</td>
                                                
                                                <td>
                                                    <button className={styles.dfgfd5544c}>Pending</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
