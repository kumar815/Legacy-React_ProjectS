import React, { useState } from "react";

const SelectBox = () => {
  const [selectedCar, setSelectedCar] = useState('');

  const updateSelect = (event) => {
    setSelectedCar(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="p-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header bg-secondary text-white">
                  <p className="h4">Select - Box</p>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <form>
                        <div className="form-group dropdown-menu">
                          <select
                            name="selectedCar"
                            onChange={updateSelect}
                            className="form-control dropdown-items"
                          >
                            <option value="">Select a car</option>
                            <option value="ducati">Ducati</option>
                            <option value="bmw">BMW</option>
                            <option value="audi">Audi</option>
                            <option value="rolls royce">Rolls Royce</option>
                            <option value="range rover">Range Rover</option>
                          </select>
                        </div>
                      </form>
                    </div>
                    <div className="col">
                      <p className="h4">{selectedCar}</p>
                      <form>
                        <div className="form-group"></div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SelectBox;
