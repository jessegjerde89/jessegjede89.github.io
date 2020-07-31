import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'; 
import { DiApple, DiGithubBadge, DiJsBadge, 
  DiBootstrap, DiDatabase, DiLinux, DiNpm,
  DiPython, DiCss3, DiNodejsSmall, DiReact, DiSass, DiPhp, 
DiHtml5, DiHeroku,   } from 'react-icons/di'; 


import { PDFDownloadLink, Document, Page } from 'react-pdf/';




class Resume extends Component {

  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoad({ numPages }) {
    this.setState({ numPages });
    
  }


  render() {

    if(this.props.data){
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p className="info-des">{education.description}</p></div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li id="multipl" key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }
    let pageNumber = 0
    return (
      <Fragment>
      <section id="resume">


      <h2>Education</h2>

      <Document 
        file="My_Resume_JG.pdf"
        onLoadSuccess={this.onDocumentLoad}
      >
        <Page 
           pageNumber={pageNumber}
          />
      </Document>

      <p> Page {this.state.paegNumber} of {this.state.numPages} </p>
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
      

      <div className="icons" >  
              <h2> Tech Stack </h2>
            <div>
              < DiJsBadge title="JavaScript" size="40px" color="black"/> 
              < DiBootstrap title="Bootstrap" size="40px" color="black"/> 
              < DiDatabase title="Databases" size="40px" color="black"/> 
              < DiLinux title="Linux" size="40px" color="black"/> 
              < DiNpm title="npm" size="40px" color="black"/> 
              < DiPython title="Python" size="40px" color="black"/> 
              < DiCss3 title="CSS" size="40px" color="black"/> 
              < DiNodejsSmall title="Node" size="40px" color="black"/> 
              < DiApple title="Apple" size="40px" color="black"/> 
              < DiGithubBadge title="Github" size="40px" color="black"/>
              < DiReact title="React" size="40px" color="black"/>
              < DiSass title="Sass" size="40px" color="black"/>
              < DiPhp title="Php" size="40px" color="black"/>
              < DiHtml5 title="Html" size="40px" color="black"/>
              < DiHeroku title="Heroku" size="40px" color="black"/>
            </div>
      </div>
      </section>
      </Fragment>
    );
  }
}



export default (Resume);
