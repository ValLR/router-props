import React, { Component } from 'react';
import Home from './Home.js';
import Child from './Child.js';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          message: ''
        };
        this.updateThisMessage = this.updateThisMessage.bind(this);
    }

    updateThisMessage(data) {
        this.setState({
            message: data
        })
    }

    render() {
        return(
            <Router>
                <div>
                    <Route exact path={'/'} render={() => <Home update={this.updateThisMessage} />} />
                    <Route path={'/Child'} render={()=> <Child prop={this.state.message}/>} />
                </div>
            </Router>
        )
    }
}

export default App;
