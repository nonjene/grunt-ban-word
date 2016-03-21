/**
 * Created by rean on 16/3/21.
 */
var grunt = require( 'grunt' );
module.exports = exports = {

    scanWord ( aFileList, filesIgnore, aBanList ) {
        var flagERROR = false;
        var rBanList = new RegExp( aBanList.join('|'), 'g');

        aFileList.forEach( fileDir => {
            if ( grunt.file.match( { matchBase: true }, filesIgnore, fileDir ).length > 0 ) {return}
            var matcher = grunt.file.read( fileDir ).match(rBanList);

            if(matcher && matcher.length>0){
                flagERROR = true;
                console.log('Ban Word Found: "'.red + fileDir.yellow + '" has banned word: '.red + matcher.toString().yellow );
            }
        } );
        return flagERROR;

    }
};