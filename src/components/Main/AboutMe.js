import React, {Component} from 'react';

import photo1 from '../../img/photo1.jpg';
import photo2 from '../../img/photo2.JPG';

let timeout;

const debounce = (f, delay) => {
  clearTimeout(timeout);

  timeout = setTimeout(() => {
    f();
  }, delay);
};

class AboutMe extends Component {
  constructor() {
    super();

    this.state = {
      textSize: 20,
    };

    this.textBlock = React.createRef();
    this.noResize = true;
  };

  textSize = () => {
    if (window.innerWidth > 650) {
      let width = this.noResize && this.textBlock.current.clientHeight !== 500 
      ? this.textBlock.current.clientWidth / 2
      : this.textBlock.current.clientWidth;
    let height = this.textBlock.current.clientHeight;
    let textSize = Math.trunc((width + height) / 56);
    this.setState({
      textSize,
    }, () => {this.noResize = false});
    } else {
      this.setState({
        textSize: 15
      }, () => {
        this.noResize = false
      });
    };
  };

  componentDidMount() {
    this.textSize();
    window.addEventListener('resize', () => {
      debounce(this.textSize, 250);
    });
  };

  render() {
    const data = this.props.data;
    
    return(
      <section 
      className='aboutMe' id='aboutMe'>
        <article 
        className='aboutMe__content'>
          <img 
          src={photo1} 
          alt="I'm scary and I know it" 
          className='aboutMe__photo'
          id={this.props.ids.photo === 'aboutMe_photo'
            ? this.props.ids.photo
            : null}/>
            <img 
            src={photo2} 
            alt="I'm scary and I know it" 
            className='aboutMe__photo_adaptive'
            id={this.props.ids.photo === 'aboutMe_adaptivePhoto'
              ? this.props.ids.photo
              : null}/>
          <div 
          className='aboutMe__textBlock' 
          ref={this.textBlock}>
            <h2 
            className='aboutMe__heading' 
            style={{'fontSize': `${this.state.textSize + 4}px`}}
            id={this.props.ids.heading}>
              {data.aboutMeHeadingCurrent.toUpperCase()}
            </h2>
            <span 
            className='aboutMe__name' 
            style={{'fontSize': `${this.state.textSize + 2}px`}}
            id={this.props.ids.name}>
              {data.aboutMeNameCurrent}
            </span>
            <p 
            className='aboutMe__text' 
            style={{'fontSize': `${this.state.textSize}px`}}>
              <span
              id={this.props.ids.text1}>
                {data.aboutMeTextCurrent1}
              </span>
              <span 
              id={this.props.ids.text2}>
                {data.aboutMeTextCurrent2}
              </span>
              <span 
              id={this.props.ids.text3}>
                {data.aboutMeTextCurrent3}
              </span>
            </p>
          </div>
        </article>
      </section>
    );
  };
};

export default AboutMe;