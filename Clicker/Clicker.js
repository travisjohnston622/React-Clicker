import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Clicker extends Component {

    constructor(props) {
        super();

        this.state = {
            count: props.count
        };

        this.increaseCount = this.increaseCount.bind(this);
        this.decreaseCount = this.decreaseCount.bind(this);
        this.resetCount = this.resetCount.bind(this);
    }
}