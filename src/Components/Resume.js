import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  DiApple,
  DiGithubBadge,
  DiJsBadge,
  DiBootstrap,
  DiDatabase,
  DiLinux,
  DiNpm,
  DiPython,
  DiCss3,
  DiNodejsSmall,
  DiReact,
  DiSass,
  DiPhp,
  DiHtml5,
  DiHeroku,
} from "react-icons/di";

import { PDFDownloadLink, Document, Page } from "react-pdf/";

import Resume_page from "./Resume_Page";

class Resume extends Component {
  state = {};

  onDocumentLoad({ numPages }) {
    this.setState({ numPages });
  }

  render() {
    // if(this.props.data){
    //   var education = this.props.data.education.map(function(education){
    //     return <div key={education.school}><h3>{education.school}</h3>
    //     <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
    //     <p className="info-des">{education.description}</p></div>
    //   })
    //   var skills = this.props.data.skills.map(function(skills){
    //     var className = 'bar-expand '+skills.name.toLowerCase();
    //     return <li id="multipl" key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
    //   })
    // }
    return (
      <div>
        <section id="resume">
          <div className="pdf_page">
            <div className="pdf">
              <Resume_page />
            </div>
            <div />

            {/* <div className="row education">

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 <div className ="test-colour">
                 {education}
                 </div>
               </div>
            </div>
         </div>
      </div> */}

            <div className="icons">
              <div>
                <DiJsBadge title="JavaScript" size="60px" color="white" />
                <DiBootstrap title="Bootstrap" size="60px" color="white" />
                <DiDatabase title="Databases" size="60px" color="white" />
                <DiLinux title="Linux" size="60px" color="white" />
                <DiNpm title="npm" size="60px" color="white" />
                <DiPython title="Python" size="60px" color="white" />
                <DiCss3 title="CSS" size="60px" color="white" />
                <DiNodejsSmall title="Node" size="60px" color="white" />
                <div></div>
                <DiApple title="Apple" size="60px" color="white" />
                <DiGithubBadge title="Github" size="60px" color="white" />
                <DiReact title="React" size="60px" color="white" />
                <DiSass title="Sass" size="60px" color="white" />
                <DiPhp title="Php" size="60px" color="white" />
                <DiHtml5 title="Html" size="60px" color="white" />
                <DiHeroku title="Heroku" size="60px" color="white" />
              </div>
            </div>
            <div className="cpname">&copy; Jesse Gjerde</div>

            <div id="go-top">
              <a className="smoothscroll" title="Back to Top" href="#home">
                <i className="icon-up-open"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Resume;
