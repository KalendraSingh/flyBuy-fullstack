
import Header from './Header';
// import ProductCart from './ProuctCart';
//import Category from './admin/Category';
import { useState, useEffect } from 'react';
import swal from 'sweetalert';

import './Product.css';

import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Footer from './Footer';


const Product = () => {

    const [catdata, setcatdata] = useState([]);

    const [pdata, setpdata] = useState([]);
    useEffect(() => {
        
        loadrecord();
        loadcart();
        loaddefaultproduct()
        

    }, [])

    const [cookie, setcookie, removecookie] = useCookies();
    const jump = useNavigate();

    const [citem, setcitem] = useState(0);

    const getprodcuts = async (x) => {
        const rec = await fetch("http://localhost:7000/productbycat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ catid:  x })
        });
        const data = await rec.json();
        setpdata(data);
    }

    const loadrecord = async () => {
        const rec = await fetch("http://localhost:7000/category", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });
        const data = await rec.json();
        setcatdata(data);
        
    }
 
    const loadcart = async () => {
        const rec = await fetch("http://localhost:7000/cart", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: "include"
        });
        const data = await rec.json();
        setcitem(data.length)
    }

    const addcart = async (pname, price, offer, pic, pid) => {
        if (cookie["usercookie"]) {
            const rec = await fetch("http://localhost:7000/cart", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: cookie["usercookie"], pname: pname, price: price, offer: offer, pic: pic, pid: pid }),
                credentials: "include"
            });
            const data = await rec.json();

            swal({
                title: "Good job!",
                text: data.msg,
                icon: "success",
              });
            loadcart();
        }
        else {
            jump("/ulogin");
        }
    }

    const loaddefaultproduct = async () => {
        const rec = await fetch("http://localhost:7000/defaultproduct", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });
        const defaultata = await rec.json();
        setpdata(defaultata)
        
    }


    return (
        <>  <Header citem={citem} />
            <div className='container-fluid'>

                <div className='row'>

                    <div className='bg-primary text-light categoryStyle'>
                        <div style={{ maxWidth: "1250px", margin: "auto" }}>
                            <ul className='d-flex flex-row justify-content-between align-items-center pt-1 pb-1'>

                                {
                                    catdata.map((e) => {
                                        return (<li style={{ cursor: "pointer", color: "white" }} onClick={() => { getprodcuts(e._id) }}>{e.catname}</li>)
                                    })
                                }

                            </ul>
                        </div>

                    </div>

                    <div>
                        <img src='images/igifimage.gif' className='w-100' alt='...' />
                    </div>

                    <div className='pt-2 pb-5 d-flex flex-row flex-wrap justify-content-center gap-4'>


                        {pdata.map((m) => {

                            return (
                                // <div>
                                //     <ProductCart pname={m.pname} price={m.price} pic={m.pic} offer={m.offerprice} pid={m._id}/>
                                // </div>

                                <div>
                                    <div className="card shadow" style={{ width: "18rem" }}>
                                        <div className="text-center">
        
                                           <img src={"http://localhost:7000/" + m.pic} className="card-img-top cardimage" alt="This" />
                                        </div>
                                      

                                        <div className="card-body">
                                            <h5 className="card-title">{m.pname}</h5>
                                            <p className="card-text">Rs.{m.price}/-</p>
                                            <button className="btn btn-primary" onClick={() => { addcart(m.pname, m.price, m.offerprice, m.pic, m._id) }}>Add to Cart</button>
                                        </div>
                                    </div>

                                </div>


                            )
                        })}


                    </div>


                </div>

            </div>
            <Footer/>
        </>
    )
}
export default Product;