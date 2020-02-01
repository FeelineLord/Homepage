import React, {Component} from 'react';
import data from '../../data/data';


class Skills extends Component {
  constructor() {
    super();

    this.state = {
      html: 0,
      css: 0,
      js: 0,
      react: 0,
      ajax: 0,
      webpack: 0,
      uiUx: 0,
      figma: 0,
      photoshop: 0,
      illustrator: 0,
      drawing: 0,
      cssTricks: 0
    };
  };

  componentDidUpdate(prevProps) {
    if(prevProps.showProgrammingSkills !== this.props.showProgrammingSkills) {
      this.showProgrammingSkills();
    }
    if(prevProps.showDesignSkills !== this.props.showDesignSkills) {
      this.showDesignSkills();
    }
  };

  showProgrammingSkills = () => {
    this.skillsContains(data.skillsProgress.html, (arg) => {
      this.setState({
        html: arg
      })
    });
    this.skillsContains(data.skillsProgress.css, (arg) => {
      this.setState({
        css: arg
      })
    });
    this.skillsContains(data.skillsProgress.javaScript, (arg) => {
      this.setState({
        js: arg
      })
    });
    this.skillsContains(data.skillsProgress.react, (arg) => {
      this.setState({
        react: arg
      })
    });
    this.skillsContains(data.skillsProgress.ajax, (arg) => {
      this.setState({
        ajax: arg
      })
    });
    this.skillsContains(data.skillsProgress.webpack, (arg) => {
      this.setState({
        webpack: arg
      })
    });
  };

  showDesignSkills = () => {
    this.skillsContains(data.skillsProgress.ui, (arg) => {
      this.setState({
        uiUx: arg
      })
    });
    this.skillsContains(data.skillsProgress.figma, (arg) => {
      this.setState({
        figma: arg
      })
    });
    this.skillsContains(data.skillsProgress.photoshop, (arg) => {
      this.setState({
        photoshop: arg
      })
    });
    this.skillsContains(data.skillsProgress.illustrator, (arg) => {
      this.setState({
        illustrator: arg
      })
    });
    this.skillsContains(data.skillsProgress.handleDraw, (arg) => {
      this.setState({
        drawing: arg
      })
    });
    this.skillsContains(data.skillsProgress.cssTricks, (arg) => {
      this.setState({
        cssTricks: arg
      })
    });
  };

  skillsContains = (required, callback) => {
    let counter = 0;
    const interval = setInterval(() => {
      if (counter === required) {
        callback(counter);
        clearInterval(interval);
      } else {
        callback(counter);
        counter += 1;
      };
    }, 20)
  };

  render() {
    return(
      <section className='skills' id={this.props.ids.skillsBlock}>
        <section className='skills__container'>
          <article className='skills__programmingSkills'>
            <h3 className='skills__articleHeading'>Front end</h3>
            <span className='skills__articleDescription'>
              {data.skillsFrontEndTextCurrent}
            </span>
            <div className='skills__progressContainer' id={this.props.ids.frontEnd}>
              <div className='skills__progressElement'>
                <span>HTML5</span>
                <div>
                  <span className='skills__progressItem' style={{
                    'width': `${this.state.html}%`
                  }}>
                  </span>
                </div>
              </div>
              <div className='skills__progressElement'>
                <span>CSS3</span>
                <div>
                  <span className='skills__progressItem' style={{
                    'width': `${this.state.css}%`
                  }}>
                  </span>
                </div>
              </div>
              <div className='skills__progressElement'>
                <span>JavaScript</span>
                <div>
                  <span className='skills__progressItem' style={{
                    'width': `${this.state.js}%`
                  }}>
                  </span>
                </div>
              </div>
              <div className='skills__progressElement'>
                <span>React</span>
                <div>
                  <span className='skills__progressItem' style={{
                    'width': `${this.state.react}%`
                  }}>
                  </span>
                </div>
              </div>
              <div className='skills__progressElement'>
                <span>Ajax</span>
                <div>
                  <span className='skills__progressItem' style={{
                    'width': `${this.state.ajax}%`
                  }}>
                  </span>
                </div>
              </div>
              <div className='skills__progressElement'>
                <span>Webpack</span>
                <div>
                  <span className='skills__progressItem' style={{
                    'width': `${this.state.webpack}%`
                  }}>
                  </span>
                </div>
              </div>
            </div>
          </article>
          <article className='skills__designSkills'>
            <h3 className='skills__articleHeading'>Design</h3>
            <span className='skills__articleDescription'>
              {data.skillsDesignTextCurrent}
            </span>
            <div className='skills__progressContainer' id={this.props.ids.design}>
              <div className='skills__progressElement'>
                <span>UI/UX</span>
                <div>
                  <span className='skills__progressItem' style={{
                    'width': `${this.state.uiUx}%`
                  }}>
                  </span>
                </div>
              </div>
              <div className='skills__progressElement'>
                <span>Figma</span>
                <div>
                  <span className='skills__progressItem' style={{
                    'width': `${this.state.figma}%`
                  }}>
                  </span>
                </div>
              </div>
              <div className='skills__progressElement'>
                <span>Photoshop</span>
                <div>
                  <span className='skills__progressItem' style={{
                    'width': `${this.state.photoshop}%`
                  }}>
                  </span>
                </div>
              </div>
              <div className='skills__progressElement'>
                <span>Illustrator</span>
                <div>
                  <span className='skills__progressItem' style={{
                    'width': `${this.state.illustrator}%`
                  }}>
                  </span>
                </div>
              </div>
              <div className='skills__progressElement'>
                <span>Drawing</span>
                <div>
                  <span className='skills__progressItem' style={{
                    'width': `${this.state.drawing}%`
                  }}>
                  </span>
                </div>
              </div>
              <div className='skills__progressElement'>
                <span>CSS tricks</span>
                <div>
                  <span className='skills__progressItem' style={{
                    'width': `${this.state.cssTricks}%`
                  }}>
                  </span>
                </div>
              </div>
            </div>
          </article>
        </section>
      </section>
    );
  };
};

export default Skills;