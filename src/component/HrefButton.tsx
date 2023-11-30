import React from "react";

const HrefButton = ({ href, children }) => {
  return (
    <a href={href} className="href-button">
      {children}
    </a>
  );
};

export default HrefButton;
