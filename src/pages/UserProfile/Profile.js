import styles from "./Css/Profile.module.css";

import { UserProfileNavMenu } from "../../components";

export const Profile = () => {
    return (
        <div className="container-fluid">
            <div className={styles.ffhfdf}>
                <div className={styles.fbghdfg}>
                    <div className="row">
                        <div className="col-lg-3">
                           <UserProfileNavMenu />
                        </div>

                        <div className="col-lg-9">
                            <div className={`${styles.fgcbdfgdf} pt-3 pb-5`}>
                                <div className={styles.dfjhdsbfsdf}>                                    
                                    <h4>Profile Information</h4>                                 
                                </div>

                                <div className={`${styles.fbhdfs} mb-4`}>
                                    <div className={`${styles.dfghdfgdf} mb-4`}>
                                        <div className={styles.sdfjhsdfs}>
                                            <img src="./images/pfle.jpg" alt="" />
                                        </div>

                                        <div className={styles.dfbghdfg}>
                                            <h5 className="mb-0">Ravindra Jadeja</h5>                                        
                                        </div>
                                    </div>

                                    <button className="btn"><i className="fa-solid fa-pen"></i> Edit</button>
                                </div>

                                <div className={styles.sdfnsdjkfsdf}>
                                    <div className={styles.fdndfjh}>
                                        <h5 className={`mb-3 ${styles.acdfvdscvdrtefr}`}>Personal Details</h5>
                                    </div>

                                    <form>
                                        <div className={styles.sdksdfsdf}>                                        
                                            <div className="row">
                                                <div className="col-lg-4 mb-3">
                                                    <div className={styles.dhfsdfd}>
                                                        <label>Full Name</label>
                                                        
                                                        <input type="text" className="form-control" placeholder="Ravindra Jadeja" disabled />
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 mb-3">
                                                    <div className={styles.dhfsdfd}>
                                                        <label>Email Address</label>
                                                        
                                                        <input type="text" className="form-control" placeholder="jaddu@gmail.com" disabled />
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 mb-3">
                                                    <div className={styles.dhfsdfd}>
                                                        <label>Phone Number</label>
                                                        <input type="text" className="form-control" placeholder="7854952585" disabled />
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 mb-3">
                                                    <div className={styles.dhfsdfd}>
                                                        <label>Gender</label>
                                                        <input type="text" className="form-control" placeholder="Male" disabled />
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 mb-3">
                                                    <div className={styles.dhfsdfd}>
                                                        <label>Bio</label>
                                                        <input type="text" className="form-control" placeholder="Customer Service Manager" disabled />
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 mb-3">
                                                    <div className={styles.dhfsdfd}>
                                                        <label>Date Of Birth</label>
                                                        <input type="text" className="form-control" placeholder="10 june 2004" disabled />
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 mb-3">
                                                    <div className={styles.dhfsdfd}>
                                                        <label>National ID</label>
                                                        <input type="text" className="form-control" placeholder="658-8568-8586" disabled />
                                                    </div>
                                                </div>
                                            </div>                                        
                                        </div>

                                        <div className={`${styles.dfgdfg6526} mt-5`}>
                                            <h5 className={`mb-3 ${styles.acdfvdscvdrtefr}`}>Address Details</h5>
                                        </div>

                                        <div className={styles.dfgdfhdf5156}>
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <div className={styles.dhfsdfd}>
                                                        <label>Country</label>
                                                        <input type="text" className="form-control" placeholder="India" disabled />
                                                    </div>
                                                </div>

                                                <div className="col-lg-4">
                                                    <div className={styles.dhfsdfd}>
                                                        <label>City</label>
                                                        <input type="text" className="form-control" placeholder="Jamnagar" disabled />
                                                    </div>
                                                </div>

                                                <div className="col-lg-4">
                                                    <div className={styles.dhfsdfd}>
                                                        <label>Pin Code</label>
                                                        <input type="text" className="form-control" placeholder="742121 " disabled />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`${styles.dienwrhwerwer}`}>
                                            <div className={styles.dnjhsddsfsd}>
                                                <button>Submit</button>
                                            </div>
                                        </div>  
                                    </form>
                                </div> {/* end of sdfnsdjkfsdf */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
