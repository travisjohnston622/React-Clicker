import React, { Component } from 'react';
import Header from './Header';
import Cliker from './Clicker';

export default class App extends Component {

    constructor() {
        super();

        this.state = {
            title: 'React Clicker'
        };
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} />
                <div className="container">
                    <Cliker />
                </div>
            </div>
        )
    }
}