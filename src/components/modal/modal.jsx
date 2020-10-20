import React from 'react';
import './modal.css';
import Logo from './../../assets/images/vertical-logo.png';
import CloseIcon from '@material-ui/icons/Close';

export default class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            timeLeft: '',
            date: new Date('Oct 27, 2020 23:59:59'),
            aLink: 'https://docs.google.com/forms/d/1gJLqr2FxS1uQHBQUSJGALz0OaZNxj_VEaR8L9YdZkVU',
            ctaStyles: {
                cursor: "pointer",
                opacity: "1"
            }
        }
    }

    updateTime = () => {
        // Get today's date and time
        var now = new Date().getTime();
            
        // Find the distance between now and the count down date
        var distance = this.state.date - now;
            
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
        // Display the result in the element with id="demo"
        this.setState({
            timeLeft: days + "d " + hours + "h " + minutes + "m " + seconds + "s "
        })
            
        // If the count down is finished, write some text
        if (distance < 0) {
            this.setState({
                aLink: 'https://docs.google.com/forms/d/1gJLqr2FxS1uQHBQUSJGALz0OaZNxj_VEaR8L9YdZkVU/',
                ctaStyles: {
                    cursor: "pointer",
                    opacity: "1"
                }
            })
        }
    }

    closeModal = () => {
        this.props.closeModal();
    }

    componentDidMount() {
        setInterval(() => {
            this.updateTime();
        }, 1000);

        document.addEventListener('click', (event) => {
            if (document.getElementsByClassName("sign-up-modal")[0].classList.contains("open")) {
                var isClickInside = document.getElementsByClassName("sign-up-modal")[0].children[0].contains(event.target);
                var btnInside = document.querySelector(".btn-primary").contains(event.target);
          
                if (!isClickInside && !btnInside) {
                    console.log('t');
                    this.closeModal();
                }
            }
        });
    }

    render() {
        let signupState = ``;

        signupState = `
        <h1 class="countdown">${this.state.timeLeft}</h1>
        <h3>left to register</h3>
        `;

        if (this.props.open === "open") {
            return(
                <div class="sign-up-modal open" style={{
                    display: "flex"
                }}>
                    <div class="modal-inner">
                        <CloseIcon id="close-modal" onClick={this.closeModal}/>
    
                        <div class="sign-up-modal-content">
                            <img id="logo" alt="logo" src={Logo}/>
                            <div class="cd-area" dangerouslySetInnerHTML={{__html: signupState}}>
                            </div>
                            <a class="cta" style={this.state.ctaStyles} href={this.state.aLink}>Register</a>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return(
                <div class="sign-up-modal" style={{
                    display: "none"
                }}>
                    <div class="modal-inner">
                        <CloseIcon id="close-modal" onClick={this.closeModal}/>
    
                        <div class="sign-up-modal-content">
                            <img id="logo" alt="logo" src={Logo}/>
                            <div class="cd-area" dangerouslySetInnerHTML={{__html: signupState}}>
                            </div>
                            <a class="cta" style={this.state.ctaStyles} href={this.state.aLink}>Register</a>
                        </div>
                    </div>
                </div>
            )
        }
    }
}