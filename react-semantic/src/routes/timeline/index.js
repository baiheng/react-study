module.exports = {
	path: 'timeline',
	getComponent(location, cb) {
		require.ensure([], (require) => {
			cb(null, require('./components/Timeline'))
		});
		window.scrollTo(0,0);
	},
}
