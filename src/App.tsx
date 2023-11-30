import React from "react";
import "./App.css";
import "./component/style.css";
import Button from "./component/Button";
const App: React.FC = () => {
  return (
    <>
      <div className="content">
        <img className="frame" src="/src/assets/img.png" alt="Your Image" />
        <div className="text">
          <div className="container-1">
            <p className="animation container-2">Hi There👋🏻</p>
            <div className="container-3">
              <h4 className="animate-charcter">I am Alfian Kafilah Ba'its</h4>
            </div>
            <p className="posisi">
              I'm an Informatics Engineering student with a 3.6 GPA at the Sumatra Institute of Technology and. Currently, I Am participate in the Bangkit Academy Program, specifically in the Machine Learning Path. I have a background and
              enthusiastic in UI/UX designer, software engineer and machine learning. I hold many certifications in Data Analytics, Machine Learning, Python, and many other.
            </p>
          </div>
          <Button href="https://www.linkedin.com/in/alfiankafilah/">About Me</Button>
        </div>
      </div>
    </>
  );
};

export default App;
