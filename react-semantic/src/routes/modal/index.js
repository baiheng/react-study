module.exports = {
	path: 'modal',
	getComponent(location, cb) {
		require.ensure([], (require) => {
			cb(null, require('./components/MyModal'))	
		});
		window.scrollTo(0,0);
	},
}
