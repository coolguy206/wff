var config = require("./../gruntConfig.js");
// console.log(config.promo.date);

module.exports = {

  zone: {
    files: [{
      expand: true,
      cwd: 'content-zone/' + config.zone.name + '/js/babel/',
      src: '*.js',
      dest: 'content-zone/' + config.zone.name + '/js/browserify/'
    }]
  },


  // hp: {
  //   files: [{
  //     expand: true,
  //     cwd: 'homepage/js/babel/',
  //     src: '*.js',
  //     dest: 'homepage/js/browserify/'
  //   }]
  // },

  // landing: {
  //   files: [{
  //     expand: true,
  //     cwd: 'landing-page/' + config.landing.name + '/js/babel/',
  //     src: '*.js',
  //     dest: 'landing-page/' + config.landing.name + '/js/browserify/'
  //   }]
  // },


};