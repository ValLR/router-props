import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

    render(){
        return(
            <div>
                <h5>Child -></h5>
                <button onClick={(e) => this.props.update('data', e)}>update</button>
                <Link to={'/Child'}>Go to Child</Link>
            </div>
        )
    }
}
export default Home;