import React from "react";
import Contents from "./Contents";
import Navbartop from "./Navbartop";

const Mainbars = () => {
  return (
    <React.Fragment>
      MainBar
      {/* <!-- START MAINBAR --> */}
      <div className="page-wrapper">
        {/* <!-- NAVBAR TOP TITLE AND BUTTON TRIGGER --> */}
        <Navbartop />
        {/* <!-- CONTENT --> */}
        <Contents />
      </div>
    </React.Fragment>
  );
};

export default Mainbars;
