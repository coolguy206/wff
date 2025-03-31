var config = require("./../gruntConfig.js");
// console.log(config.promo.date);

module.exports = {

  options: {
    // sourceMap: true,
    presets: ['@babel/preset-env']
  },

  zone: {
    files: [{
      expand: true,
      cwd: 'content-zone/' + config.zone.name + '/js/',
      src: '*.js',
      dest: 'content-zone/' + config.zone.name + '/js/babel/'
    }]
  },

  // hp: {
  //   files: [{
  //     expand: true,
  //     cwd: 'homepage/js/',
  //     src: '*.js',
  //     dest: 'homepage/js/babel/'
  //   }]
  // },

  landing: {
    files: [{
      expand: true,
      cwd: 'landing-page/' + config.landing.name + '/js/',
      src: '*.js',
      dest: 'landing-page/' + config.landing.name + '/js/babel/'
    }]
  },

};