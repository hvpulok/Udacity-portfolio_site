module.exports = function(grunt) {

    grunt.initConfig({
        // code for responsive image generation starts here
        responsive_images: {
            dev: {
                options: {
                    engine: 'im',
                    sizes: [{
                        name: "small",
                        width: 480,
                        quality: 80
                    }, {
                        name: "medium",
                        width: 1024,
                        quality: 80
                    }, {
                        name: "large",
                        width: 1440,
                        quality: 80
                    }]
                },

                /*
                You don't need to change this part if you don't change
                the directory structure.
                */
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'public/images/src/',
                    dest: 'public/images/optimized/'
                }]
            }
        },

        /* Clear out the images directory if it exists */
        clean: {
            dev: {
                src: ['public/images/optimized'],
            },
        },

        /* Generate the images directory if it is missing */
        mkdir: {
            dev: {
                options: {
                    create: ['public/images/optimized']
                },
            },
        },

        /* Copy the "fixed" images that don't go through processing into the images/directory */
        // copy: {
        //     dev: {
        //         files: [{
        //             expand: true,
        //             src: 'public/images_src/fixed/*.{gif,jpg,png}',
        //             dest: 'images/'
        //         }]
        //     },
        // },
    });
    // code for responsive image generation ends here
    
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);
    // grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);
};