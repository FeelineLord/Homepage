import React, {Component} from 'react';
import data from '../../data/data';

import logo from '../../img/logo.png';

import Welcome from '../Welcome/Welcome';

class NavBar extends Component {
  constructor() {
    super();

    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      burger: false,
      activeLink: 0,
    }

    this.burgerWasNotTouched = true;
  };

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight
      });
    });
  };

  componentDidUpdate() {
    if(this.state.burger && !document.querySelector('#burgerSwitcher')) {
      this.setState({
        burger: false,
      })
    }
  };

  burgerSwitcher = () => {
    this.setState(prev => {
      return {
        burger: !prev.burger
      };
    }, () => {
      let element = document.querySelector('#burgerSwitcher');
      let button = document.querySelector('#burgerButton');
      let list = document.querySelector('#burgerList');

      button.classList.toggle('navBar__switcher_active');
      element.classList.toggle('navBar__burgerItem_active');

      if(this.state.burger && this.burgerWasNotTouched) {
        list.classList.add('navBar__burgerListActivate');
      } else if(this.state.burger) {
        list.classList.replace('navBar__burgerListDisable', 'navBar__burgerListActivate');
      } else {
        list.classList.replace('navBar__burgerListActivate', 'navBar__burgerListDisable');
      }
    });
  };

  renderNavBar = () => {
    switch(true) {
      case this.state.width >= 1000:
      return (
        <nav className={'navBar ' + this.props.className}>
          <div className='navBar_dark'></div>
          <ul className='navBar__list' id='burgerList'>
            {data.linkNamesCurrent.map((item, index) => {
              if (this.state.activeLink === index) {
                return (
                  <li 
                    className='navBar__item'
                    key={item.name}>
                    <a 
                      href={'#' + item.href} 
                      className={'navBar__link activeLink'} 
                    >
                      {item.name}
                    </a>
                  </li>
                );
              } else {
                return (
                  <li 
                    className='navBar__item'
                    key={item.name}>
                    <a 
                      href={'#' + item.href} 
                      className={'navBar__link hoverLink'} 
                      onClick={() => {this.setState({activeLink: index})}}>
                      {item.name}
                    </a>
                  </li>
                )
              }
            })}
          </ul>
        </nav>
      );

      case this.state.width < 1000:
      return (
        <nav className={'navBar ' + this.props.className}>
          <div className='navBar_dark'></div>
          <Welcome logo={logo} className='navBar__welcome'></Welcome>
          <div className='navBar__switcher' id='burgerButton' onClick={this.burgerSwitcher}>
            <span className='navBar__burgerItem' id='burgerSwitcher'></span>
          </div>
          <ul className='navBar__burgerList' id='burgerList'>
            {data.linkNamesCurrent.map((item, index) => {
              if (this.state.activeLink === index) {
                return (
                  <li 
                    className='navBar__item navBar__adaptiveItem'
                    key={item.name}>
                    <a 
                      href={'#' + item.href} 
                      className='navBar__link navBar__link_adaptive activeLink' 
                    >
                      {item.name}
                    </a>
                  </li>
                )
              } else {
                return (
                  <li 
                    className='navBar__item navBar__adaptiveItem'
                    key={item.name}>
                    <a 
                      href={'#' + item.href} 
                      className='navBar__link navBar__link_adaptive hoverLink'
                      onClick={() => {this.setState({activeLink: index})}}
                    >
                      {item.name}
                    </a>
                  </li>
                )
              }
            })}
            <div className='navBar_dark navBar_dark_ul'></div>
          </ul>
        </nav>
      );

      default:
      return null;
    }
  };

  render() {
    return(
      this.renderNavBar()
    );
  };
};

export default NavBar;