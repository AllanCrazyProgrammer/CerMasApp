import React, { Component } from "react";

import Plans from "../components/Home/plans";
// import Carousel from "../components/Home/carousel";
// import Carousel1 from "../components/Home/carousel.1";
import Carousel from "../components/Carousel/Carousel";

class Home extends Component {
  render() {
    return (
      <div className="Home" style={{ paddingTop: "9%" }}>
        <div className="carousel-container">
          <Carousel />
          <Plans />
        </div>
      </div>
    );
  }
}

export default Home;
