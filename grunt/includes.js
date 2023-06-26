var config = require("./../gruntConfig.js");
// console.log(config.landing);

module.exports = {

  options: {
    flatten: true
  },


  zone: {
    files: [
      //content zone toolkit
      {
        cwd: 'content-zone/' + config.zone.name + '/dev',
        src: ['*.html'],
        dest: 'content-zone/' + config.zone.name + '/includes/',
      },
    ],
  },


  // hp: {
  //   files: [
  //     //home toolkit
  //     {
  //       cwd: 'homepage/dev',
  //       src: ['*.html'],
  //       dest: 'homepage/includes/',
  //     },
  //   ],
  // },


  // landing: {
  //   files: [
  //     // landing pages toolkit
  //     {
  //       cwd: 'landing-page/' + config.landing.name + '/dev',
  //       src: ['*.html'],
  //       dest: 'landing-page/' + config.landing.name + '/includes/'
  //     },
  //   ],
  // },


};
