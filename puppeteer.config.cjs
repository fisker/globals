'use strict';

// Will download when execute
module.exports = {
	skipDownload: true,
	chrome: {
		// Bug? `latest` version can't be launched
		// version: 'latest',
		skipDownload: false,
	},
	'chrome-headless-shell': {
		// Version: 'latest',
		skipDownload: false,
	},
	firefox: {
		// Version: 'latest',
		skipDownload: false,
	},
};
