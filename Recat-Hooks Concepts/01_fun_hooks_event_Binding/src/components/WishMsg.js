import React, { useState } from "react";

//useState(0)meeans initail value (value return array) 2 contains
//[counter setCounter] meeans represent the value , update the value
const WishMsg = () => {
  const [message, setMessage] = useState('Hello');
let clickGoodMorning = () =>{
    setMessage('Good Morning');
}
let clickGoodEvening = (value) =>{
    setMessage(value);
}
  return (
    <React.Fragment>
        <section className="p-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header bg-secondary text-white">
                                <p className="h4">wishMessage</p>
                            </div>
                            <div className="card-body">
                                <h2>{message}</h2>
                                <button 
                                onClick={clickGoodMorning}
                                className="btn btn-primary btn-sm">Good Morning</button>
                                { /*short code inline*/}
                                <button 
                                onClick={() => setMessage('Good Afternoon')}
                                className="btn btn-primary btn-sm">Good After-Noon</button>
                                <button
                                onClick={clickGoodEvening.bind(this,'Good Evening')}
                                 className="btn btn-primary btn-sm">Good Evening</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
    </React.Fragment>
  );
};

export default WishMsg;



        