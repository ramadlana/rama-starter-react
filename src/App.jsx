import React from "react";
import Mainbars from "./components/Mainbars";
import Sidebars from "./components/Sidebars";

// Component Lvl 1 Import

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Sidebars />
        <Mainbars />
      </div>
    );
  }
}

export default App;
