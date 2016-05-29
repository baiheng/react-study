module.exports = {
	path: 'calendar',
	getComponent(location, cb) {
		require.ensure([], (require) => {
			cb(null, require('./components/Calendar'))
		});
		window.scrollTo(0,0);
	},
}
