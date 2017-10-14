import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import constants from '../constants/constants';

let skillsHeader = constants.skillsHeader;

class Modal extends Component {

    getSection(){
        const {section} = this.props;
        switch(section){
            case 'ABOUT_ME':
                return (
                    <div className="about-me-container">
                        <img src={require("../assets/profile_pic.jpg")} alt=""/>
                        <div className="bio">
                            Hi, I'm a full stack software developer
                            I have a Passion in growth and addicted to progress.
                            Love what i do and in love with Javascript.
                            Went from Working as a Bellman moving bags to becoming a Network Engineer
                            to a software Engineer.
                            see my full blog
                            <a href="https://www.eyeviewdigital.com/tech/transitioning-careers-and-roles-within-the-tech-industry/"
                               target="_blank" rel="noopener">
                                HERE
                            </a>
                        </div>
                    </div>
                );
                break;
            case 'SKILLS':
                return (
                    <div className="skills-container">
                      <div className="header-container">
                          { skillsHeader.map((headerName, index) => {
                              return (
                              <div key={index} className="skill-section">
                                  <div className="header">{headerName}</div>
                                  <div className="skill-container">
                                      {this.getSkillsListForSection(headerName)}
                                  </div>

                              </div>
                              )
                          })}
                      </div>
                    </div>
                )
                break;
        }
    }

    getSkillsListForSection(section){
        switch(section){
            case 'Languages':
                return (
                    <div>
                        <div className="skill">
                            <img src={require("../assets/logos/java.svg")} />
                            <span>Java</span>
                        </div>
                        <div className="skill">
                            <img src={require("../assets/logos/javascript.svg")}/>
                            <span>Javascript</span>
                        </div>
                        <div className="skill">
                            <img src={require("../assets/logos/css3.svg")}/>
                            <span>CSS</span>
                        </div>
                    </div>
                );
            break;
            case 'FrameWorks':
                return (
                    <div>
                        <div className="skill">
                            <img src={require("../assets/logos/react.svg")}/>
                            <span>React</span>
                        </div>
                        <div className="skill">
                            <img src={require("../assets/logos/angular.svg")}/>
                            <span>Angular</span>
                        </div>
                        <div className="skill">
                            <img src={require("../assets/logos/backbone.svg")}/>
                            <span>Backbone</span>
                        </div>
                        <div className="skill">
                            <img src={require("../assets/logos/express.svg")}/>
                            <span>Express</span>
                        </div>
                        <div className="skill">
                            <img src={require("../assets/logos/sass.svg")}/>
                            <span>Sass</span>
                        </div>
                    </div>
                );
                break;
            case 'Testing':
                return (
                    <div>
                        <div>
                            <div className="skill">
                                <img src={require("../assets/logos/protractor.svg")}/>
                                <span>Protractor</span>
                            </div>
                            <div className="skill">
                                <img src={require("../assets/logos/jasmine.svg")}/>
                                <span>Jasmine</span>
                            </div>
                            <div className="skill">
                                <img src={require("../assets/logos/mocha.svg")}/>
                                <span>Mocha</span>
                            </div>
                        </div>
                    </div>
                );
                break;
            case 'Other':
                return (
                    <div>
                        <div className="skill">
                            <img src={require("../assets/logos/mongo.svg")}/>
                            <span>MongoDB</span>
                        </div>
                        <div className="skill">
                            <img src={require("../assets/logos/node.svg")}/>
                            <span>NodeJS</span>
                        </div>
                        <div className="skill">
                            <img src={require("../assets/logos/aws.svg")}/>
                            <span>AWS</span>
                        </div>
                        <div className="skill">
                            <img src={require("../assets/logos/grunt.svg")}/>
                            <span>GruntJS</span>
                        </div>
                    </div>
                );
                break;
            default:
                return null;
        }
    }

    render(){
        return (
            <div className="modal">
                <FontAwesome className="close" name="times" onClick={this.props.close}/>
                <div className="title">
                    <span>{this.props.title}</span>
                </div>
                <div className="modal-content">
                    {this.getSection()}
                </div>
            </div>
        )
    }
}

export default Modal;