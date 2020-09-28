import React from 'react';
import { Circle, QuarterCircle, Line, VerticalPoints, HorizontalPoints } from '../../../../shared/svg';
import './home.scss';

const title = 'Helping students bridge the gap between theory and practice';
const subtitle =
  'Developer Student Clubs are university based community groups for students interested in Google developer technologies.';

export class Home extends React.Component {
  constructor() {
    super();
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

  qcMobile = (learn, _, collaborate, button) => {
    // Quarter Circle Top Left
    const qcTopLeft = this.ge.qc.topLeft.style;
    qcTopLeft.top = learn.offsetTop - 5 + 'px';
    qcTopLeft.left = learn.offsetLeft - 50 + 'px';

    // Quarter Circle Top Right
    const qcTopRight = this.ge.qc.topRight.style;
    qcTopRight.top = learn.offsetTop - 25 + 'px';
    qcTopRight.left = learn.offsetLeft + learn.clientWidth + 25 + 'px';

    // Quarter Circle Bottom Left
    const qcBottomLeft = this.ge.qc.bottomLeft.style;
    qcBottomLeft.top = collaborate.offsetTop + 55 + 'px';
    qcBottomLeft.left = collaborate.offsetLeft - 45 + 'px';

    // Quarter Circle Bottom Right
    const qcBottomRight = this.ge.qc.bottomRight.style;
    qcBottomRight.top = collaborate.offsetTop + 30 + 'px';
    qcBottomRight.left = collaborate.offsetLeft + collaborate.clientWidth + 15 + 'px';

    // Quarter Circle Button Top Right
    const qcButtonTopRight = this.ge.qc.buttonTopRight.style;
    qcButtonTopRight.top = button.offsetTop - 60 + 'px';
    qcButtonTopRight.left = button.offsetLeft + button.clientWidth + 28 + 'px';
  };

  qcDesktop = (learn, create, collaborate, button) => {
    // Quarter Circle Top Left - Red
    const qcTopLeft = this.ge.qc.topLeft.style;
    qcTopLeft.top = learn.offsetTop - 100 + 'px';
    qcTopLeft.left = learn.offsetLeft - 40 + 'px';

    // Quarter Circle Top Right
    const qcTopRight = this.ge.qc.topRight.style;
    qcTopRight.top = collaborate.offsetTop - 125 + 'px';
    qcTopRight.left = collaborate.offsetLeft + collaborate.clientWidth - 30 + 'px';

    // Quarter Circle Bottom Left
    const qcBottomLeft = this.ge.qc.bottomLeft.style;
    qcBottomLeft.top = create.offsetTop + 110 + 'px';
    qcBottomLeft.left = create.offsetLeft - 125 + 'px';

    // Quarter Circle Bottom Right
    const qcBottomRight = this.ge.qc.bottomRight.style;
    qcBottomRight.top = collaborate.offsetTop + 80 + 'px';
    qcBottomRight.left = collaborate.offsetLeft + collaborate.clientWidth - 20 + 'px';

    // Quarter Circle Button Top Right
    const qcButtonTopRight = this.ge.qc.buttonTopRight.style;
    qcButtonTopRight.top = button.offsetTop - 80 + 'px';
    qcButtonTopRight.left = button.offsetLeft + button.clientWidth + 40 + 'px';
  };

  lineMobile = (learn, create, _2, button) => {
    // Line Top Left
    const lineTopLeft = this.ge.line.topLeft.style;
    lineTopLeft.top = learn.offsetTop - 25 + 'px';
    lineTopLeft.left = learn.offsetLeft - 100 + 'px';
    
    // Line Bottom Left
    const lineBottomLeft = this.ge.line.bottomLeft.style;
    lineBottomLeft.top = button.offsetTop + 75 + 'px';
    lineBottomLeft.left = button.offsetLeft - 70 + 'px';
  }

  lineDesktop = (learn, create, collaborate, button) => {
    // Line Top Left
    const lineTopLeft = this.ge.line.topLeft.style;
    lineTopLeft.top = create.offsetTop -100 + 'px';
    lineTopLeft.left = create.offsetLeft -100 + 'px';
    
    // Line Bottom Left
    const lineBottomLeft = this.ge.line.bottomLeft.style;
    lineBottomLeft.top = button.offsetTop + 100 + 'px';
    lineBottomLeft.left = button.offsetLeft - 20 + 'px';
    
    // Line Center Right
    const lineCenterRight = this.ge.line.centerRight.style;
    lineCenterRight.top = collaborate.offsetTop + 160 + 'px';
    lineCenterRight.left = collaborate.offsetLeft - 80 + 'px';
    
    // Line Bottom left 2
    const lineBottomLeft2 = this.ge.line.bottomLeft2.style;
    lineBottomLeft2.top = button.offsetTop + 30 + 'px';
    lineBottomLeft2.left = button.offsetLeft - 300 + 'px';
  }

  circleMobile = (learn, create, collaborate, button) => {
    // Circle Center Left
    const circleCenterLeft = this.ge.circle.centerLeft.style;
    circleCenterLeft.top = create.offsetTop + 30 + 'px';
    circleCenterLeft.left = create.offsetLeft - 70 + 'px';
    
    // Circle Bottom Left
    const circleBottomLeft = this.ge.circle.bottomLeft.style;
    circleBottomLeft.top = button.offsetTop - 30 + 'px';
    circleBottomLeft.left = button.offsetLeft - 70 + 'px';
   
    // Circle Bottom Right
    const circleBottomRight = this.ge.circle.bottomRight.style;
    circleBottomRight.top = button.offsetTop + 70 + 'px';
    circleBottomRight.left = button.offsetLeft + button.clientWidth + 50 + 'px';
  }

  circleDesktop = (learn, create, collaborate, button) => {
    // Circle Center Left
    const circleCenterLeft = this.ge.circle.centerLeft.style;
    circleCenterLeft.top = create.offsetTop + 70 + 'px';
    circleCenterLeft.left = create.offsetLeft - 30 + 'px';
    
    // Circle Bottom Left
    const circleBottomLeft = this.ge.circle.bottomLeft.style;
    circleBottomLeft.top = collaborate.offsetTop - 130 + 'px';
    circleBottomLeft.left = collaborate.offsetLeft - 10 + 'px';
   
    // Circle Bottom Right
    const circleBottomRight = this.ge.circle.bottomRight.style;
    circleBottomRight.top = button.offsetTop + 'px';
    circleBottomRight.left = button.offsetLeft + button.clientWidth + 300 + 'px';
    
    // Circle Bottom Left 1
    const circleBottomLeft1 = this.ge.circle.bottomLeft1.style;
    circleBottomLeft1.top = button.offsetTop - 20 + 'px';
    circleBottomLeft1.left = button.offsetLeft - 120 + 'px';
    
    // Circle Bottom Left 2
    const circleBottomLeft2 = this.ge.circle.bottomLeft2.style;
    circleBottomLeft2.top = button.offsetTop + 80 + 'px';
    circleBottomLeft2.left = button.offsetLeft - 190 + 'px';
  }

  pointsMobile = (_1, _2, _3, button) => {
    // Circle Bottom Left
    const hpBottom1 = this.ge.points.hpBottom1.style;
    hpBottom1.top = button.offsetTop + button.clientHeight + 30 + 'px';
    hpBottom1.left = button.offsetLeft + 70 + 'px';
    
    // Circle Bottom Left
    const hpBottom2 = this.ge.points.hpBottom2.style;
    hpBottom2.top = button.offsetTop + button.clientHeight + 52 + 'px';
    hpBottom2.left = button.offsetLeft + 70 + 'px';
  }

  pointsDesktop = (_1, _2, _3, button) => {
    // Circle Bottom Left
    const hpBottom1 = this.ge.points.hpBottom1.style;
    hpBottom1.top = button.offsetTop + button.clientHeight + 80 + 'px';
    hpBottom1.left = button.offsetLeft + 220 + 'px';
    
    // Circle Bottom Left
    const hpBottom2 = this.ge.points.hpBottom2.style;
    hpBottom2.top = button.offsetTop + button.clientHeight + 120 + 'px';
    hpBottom2.left = button.offsetLeft + 220 + 'px';
  }

  componentDidMount() {
    this.re = [
      document.querySelector('#home .words > h2:first-child'),
      document.querySelector('#home .words > h2:nth-child(2)'),
      document.querySelector('#home .words > h2:nth-child(3)'),
      document.querySelector('#home .actions > .btn')
    ];

    this.ge = {
      qc: {
        topLeft: document.querySelector('#home .qc-top-left'),
        topRight: document.querySelector('#home .qc-top-right'),
        bottomLeft: document.querySelector('#home .qc-bottom-left'),
        bottomRight: document.querySelector('#home .qc-bottom-right'),
        buttonTopRight: document.querySelector('#home .qc-button-top-right')
      },
      line: {
        topLeft: document.querySelector('#home .line-top-left'),
        centerRight: document.querySelector('#home .line-center-right'),
        bottomLeft: document.querySelector('#home .line-bottom-left'),
        bottomLeft2: document.querySelector('#home .line-bottom-left-2'),
      },
      circle: {
        centerLeft: document.querySelector('#home .circle-center-left'),
        bottomLeft: document.querySelector('#home .circle-bottom-left'),
        bottomRight: document.querySelector('#home .circle-bottom-right'),
        bottomLeft1: document.querySelector('#home .circle-bottom-left-1'),
        bottomLeft2: document.querySelector('#home .circle-bottom-left-2')
      },
      points: {
        hpBottom1: document.querySelector('#home .hp-bottom.hp-1'),
        hpBottom2: document.querySelector('#home .hp-bottom.hp-2')
      }
    };

    this.resize();
  }

  render() {
    return (
      <section className='dsc-home' id='home'>
        <div className='background'>
          <VerticalPoints className="vp" />
          <QuarterCircle className='qc-top-left' />
          <QuarterCircle className='qc-top-right' />
          <QuarterCircle className='qc-bottom-left' />
          <QuarterCircle className='qc-bottom-right' />
          <QuarterCircle className='qc-button-top-right' />
          <Line className="line-top-left" />
          <Line className="line-center-right" />
          <Line className="line-bottom-left" />
          <Line className="line-bottom-left-2" />
          <Circle className="circle-center-left" />
          <Circle className="circle-bottom-left" />
          <Circle className="circle-bottom-right" />
          <Circle className="circle-bottom-left-1" />
          <Circle className="circle-bottom-left-2" />
          <HorizontalPoints className="hp-bottom hp-1" />
          <HorizontalPoints className="hp-bottom hp-2" />
        </div>

        <div className='words'>
          <h2>Learn.</h2>
          <h2>Create.</h2>
          <h2>Collaborate.</h2>
        </div>

        <h3 className='title'>{title}</h3>
        <p className='subtitle'>{subtitle}</p>

        <div className='actions'>
          <button className='btn btn-primary'>APPLY NOW</button>
        </div>
      </section>
    );
  }
}
