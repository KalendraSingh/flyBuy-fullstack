import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Myorder = () => {

    const [odata, setodata] = useState([]);
    const [odetails, setodetails] = useState([]);
    const [citem, setcitem] = useState(0);

    useEffect(() => {
        loadorder();
        loadcart();


    }, [])

    const loadcart = async () => {
        const rec = await fetch("http://localhost:7000/cart", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: "include"
        });
        const data = await rec.json();
        setcitem(data.length)
    }

    const loaddetails = async (orderNo) => {
        const rec = await fetch("http://localhost:7000/orderdetails/" + orderNo, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
        const data = await rec.json();
        setodetails(data);

    }

    const loadorder = async () => {
        const rec = await fetch("http://localhost:7000/proorder", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
        const data = await rec.json();
        setodata(data);

        // data.forEach(order => {
        //     loaddetails(order.orderno);
        // });

        loaddetails(data[0].orderno);

    }




    return (

        <>
            <Header citem={citem} />
            <div className="myorder-section pt-4 pb-4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <h4 className="text-center" style={{ color: "black" }}>Products</h4>

                            {odetails.map((a) => {
                                return (

                                    <div className="ordercard d-flex flex-row justify-content-center align-items-center">
                                        <div className="d-flex flex-column justify-content-flex-start align-items-center p-2">
                                            <img src={"http://localhost:7000/" + a.pic} className="card-img-top" alt="This" style={{width:"70px"}} />
                                        </div>


                                        <div className="w-50">
                                            <h5 className="card-title">{a.pname}</h5>
                                            <p className="card-text">Rs.{a.price}/-</p>
                                            <p className="card-text">{a.qty} items</p>
                                        </div>
                                    </div>
                                )
                            })
                            }

                        </div>
                        <div className="col-md-9">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>OrderNo</th>
                                        <th>Name</th>
                                        <th>Mobile</th>
                                        <th>Order Date</th>
                                        <th>Amount</th>
                                        <th>Address</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {odata.map((x) => {
                                        return (
                                            <tr>
                                                <td>{x.orderno}</td>
                                                <td>{x.name}</td>
                                                <td>{x.mobile}</td>
                                                <td>{x.orderdate}</td>
                                                <td>{x.amount}</td>
                                                <td>{x.address}</td>
                                                <td>{x.orderstatus}</td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )

}
export default Myorder;
