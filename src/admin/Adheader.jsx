
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Adheader = (props) => {

    const [cookie, setcookie, removecookie] = useCookies();
    const jump = useNavigate();
    const delcookie = () => {
        removecookie("mycookie");
        jump("/admin");

    }


    return (
        <div className="row adminHeaderbg text-light">
            <div className="col-md-10"></div>
            <div className="col-md-2 text-end">
                <div className="dropdown">
                    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                        Account
                    </button>
                    <ul className="dropdown-menu">
                       
                       <li><p className='dropdown-item'>Hi, {props.usname}</p></li>

                        <li><a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#editModal">Change Password</a></li>
                        <li><a className="dropdown-item" href="#" onClick={delcookie}>Logout</a></li>
                    </ul>
                </div>
            </div>



            <div className="modal" id="editModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title text-dark">Change your password</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label className=' text-dark'>Old Password</label>
                                <input type="text" id="edtcatname" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label className=' text-dark'>New Password</label>
                                <input type="text" id="edtcatname" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label className=' text-dark'>Confirm Password</label>
                                <input type="text" id="edtcatname" className="form-control" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" >Change Password</button>
                        </div>
                    </div>
                </div>
            </div>



        </div>




    )
}
export default Adheader;