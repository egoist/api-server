const isDev = process.env.NODE_ENV === 'development'

if (isDev) {
	require('babel-register')({
		presets: ['es2015', 'stage-0'],
		plugins: ['transform-runtime']
	})
}

require('./src/index').default(__dirname)
