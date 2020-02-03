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
          ids={this.props.aboutMeElementsId}
          data={this.props.data}>
        </AboutMe>
        <Skills 
          ids={this.props.skillsElementsId}
          showProgrammingSkills={this.props.showProgrammingSkills}
          showDesignSkills={this.props.showDesignSkills}
          data={this.props.data}>
        </Skills>
        <Interests 
          ids={this.props.interestsElementsId}
          data={this.props.data}>
        </Interests>
        <Portfolio 
          id={this.props.idPortfolio}
          data={this.props.data}>
        </Portfolio>
      </main>
    );
  };
};

export default Main;