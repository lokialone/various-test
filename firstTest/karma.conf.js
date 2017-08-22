module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'chai', 'fixture'],
        files: [
            'lib/*.js',
            'test/*.js',
            'test/*.html'
        ],
        //配置项写上后就可以不用手动打开浏览器运行
        browsers: ['PhantomJS'],
        preprocessors: {
            'lib/*.js': 'coverage',
            'test/*.html': ['html2js'] 
        },
        reporters: ['progress', 'coverage']
    })
}