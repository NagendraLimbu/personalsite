import React, { Component } from 'react';
import './App.css';
import resume from './resume.json';
import Experience from './Experience';
import Project from './Project';
import Skill from './Skill';
import Education from './Education';
import Language from './Language';

class App extends Component {
    renderExperience(){
        let resultArray = [];
        resume.experiences.map((item,i) => {
            resultArray.push(<Experience item={item} key = {i} />);
        });
        return resultArray;
    }

    renderProject(){
        let projectArray = [];
        resume.projects.map((project,i)=>{
            projectArray.push(<Project project={project} key={i}/>);
        });
        return projectArray;
    }

    renderSkill(){
        let skillArray = [];
        resume.skills.map((skill, i) =>{
            skillArray.push(<Skill skill={skill} key={i}/>);
        });
        return skillArray;
    }
    
    renderEducation(){
        let educationArray = [];
        resume.education.map((education, i) =>{
            educationArray.push(<Education education={education} key={i}/>);
        });
        return educationArray;
    }

    renderLanguage(){
        let languageArray = [];
        resume.languages.map((language, i) => {
            languageArray.push(<Language language={language} key ={i}/>);
        });
        return languageArray;
    }

  render() {
    
    return (
        <div>
            <div className="sidebar-wrapper">
                <div className="profile-container">
                    <img className="profile" src="{resume.image}" alt="" />
                    <h1 className="name">{resume.name}</h1>
                    <h3 className="tagline">{resume.title}</h3>
                </div>
                
                <div className="contact-container container-block">
                    <ul className="list-unstyled contact-list">
                        <li className="email">
                            <i className="fa fa-envelope"></i>
                            <a href="mailto: yourname@email.com">{resume.email}</a>
                        </li>
                        <li className="phone"><i className="fa fa-phone"></i>
                            <a href="tel:1469 992 7300">{resume.phone}</a>
                        </li>
                        <li className="website"><i className="fa fa-globe"></i>
                        <a href="nagendralimbu.com.np" target="_blank">{resume.website}</a></li>
                        <li className="linkedin"><i className="fa fa-linkedin"></i>
                        <a href="#" target="_blank">{resume.linkedin}</a></li>
                        <li className="github"><i className="fa fa-github"></i>
                        <a href="#" target="_blank">{resume.github}</a></li>
                        <li className="twitter"><i className="fa fa-twitter"></i>
                        <a href="https://twitter.com/nagendralimbu" target="_blank">{resume.twitter}</a></li>
                    </ul>
                </div>
                <div className="education-container container-block">
                    <h2 className="container-block-title">Education</h2>
                      {this.renderEducation()}                   
                </div>
                
                <div className="languages-container container-block">
                    <h2 className="container-block-title">Languages</h2>
                    {this.renderLanguage()}                    
                </div>
                
                <div className="interests-container container-block">
                    <h2 className="container-block-title">Interests</h2>
                    <ul className="list-unstyled interests-list">
                        <li>Climbing</li>
                        <li>Snowboarding</li>
                        <li>Cooking</li>
                    </ul>
                </div>
                
            </div>
        
            <div className="main-wrapper">
                
                <section className="section summary-section">
                    <h2 className="section-title"><i className="fa fa-user"></i>Career Profile</h2>
                    <div className="summary">
                        <p>{resume.summary}</p>
                    </div>
                </section>
                
                <section className="section experiences-section">
                    <h2 className="section-title"><i className="fa fa-briefcase"></i>Experiences</h2>         
                    {this.renderExperience()}           
                </section>   
                <section className="section project-section">
                    <h2 className="section-title"><i className="fa fa-briefcase"></i>Projects</h2>         
                    {this.renderProject()}           
                </section> 
                <section class="skills-section section">
                    <h2 class="section-title"><i class="fa fa-rocket"></i>Skills &amp; Proficiency</h2>
                    {this.renderSkill()}
               </section>                  
            
            </div>  
        </div>  
    );
      
  }
}

export default App;
