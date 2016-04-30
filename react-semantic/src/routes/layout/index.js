module.exports = {
	path: 'layout',
	getComponent(location, cb) {
		require.ensure([], (require) => {
			cb(null, require('./components/Layout'))
		});
		window.scrollTo(0,0);
	},
}
