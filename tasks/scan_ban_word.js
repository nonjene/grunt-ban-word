/**
 *
 */

var util = require('../lib/util');

module.exports = function ( grunt ) {

    grunt.registerMultiTask( "word", function () {

        var opt = this.options();
        var filesIgnore = [ 'node_modules/**', '.*/**', '.*', 'Gruntfile.js' ];



        var flagError = util.scanWord( grunt.file.expand( { filter: 'isFile' }, this.filesSrc ), filesIgnore,  opt.banList);
        if( flagError){
            throw new Error( 'Scan ban word task failed! ' );
        }
    } );

};