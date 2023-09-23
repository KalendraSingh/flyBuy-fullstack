import './Admin.css';


import { Link, useNavigate } from 'react-router-dom';




const Sidemenu = (props) => {

    const navigate = useNavigate();

    const ViewProduct = () => {

        navigate("/dashboard");
    }

    return (
        <>
            <div className='sidebar'>
                <h3 className='text-white text-center pt-2'> <span className='text-primary'>Fly</span><span className='text-danger'>Buy</span></h3>
                <h3 className="text-center"><Link to="/dashboard">Dashboard</Link></h3>
                <hr />
                <div id="accordion">
                    <div className="card">
                        <div className="card-header">
                            <a className="btn" data-bs-toggle="collapse" href="#m1">
                                View Products
                            </a>
                        </div>
                        <div id="m1" class="collapse show" data-bs-parent="#accordion">
                            <div className="card-body">
                                <ul>
                                    <li><Link to="/category">Category</Link></li>
                                    <li><Link to="/adproduct">Product</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <a className="btn" onClick={ViewProduct} data-bs-toggle="collapse" href="#m2">
                                View Order
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="adminprofle">
                            <img src="images/profile.png" className='w-25' alt='...' />
                            <p className='text-white pt-2'>Hi, {props.usname}</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Sidemenu;
