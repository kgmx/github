module.exports = function(grunt) {

  grunt.initConfig({
    // grunt-contrib-watch
    watch: {
      dev: {
        files: ["index.php"]
      },
      compass: {
        files: ["src/sass/*.scss"],
        tasks: ["compass"]
      }
    },
    // grunt-contrib-compass
    compass: {
      dev: {
        options: {
          config: 'src/config.rb',
          sassDir: 'src/sass',
          cssDir: 'assets/css'
        }
      }
    }
  });

  //使うプラグインの読み込み
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

};
