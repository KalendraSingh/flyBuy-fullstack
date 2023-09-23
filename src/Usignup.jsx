import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import swal from 'sweetalert';

const Usignup = () => {
    const [frm, setfrm] = useState({ "txtname": "", "txtmobile": "", "txtemail": "", "txtpassword": "", "txtcpassword": "" });
    const jump = useNavigate();
    const fun1 = (e) => {
        setfrm({ ...frm, [e.target.id]: e.target.value });
    }
    const saverecord = async () => {
        if (frm.txtname.trim() === "") {
            alert("Please enter name");
        }
        else if (frm.txtmobile.trim() === "") {
            alert("Please enter mobile");
        }
        else if (frm.txtemail.trim() === "") {
            alert("Please enter email");
        }
        else if (frm.txtpassword.trim() === "") {
            alert("Please enter password");
        }
        else if (frm.txtcpassword.trim() === "") {
            alert("Please enter confirm password");
        }
        else if (frm.txtpassword.trim() != frm.txtcpassword) {
            alert("Both password must be same");
        }
        else {
            const rec = await fetch("http://localhost:7000/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: frm.txtname, mobile: frm.txtmobile, email: frm.txtemail, password: frm.txtpassword })
            });
            const data = await rec.json();
            if (data.msg === "Saved") {
                swal({
                    title: "Good Jog!",
                    text:"Thanks for creating account",
                    icon: "success",
                });
                jump("/ulogin");
            }
            else {
                swal({
                    title: "Good Jog!",
                    text:data.msg,
                    icon: "success",
                });
            }
        }
    }
    return (
        <>  
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="d-flex flex-row justify-content-center align-items-center ">
                        <div className="col-md-5">
                            <div>
                                <img src="images/sinup.jpg" className="w-100" alt="..." />
                            </div>
                        </div>
                        <div className="col-md-7 m-5 p-5">
                            <h1>Create New Account</h1>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" id="txtname" onChange={fun1} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Mobile</label>
                                <input type="text" id="txtmobile" onChange={fun1} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" id="txtemail" onChange={fun1} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" id="txtpassword" onChange={fun1} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input type="password" id="txtcpassword" onChange={fun1} className="form-control" />
                            </div>
                            <div className="form-group">
                                <br />
                                <button className="btn btn-primary" onClick={saverecord}>Create Account</button>
                                <br />
                                <Link to="/ulogin">Back to Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
}
export default Usignup;