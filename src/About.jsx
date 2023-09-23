import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";


function About() {

    return (

        <>
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="d-flex flex-row justify-content-center align-items-center ">
                        <div className="col-md-5">
                            <div>
                                <img src="images/about.jpg" className="w-100" alt="..." />
                            </div>
                        </div>
                        <div className="col-md-7 m-5 p-5">
                            <h1>About Us-<span className="text-primary">Fly</span><span className="text-danger">Buy</span></h1>
                            <div>
                                <p>
                                    Welcome to FlyBuy, your ultimate destination for a seamless and exhilarating online shopping experience! Established with a passion for delivering quality products and exceptional service,
                                    FlyBuy is your one-stop e-commerce platform offering a diverse range of products, including clothing, mobiles, laptops, and more.
                                </p>
                                <h1>Our Mission</h1>
                                <p>
                                    At FlyBuy, we're on a mission to redefine the way you shop online. Our goal is to provide you with an extensive selection of products that cater to your every need, all within the comfort of your own space. We believe in making your shopping journey enjoyable, convenient, and hassle-free,
                                    allowing you to focus on what truly matters – finding the perfect products to enhance your lifestyle.
                                </p>
                            </div>
                            <div className="form-group">
                                <br />
                                <Link to="/"><button className="btn btn-primary" >Expore More</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default About;