var config = require("./../gruntConfig.js");
// console.log(config.landing);

module.exports = {

  options: {
    livereload: true
  },

  zone: {
    files: ['content-zone/' + config.zone.name + '/css/*.less', 'content-zone/' + config.zone.name + '/dev/**/*.html', 'content-zone/' + config.zone.name + '/js/*.js'],
    tasks: ['less:zone', 'babel:zone', 'browserify:zone', 'uglify:zone', 'includes:zone', ],
  },

  // hp: {
  //   files: ['homepage/css/*.less', 'homepage/dev/**/*.html', 'homepage/js/*.js'],
  //   tasks: ['less:hp', 'babel:hp', 'browserify:hp', 'uglify:hp', 'includes:hp'],
  // },


  landing: {
    files: ['landing-page/' + config.landing.name + '/css/**/*.less', 'landing-page/' + config.landing.name + '/dev/**/*.html', 'landing-page/' + config.landing.name + '/js/**/*.js'],
    tasks: ['less:landing', 'babel:landing', 'browserify:landing', 'uglify:landing', 'includes:landing',],
  },


};