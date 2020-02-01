import React, {Component} from 'react';
import './Fireflies.css';

class Fireflies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
    }

    this.firefliesArr = [];
    this.firefliesArr.length = Math.trunc(window.innerWidth / 60);
    this.firefliesArr.fill('el');
    this.wrapper = React.createRef();
  }

  componentDidMount() {
    this.setState({wasStarted: true})
    this.createFireflies();
    setTimeout(this.firefliesMove, 20);
    setInterval(this.firefliesMove, 20000);
  }

  createFireflies = () => {
    this.firefliesArr = this.firefliesArr.map((el, index) => {
      let left;
      let top;
      let size;
      let delay;

      const randomizer = () => {
        left = Math.trunc((Math.random() * (this.state.width + 1)));
        top = Math.trunc((Math.random() * (this.state.height + 1)));
        delay = Math.trunc((Math.random() * 10 + 1));
        size = Math.trunc((Math.random() * 10 + 1));

        if(size % 2 === 0) {
          size += 1;
        } else if (size === 1) {
          size += 2;
        };
      };

      randomizer();
      
      return (
        <span 
          key={index}
          className='fireflies__firefly'
          style={{
            'position': 'absolute',
            'transform': `translate(${left}px, ${top}px)`,
            'width': `${size}px`,
            'height': `${size}px`,
            'animationDelay': `${delay}s`
          }}
          id={'firefly' + index}>
            <span className='fireflies__fireflyInsert'></span>
        </span>
      )
    });
  }

  firefliesMove = () => {
    this.firefliesArr.forEach((item, index) => {
      let left;
      let top;

      const randomizer = () => {
        left = Math.trunc((Math.random() * (this.state.width + 1)));
        top = Math.trunc((Math.random() * (this.state.height + 1)));
      };
      randomizer();

      let element = document.querySelector(`#firefly${index}`);
      element.style.transform = `translate(${left}px, ${top}px)`;
    })
  }

  render() {
    return(
      <div className='fireflies firefliesWrapper' ref={this.wrapper} style={{
        'height': `${this.state.realHeight}vh`
      }}>
        {this.firefliesArr}
      </div>
    )
  }
}

export default Fireflies;