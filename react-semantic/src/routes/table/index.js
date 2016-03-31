module.exports = {
	path: 'table',
	getComponent(location, cb) {
		require.ensure([], (require) => {
			cb(null, require('./components/Table'))
		});
		window.scrollTo(0,0);
	},
}
