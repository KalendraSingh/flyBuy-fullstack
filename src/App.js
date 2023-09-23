import { Link } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import { useState,useEffect } from 'react';

const  App = ()=> {

    const [citem,setcitem]=useState(0); 
  
    useEffect(()=>{
        loadcart();
    },[])

    const loadcart=async()=>{
        const rec=await fetch("http://localhost:7000/cart",{
            method:"GET",
            headers:{"Content-Type":"application/json"},
            credentials:"include"
        });
        const data=await rec.json();
        setcitem(data.length)
    }

  return (
    <>
      
    <Header citem= {citem}/>
    
    <div className="ecommerce-website-Banner-Section">
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
                                <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-carousel-1-sm-img.png" className="d-block w-100 h-50" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-carousel-2-sm-img.png" className="d-block w-100 h-75" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-carousel-3-sm-img.png" className="d-block w-100 h-75" alt="..."/>
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
                            
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item">
                                <img src="https://res.cloudinary.com/sangamjone/image/upload/v1692393715/b1_vlpwmc.jpg" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item ">
                                <img src="https://res.cloudinary.com/sangamjone/image/upload/v1692393715/b3_gebilw.jpg" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item active">
                                <img src="https://res.cloudinary.com/sangamjone/image/upload/v1692393714/b4_idr72k.jpg" className="d-block w-100" alt="..."/>
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
    <div className="Eccomerce-Website-Services-Section pt-4 pb-4">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="Services-main-heading text-center">
                        Our Services
                    </h1>
                    <p className="Services-main-heading-description text-center">
                        Most online stores offer lower prices. Online shopping makes prices
                        comparison similar and quicker. It is very convenient to shop from where you the cost of driving to stores, as well as parking fees.
                    </p>
                </div>
                <div className="col-12 col-md-4">
                    <div className="Eccomerce-Website-Services-Section-card text-center shadow p-4 mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-services-delivery-img.png" className="Eccomerce-Website-Services-Section-card-image" alt='...'/>
                        <h4 className="Eccomerce-Website-Services-Section-card-title">Fast and Free Delivery</h4>
                        <p className="Eccomerce-Website-Services-Section-card-description">Fast,free,and convenient Delivery choices on millions of items</p>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="Eccomerce-Website-Services-Section-card text-center shadow p-4 mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-services-money-back-img.png" className="Eccomerce-Website-Services-Section-card-image" alt='...' />
                        <h4 className="Eccomerce-Website-Services-Section-card-title">100% Money back guarantee</h4>
                        <p className="Eccomerce-Website-Services-Section-card-description">This is probabal the most popular guarantee the world.</p>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="Eccomerce-Website-Services-Section-card text-center shadow p-4 mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-services-24-by-7-support-img.png" className="Eccomerce-Website-Services-Section-card-image" alt='...'/>
                        <h4 className="Eccomerce-Website-Services-Section-card-title">Online Support 24/7</h4>
                        <p className="Eccomerce-Website-Services-Section-card-description">Our Online support will provide you with many useful fuctions,valuable information,tips.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="Ecommerce-Website-Products-section pt-4 pb-4">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="Products-section-main-heading">
                        Our Products
                    </h1>
                </div>
                <div className="col-12 col-md-6">
                    <div className="Products-section-card d-flex flex-column justify-content-end pb-4 pl-4 mb-3 shadow">
                        <div>
                            <h2 className="Products-section-card-title">Smart Headphone</h2>
                            <p className="Products-section-card-description">Smart headphones with deep Bass,sound,touch...</p>
                           
                            <button type="button" className="Products-section-card-button" data-toggle="modal" data-target="#exampleModal">
                                View Details
                            </button>

                          
                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            ...
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="Products-section-card d-flex flex-column justify-content-end pb-4 pl-4 mb-3 shadow" id="Products-section-card2">
                        <div>
                            <h2 className="Products-section-card-title">Smart Headphone</h2>
                            <p className="Products-section-card-description">Smart headphones with deep Bass,sound,touch...</p>
                         
                            <button type="button" className="Products-section-card-button" data-toggle="modal" data-target="#exampleModal">
                                View Details
                            </button>

                       
                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            ...
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12">
                    <div className="text-right">
                        <a href='google.com' className="Products-section-card-anchor-link">See All Offers<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="Ecommerce-Website-Offers-Section pt-4 pb-4">
        <div className="container">
            <div className="row">
                <div className="col-12 order-md-2 col-md-2">
                    <div>
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-offers-special-img.png" className=" Offers-Section-image-offer w-100 " alt='...'/>
                    </div>
                </div>
                <div className="col-12 order-md-3 col-md-5">
                    <div>
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-offers-appliances-img.png" className="Offers-Section-image-offer w-100 " alt='...'/>
                    </div>
                </div>
                <div className="col-12 order-md-1 col-md-5">
                    <h1 className="Offers-Section-main-heading"> BEST NEW YEAR SPECIAL OFFERS </h1>
                    <p className="Offers-Section-paragraph">Best time to buy.Save upto <span style={{fontStyle:"italic",fontWeight:"bold"}}>70% cash</span></p>
                    <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-offers-credit-card-img.png" className="w-100" alt='...'/>
                </div>
            </div>
        </div>
    </div>
    <div className="Ecomerce-Website-Trending-Blogs-Section pt-4 pb-4">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="Trending-Blogs-main-heading">Trendin Blogs</h1>
                </div>
                <div className="col-12 col-md-6">
                    <div className="Trending-Blogs-card shadow mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-trending-blogs-1-img.png" className="Trending-Blogs-card-image w-100" alt='...'/>
                        <div className="p-3">
                            <p className="Trending-Blogs-card-sub-title">Fountain-Pens</p>
                            <h3 className="Trending-Blogs-card-title">Guide to Fountain Pen Nibs</h3>
                            <p className="Trending-Blogs-card-description">
                                If you're having trouble with a fountain pen whether it's scratchy,
                                too dry, or too wet...
                            </p>
                            <a href='google.com' className="Trending-Blogs-card-anchor-link">READ MORE<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="Trending-Blogs-card shadow mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-trending-blogs-2-img.png" className="Trending-Blogs-card-image w-100" alt='...'/>
                        <div className="p-3">
                            <p className="Trending-Blogs-card-sub-title">Productivit</p>
                            <h3 className="Trending-Blogs-card-title">How to Craft a Better Todo List</h3>
                            <p className="Trending-Blogs-card-description">A well-crafted Todo list acts as a guiding light for your day.
                                It helps you ovwecome...
                            </p>
                            <a href='google.com' className="Trending-Blogs-card-anchor-link">READ MORE<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="Ecommerce-Website-Explore-Section pt-4 pb-4">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="Explore-Section-main-heading">
                        Explore Deals & Offers
                    </h1>
                </div>
                <div className="col-12 col-md-4 order-1 order-md-1">
                    <div className="shadow p-4 mb-3">
                        <h4 className="Explore-Section-card-title">Up to 80% off| Electionics & Gadgets</h4>
                        <div className="d-flex flex-row justify-content-center">
                            <div className="text-center mr-3">
                                <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-explore-mamba-watch-img.png" className="Explore-Section-card-image w-100" alt='...' />
                                <p className="Explore-Section-card-image-name">Smart Watch</p>
                            </div>
                            <div className="text-center mr-3">
                                <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-explore-camera-img.png" className="Explore-Section-card-image w-100" alt='...' />
                                <p className="Explore-Section-card-image-name">Cameras</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row justify-content-center">
                            <div className="text-center mr-3">
                                <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-explore-sport-and-fitness-img.png" className="Explore-Section-card-image w-100" alt='...'/>
                                <p className="Explore-Section-card-image-name">Spotrs & Fitness</p>
                            </div>
                            <div className="text-center mr-3">
                                <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-explore-ear-phones-pink-img.png" className="Explore-Section-card-image w-100" alt='...' />
                                <p className="Explore-Section-card-image-name">Earphones</p>
                            </div>
                        </div>
                        <a href='google.com' className="Explore-Section-anchor-link">See All Deals<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-md-4 order-3 order-md-3">
                    <div className="shadow p-4 mb-3">
                        <h4 className="Explore-Section-card-title">Up to 80% off| Electionics & Gadgets</h4>
                        <div className="d-flex flex-row justify-content-center">
                            <div className="text-center mr-3">
                                <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-explore-tablet-device-img.png" className="Explore-Section-card-image w-100" alt='...' />
                                <p className="Explore-Section-card-image-name">Tablet</p>
                            </div>
                            <div className="text-center mr-3">
                                <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-explore-joy-stick-img.png" className="Explore-Section-card-image w-100" alt='...'/>
                                <p className="Explore-Section-card-image-name">PlayStation</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row justify-content-center">
                            <div className="text-center mr-3">
                                <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-explore-speakers-big-img.png" className="Explore-Section-card-image w-100" alt='...'/>
                                <p className="Explore-Section-card-image-name">Speakers</p>
                            </div>
                            <div className="text-center mr-3">
                                <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-explore-vr-set-img.png" className="Explore-Section-card-image w-100" alt='...'/>
                                <p className="Explore-Section-card-image-name">Virtual Reality Set</p>
                            </div>
                        </div>
                        <a href='google.com' className="Explore-Section-anchor-link">See All Deals<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-md-4 order-2 order-md-2">
                    <div className="shadow p-4 mb-3">
                        <h4 className="Explore-Section-card-title">Festive Offers TVs & appliances</h4>
                        <div className="text-center mr-3">
                            <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-explore-tv-img.png" className="Explore-Section-card-image mb-3 w-100" alt='...'/>
                        </div>
                        <a href='google.com' className="Explore-Section-anchor-link">See All Deals<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div className='bgGirlsContainer'>
        <div className='text-center'>
            <p>
            20% Discount on
            </p>
            <h1>TRENDING DESIGNS</h1>
            <div >
                <Link to="/searchproduct/a"><button className='btn btn-warning mr-2 text-white'>Shop Now</button></Link>
                <Link to="/product"><button className='btn btn-warning ml-2 text-white'>View More</button></Link>
            </div>
        </div>
    </div>
<Footer/>
    </>
  );
}

export default App;