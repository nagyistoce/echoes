module.exports = function (grunt) {
	return {
		libs: {
			options: {
				shim: {
					jquery: {
						path: './src/bower_components/jquery/dist/jquery.js',
						exports: 'jQuery'
					},

					bootstrap: {
						path: './src/js/libs/bootstrap/bootstrap.min.js',
						exports: 'bootstrap',
						depends: { jquery: '$' } 
					},

					jqueryui: {
						path: './src/js/libs/jquery/jquery-ui.js',
						exports: null,
						depends: { jquery: '$' } 
					}
 				},
 				alias: [
 					'./src/js/libs/bootstrap/bootstrap.min.js:bootstrap-js',
 					'./src/bower_components/jquery/dist/jquery.js:jquery',
 					'./src/js/libs/jquery/jquery-ui.js:jqueryui',
 					'./src/js/libs/backbone/backbone.cjs.js:backbonejs',
 					'./src/js/fb.js:facebook',
 					'./src/js/libs/environmentVars:vars'
 				],
 				bundleOptions: {
	        		debug: true
			    },
			    transform: [
			    	'jstify'
			    ]
			},
			src: ['./src/js/main.js'],
			dest: 'src/bundle.js'
		}
	}
	//     options: {
	//         transform: [
	//         	'browserify-shim'
	//         	// 'jstify'
	//         ],
	//         alias: [
	        	
	//         ],
	//         bundleOptions: {
	//         	debug: true
	//         },
	//         shim: {
	// 	        jquery: {
	// 	          path: 'src/js/libs/jquery/jquery.js',
	// 	          exports: '$'
	// 	        }
	// 	    }
	//     },
	//     client: {
	//         src: ['src/js/main.js'],
	//         dest: 'src/bundle.js'
	//     }
	// }
}