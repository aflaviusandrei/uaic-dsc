import React from 'react';
import { Home, Contact, Team, About } from './sections';
import './landing-page.scss';
import Modal from './../../components/modal/modal';

export class LandingPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modalState: "open"
    }
  }

  closeModal = () => {
    this.setState({
      modalState: "close"
    })
    console.log(this.state.modalState);
  }

  toggleModal = () => {
    this.setState({
      modalState: "open"
    })
  }

  render() {
    return (
      <section className="dsc-landing-page">
        <Modal open={this.state.modalState} closeModal={this.closeModal}/>
        <Home toggleModal={this.toggleModal} />
        <About />
        <Team />
        <Contact />
      </section>
    );
  }
}