// 实现这个项目的构建任务
const sass = require('sass')
const loadGruntTasks = require('load-grunt-tasks')
module.exports = grunt => {
    grunt.initConfig({
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            main: {
                files: {
                    'dist/assets/styles/main.css': 'src/assets/styles/main.scss'
                }
            }
        },
        babel: {
            options: {
                sourceMap: true,
                presets: ['@babel/preset-env']
            },
            main: {
                files: {
                    'dist/assets/scripts/main.js': 'src/assets/scripts/main.js'
                }
            }
        },
        watch:{
            js:{
                files:['src/assets/scripts/*.js'],
                tasks:['babel']
            },
            css:{
                files:['src/assets/styles/*.scss'],
                tasks:['sass']
            },
        } 

    })
    // grunt.loadNpmTasks('grunt-sass')    加载一个任务
    loadGruntTasks(grunt)  //自动加载所有的grunt插件
    //建议使用watch之前先编译一遍sass babel  在进行监听文件的变化
    grunt.registerTask('default',['sass','babel','watch'])  
}