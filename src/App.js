import React, {Component} from 'react';
import './styles/styles.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const aboutMeElements = {
  photo: 'aboutMe_photo',
  heading: 'aboutMe_heading',
  name: 'aboutMe_name',
  text1: 'aboutMe_text1',
  text2: 'aboutMe_text2',
  text3: 'aboutMe_text3',
};

const aboutMeAdaptiveElements = {
  photo: 'aboutMe_adaptivePhoto',
  heading: 'aboutMe_adaptiveHeading',
  name: 'aboutMe_adaptiveName',
  text1: 'aboutMe_adaptiveText1',
  text2: 'aboutMe_adaptiveText2',
  text3: 'aboutMe_adaptiveText3',
};

const skillsElements = {
  skillsBlock: 'skills',
  frontEnd: 'skills_frontEnd',
  design: 'skills_design',
};

const interestsElements = {
  element1: 'interests_element1',
  element2: 'interests_element2',
  element3: 'interests_element3',
};

const interestsAdaptiveElements = {
  element1: 'interests_adaptiveElement1',
  element2: 'interests_adaptiveElement2',
  element3: 'interests_adaptiveElement3',
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      width: window.innerWidth,
      showProgramming: false,
      showDesignSkills: false,
    }

    this.aboutMeElements = this.state.width > 1000 
      ? aboutMeElements
      : aboutMeAdaptiveElements;
    this.skillsElements = skillsElements;
    this.interestsElements = this.state.width > 1000
      ? interestsElements
      : interestsAdaptiveElements;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrolling);
    this.scrolling();
  }

  scrolling = () => {
    const elementsArray = [
      document.querySelector(`#${this.aboutMeElements.photo}`),
      document.querySelector(`#${this.aboutMeElements.heading}`),
      document.querySelector(`#${this.aboutMeElements.name}`),
      document.querySelector(`#${this.aboutMeElements.text1}`),
      document.querySelector(`#${this.aboutMeElements.text2}`),
      document.querySelector(`#${this.aboutMeElements.text3}`),
      document.querySelector(`#${this.skillsElements.skillsBlock}`),
      document.querySelector(`#${this.skillsElements.frontEnd}`),
      document.querySelector(`#${this.skillsElements.design}`),
      document.querySelector(`#${this.interestsElements.element1}`),
      document.querySelector(`#${this.interestsElements.element2}`),
      document.querySelector(`#${this.interestsElements.element3}`),
    ];

    for (const el of elementsArray) {
      if (window.innerHeight >= el.getBoundingClientRect().y 
        && !el.classList.contains(`${el.id}_showFromTop`)
        && el.getBoundingClientRect().y >= el.clientHeight * -1) {
        el.classList.add(`${el.id}_showFromTop`);
        if (el.classList.contains('skills_frontEnd_showFromTop')) {
          this.setState({
            showProgrammingSkills: true
          })
        }
        if (el.classList.contains('skills_design_showFromTop')) {
          this.setState({
            showDesignSkills: true
          })
        }
      }
    };
  }

  render() {
    return(
      <>
      <Header/>
      <Main 
        aboutMeElementsId={this.aboutMeElements}
        skillsElementsId={this.skillsElements}
        showProgrammingSkills={this.state.showProgrammingSkills}
        showDesignSkills={this.state.showDesignSkills}
        interestsElementsId={this.interestsElements}
      >
      </Main>
      <Footer/>
      </>
    )
  }
}

export default App;
