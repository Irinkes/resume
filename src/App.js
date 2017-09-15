import React, { Component } from 'react';
import resume from './resume.json';
import './App.css';
import Experience from './experience';
import Projects from './projects';
import Skills from './skills';
import Edu from './edu';
import Lang from './lang';
import Interests from './interests';



class App extends Component {

  renderExperiences() {
    let resultsArray=[];
    resume.experiences.map((item, i) => {
        resultsArray.push(<Experience item={item} key={i} />);
    });
    return resultsArray;
  }

  renderProjects() {
    let projectsArray = [];
    resume.projects.map((item,i) => {
      projectsArray.push(<Projects item={item} key={i} />)
    });    
    return projectsArray;
  }

  renderSkills() {
    let skillsArray = [];
    resume.skills.map((item,i)=>{
      skillsArray.push(<Skills item={item} key={i} />)
    });
    return skillsArray;
  }

  renderEdu() {
    let eduArray = [];
    resume.education.map((item, i)=>{
      eduArray.push(<Edu item={item} key={i} />)
    })
    return eduArray;
  }

  renderLangs() {
    let langsArray=[];
    resume.languages.map((item, i)=>{
      langsArray.push(<Lang item={item} key={i} />)
    })
    return langsArray;
  }

  renderInterests() {
    let interestsArray=[];
    resume.interests.map((item, i)=>{
      interestsArray.push(<Interests item={item} key={i} />)
    })
    return interestsArray;
  }

  render() {  

    return (
      <div className="App">
        <div className="wrapper">
        <div className="sidebar-wrapper">
            <div className="profile-container">
                <img className="profile" src={resume.image} alt="" />
                <h1 className="name">{resume.name}</h1>
                <h3 className="tagline">Full Stack Developer</h3>
            </div>
            
            <div className="contact-container container-block">
                <ul className="list-unstyled contact-list">
                    <li className="email"><i className="fa fa-envelope"></i><a href="mailto: yourname@email.com">{resume.email}</a></li>
                    <li className="phone"><i className="fa fa-phone"></i><a href="tel:0123 456 789">{resume.phone}</a></li>
                    <li className="website"><i className="fa fa-globe"></i><a href={resume.website} target="_blank">{resume.website}</a></li>
                    <li className="linkedin"><i className="fa fa-linkedin"></i><a href={resume.linkedin} target="_blank">{resume.linkedinShort}</a></li>
                    <li className="github"><i className="fa fa-github"></i><a href={resume.githubURL} target="_blank">github.com/{resume.github}</a></li>
                    <li className="twitter"><i className="fa fa-twitter"></i><a href={resume.twitterURL} target="_blank">{resume.twitter}</a></li>
                </ul>
            </div>
            <div className="education-container container-block">
                <h2 className="container-block-title">Education</h2>
                {this.renderEdu()}
            </div>
            
            <div className="languages-container container-block">
                <h2 className="container-block-title">Languages</h2>
                <ul className="list-unstyled interests-list">
                    {this.renderLangs()}
                </ul>
            </div>
            
            <div className="interests-container container-block">
                <h2 className="container-block-title">Interests</h2>
                <ul className="list-unstyled interests-list">
                    {this.renderInterests()}
                </ul>
            </div>
            
        </div>
        
        <div className="main-wrapper">
            
            <section className="section summary-section">
                <h2 className="section-title"><i className="fa fa-user"></i>Career Profile</h2>
                <div className="summary">
                    <p>Summarise your career here lorem ipsum dolor sit amet, consectetuer adipiscing elit. You can <a href="http://themes.3rdwavemedia.com/website-templates/orbit-free-resume-cv-template-for-developers/" target="_blank">download this free resume/CV template here</a>. Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.</p>
                </div>
            </section>
            
            <section className="section experiences-section">
                <h2 className="section-title"><i className="fa fa-briefcase"></i>Experiences</h2>
               <div class="intro">
                    <p>You can list your side projects or open source libraries in this section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ligula in nunc bibendum fringilla a eu lectus.</p>
                </div>
                {this.renderExperiences()}

                
            </section>
            
            <section className="section projects-section">
                <h2 className="section-title"><i className="fa fa-archive"></i>Projects</h2>
                {this.renderProjects()}
            </section>
            
            <section className="skills-section section">
                <h2 className="section-title"><i className="fa fa-rocket"></i>Skills &amp; Proficiency</h2>
                <div className="skillset">        
                                        
                    {this.renderSkills()}
                    
                </div>  
            </section>
            
        </div>
    </div>
      </div>
    );
  }
}

export default App;
