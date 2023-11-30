import React, { useState } from "react";

const ChangeUsername = () => {
  const [username, setUsername] = useState('');

  const updateInput = (event) => {
    setUsername(event.target.value);
  };

  return (
    <React.Fragment>
      <section className="p-3">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header bg-secondary text-white">
                  <p className="h4">Register - Form</p>
                </div>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <input
                        value={username}
                        onChange={updateInput}
                        type="text"
                        className="form-control"
                        placeholder="User-Name"
                      />
                    </div>
                    <div className="card-footer">
                      <p className="text text-white">{username}</p>
                    </div>
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

export default ChangeUsername;
