import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import { Router, Route, hashHistory } from 'react-router'

var Mouter = React.createClass({

    render: function() {
        return (
            <Router>
                <Route path="/" component={App}></Route>
                <Route path="/repos" component={Repos}></Route>
                <Route path="/about" component={About}></Route>
            </Router>
        )
}})

render(<Mouter />, document.getElementById('app'));
