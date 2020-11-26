/**
 * Node dependencies
 */
const { resolve } = require('path');
const { readdir, existsSync, readFileSync } = require('fs');

/**
 * Test environment
 */
const tape = require('tape');

/**
 * Test if a file is being created
 */
tape('Should build successfully', t => {
	const build = resolve(__dirname, 'dist', 'index.css');
	const fileExists = existsSync(build);

	t.ok(fileExists, 'index.css exists');
	t.end();
});

/**
 * Test if the build is empty
 */
tape('Should not leave footprints', t => {
	const build = resolve(__dirname, 'dist', 'index.css');
	const content = readFileSync(build, 'utf-8');
	t.equal(content, '', 'index.css is empty');
	t.end();
});

/**
 * Test if the docs are generated
 */
tape('Should have docs', t => {
	const docs = resolve(__dirname, 'docs');

	readdir(docs, (err, files) => {
		if (err) {
			throw err;
		}

		const hasDocs = files.length > 0;
		const hasIndex = files.includes('index.html');
		const hasAssets = files.includes('assets');

		t.ok(hasDocs, 'docs are generated');
		t.ok(hasIndex, 'docs/index.html exists');
		t.ok(hasAssets, 'docs/assets/ exists');

		t.end();
	});
});
