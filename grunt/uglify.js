var config = require("./../gruntConfig.js");
// console.log(config.landing);

module.exports = {

  options: {
    compress: true,
    // sourceMap: true
  },

  zone: {
    //dynamic files
    expand: true,
    cwd: 'content-zone/' + config.zone.name + '/js/browserify/',
    src: ['*.js'],
    dest: 'content-zone/' + config.zone.name + '/js/jsmin/',
    ext: '.min.js',
  },

  // hp: {
  //   //dynamic files
  //   expand: true,
  //   cwd: 'homepage/js/browserify/',
  //   src: ['*.js'],
  //   dest: 'homepage/js/jsmin/',
  //   ext: '.min.js',
  // },


  landing: {
    //dynamic files
    expand: true,
    cwd: 'landing-page/' + config.landing.name + '/js/browserify/',
    src: ['*.js'],
    dest: 'landing-page/' + config.landing.name + '/js/jsmin/',
    ext: '.min.js',
  },


};