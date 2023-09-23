
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';

import './Adlogin.css'

const Adlogin = () => {



    const [frm, setfrm] = useState({ "txtuname": "", "txtpsw": "" });
    const jump = useNavigate();
    
    const fun1 = (e) => {
        setfrm({ ...frm, [e.target.id]: e.target.value })
    }
    const validate = async () => {
        const rec = await fetch("http://localhost:7000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ uname: frm.txtuname, psw: frm.txtpsw }),
            credentials:"include"
        });
        const data = await rec.json();
        if (data.msg === "Valid User") {
           jump("/dashboard");
        }
        else {
            alert(data.msg);
        }
    }

    return(

    <>
        <div className="bgLogin d-flex flex-row justify-content-center align-items-center">

            <div className="loginCard">

                <h1 className='text-center pt-3'>
                    <span className='text-primary'>Fly</span><span className='text-danger'>Buy</span>
                </h1>
                <div className='h-75  d-flex flex-row justify-content-center align-items-center'>
                    <div>
                        <div>
                            <label>Username:</label><br />
                            <input type='text' id="txtuname" onChange={fun1} placeholder='email or phone'></input>
                        </div>

                        <div>
                            <ladel>Password:</ladel><br />
                            <input type='password' id="txtpsw" onChange={fun1} placeholder='password'></input>
                        </div>

                        <div className="form-group"><br />

                            <button type="button" onClick={validate} className="btn btn-primary text-light mb-2">Login</button>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    </>
    )
}

export default Adlogin;