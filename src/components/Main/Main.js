import React, {Component} from 'react';

import AboutMe from './AboutMe';
import Skills from './Skills';
import Interests from './Interests';
import Portfolio from './Portfolio';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      
    };
  };

  render() {
    return(
      <main className='main'>
        <AboutMe 
          ids={this.props.aboutMeElementsId}>
        </AboutMe>
        <Skills 
          ids={this.props.skillsElementsId}
          showProgrammingSkills={this.props.showProgrammingSkills}
          showDesignSkills={this.props.showDesignSkills}>
        </Skills>
        <Interests 
          ids={this.props.interestsElementsId}>
        </Interests>
        <Portfolio id={this.props.idPortfolio}></Portfolio>
      </main>
    );
  };
};

export default Main;