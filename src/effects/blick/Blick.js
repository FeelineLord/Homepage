import React, {Component} from 'react';
import './blick.css';

class Blick extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return(
      <span className={'blick ' + this.props.className}></span>
    )
  }
}

export default Blick;