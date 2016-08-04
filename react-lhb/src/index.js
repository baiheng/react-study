import React from 'react'
import ReactDOM from 'react-dom'
import { Router, hashHistory, Route, IndexRoute } from 'react-router'

import App from './component/App'
import LhbList from './component/lhb_list/LhbList'
import LhbDetail from './component/lhb_detail/LhbDetail'


ReactDOM.render(
    <Router history={hashHistory}>
    	<Route path="/" component={App}>
            <IndexRoute component={LhbList} />
            <Route path="/lhb/lhb_detail.html" component={LhbDetail} />
    	</Route>
    </Router>, 
    document.getElementById('app')
);