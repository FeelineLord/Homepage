import React, {Component} from 'react';
import Swiper from 'swiper';

import dia from '../../img/dia.png';
import miami from '../../img/miami.png';
import todo from '../../img/todo.png';

class Portfolio extends Component {
  constructor() {
    super();

    this.state = {
      adaptive: false,
    };

    this.swiperContainer = React.createRef();
    this.swiper = null;
  };

  componentDidMount() {
    this.swiper = new Swiper(this.swiperContainer.current, {
      init: true,
      speed: 400,
      loop: true,
      initialSlide: 1,
      slidesPerView: 3,
      spaceBetween: 0,
      effect: 'coverflow',
      centeredSlides: true,
      loopedSlides: 9,
      touchMoveStopPropagation: true,
      grabCursor: true,
      shortSwipes: false,
      longSwipes: false,
      setWrapperSize: true,
    });

    this.adaptive();
    window.addEventListener('resize', this.adaptive);
  }

  adaptive = () => {
    if (window.innerWidth <= 650) {
      this.setState({
        adaptive: true
      })
    } else {
      this.setState({
        adaptive: false
      })
    }
  }

  render() {
    const data = this.props.data;
    return(
      <>
      <section className='portfolio' id='portfolio'>
        <span 
          className='portfolio__advice' 
          style={this.state.adaptive ? {'display': 'none'} : null}>
            {data.portfolioAdviceCurrent}
        </span>
        <div 
          className='portfolio__container swiper-container' 
          ref={this.swiperContainer}
          style={this.state.adaptive ? {'display': 'none'} : null}>
          <div className='portfolio__wrapper swiper-wrapper'>
            <div className='portfolio__slide swiper-slide'>
              <div className='portfolio__item'>
                <img src={todo} className='portfolio__case'/>
                <p className='portfolio__text'>
                  {data.portfolioProjectDescriptionCurrent1}
                </p>
                <a href="https://feelinelord.github.io/Miami/" target="_blank" className="portfolio__link">...see</a>
              </div>
            </div>
            <div className='portfolio__slide swiper-slide'>
              <div className='portfolio__item'>
                <img src={dia} className='portfolio__case'/>
                <p className='portfolio__text'>
                  {data.portfolioProjectDescriptionCurrent2}
                </p>
                <a href="https://feelinelord.github.io/Dia/" target="_blank" className="portfolio__link">...see</a>
              </div>
            </div>
            <div className='portfolio__slide swiper-slide'>
              <div className='portfolio__item'>
                <img src={miami} className='portfolio__case'/>
                <p className='portfolio__text'>
                  {data.portfolioProjectDescriptionCurrent3}
                </p>
                <a href="https://feelinelord.github.io/Miami/" target="_blank" className="portfolio__link">...see</a>
              </div>
            </div>
            <div className='portfolio__slide swiper-slide'>
              <div className='portfolio__item'>
                <img src={todo} className='portfolio__case'/>
                <p className='portfolio__text'>
                  {data.portfolioProjectDescriptionCurrent1}
                </p>
                <a href="https://feelinelord.github.io/Miami/" target="_blank" className="portfolio__link">...see</a>
              </div>
            </div>
            <div className='portfolio__slide swiper-slide'>
              <div className='portfolio__item'>
                <img src={dia} className='portfolio__case'/>
                <p className='portfolio__text'>
                  {data.portfolioProjectDescriptionCurrent2}
                </p>
                <a href="https://feelinelord.github.io/Dia/" target="_blank" className="portfolio__link">...see</a>
              </div>
            </div>
            <div className='portfolio__slide swiper-slide'>
              <div className='portfolio__item'>
                <img src={miami} className='portfolio__case'/>
                <p className='portfolio__text'>
                  {data.portfolioProjectDescriptionCurrent3}
                </p>
                <a href="https://feelinelord.github.io/Miami/" target="_blank" className="portfolio__link">...see</a>
              </div>
            </div>
            <div className='portfolio__slide swiper-slide'>
              <div className='portfolio__item'>
                <img src={todo} className='portfolio__case'/>
                <p className='portfolio__text'>
                  {data.portfolioProjectDescriptionCurrent1} 
                </p>
                <a href="https://feelinelord.github.io/Miami/" target="_blank" className="portfolio__link">...see</a>
              </div>
            </div>
            <div className='portfolio__slide swiper-slide'>
              <div className='portfolio__item'>
                <img src={dia} className='portfolio__case'/>
                <p className='portfolio__text'>
                  {data.portfolioProjectDescriptionCurrent2}
                </p>
                <a href="https://feelinelord.github.io/Dia/" target="_blank" className="portfolio__link">...see</a>
              </div>
            </div>
            <div className='portfolio__slide swiper-slide'>
              <div className='portfolio__item'>
                <img src={miami} className='portfolio__case'/>
                <p className='portfolio__text'>
                  {data.portfolioProjectDescriptionCurrent3}
                </p>
                <a href="https://feelinelord.github.io/Miami/" target="_blank" className="portfolio__link">...see</a>
              </div>
            </div>
          </div>
        </div>
        <div 
          className='portfolio__adaptiveContainer'
          style={!this.state.adaptive ? {'display': 'none'} : null}>
          <div className='portfolio__adaptiveCase'>
            <img src={dia} className='portfolio__adaptiveImage'></img>
            <p className='portfolio__adaptiveText'>
              {data.portfolioProjectDescriptionCurrent2}
            </p>
            <a href="https://feelinelord.github.io/Dia/" target="_blank" className="portfolio__adaptiveLink">...see</a>
          </div>
          <div className='portfolio__adaptiveCase'>
            <img src={todo} className='portfolio__adaptiveImage'></img>
            <p className='portfolio__adaptiveText'>
              {data.portfolioProjectDescriptionCurrent1}
            </p>
            <a href="https://feelinelord.github.io/Miami/" target="_blank" className="portfolio__adaptiveLink">...see</a>
          </div>
          <div className='portfolio__adaptiveCase'>
            <img src={miami} className='portfolio__adaptiveImage'></img>
            <p className='portfolio__adaptiveText'>
              {data.portfolioProjectDescriptionCurrent3}
            </p>
            <a href="https://feelinelord.github.io/Miami/" target="_blank" className="portfolio__adaptiveLink">...see</a>
          </div>
        </div>
      </section>
      </>
    );
  };
};

export default Portfolio;