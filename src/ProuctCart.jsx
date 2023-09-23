// import './ProductCart.css'

// import { useCookies } from "react-cookie";
// import { useNavigate } from "react-router-dom";
// import { useEffect,useState } from 'react';
// import Header from './Header';
const ProductCart = (m) =>{

//   const  {pname,price,pic,offer} = (m);



    // const [cookie,setcookie,removecookie]=useCookies();
    // const jump=useNavigate();

    // const [citem,setcitem]=useState(0); 
    // useEffect(()=>{
    //     loadcart();
    // },[])


    // const loadcart=async()=>{
    //     const rec=await fetch("http://localhost:7000/cart",{
    //         method:"GET",
    //         headers:{"Content-Type":"application/json"},
    //         credentials:"include"
    //     });
    //     const data=await rec.json();
    //     setcitem(data.length)
    // }


    // const addcart=async(pname,price,offer,pic,pid)=>{
    //     if(cookie["usercookie"])
    //     {
    //         const rec=await fetch("http://localhost:7000/cart",{
    //             method:"POST",
    //             headers:{"Content-Type":"application/json"},
    //             body:JSON.stringify({email:cookie["usercookie"],pname:pname,price:price,offer:offer,pic:pic,pid:pid}),
    //             credentials:"include"
    //         });
    //         const data=await rec.json();
    //         alert(data.msg);
    //         loadcart();
    //     }
    //     else{
    //         jump("/ulogin");
    //     }
    // }

    return(

        <>
            
            {/* <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src= {"http://localhost:7000/" + m.pic} className="card-img-top cardimage" alt="This"/>

                    <div className="card-body">
                        <h5 className="card-title">{m.pname}</h5>
                        <p className="card-text">Rs.{m.price}/-</p>
                        <button className="btn btn-primary" onClick={()=>{addcart(m.pname,m.price,m.offer,m.pic,m.pid)}}>Add to Cart</button>
                    </div>
                </div>
                
            </div> */}
        </>
    )
}

export default ProductCart;