import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const updateInput = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const submitLogin = (event) => {
    event.preventDefault();
    console.log(user);
  };

  return (
    <React.Fragment>
      <section className="p-3">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header bg-secondary text-white">
                  <p className="h4">Register</p>
                </div>
                <div className="card-body">
                  <form onSubmit={submitLogin}>
                    <div className="form-group">
                      <input
                        name="username"
                        value={user.username}
                        onChange={updateInput}
                        type="text"
                        className="form-control"
                        placeholder="User-Name"
                      />
                    </div>

                    <div className="form-group">
                      <input
                        name="email"
                        value={user.email}
                        onChange={updateInput}
                        type="text"
                        className="form-control"
                        placeholder="email-Address"
                      />
                    </div>

                    <div className="form-group">
                      <input
                        name="password"
                        value={user.password}
                        onChange={updateInput}
                        type="password"
                        className="form-control"
                        width="35px"
                        placeholder="password"
                      />
                    </div>

                    <input
                      type="submit"
                      value="Register"
                      className="btn btn-secondary text-white"
                    />
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

export default Login;
