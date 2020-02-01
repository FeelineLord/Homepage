import React, {Component} from 'react';

class Welcome extends Component {
  constructor() {
    super();

    this.state = {
      
    }
  }

  render() {
    return(
      <aside className={'welcome ' + this.props.className}>
        <a href='https://feelinelord.github.io/Vizitka/' className='welcome__mainLink'>
          <img src={this.props.logo} className='welcome__logo' alt='logo'/>
        </a>
        <div className='welcome__logoTextContainer'>
          <span className='welcome__logoText'>FeelineLord@gmail.com <br/> "See you later with a glass of vodka"</span>
        </div>
      </aside>
    )
  }
}

export default Welcome;