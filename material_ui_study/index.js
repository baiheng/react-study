import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import { routeConfig } from './src/route_config.js'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();


ReactDOM.render(
    <Router routes={routeConfig} history={browserHistory}/>, 
    document.getElementById('app')
);