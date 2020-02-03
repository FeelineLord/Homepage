import React, {Component} from 'react';

import FullScreenOption from './FullscreenOption';
import LanguageChangeOption from './LanguageChangeOption';
import MusicOptions from './MusicOptions';

import icarus from '../../../music/Ivan Torrent - icarus.mp3'

class SettingsBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  };

  render() {
    return (
      <div className={'settingsBar ' + this.props.className}>
        <MusicOptions
          music={icarus}
          loop={true}>
        </MusicOptions>
        <LanguageChangeOption
          languageChange={this.props.languageChange}
          languageCurrent={this.props.languageCurrent}>
        </LanguageChangeOption>
        <FullScreenOption
          fullscreen={this.props.fullscreen}
          outside={this.props.outside}>
        </FullScreenOption>
      </div>
    )
  }
}

export default SettingsBar;