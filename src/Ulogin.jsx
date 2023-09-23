import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import swal from 'sweetalert';

const ULogin = () => {
    const [frm, setfrm] = useState({ "txtemail": "", "txtpassword": "" });
    const jump = useNavigate();
    const fun1 = (e) => {
        setfrm({ ...frm, [e.target.id]: e.target.value })
    }
    const funlogin = async () => {
        const rec = await fetch("http://localhost:7000/signuplog", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: frm.txtemail, password: frm.txtpassword }),
            credentials: "include"
        });
        const data = await rec.json();
        if (data.msg === "Valid User") {
            jump("/product")
        }
        else {
            swal({
                title: "fill Correct!",
                text: data.msg,
                icon: "warning",
            });
        }
    }

    return (
        <>
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="d-flex flex-row justify-content-center align-items-center pt-5">
                        <div className="col-md-5">
                            <div>
                                <img src="images/login.jpg" className="w-100" alt="..." />
                            </div>
                        </div>
                        <div className="col-md-7 pt-5">
                            <div className="form-group">
                                <h1>Login</h1>
                                <label>Email</label>
                                <input type="text" id="txtemail" onChange={fun1} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" id="txtpassword" onChange={fun1} className="form-control" />
                            </div>
                            <div className="form-group">
                                <br />
                                <button className="btn btn-primary" onClick={funlogin}>Login</button>
                                <br />
                                <Link to="/usignup">Create New Account</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}
export default ULogin;