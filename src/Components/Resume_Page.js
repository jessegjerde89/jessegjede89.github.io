import React, { Component } from "react";
import Pdf from "./My_Resume_JG.pdf";
import { Page } from "react-pdf";

class Resume_Page extends Component {
  render() {
    return (
      <div className="pdf">
        <a href={Pdf} target="_blank">
          Download My Resume 
        </a>
      </div>
    );
  }
}

export default Resume_Page;
