module.exports = function(grunt){
  // 読み込むモジュールの設定
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-open');

  // 各タスクの設定
  grunt.initConfig({
    // Compass
    compass: {
      dist: {
        options: {                
          config: 'config.rb'
        }
      }
    },
    
    // Watch
    watch: {
      // options
      options: {
        livereload: true,
        nospawn: true
      },
      // html
      html: {
        files: 'files/*.html',
        tasks: []
      },
      // scss
      sass: {
        files: 'files/_scss/*.scss',
        tasks: ['compass']
      },
      // Java Script
      jslib: {
        files: 'files/js/*.js',
        tasks: []
      }
    },
    
    // Live Reload
    connect: {
      livereload: {
        options: {
          port: 9001
        }
      }
    },
    // gruntコマンド実行時にページをブラウザで開く
    open: {
      server: {
        path: 'http://localhost:<%= connect.livereload.options.port %>'
      }
    }
  });

  // gruntコマンドで実行するタスクの設定
  grunt.registerTask('default', ['connect','open','watch','compass']);
};