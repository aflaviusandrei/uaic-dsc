import React from 'react';
import { Home, Contact, Team, About } from './sections';
import './landing-page.scss';

export class LandingPage extends React.Component {
  render() {
    return (
      <section className="dsc-landing-page">
        <Home />
        <About />
        <Team />
        <Contact />
      </section>
    );
  }
}