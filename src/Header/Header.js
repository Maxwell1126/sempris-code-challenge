import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <header className="head">
                <h1>Sempris Code Challenge</h1>
            </header>
        )
    }

}

export default Header;