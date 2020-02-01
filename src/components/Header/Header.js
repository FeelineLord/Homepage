import React, {Component} from 'react';

import Bonfire from '../../effects/bonfire/Bonfire';
import Blick from '../../effects/blick/Blick';
import Fireflies from '../../effects/fireflies/Fireflies';
import logo from '../../img/logoBlack.png';

import NavBar from '../NavBar/NavBar';
import Welcome from '../Welcome/Welcome';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight
      });
    });
  };

  render() {
    return(
      <header className='header' id='header'>
        <NavBar className='header__navBar'></NavBar>
        {this.state.width >= 1000
          ? <Welcome logo={logo}/>
          : null}
        <Fireflies></Fireflies>
        <span className='header__person'>
          <Blick className={'header__blick'}></Blick>
          <Bonfire className={'header__bonfire'}></Bonfire>
        </span>
      </header>
    );
  };
};

export default Header;