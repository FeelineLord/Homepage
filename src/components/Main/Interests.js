import React, {Component} from 'react';

import develop from '../../img/interestDevelop.png';
import games from '../../img/interestGames.png';
import design from '../../img/interestsDesign.png';

class Interests extends Component {
  render() {
    const data = this.props.data;
    return(
      <section 
      className='interests' 
      id='interests'>
        <article 
        className='interests__container' 
        id={this.props.ids.element1}>
          <img 
          src={develop} 
          alt='react' 
          className='interests__img'></img>
          <h3 
          className='interests__name'>
            {data.interestesHeadingDevelopmentCurrent}
          </h3>
          <p 
          className='interests__description'>
            {data.interestsDevelopmentTextCurrent1}
            <br/><br/>
            {data.interestsDevelopmentTextCurrent2}  
          </p>
        </article>
        <article 
        className='interests__container' 
        id={this.props.ids.element2}>
          <img 
          src={games} 
          alt='games' 
          className='interests__img'>
          </img>
          <h3 
          className='interests__name'>
            {data.interestesHeadingFantasyCurrent}
          </h3>
          <p 
          className='interests__description'>
            {data.interestsFantasyTextCurrent1}
            <br/><br/>
            {data.interestsFantasyTextCurrent2}
          </p>
        </article>
        <article 
        className='interests__container interests__container_last' 
        id={this.props.ids.element3}>
          <img 
          src={design} 
          alt='games' 
          className='interests__img'></img>
          <h3 
          className='interests__name'>
            {data.interestesHeadingDesignCurrent}
          </h3>
          <p 
          className='interests__description'>
            {data.interestsDesignTextCurrent1}
            <br/><br/>
            {data.interestsDesignTextCurrent2}
          </p>
        </article>
      </section>
    );
  };
};

export default Interests;