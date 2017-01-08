import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import { Router, Route, hashHistory } from 'react-router'

var Mouter = React.createClass({

    render: function() {
        return (
            <Router>
                <Route path="/" component={App}></Route>
            </Router>
        )
}})

render(<Mouter />, document.getElementById('app'));
