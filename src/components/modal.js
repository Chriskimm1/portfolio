import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import Constants from '../constants/constants';

let skillsHeader = Constants.skillsHeader;

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
                      <div className="header">

                      </div>
                    </div>
                )
                break;
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