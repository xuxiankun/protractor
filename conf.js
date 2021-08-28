exports.config = {
    framework: 'jasmine',
    seleniumAddress: process.env.SELENIUM_URL|| 'http://localhost:4444/wd/hub',
    specs: ['spec/*_spec.js'],
    capabilities: {
        browserName: 'chrome'
    },
    SELENIUM_PROMISE_MANAGER: false,
    jasmineNodeOpts: {
        // If true, print colors to the terminal.
        showColors: true,
        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 30000,
        // Function called to print jasmine results.
        //print: function() {},
        // If set, only execute specs whose names match the pattern, which is
        // internally compiled to a RegExp.
        //grep: 'pattern',
        // Inverts 'grep' matches
        //invertGrep: false
    }
  }