/*
 * No Node Server
*/


module.exports = function(grunt) {
    // Load all grunt npm tasks beginning with 'grunt-'
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch : {
            options: {
                livereload: true,
                interrupt: true
            },
            scripts: {
                files: ['**/*.js'],
                task: ['connect']
            }
        },
        uglify: {

        },
        connect: {
            options: {
                port: 88,
                hostname: 'phpfoodorder.com',
                base: '.'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        console.log('reload');
                        return [
                            require('connect-livereload')(),
                            //mountFolder(connect, '.')
                        ];
                    }
                }
            }
        },
    });


    // Load Plugins
    //grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt.loadNpmTasks('grunt-contrib-connect');

    // Define Tasks
    grunt.registerTask('default',['watch:scripts']);
}
