import React from "react";

class WordMsg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      massage: "Hello",
    };
  }

  sayGoodMorning = () => {
    this.setState({
      massage: "Good Morning",
    });
  };
  sayGoodAfternoon = () => {
    this.setState({
      massage: "Good Afternoon",
    });
  };
  sayGoodEvening = () => {
    this.setState({
      massage: "Good Evening",
    });
  };
  render() {
    return (
      <React.Fragment>
        <section className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header bg-secondary text-white">
                  <p className="h4"> Wishing Masage </p>{" "}
                </div>{" "}
                <div className="card-body">
                  <h2> {this.state.massage} </h2>{" "}
                  <button
                    onClick={this.sayGoodMorning}
                    className="btn btn-success btn-md"
                  >
                    {" "}
                    Good Morning!{" "}
                  </button>{" "}
                  <button
                    onClick={this.sayGoodAfternoon}
                    className="btn btn-warning btn-md"
                  >
                    {" "}
                    Good Afternoon!{" "}
                  </button>{" "}
                  <button
                    onClick={this.sayGoodEvening}
                    className="btn btn-danger btn-md"
                  >
                    {" "}
                    Good Evening!{" "}
                  </button>{" "}
                  <hr />
                  <hr />
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
      </React.Fragment>
    );
  }
}

export default WordMsg;
