module.exports = function(grunt) {

    grunt.initConfig({
        shell: {
            exportIcons: {
                command: 'sketchtool export slices rexicons.sketch --output=build/svg'
            }
        },
        webfont: {
            icons: {
                src: 'build/svg/*.svg',
                dest: 'build/',
                destCss: 'build/',
                options: {
                    font: 'rexicons',
                    fontHeight: 96,
                    normalize: false,
                    ascent: 84,
                    descent: 12,
                    destHtml: 'build/',
                    templateOptions: {
                        classPrefix: 'rexicon-'
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-webfont');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('default', [ 'shell:exportIcons', 'webfont:icons' ]);

};
