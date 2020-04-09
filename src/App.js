import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Works from "./components/Works";
import "typeface-roboto";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mainTitle: undefined,
      subTitle: undefined,
      textPrimaryColor: undefined,
      textSecondaryColor: undefined,
      buttonVisible: undefined,
      gridItems: undefined,
    };
    this.worksRef = React.createRef();
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.smoothScroll = this.smoothScroll.bind(this);
  }

  smoothScroll() {
    this.worksRef.current.scrollIntoView({ behavior: "smooth" });
  }

  componentDidMount() {
    console.log(this.worksRef);
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    if (window.innerHeight < 550) {
      this.setState({ buttonVisible: false });
    } else {
      this.setState({ buttonVisible: true });
    }

    if (window.innerWidth > 730 && window.innerWidth < 1100) {
      this.setState({ gridItems: 2 });
    } else {
      this.setState({ gridItems: 3 });
    }

    if (window.innerWidth < 500) {
      this.setState({ mainTitle: "h4", subTitle: "body1" });
    } else {
      this.setState({ mainTitle: "h2", subTitle: "h6" });
    }
  }

  render() {
    return (
      <>
        <Header {...this.state} smoothScroll={this.smoothScroll} />
        <Works gridItems={this.state.gridItems} pageRef={this.worksRef} />
        <Footer/>
      </>
    );
  }
}

export default App;
