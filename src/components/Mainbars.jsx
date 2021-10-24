import React from "react";
import Contents from "./Contents";
import Navbartop from "./Navbartop";

const Mainbars = () => {
  return (
    <React.Fragment>
      {/* <!-- START MAINBAR --> */}
      <div className="main">
        {/* <!-- NAVBAR TOP --> */}
        <Navbartop />
        {/* <!-- CONTENT --> */}
        <Contents />
      </div>
    </React.Fragment>
  );
};

export default Mainbars;
