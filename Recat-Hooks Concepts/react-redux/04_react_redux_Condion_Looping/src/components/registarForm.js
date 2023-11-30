import React ,{useState}from "react";
import * as userActions from '../redux/user.actions';
import { useDispatch } from "react-redux";

let RegistarForm  = () => {
  let dispatch = useDispatch();

  let [user, setUser] = useState({
              name : '',
              email :'',
              password :'',
              designation:'',
              terms:false
            });

  let updateCheck = (e) => {
              if (inputType === "password") {
                // Update to text
                setInputType("text");
              } else {
                // Update to password
                setInputType("password");
              }
            };
  let submitRegister = (e) =>{
    e.preventDefault();
    dispatch(userActions.RegisterUser(user));
  }
   return (
              <React.Fragment>
                <section className="p-3">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="card">
                          <div className="card-header bg-secondary text-white">
                            <p className="h4">Change Password</p>
                          </div>
                          <div className="card-body">
                            <form>
                              <div className="input-group mb-3">
                                <input type="" className="form-control" />
                              </div>
                              <div className="input-group-append">
                                <input
                                  onChange={updateCheck}
                                  type="checkbox"
                                  checked={inputType === "text"}
                                />
                                Show Password
                              </div>
                              <div></div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </React.Fragment>
    )
}
export default RegistarForm;
