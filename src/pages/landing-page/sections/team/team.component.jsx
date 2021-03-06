import React from 'react';
import { QuarterCircle, Circle, VerticalPoints, Line } from '../../../../shared/svg';
import './team.scss';

export class Team extends React.Component {
  constructor() {
    super();
    this.screenWidth = 0;
    this.screenHeight = 0;
    window.addEventListener('resize', this.resize);
    this.randomMembers = [
      {
        name: 'Panagiotis Chontas',
        picture: require('../../../../assets/images/pana.png'),
        description:
          'Final-year student at the Faculty of Computer Science of Iasi with a vast experience in volunteering and personal development trainings. He is also the main designer of the Faculty and their permanent helping hand. The domains in his area of expertise are marketing, public speaking, brand consultancy, graphic design and UI/UX.'
      },
      {
        name: 'Teodora Balan',
        picture: require('../../../../assets/images/teo.jpg'),
        description:
          "Final-year CS student at UAIC, I'm in a continous search for new things to learn. Perfecting user experience is one of my passions and I can't wait to work with amazing people in the DSC team."
      },
      {
        name: 'Flavius Agrigoroaei',
        picture: require('../../../../assets/images/flavius.jpg'),
        description:
          'Second-year CS student @ UAIC. Currently in love with the web - have been working with web technologies for 4 years, both professionally and on my own time. My current particular interests are React.js and the evolution of the current JavaScript development ecosystem with a focus on designing beautiful user interfaces.'
      },
      {
        name: 'Teodor Proca',
        picture: require('../../../../assets/images/proca.jpg'),
        description:
          'Graduated Faculty of Computer Science Iasi. Nodejs expert. Flutter enthusiast. Experienced with full stack development, NoSQL databases, serveless applications, AWS, Google Cloud, DevOps and developing application architectures.'
      }
    ];
    this.members = [
      {
        name: 'Daniel Rusu',
        picture: require('../../../../assets/images/daniel.jpg'),
        description:
          'Last year at Faculty of Computer Science, have coordinated FII Practic 2020 edition and really excited about computers and programming. I love to learn everything that is new to me.'
      },
      ...this.random()
    ];
  }

  random = () => {
    const random = [];
    while (this.randomMembers.length) {
      const index = Math.floor(Math.random() * this.randomMembers.length);
      random.push(this.randomMembers[index]);
      this.randomMembers.splice(index, 1);
    }
    this.randomMembers = random;
    return this.randomMembers;
  };

  resize = () => {
    // Mobile
    if (!this.screenHeight) {
      this.screenHeight = window.innerHeight;
    }

    if (this.screenHeight !== window.innerHeight) {
      return;
    }

    if (window.innerWidth < 769) {
      this.mobile(...this.re);
    }
    
    // Desktop
    if (window.innerWidth > 768) {
      this.desktop(...this.re);
    }
  };

  mobile = () => {
    const colors = ['#EA4335', '#4285F4', '#FBBC04', '#34A853', '#174EA6'];
    const opacity = [1, 0.35, 0.45];
    const positions = [
      { left: 20, top: 105 },
      { right: 10, top: 10 },
      { right: 10, top: 130 }
    ];

    this.geMembers.forEach((memberForms, index) => {
      const member = this.re[index];
      const qc = memberForms.qc.style;
      const line = memberForms.line.style;
      const circle = memberForms.circle.style;
      const pos = [...positions];

      if (!member.querySelector('img').clientHeight) {
        setTimeout(() => { this.mobile(); }, 20);
        return;
      }

      qc.top = member.offsetTop;
      line.top = member.offsetTop;
      circle.top = member.offsetTop;

      let i = Math.floor(Math.random() * pos.length);
      qc.top = parseInt(qc.top) + pos[i].top + 'px';
      qc.fill = colors[Math.floor(Math.random() * colors.length)];
      qc.fillOpacity = opacity[Math.floor(Math.random() * opacity.length)];
      if (pos[i].left) {
        qc.left = pos[i].left + 'px';
        qc.right = null;
      } else {
        qc.right = pos[i].right + 'px';
        qc.left = null;
      }
      pos.splice(i, 1);


      i = Math.floor(Math.random() * pos.length);
      line.top = parseInt(line.top) + pos[i].top + 'px';
      line.fill = colors[Math.floor(Math.random() * colors.length)];
      line.fillOpacity = opacity[Math.floor(Math.random() * opacity.length)];
      if (pos[i].left) {
        line.left = pos[i].left + 'px';
        line.right = null;
      } else {
        line.right = pos[i].right + 'px';
        line.left = null;
      }
      pos.splice(i, 1);


      i = Math.floor(Math.random() * pos.length);
      circle.top = parseInt(circle.top) + pos[i].top + 'px';
      circle.fill = colors[Math.floor(Math.random() * colors.length)];
      circle.fillOpacity = opacity[Math.floor(Math.random() * opacity.length)];
      if (pos[i].left) {
        circle.left = pos[i].left + 'px';
        circle.right = null;
      } else {
        circle.right = pos[i].right + 'px';
        circle.left = null;
      }
      pos.splice(i, 1);

    });
  };

  desktop = () => {

  };

  componentDidMount() {
    this.re = [];
    this.geMembers = [];
    for (let i = 0; i < this.randomMembers.length; i++) {
      this.re.push(document.querySelector(`#team .member:nth-child(${i + 2})`));
      this.geMembers.push({
        qc: document.querySelectorAll(`#team .qc-member`)[i],
        circle: document.querySelectorAll(`#team .circle-member`)[i],
        line: document.querySelectorAll(`#team .line-member`)[i]
      });
    }

    this.resize();
  }

  render() {
    return (
      <section className='dsc-team' id='team'>
        <div className='background'>
          <QuarterCircle className='qc-top-left' />
          <QuarterCircle className='qc-bottom-left' />
          <Circle className='circle-top-right' />
          <Circle className='circle-bottom-right' />
          <VerticalPoints className='vp-top-right1' />
          <VerticalPoints className='vp-top-right2' />
          <Line className='line-top-left' />
          <Line className='line-top-right' />

          <QuarterCircle className='qc-member' />
          <Line className='line-member' />
          <Circle className='circle-member' />

          <QuarterCircle className='qc-member' />
          <Line className='line-member' />
          <Circle className='circle-member' />

          <QuarterCircle className='qc-member' />
          <Line className='line-member' />
          <Circle className='circle-member' />

          <QuarterCircle className='qc-member' />
          <Line className='line-member' />
          <Circle className='circle-member' />
        </div>
        <div className='title'>
          <h1>Team</h1>
        </div>
        <div className='members'>
          {this.members.map(member => (
            <div className='member' key={member.name}>
              <img src={member.picture} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
