import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory, Route, IndexRoute } from 'react-router'

import App from './component/App'
import Form from './component/form/Form'
import MyModal from './component/modal/MyModal'
import Timeline from './component/timeline/Timeline'
import Table from './component/table/Table'
import Layout from './component/layout/Layout'


ReactDOM.render(
    <Router history={browserHistory}>
    	<Route path="/" component={App}>
    		<IndexRoute component={Form} />
    		<Route path="form" component={Form} />
    		<Route path="modal" component={MyModal} />
    		<Route path="timeline" component={Timeline} />
    		<Route path="table" component={Table} />
    		<Route path="layout" component={Layout} />
    	</Route>
    </Router>, 
    document.getElementById('app')
);