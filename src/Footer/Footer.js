import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <footer className="foot">
                <h6>Thank you for using my app!</h6>
            </footer>
        )
    }

}

export default Footer;