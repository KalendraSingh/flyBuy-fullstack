import Sidemenu from "./Sidemenu";
import Adheader from "./Adheader";
import './Admin.css'
import { useState, useEffect } from "react";
const Category = () => {

    const [frm, setfrm] = useState({ "txtcatname": "", "edtcatname": "", "editcid": "" });
    const [cdata, setcdata] = useState([]);
    const [un, setun] = useState("ss");

    useEffect(() => {
        loadrecord();
        getprofile();
    }, [])
    const fun1 = (e) => {
        setfrm({ ...frm, [e.target.id]: e.target.value });
    }
    const updaterecord = async () => {
        const rec = await fetch("http://localhost:7000/category", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ cid: frm.editcid, catname: frm.edtcatname })
        });
        const data = await rec.json();
        alert(data.msg);
        loadrecord();
    }

    
    const getprofile = async () => {
        const rec = await fetch("http://localhost:7000/profile", {
            headers: { "Content-Type": "application/json" },
            method: "GET",
            credentials: "include"
        });
        const data = await rec.json();
        setun(data[0].username);
    }

    const deleterecord = async (x) => {
        if (window.confirm("Want to Delete")) {
            const rec = await fetch("http://localhost:7000/category", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ cid: x })
            });
            const data = await rec.json();
            alert(data.msg);
            loadrecord();
        }
    }
    const loadsinglerecord = async (x) => {
        const rec = await fetch("http://localhost:7000/category/" + x, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });
        const data = await rec.json();
        setfrm({ ...frm, edtcatname: data.catname, editcid: x });
    }
    const loadrecord = async () => {
        const rec = await fetch("http://localhost:7000/category", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });
        const data = await rec.json();
        setcdata(data);
    }
    const saverecord = async () => {
        if (frm.txtcatname.trim() === "") {
            alert("Please enter category name");
        }
        else {
            const rec = await fetch("http://localhost:7000/category", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ catname: frm.txtcatname })
            });
            const data = await rec.json();
            alert(data.msg);
            loadrecord();
        }
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 bgsidemenu text-light">
                        <Sidemenu usname = {un}/>
                    </div>
                    <div className="col-md-10 bg-light">
                        <Adheader usname = {un} />
                        <div className="text-end">
                            <button className="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Add New Category</button>

                            <table className="table table-stripped text-center">
                                <thead>
                                    <tr>
                                        <th className="h3">Category Name</th>
                                        <th className="h3">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cdata.map((x) => {
                                        return (
                                            <tr>
                                                <td>{x.catname}</td>
                                                <td><button className="btn btn-info" onClick={() => { loadsinglerecord(x._id) }} data-bs-toggle="modal" data-bs-target="#editModal">Edit</button>&nbsp;<button className="btn btn-danger" onClick={() => { deleterecord(x._id) }}>Delete</button></td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>

                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Enter Category</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div>
                                                <input type="text" id="txtcatname" onChange={fun1} className="form-control" />
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-primary" onClick={saverecord}>Add</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>




                            <div className="modal" id="editModal">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">Update Category</h4>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label>Category Name</label>
                                        <input type="text" value={frm.edtcatname} id="edtcatname" onChange={fun1} className="form-control" />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" onClick={updaterecord} className="btn btn-danger" >Update</button>
                                </div>
                            </div>
                        </div>
                    </div>



                    </div>
                </div>
            </div>
        </>
    )
}
export default Category;