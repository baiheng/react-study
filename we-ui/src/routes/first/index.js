module.exports = {
	path: 'first',
	getComponent(location, cb) {
		require.ensure([], (require) => {
			cb(null, require('./components/First'))
		});
		window.scrollTo(0,0);
	},
}
