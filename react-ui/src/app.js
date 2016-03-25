import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'

const rootRoute = {
	component: 'div',
	childRoutes: [{
		path: '/',
		component: require('./components/App'),
		// getComponent(location, cb) {
		// 	require.ensure([], (require) => {
		// 		cb(null, require('./components/App'))
		// 	});
		// 	window.scrollTo(0,0);
		// },
		// childRoutes: [
		// 	require('./routes/first'),
		// 	require('./routes/Course'),
		// 	require('./routes/Grades'),
		// 	require('./routes/Messages'),
		// 	require('./routes/Profile')
		// ]
	}]
}


ReactDOM.render(
    <Router routes={rootRoute} history={browserHistory} />, 
    document.getElementById('app')
);
