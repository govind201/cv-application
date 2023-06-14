import React from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>CV Project</h1>
        <GeneralInfo />
        <Education />
        <Experience />
      </div>
    );
  }
}

export default App;
