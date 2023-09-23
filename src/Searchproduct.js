import React from "react";
import Header from "./Header";
import { Link, useParams } from "react-router-dom";
import './Searchproduct.css';
import { useState } from "react";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import swal from 'sweetalert';
import cartImage from './images/cart.jpg';
import searchCaurosal1 from './images/pb1.jpg';
import searchCaurosal2 from './images/pb2.jpg';
import searchCaurosal3 from './images/pb3.jpg';
import searchCaurosal4 from './images/pb4.jpg';


const Searchproduct = () => {

    const [catdata, setcatdata] = useState([]);
    const {id}=useParams();

    const [pdata, setpdata] = useState([]);
  
    useEffect(() => {
        
        loadrecord();
        loadcart();
        loaddefaultproduct() 
        loadSearchRecord()

    }, [])

    const loadSearchRecord = async(req,res)=>{
         const rec = await fetch(`http://localhost:7000/searchData?query=${id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });

        const data = await rec.json();
        setsearchQuery(data);
    }

    const [cdata, setcdata] = useState([]);
    const [citem, setcitem] = useState(0);

    let [searchValue, setSearchData] = useState("");

    let [searchData, setsearchQuery] = useState([]);

    const [cookie, setcookie, removecookie] = useCookies();
    const jump = useNavigate();

    const logout = () => {

        removecookie("usercookie");
        jump("/");
    }
    const jumpToLogin = () => {
        jump("/Ulogin")
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

    const getSearchData = (e) => {

        setSearchData(e.target.value)
    }

    const handleSearchSubmit = async (e) => {
        e.preventDefault()


        const rec = await fetch(`http://localhost:7000/searchData?query=${searchValue}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });

        const data = await rec.json();

        setsearchQuery(data);

        jump("/searchproduct/" + searchValue);



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
        setsearchQuery(defaultata)

    }


    const getprodcuts = async (x) => {
        const rec = await fetch("http://localhost:7000/productbycat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ catid:  x })
        });
        const data = await rec.json();
        setsearchQuery(data);
    }

    const loadrecord = async () => {
        const rec = await fetch("http://localhost:7000/category", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });
        const data = await rec.json();
        setcatdata(data);
        
    }

    return (
        <>
            <div className="container-fluid bg-white text-light headerContaner w-100">
                <div className="row">
                    <div className="col-md-3">
                        <Link className="navbar-brand" to="/"><img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-website-logo-img.png" alt="..." /></Link>
                    </div>
                    <div className="col-md-9 text-dark">
                        <nav className="navbar navbar-expand-sm navbar-dark">
                            <div className="container-fluid">
                                {/* <a className="navbar-brand" href="#">Logo</a> */}
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link className="nav-link text-dark" to="/" >Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link text-dark" to="/About">About Us</Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle text-dark" to='/Product' role="button" data-bs-toggle="dropdown">Our Products</Link>
                                            <ul className="dropdown-menu">
                                                <li><Link className="dropdown-item text-dark" to='/Product'>product</Link></li>
                                                <li><a className="dropdown-item text-dark" href="#">Another link</a></li>
                                                <li><a className="dropdown-item text-dark" href="#">A third link</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link text-dark" to='/Contact'>Contact</Link>
                                        </li>
                                    </ul>


                                    <nav class="navbar navbar-light">
                                        <form class="form-inline" onSubmit={handleSearchSubmit}>
                                            <input class="form-control mr-sm-2" onChange={getSearchData} value={searchValue} type="search" placeholder="Search" aria-label="Search" />
                                            <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                                        </form>
                                    </nav>

                                    <ul class="nav">
                                        <li><Link to="/cart"><img src= {cartImage} style={{ width: "30px", marginLeft: "40px" }} alt="..." /><span className="badge bg-danger rounded-circle" style={{ position: "relative", left: "-25px", top: "-12px" }}>{citem}</span></Link></li>
                                    </ul>

                                    {
                                        cookie["usercookie"] ?

                                            <div className="dropdown ml-5">
                                                <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                                                    My Account
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><Link className="dropdown-item" to="/myorder">My Order</Link></li>
                                                    <li><a className="dropdown-item" href="#" onClick={logout}>Logout</a></li>

                                                </ul>
                                            </div>

                                            : <button className="btn btn-primary ml-5" onClick={jumpToLogin}>Login</button>

                                    }



                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            <div>
                <div>
                <div className='bg-primary text-light categoryStyle'>
                        <div style={{ maxWidth: "1250px", margin: "auto" }}>
                            <ul className='d-flex flex-row justify-content-between align-items-center pt-2 pb-3'>

                                {
                                    catdata.map((e) => {
                                        return (<li style={{ cursor: "pointer", color: "white" }} onClick={() => { getprodcuts(e._id) }}>{e.catname}</li>)
                                    })
                                }

                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <div className="ecommerce-website-Banner-Section pb-4 w-100">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 d-md-none">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-carousel-1-sm-img.png" className="d-block w-100 h-50" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-carousel-2-sm-img.png" className="d-block w-100 h-75" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-carousel-3-sm-img.png" className="d-block w-100 h-75" alt="..." />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-12 d-none d-md-block">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>

                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item">
                                        <img src={searchCaurosal1} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item ">
                                        <img src={searchCaurosal2} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item active">
                                        <img src={searchCaurosal3} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={searchCaurosal4} className="d-block w-100" alt="..." />
                                    </div>

                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="cntainer-fluid">
                    <div className="row">
                        <div className='pt-2 pb-5 d-flex flex-row flex-wrap justify-content-center gap-4'>


                            {searchData.map((m) => {

                                return (

                                    <div className="card shadow" style={{ width: "18rem" }}>
                                        <div className="text-center p-2">
                                            <img src={"http://localhost:7000/" + m.pic} className="card-img-top cardimage w-100" alt="This" />
                                        </div>

                                        <div className="card-body">
                                            <h5 className="card-title">{m.pname}</h5>
                                            <p className="card-text">Rs.{m.price}/-</p>
                                            <button className="btn btn-primary" onClick={() => { addcart(m.pname, m.price, m.offerprice, m.pic, m._id) }}>Add to Cart</button>
                                        </div>
                                    </div>




                                )
                            })}


                        </div>
                    </div>
                </div>


            </div>
            <Footer/>
        </>
    )
}
export default Searchproduct;