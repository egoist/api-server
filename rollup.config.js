import babel from 'rollup-plugin-babel'

export default {
	entry: './server.js',
	dest: './bootstrap.js',
	plugins: [
		babel({
			presets: ['es2015-rollup', 'stage-0'],
			plugins: ['transform-runtime'],
			exclude: 'node_modules/**'
		})
	],
	format: 'cjs'
}
