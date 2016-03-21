# grunt-ban-word 

扫描项目中的禁用文字

## Getting Started

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [`gruntfile.js`](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-ban-word --save-dev
```

Once the plugin has been installed, it may be enabled inside your `gruntfile.js` with this line:

```js
grunt.loadNpmTasks('grunt-ban-word');
```
Then, add and configure it to your Gruntfile.js:

```js
grunt.initConfig( {
    word:{
        dist:{
            options:{
                banList:["ban_word1","ban_word2","ban_word3"]
            },
            src:["path/to/**/*","!path/to/ignore/**/*"]

        }
    }
} );
```

Run the `grunt word` task:

if hit the banned word, the log will be like:

```bash
$ grunt word

Running "word:dist" (word) task
Ban Word Found: "path/to/foo.html" has banned word: ban_word1,ban_word2
Ban Word Found: "path/to/bar.html" has banned word: ban_word2,ban_word3
Warning: Scan ban word task failed!  Use --force to continue.

Aborted due to warnings.
```
