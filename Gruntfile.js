'use strict';
module.exports = function ( grunt ) {

    grunt.initConfig( {
        word:{
            dist:{
                options:{
                    banList:["ban1 2","ban2","ban3"]
                },
                src:["test/**/*","!test/ignore.html"]

            }
        }
    } );

    grunt.registerMultiTask( "test", function () {

    } );

    grunt.loadTasks('./tasks');
};