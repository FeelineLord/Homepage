import React, {Component} from 'react';
import './bonfire.css';

class Bonfire extends Component {
  constructor(props) {
    super(props);

    this.state = {
      switcher: 'fire-on ',
    }
  }

  fireSwitcher = () => {
    let value = this.state.switcher === 'fire-on '
      ? 'fire-off '
      : 'fire-on ';

    this.setState({
      switcher: value,
    })
  }

  render() {
    return(
      <div 
        className={'bonfire ' + this.state.switcher + this.props.className}
        onClick={this.fireSwitcher}
      >
        <div className="wood"></div>
        <div className="fire">
			    <span></span>
			    <span></span>
			    <span></span>
		    </div>
        <div className="smoke">
			    <span className="s-0"></span>
			    <span className="s-1"></span>
			    <span className="s-2"></span>
			    <span className="s-3"></span>
			    <span className="s-4"></span>
			    <span className="s-5"></span>
			    <span className="s-6"></span>
			    <span className="s-7"></span>
			    <span className="s-8"></span>
			    <span className="s-9"></span>
		    </div>
      </div>
    )
  }
}

export default Bonfire;