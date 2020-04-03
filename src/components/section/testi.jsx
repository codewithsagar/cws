import React from "react";

class Testi extends React.Component {
  state = { slide: "", icon: 1 };

  toogleslide = (x) => {
    if (x == 1) {
      this.setState({ slide: "", icon: 1 });
    }
    if (x == 2) {
      this.setState({ slide: "slide2", icon: 2 });
    }
    if (x == 3) {
      this.setState({ slide: "slide3", icon: 3 });
    }
  };

  render() {
    const testi = this.props.testi;

    return (
      <React.Fragment>
        <div className=" testi">
          <div className="testi-intro">
            <h5>Testimonials</h5>
            <p>People I've worked with have said some nice things...</p>
          </div>
          <div className="testi-outer-container">
            <div className={`testi-inner-container ${this.state.slide} `}>
              {testi.map((x) => {
                return (
                  <div className="testimo">
                    <p>“ {x.testi} ”</p>
                    <h5>{x.name}</h5>
                    <p>{x.company}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="testi-nav">
            <i
              className={
                this.state.icon == 1
                  ? "far fa-circle i-filled"
                  : "far fa-circle"
              }
              onClick={() => this.toogleslide(1)}
            />
            <i
              className={
                this.state.icon == 2
                  ? "far fa-circle i-filled"
                  : "far fa-circle"
              }
              onClick={() => this.toogleslide(2)}
            />
            <i
              className={
                this.state.icon == 3
                  ? "far fa-circle i-filled"
                  : "far fa-circle"
              }
              onClick={() => this.toogleslide(3)}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Testi;
