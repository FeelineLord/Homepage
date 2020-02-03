import React, {Component} from 'react';

import logo from '../../img/logo.png';

import Welcome from '../Welcome/Welcome';
import SettingsBar from './SettingsBar/SettingsBar';

class NavBar extends Component {
  constructor() {
    super();

    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      burger: false,
      activeLink: 0,
      fullscreen: false,
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
    };
  };

  fullScreenChangeOutside = (value) => {
    this.setState({
        fullscreen: value
    });
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

  navScroll = (event) => {
    event.preventDefault();
    const link = event.target;
    this.setState({
      activeLink: +link.id
    }, () => {
      let href = link.getAttribute('href');
      let requiredBlock = document.querySelector(href);
      requiredBlock.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    })
  }

  renderNavBar = () => {
    const data = this.props.data;
    switch(true) {
      case this.state.width >= 1100:
      return (
        <nav className={'navBar ' + this.props.className}>
          {/* <div className='navBar_dark'></div> */}
          <ul className='navBar__list' id='burgerList'>
            {data.linkNamesCurrent.map((item, index) => {
              if (this.state.activeLink === index) {
                return (
                  <li 
                    className='navBar__item'
                    key={item.name}>
                    <a 
                      href={'#' + item.href} 
                      id={index}
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
                      id={index}
                      className={'navBar__link hoverLink'} 
                      onClick={this.navScroll}>
                      {item.name}
                    </a>
                  </li>
                )
              }
            })}
            <li className='navBar__item'>
              <SettingsBar
                className='navBar__settingsBar'
                languageChange={this.props.languageChange}
                languageCurrent={this.props.languageCurrent}
                fullscreen={this.state.fullscreen}
                outside={this.fullScreenChangeOutside}>
              </SettingsBar>
            </li>
          </ul>
        </nav>
      );

      case this.state.width < 1100:
      return (
        <nav className={'navBar ' + this.props.className}>
            <SettingsBar
              className='navBar__settingsBar'
              languageChange={this.props.languageChange}
              languageCurrent={this.props.languageCurrent}
              fullscreen={this.state.fullscreen}
              outside={this.fullScreenChangeOutside}>
            </SettingsBar>
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
                      id={index} 
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
                      id={index} 
                      className='navBar__link navBar__link_adaptive hoverLink'
                      onClick={this.navScroll}
                    >
                      {item.name}
                    </a>
                  </li>
                )
              }
            })}
            {/* <div className='navBar_dark navBar_dark_ul'></div> */}
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