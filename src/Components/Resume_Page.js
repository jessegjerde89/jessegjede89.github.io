import React, { Component } from "react";
import Pdf from "./Jesse_Gjerde_Resume.PDF";
import { Page } from "react-pdf";

class Resume_Page extends Component {
  render() {
    return (
      <div classNanme="reslink">
        <p> Link to my Resume </p>
        <button className="pdf">
          <a href={Pdf} target="_blank">
            Download
          </a>
        </button>
      </div>
    );
  }
}

export default Resume_Page;
