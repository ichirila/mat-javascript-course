exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'http://localhost:8888/',
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    plugins: [{
        package: 'protractor-multiple-cucumber-html-reporter-plugin',
        options:{
        // read the options part for more options
        automaticallyGenerateReport: true,
        removeExistingJsonReportFile: true
        }
        }],
    specs: [
        'features/*.feature'
        ],
    cucumberOpts: {
        require: 'features/step_definitions/*.steps.js',
        tags: false,
        format: 'json:.tmp/results.json',
        //format: 'json:results.json',
        profile: false,
        'no-source': true
        },   
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
        args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
        }
    },
};