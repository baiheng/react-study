import React from 'react'
import ReactDOM from 'react-dom'
import { Router, hashHistory, Route, IndexRoute } from 'react-router'

const rootRoute = {
	path: "/",
	component: require('./components/App'),
	indexRoute: {
		onEnter: ({params}, replace) => replace("/pages/lhb_list")
	},
	getChildRoutes(location, cb) {
		require.ensure([], (require) => {
		 	cb(null, [
				require('./pages'),
				require('./login'),
			])
		})
	}
}

ReactDOM.render(
	<Router history={hashHistory} routes={rootRoute} />,
	document.getElementById('app')
)