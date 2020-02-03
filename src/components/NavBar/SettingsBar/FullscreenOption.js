import React, {Component} from 'react';

class FullScreenOption extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullScreen: false,
      isHover: false,
    };
  };

  componentDidMount() {
    this.setState({
      fullScreen: this.props.fullscreen
    })
  }

  renderArrows = () => {
    switch(this.state.fullScreen) {
      case true:
      return (
        <>
        <span
          className={`fullScreen__arrow1 ${this.state.isHover 
            ? `fullScreen__arrow1_hover` 
            : null}`}>
        </span>
        <span
          className={`fullScreen__arrow2 ${this.state.isHover 
            ? `fullScreen__arrow2_hover` 
            : null}`}>
        </span>
        <span
          className={`fullScreen__arrow3 ${this.state.isHover 
            ? `fullScreen__arrow3_hover` 
            : null}`}>
        </span>
        <span
          className={`fullScreen__arrow4 ${this.state.isHover 
            ? `fullScreen__arrow4_hover` 
            : null}`}>
        </span>
        </>
      );
      case false:
      return (
        <>
        <span
          className={`fullScreen__windowArrow1 ${this.state.isHover 
            ? `fullScreen__windowArrow1_hover` 
            : null}`}>
        </span>
        <span
          className={`fullScreen__windowArrow2 ${this.state.isHover 
            ? `fullScreen__windowArrow2_hover` 
            : null}`}>
        </span>
        </>
      );
      default:
      return (
        <>
        </>
      );
    };
  };

  fullScreenChange = () => {
    const page = document.querySelector('html');
    if (page.requestFullscreen && !this.state.fullScreen) {
      document.documentElement.requestFullscreen();
      this.setState({fullScreen: true});
      this.props.outside(true);
    } else if (page.webkitRequestFullscreen && !this.state.fullScreen) {
      page.webkitRequestFullscreen();
      this.setState({fullScreen: true});
      this.props.outside(true);
    } else if (page.mozRequestFullscreen && !this.state.fullScreen) {
      page.mozRequestFullscreen();
      this.setState({fullScreen: true});
      this.props.outside(true);
    } else if(document.cancelFullScreen && this.state.fullScreen) {
      document.cancelFullScreen();
      this.setState({fullScreen: false});
      this.props.outside(false);
    } else if(document.mozCancelFullScreen && this.state.fullScreen) {
      document.mozCancelFullScreen();
      this.setState({fullScreen: false});
      this.props.outside(false);
    } else if(document.webkitCancelFullScreen && this.state.fullScreen) {
      document.webkitCancelFullScreen();
      this.setState({fullScreen: false});
      this.props.outside(false);
    }
  };

  hoverFullScreen = (bool) => {
    this.setState({
        isHover: bool
    });
  };

  render() {
    return (
      <button 
        onClick={this.fullScreenChange}
        onMouseEnter={() => this.hoverFullScreen(true)}
        onMouseLeave={() => this.hoverFullScreen(false)}
        className='fullScreen settingsBar__fullScreen'>
          {this.renderArrows()}
      </button>
    );
  };
};

export default FullScreenOption;