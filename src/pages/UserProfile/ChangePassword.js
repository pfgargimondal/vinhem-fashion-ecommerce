import { Link } from "react-router-dom";

import { UserProfileNavMenu } from "../../components";

import styles from "./Css/ChangePassword.module.css";

export const ChangePassword = () => {
    return (
        <div className={styles.ffhfdf}>
            <div className="container-fluid">
                <div className={styles.fbghdfg}>
                    <div className="row">
                        <div className="col-lg-3">
                            <UserProfileNavMenu />
                        </div>

                        <div className="col-lg-9">
                            <div className={`${styles.fgcbdfgdf} pt-3 pb-5`}>
                                <div className={styles.dfjhdsbfsdf}>                                    
                                    <h4 className="mb-3">Change Password</h4>                                 
                                    
                                    <p className="mb-5">Update your password regularly to keep your account safe. Enter your new password below and confirm it to make the change. Make sure your new password is strong and unique.</p>
                                </div>

                                <form>
                                    <div className={styles.fxnjhdfsdfds}>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className={styles.dfndf}>
                                                    <label htmlFor="">New Password</label>
                                                    
                                                    <input type="text" className="form-control" placeholder="Enter New Password" />
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className={styles.dfndf}>
                                                    <label htmlFor="">Confirm New Password</label>
                                                    
                                                    <input type="text" className="form-control" placeholder="Enter Confirm Password" />
                                                </div>
                                            </div>

                                            <div className={`${styles.dienwrhwerwer} mt-5`}>
                                                <div className={styles.dnjhsddsfsd}>
                                                    <button>Submit</button>
                                                </div>
                                            </div>                                        
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
