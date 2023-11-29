import React from "react";
import "./App.css";
import "./component/style.css";

const App: React.FC = () => {
  return (
    <>
      <div className="content">
        <img className="frame" src="/src/assets/img.png" alt="Your Image" />
        <div className="text">
          <h4 className="animate-charcter" style={{ fontSize: "16px" }}>
            I am Alfian Kafilah Bas'itss
          </h4>
          <h3>And I'm a Photographer</h3>
          <button>Hire me</button>
        </div>
      </div>
    </>
  );
};

export default App;
