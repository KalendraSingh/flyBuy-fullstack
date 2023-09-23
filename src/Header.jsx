
import { Link } from "react-router-dom";
import './Header.css';
import { useState } from "react";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Header = (c) => {


    const [cdata,setcdata]=useState([]);

    let [searchValue,setSearchData]=useState();

    let [searchData,setsearchQuery]=useState([]);

    const [cookie,setcookie,removecookie]=useCookies();
    const jump=useNavigate();

    const logout=()=>{
       
        removecookie("usercookie");
        jump("/");
    }
    const jumpToLogin = ()=>{
        jump("/Ulogin")
    }

    const getSearchData =(e)=>{

        setSearchData(e.target.value)
    }

    const handleSearchSubmit = async (e) => {
        // e.preventDefault()
        
      
       
        
        

        jump("/searchproduct/"+searchValue);

      
        
    }

    return (
        <>
            <div className="container-fluid bg-white text-light headerContaner">
                <div className="row">
                    <div className="col-md-3 pt-2">
                       <Link className="navbar-brand" to="/"><img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-website-logo-img.png" alt="..."/></Link>
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
                                            <Link className="nav-link text-dark" to="/About">About</Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle text-dark" to='/Product' role="button" data-bs-toggle="dropdown">Our Products</Link>
                                            <ul className="dropdown-menu">
                                                <li><Link className="dropdown-item text-dark" to='/Product'>Products</Link></li>
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
                                        <li><Link to="/cart"><img src="images/cart.jpg" style={{ width: "30px", marginLeft: "40px" }} alt="..." /><span className="badge bg-danger rounded-circle" style={{ position: "relative", left: "-25px", top: "-12px" }}>{c.citem}</span></Link></li>
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
        </>
    )
}
export default Header;
