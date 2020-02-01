import React, {Component} from 'react';

import logo from '../../img/logo.png';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  };

  render() {
    return(
      <footer className='footer' id='footer'>
        <img src={logo} alt='logo' className='footer__logo'></img>
        <span className='footer__phones'>
          +380 93-003-09-18
          <br></br>
          +380 96-408-76-14
        </span>
        <span className='footer__email'>
          FeelineLord@gmail.com &copy; 2020
        </span>
      </footer>
    )
  };
};

export default Footer;