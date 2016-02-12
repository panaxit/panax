/**
 * Kitchensink App Configuration
 */

module.exports = {
	/*
	PanaxDB Configuration
	 */
	db: {
		version: 'Beta_12', // Prefix for some PanaxDB calls
		server: '192.168.0.100',
		database: 'Kitchensink', // Instance can be specified, see Tedious docs
		user: 'sa',
		password: '5ecret',
		driver: 'tedious', // Used by PanaxJS
		options: {
			encrypt: true // Optional
		},
		pool: { // Optional
			max: 10,
			min: 0,
			idelTimeoutMillis: 30000
		},
		connectionTimeout: 30000, // Optional
		requestTimeout: 30000 // Optional
	},
	/*
	PanaxUI Configuration
	 */
	ui: {
		hostname: '192.168.0.101',
		port: 3000,
		username: 'webmaster', // Default PanaxDB username
		password: 'tests' // Default PanaxDB password
	}
};
