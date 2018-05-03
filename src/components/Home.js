import React, {Component} from 'react';
import constants from '../constants/constants';
import Modal from './modal';


const linkList = constants.linkList;
const linkListDisplay = constants.linkListDisplay;

let currentlyOpenModal = null;
let keyPressValues = {
    escape : 27
};

class Home extends Component {
    constructor(){
        super();
        this.state = {
            expandName: false,
            openAboutMe: false,
            openSkills : false,
            openProjects : false,
            openContactMe : false
        };

        this.openModal = this.openModal.bind(this);
        this.iconElements = this.iconElements.bind(this);
        this.closeAboutMe = this.closeAboutMe.bind(this);
        this.handleKeyEsc = this.handleKeyEsc.bind(this);
    }

    iconElements(){
        return linkList.map((link, index) => {
            return (
                <div key={index} className="link" onClick={() => this.openModal(link)}>
                    <span className={link}>{linkListDisplay[link]}</span>
                </div>
            )
        });
    }

    componentDidMount () {
        document.addEventListener('keydown', this.handleKeyEsc);
        this.timeoutId = setTimeout(function () {
            this.setState({expandName: true});
        }.bind(this), 500);
    }

    componentWillUnmount () {
        document.removeEventListener("keyPress", this.handleKeyEsc);
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    openModal(link){
        console.log(link);
        let stateObj = {};
        switch(link){
            case 'about':
                stateObj['openAboutMe'] = true;
                currentlyOpenModal = 'openAboutMe';
                break;
            case 'skills':
                stateObj['openSkills'] = true;
                currentlyOpenModal = 'openSkills';
                break;
            case 'projects':
                stateObj['openProjects'] = true;
                currentlyOpenModal = 'openProjects';
                break;
            default:
                stateObj['openAboutMe'] = true;
                currentlyOpenModal = 'openAboutMe';
                break;
        }
        this.setState(prevState =>(stateObj));
    };

    closeAboutMe(){
        let stateObj = {};
        stateObj[currentlyOpenModal] = false;
        this.setState(prevState => (stateObj));
    };

    handleKeyEsc(e){
        console.log('hello');
        if (e.keyCode === keyPressValues.escape){
            this.closeAboutMe();
        }
    };



    render() {
        return (
          <div className="home-page">
              <div className={"name-container " + (this.state.expandName ? 'expand-container' : '')}>
                  <h1>Chris Kim</h1>
                  <div className="sub-name">Software Engineer. New York, NY</div>
              </div>
              <div className="link-container">
                  {this.iconElements()}
              </div>
              {this.state.openAboutMe && <Modal title="About" section='ABOUT_ME' close={this.closeAboutMe}/>}
              {this.state.openSkills && <Modal title="Skills" section='SKILLS' close={this.closeAboutMe}/>}
              {this.state.openProjects && <Modal title="Projects" section='PROJECTS' close={this.closeAboutMe}/>}
          </div>
        );
    }
}

export default Home;

function countPairs(numbers, k) {
    var numberK = [];
    numbers.forEach(function(number){
        numberK.push( number + k );
    } );

    var results = numbers.reduce( function(sum, value){
        if (numberK.includes(value) && !sum.includes(value)){
            sum.push(value);
        }
        return sum;
    }, [] );

    return results.length;
}