module.exports = {
	path: 'pages',
	component: require('./components/Framework'),
	indexRoute: {component: require('./LhbList/LhbList')},
	childRoutes: [
		{path: 'lhb_list', component: require('./LhbList/LhbList')},
		{path: 'lhb_detail', component: require('./LhbDetail/LhbDetail')},
	]
}