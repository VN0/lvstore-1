import React from "react";
import "./App.css";
import Header from "./components/Header";
import Works from "./components/Works";
import "typeface-roboto";

const App = () => {

  const [mainTitle, setMainTitle] = React.useState();
  const [subTitle, setSubTitle] = React.useState();
  const [buttonVisible, setButtonVisible] = React.useState();
  const [gridItems, setGridItems] = React.useState();
  const worksRef = React.createRef();

  const smoothScroll = () => {
    worksRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const updateWindowDimensions = () => {
    if (window.innerHeight < 550) {
      setButtonVisible(false);
    } else {
      setButtonVisible(true);
    }

    if (window.innerWidth > 730 && window.innerWidth < 1100) {
      setGridItems(2);
    } else {
      setGridItems(3);
    }

    if (window.innerWidth < 500) {
      setMainTitle("h4");
      setSubTitle("body1");
    } else {
      setMainTitle("h2");
      setSubTitle("h6");
    }
  };
  React.useEffect(() => {
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  return (
    <>
      <Header
        mainTitle={mainTitle}
        subTitle={subTitle}
        buttonVisible={buttonVisible}
        smoothScroll={smoothScroll}
      />
      <Works gridItems={gridItems} pageRef={worksRef} />
    </>
  );
};

export default App;
