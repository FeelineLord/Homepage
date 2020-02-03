import React, {Component} from 'react';
import InputRange from 'react-input-range';

import speakerFull from '../../../img/SpeakerFull.png';
import speakerMiddle from '../../../img/SpeakerMiddle.png';
import speakerLow from '../../../img/SpeakerLow.png';
import speakerEmpty from '../../../img/SpeakerEmpty.png';

class MusicOptions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      volume: 0,
      showControls: false,
      turnOn: false,
      isTurned: false,
    };

    this.volumeRef = React.createRef();
  };

  volumeChange = () => {
    this.volumeRef.current.volume = this.state.volume / 10;
  }

  requiredVolumeIcon = () => {
    switch(true) {
      case(this.state.volume === 10): 
      return speakerFull;

      case(this.state.volume === 0):
      return speakerEmpty;

      case(this.state.volume >= 5):
      return speakerMiddle;

      case(this.state.volume < 5):
      return speakerLow;

      default:
      return;
    }
  }

  volumeControlsShow = () => {
    if (this.state.showControls || !this.state.turnOn) {
      return ;
    } else {
      setTimeout(f => {
        this.setState({
          showControls: false
        })
      }, 7000);
      this.setState({
        showControls: true
      });
    };
  };

  turnOn = () => {
    this.setState({
      turnOn: true,
      volume: 3,
    }, () => {
      this.volumeChange()
      setTimeout(() => {this.setState({isTurned: true})}, 5000);
    });
  };

  render() {
    return (
      <div 
        className='musicOptions settingsBar__musicOptions'>
        {this.state.turnOn ? <audio 
          src={this.props.music} 
          ref={this.volumeRef} 
          type="audio/mp3" 
          autoPlay="autoplay" 
          loop={this.props.loop ? 'loop' : null} 
          volume={0.3}/> : null}
        <img 
          src={this.requiredVolumeIcon()} 
          alt="volume controls" 
          className="musicOptions__speaker" 
          onMouseEnter={this.volumeControlsShow} 
          onClick={this.state.turnOn 
            ? () => {this.setState({volume: this.state.isTurned ? 0 : 3}, () => {this.volumeChange()})}
            : this.turnOn} />
        {this.state.showControls 
          ? <InputRange 
              maxValue={10}
              minValue={0}
              value={this.state.volume}
              onChange={volume => this.setState({ volume }, () => {this.volumeChange()})}>
            </InputRange>
          : null}
      </div>
    )
  }
}

export default MusicOptions;
