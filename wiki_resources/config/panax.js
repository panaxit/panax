var path = require('path');

/**
 * Panax Configuration
 */

module.exports = {

	/*
	Instances
	 */
	default_instance: 'Kitchensink',
	instances: {
		'Kitchensink': require('./kitchensink')
	},

	/*
	Enabled GUIs
	 */
	enabled_guis: [ 
		'ng', // First GUI is the default
		'extjs' 
	],

	/*
	Installed GUIs
	 */
	guis: {
		ng: {
			description: 'AngularJS',
			root: path.join(__dirname, '..', 'panaxui-angularjs', 'public')
		}, 
		
		extjs: {
			description: 'ExtJS 5.1',
			root: path.join(__dirname, '..', '..', 'panaxui-extjs'),
			cache: path.join(__dirname, '..', '..', 'panaxui-extjs', 'cache', 'app'),
			other: []
		}
	}
};
