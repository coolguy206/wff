var config = require("./../gruntConfig.js");
// console.log(config.zone.name);


module.exports = {

    options: {
        // sourceMap: true,
        // compress: true,
    },

    zone: {
        expand: true,
        cwd: 'content-zone/' + config.zone.name + '/css/',
        src: '*.less',
        dest: 'content-zone/' + config.zone.name + '/css/',
        ext: '.css',
    },


    // hp: {
    //     expand: true,
    //     cwd: 'homepage/css/',
    //     src: '*.less',
    //     dest: 'homepage/css/',
    //     ext: '.css',
    // },


    landing: {
        expand: true,
        cwd: 'landing-page/' + config.landing.name + '/css/',
        src: '**/*.less',
        dest: 'landing-page/' + config.landing.name + '/css/',
        ext: '.css',
    },


};
