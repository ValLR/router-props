import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Child extends Component {
    render() {
        return(
        	<div>
                <p>{this.props.prop}</p>
                <Link to={'/'}>Go to Home</Link>
            </div>
        )
    }
}

export default Child