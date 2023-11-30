import React from "react";
import "./App.css";
import "./component/style.css";
import HrefButton from "./component/HrefButton"; // Make sure to adjust the path based on your project structure

const App: React.FC = () => {
  return (
    <>
      <div className="content">
        <img className="frame" src="/src/assets/img.png" alt="Your Image" />
        <div className="text">
          <div style={{ maxWidth: "550px" }}>
            <h2 className="animation" style={{ marginBottom: "-40px" }}>
              Hi There👋🏻
            </h2>
            <div style={{ maxHeight: "100px" }}>
              <h4 className="animate-charcter" style={{ fontSize: "35px" }}>
                I am Alfian Kafilah Ba'its
              </h4>
            </div>
            <p>
              I'm an Informatics Engineering student with a 3.6 GPA at the Sumatra Institute of Technology and. Currently, I Am participate in the Bangkit Academy Program, specifically in the Machine Learning Path. I have a background and
              enthusiastic in UI/UX designer, software engineer and machine learning. I hold many certifications in Data Analytics, Machine Learning, Python, and many other.
            </p>
          </div>
          <HrefButton href="www.google.com"></HrefButton>
        </div>
      </div>
    </>
  );
};

export default App;
