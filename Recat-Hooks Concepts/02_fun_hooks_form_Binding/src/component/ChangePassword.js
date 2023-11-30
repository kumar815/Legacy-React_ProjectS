import React, { useState } from "react";

const ChangePassword = () => {
  const [inputType, setInputType] = useState("password");

  const updateCheck = () => {
    if (inputType === "password") {
      // Update to text
      setInputType("text");
    } else {
      // Update to password
      setInputType("password");
    }
  };

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
                      <input type={inputType} className="form-control" />
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
  );
};

export default ChangePassword;
