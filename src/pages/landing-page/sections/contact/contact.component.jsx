import React from 'react';
import './contact.scss';
import { QuarterCircle, Line, Circle, HorizontalPoints } from '../../../../shared/svg';

export class Contact extends React.Component {
  constructor() {
    super();
    this.refresh = null;
    window.addEventListener('resize', this.resize);
    this.socialMedia = [
      {
        name: 'instagram',
        link: 'https://www.instagram.com/dsc.uaic/',
        logo: require('../../../../assets/svgs/instagram.svg')
      },
      {
        name: 'linkedin',
        link: 'https://www.linkedin.com/company/dscuaic',
        logo: require('../../../../assets/svgs/linkedin.svg')
      },
      {
        name: 'facebook',
        link: 'https://www.facebook.com/dsc.uaic',
        logo: require('../../../../assets/svgs/facebook.svg')
      }
    ];
  }

  resize = () => {
    // Mobile
    if (window.innerWidth < 769) {
      this.qcMobile(...this.re);
      this.lineMobile(...this.re);
      this.circleMobile(...this.re);
      this.pointsMobile(...this.re);
    }

    // Desktop
    if (window.innerWidth > 768) {
      this.qcDesktop(...this.re);
      this.lineDesktop(...this.re);
      this.circleDesktop(...this.re);
      this.pointsDesktop(...this.re);
    }
  };

  qcMobile = (title, details, map) => {
    // qc top right
    const qcTopRight = this.ge.qc.topRight.style;
    qcTopRight.top = 20 + 'px';
    qcTopRight.right = 0;
    qcTopRight.left = null;
  };

  qcDesktop = (title, details, map) => {
    // qc top right
    const qcTopRight = this.ge.qc.topRight.style;
    qcTopRight.top = map.offsetTop - 40 + 'px';
    qcTopRight.left = map.offsetLeft + map.clientWidth - 20 + 'px';
  };

  lineMobile = (title, details, map) => {
    // line title bottom
    const lineTitleBottom = this.ge.line.titleBottom.style;
    lineTitleBottom.top = title.offsetTop + title.clientHeight + 10 + 'px';
    lineTitleBottom.left = title.offsetLeft - 80 + 'px';
  };

  lineDesktop = (title, details, map) => {
    // line title bottom
    const lineTitleBottom = this.ge.line.titleBottom.style;
    lineTitleBottom.top = details.offsetTop + details.clientHeight + 40 + 'px';
    lineTitleBottom.left = details.offsetLeft + 40 + 'px';
  };

  circleMobile = (title, details, map) => {
    // circle title bottom
    const circleTitleBottom = this.ge.circle.titleBottom.style;
    circleTitleBottom.top = title.offsetTop + title.clientHeight + 30 + 'px';
    circleTitleBottom.left = title.offsetLeft + title.clientWidth + 10 + 'px';
  };

  circleDesktop = (title, details, map) => {
    // circle title bottom
    const circleTitleBottom = this.ge.circle.titleBottom.style;
    circleTitleBottom.top = details.offsetTop - 30 + 'px';
    circleTitleBottom.left = details.offsetLeft + details.clientWidth / 1.5 + 'px';
  };

  pointsMobile = (title, details, map) => {};

  pointsDesktop = (title, details, map) => {};

  componentDidMount(title, details, map) {
    this.re = [
      // title
      document.querySelector('#contact .title > h1'),

      // details
      document.querySelector('#contact .details'),

      // map
      document.querySelector('#contact .map')
    ];

    this.ge = {
      qc: {
        topRight: document.querySelector('#contact .qc-top-right'),
        bottomLeft: document.querySelector('#contact .qc-bottom-left')
      },
      line: {
        titleBottom: document.querySelector('#contact .line-title-bottom')
      },
      circle: {
        titleBottom: document.querySelector('#contact .circle-title-bottom')
      },
      points: {}
    };

    this.resize();
  }

  render() {
    return (
      <section className='dsc-contact' id='contact'>
        <div className='background'>
          <QuarterCircle className='qc-top-right' />
          <QuarterCircle className='qc-bottom-left' />
          <Line className='line-title-bottom' />
          <Circle className='circle-title-bottom' />
          <HorizontalPoints className='points-bottom' />
        </div>
        <div className='title'>
          <h1>Contact</h1>
        </div>

        <div className='details'>
          <h4>
            Email: <span>dsc.uaic@gmail.com</span>
          </h4>
          <h4>
            Address: <span>16 General Berthelot, Iași 700483</span>
          </h4>
        </div>

        <div className='social-media'>
          {this.socialMedia.map(social => (
            <a href={social.link} key={social.name} target='_blank' rel='noopener noreferrer'>
              <img src={social.logo} alt={social.name} />
            </a>
          ))}
        </div>

        <div className='map'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2712.1767427515797!2d27.57272241602489!3d47.17397602575538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cafb6227e846bd%3A0x193e4b6864504e2c!2sFaculty%20of%20Computer%20Science!5e0!3m2!1sen!2sro!4v1573381857145!5m2!1sen!2sro'
            frameBorder='0'
            title='FII Map'
            allowFullScreen=''
          />
        </div>
      </section>
    );
  }
}
