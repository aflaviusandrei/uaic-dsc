import React from 'react';
import './menu.scss';

import {ReactComponent as CloseIcon} from '../../assets/svgs/close.svg';

export class Menu extends React.Component {
  constructor() {
    super();

    this.menu = [
      {
        title: 'Home',
        target: 'home',
      },
      {
        title: 'About Us',
        target: 'about',
      },
      {
        title: 'Team',
        target: 'team',
      },
      {
        title: 'Contact',
        target: 'contact',
      },
    ];

    this.socialMedia = [
      {
        name: 'instagram',
        link: 'https://www.instagram.com/dsc.uaic/',
        logo: require('../../assets/svgs/instagram.svg')
      },
      {
        name: 'linkedin',
        link: 'https://www.linkedin.com/company/dscuaic',
        logo: require('../../assets/svgs/linkedin.svg')
      },
      {
        name: 'facebook',
        link: 'https://www.facebook.com/dsc.uaic',
        logo: require('../../assets/svgs/facebook.svg')
      }
    ];

    this.scroll = (target) => {
      const element = document.getElementById(target);

      if (element) {
        this.close();
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      } 
    }

    this.close = () => {
      const container = document.getElementById('dsc-menu');
      if (container) {
        container.classList.remove('slide-right');
        setTimeout(() => {
          container.style.display = 'none';
        }, 150);
      }
    }
  }

  render() {
    return (
      <div className="dsc-menu" id="dsc-menu">
        <div className="menu-content">
          <div className="close-icon" onClick={() => this.close()}>
            <CloseIcon />
          </div>

          <div className="items">
            {this.menu.map(item => (
              <div className="item" key={item.target} onClick={() => this.scroll(item.target)}>
                <h2>{item.title}</h2>
              </div>
            ))}
          </div>

          <div className="social-media">
            {this.socialMedia.map(social => (
              <a href={social.link} key={social.name} target="_blank" rel="noopener noreferrer">
                <img src={social.logo} alt={social.name}/>
              </a>
            ))}
          </div>
        </div>
        <div className="dark-manta"></div>
      </div>
    );
  }
}