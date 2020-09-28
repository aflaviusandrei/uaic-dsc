import React from 'react';
import { Circle, QuarterCircle, Line, HorizontalPoints } from '../../../../shared/svg';
import './about.scss';

const image = require('../../../../assets/images/dsc_hero.jpg');

export class About extends React.Component {
  constructor() {
    super();
    this.refresh = null;
    window.addEventListener('resize', this.resize);
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

  qcMobile = (title, image, desc1, desc2) => {
    if (!image.clientHeight || !desc1.clientHeight) {
      setTimeout(() => {
        this.qcMobile(...this.re);
      }, 20);
    }

    // QC top left
    const qcTopLeft = this.ge.qc.topLeft.style;
    qcTopLeft.top = title.offsetTop - 15 + 'px';
    qcTopLeft.left = title.offsetLeft - 35 + 'px';

    // QC desc1 bottom
    const qcDesc1Bottom = this.ge.qc.desc1Bottom.style;
    qcDesc1Bottom.top = desc1.offsetTop + desc1.clientHeight + 10 + 'px';
    qcDesc1Bottom.left = desc1.offsetLeft + desc1.clientWidth - 45 + 'px';
  };

  qcDesktop = (title, image, desc1, desc2) => {
    if (!image.clientHeight || !desc1.clientHeight) {
      setTimeout(() => {
        this.qcDesktop(...this.re);
      }, 20);
    }

    // QC top left
    const qcTopLeft = this.ge.qc.topLeft.style;
    qcTopLeft.top = desc1.offsetTop + desc1.clientHeight + 25 + 'px';
    qcTopLeft.left = desc1.offsetLeft + desc1.clientWidth - 35 + 'px';
  };

  lineMobile = (title, image, desc1, desc2) => {
    if (!image.clientHeight || !desc1.clientHeight) {
      setTimeout(() => {
        this.lineMobile(...this.re);
      }, 20);
    }

    // Line top right
    const lineTopRight = this.ge.line.topRight.style;
    lineTopRight.top = title.offsetTop + 55 + 'px';
    lineTopRight.left = title.offsetLeft + title.clientWidth - 35 + 'px';

    // Line desc 1
    const lineDesc1Bottom = this.ge.line.desc1Bottom.style;
    lineDesc1Bottom.top = desc1.offsetTop + desc1.clientHeight + 20 + 'px';
    lineDesc1Bottom.left = desc1.offsetLeft + 20 + 'px';
  };

  lineDesktop = (title, image, desc1, desc2) => {
    if (!image.clientHeight || !desc1.clientHeight) {
      setTimeout(() => {
        this.lineDesktop(...this.re);
      }, 20);
    }

    // Line top right
    const lineTopRight = this.ge.line.topRight.style;
    lineTopRight.top = desc1.offsetTop + desc1.clientHeight + 20 + 'px';
    lineTopRight.left = desc1.offsetLeft - 20 + 'px';
  };

  circleMobile = (title, image, desc1, desc2) => {
    if (!image.clientHeight || !desc1.clientHeight) {
      setTimeout(() => {
        this.circleMobile(...this.re);
      }, 20);
    }

    // circle image left
    const circleImgLeft = this.ge.circle.imgLeft.style;
    circleImgLeft.top = image.offsetTop + image.clientHeight - 30 + 'px';
    circleImgLeft.left = image.offsetLeft - 20 + 'px';

    // circle desc1 bottom
    const circleDesc1Bottom = this.ge.circle.desc1Bottom.style;
    circleDesc1Bottom.top = desc1.offsetTop + desc1.clientHeight + 15 + 'px';
    circleDesc1Bottom.left = desc1.offsetLeft + desc1.clientWidth / 2 - 20 + 'px';
  };

  circleDesktop = (title, image, desc1, desc2) => {
    if (!image.clientHeight || !desc1.clientHeight) {
      setTimeout(() => {
        this.circleDesktop(...this.re);
      }, 20);
    }

    // circle image left
    const circleImgLeft = this.ge.circle.imgLeft.style;
    circleImgLeft.top = image.offsetTop + image.clientHeight - 60 + 'px';
    circleImgLeft.left = image.offsetLeft - 40 + 'px';

    // circle desc1 bottom
    const circleDesc1Bottom = this.ge.circle.desc1Bottom.style;
    circleDesc1Bottom.top = desc2.offsetTop + desc2.clientHeight - 40 + 'px';
    circleDesc1Bottom.left = desc2.offsetLeft - 25 + 'px';
  };

  pointsMobile = (title, image, desc1, desc2) => {
    // points image right
    const pointsImageRight = this.ge.points.imageRight.style;
    pointsImageRight.top = image.offsetTop + image.clientHeight / 2 - 30 + 15 + 'px';
    pointsImageRight.left = image.offsetLeft + image.clientWidth - 50 + 'px';
  };

  pointsDesktop = (title, image, desc1, desc2) => {
    // points image right
    const pointsImageRight = this.ge.points.imageRight.style;
    pointsImageRight.top = desc1.offsetTop + desc1.clientHeight / 2 - 30 + 15 + 'px';
    pointsImageRight.left = desc1.offsetLeft + desc1.clientWidth - 50 + 'px';
  };

  componentDidMount() {
    this.re = [
      // title
      document.querySelector('#about .title > h1'),

      // picture
      document.querySelector('#about .post-image > img'),

      // first-description
      document.querySelector('#about .first > p'),

      // second-description
      document.querySelector('#about .second')
    ];

    this.ge = {
      qc: {
        topLeft: document.querySelector('#about .qc-top-left'),
        desc1Bottom: document.querySelector('#about .qc-desc1-bottom')
      },
      line: {
        topRight: document.querySelector('#about .line-top-right'),
        desc1Bottom: document.querySelector('#about .line-desc1-bottom'),
        desc2Bottom: document.querySelector('#about .line-desc2-bottom')
      },
      circle: {
        imgLeft: document.querySelector('#about .circle-img-left'),
        desc1Bottom: document.querySelector('#about .circle-desc1-bottom')
      },
      points: {
        imageRight: document.querySelector('#about .points-image-right')
      }
    };

    requestAnimationFrame(() => {
      this.resize();
    });
  }

  render() {
    return (
      <section className='dsc-about' id='about'>
        <div className='background'>
          <QuarterCircle className='qc-top-left' />
          <QuarterCircle className='qc-desc1-bottom' />
          <Line className='line-top-right' />
          <Line className='line-desc1-bottom' />
          <Circle className='circle-img-left' />
          <Circle className='circle-desc1-bottom' />
          <HorizontalPoints className='points-image-right' />
        </div>
        <div className='title'>
          <h1>About Us</h1>
        </div>
        <div className='post-image'>
          <img src={image} alt='About' />
        </div>
        <div className='first description'>
          <p>
            Developer Student Clubs (DSC) is a program presented by Google Developers, which consists of forming
            communities of university students. DSC was introduced in 2017 in India, and this is the first time the
            program is organized world- wide. Currently, there are around 50 DSCs in Europe, and more than 700
            worldwide. DSC conducts multiple workshops and talks about development technologies, soft skills (Teamwork,
            communication, problem solving ...) and showcases of the solutions developed for our community.
          </p>
        </div>
        <p className='second description'>
          Developer Student Clubs are university based community groups for students interested in Google developer
          technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer
          are welcome. By joining a DSC, students grow their knowledge in a peer-to-peer learning environment and build
          solutions for local businesses and their community
        </p>
      </section>
    );
  }
}
