import React, {Component} from 'react';

class FullScreenOption extends Component {
  constructor(props) {
    super(props);

    this.state = {
      language: 'en',
    };
  };

  componentDidMount() {
    this.setState({
      language: JSON.parse(localStorage.getItem('language')) || 'en',
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.languageCurrent !== this.props.languageCurrent) {
      this.setState({
        language: this.props.languageCurrent
      });
    };
  };

  render() {
    return (
      <button 
        className='languageChange settingsBar__languageChange'
        onClick={this.props.languageChange}>
        {this.state.language.toUpperCase()}
      </button>
    );
  };
};

export default FullScreenOption;