import React from 'react';
import './header.scss';

const logo = require('../../assets/images/dsc-uaic-logo.png');
const MenuSvg = require('../../assets/svgs/menu.svg');

export class Header extends React.Component {
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
  }

  openMenu() {
    const menu = document.getElementById('dsc-menu');
    if (!menu) {
      return;
    }

    if (menu.style.display === 'flex') {
      menu.classList.remove('slide-right');
      setTimeout(() => {
        menu.style.display = 'none';
      }, 150);
    } else {
      menu.style.display = 'flex';
      setTimeout(() => {
        menu.classList.add('slide-right');
      }, 5);
    }
  }

  goTo(event, target) {
    event.preventDefault();
    const element = document.getElementById(target);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    } 
  }

  render() {
    return (
      <header className="dsc-header">
        <img className="logo" src={logo} alt="DSC Logo"/>
        <div className="menu">
          <img className="menu-icon" 
               src={MenuSvg} 
               alt="Menu"
               onClick={() => this.openMenu()}/>
        </div>
        <div className="list-menu">
          {this.menu.map(item => (
            <a key={item.target} href={'#' + item.target} onClick={(e) => this.goTo(e, item.target)}>{item.title}</a>
          ))}
        </div>
      </header>
    );
  }
}