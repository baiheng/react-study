module.exports = {
	path: 'form',
	getComponent(location, cb) {
		require.ensure([], (require) => {
			cb(null, require('./components/Form'))
		});
		window.scrollTo(0,0);
	},
}
