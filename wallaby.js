/*
Sources
https://github.com/wallabyjs/public/issues/1472
https://github.com/thehig/storyshots-css-wallaby
*/

/* eslint-disable no-undef */

module.exports = function(wallaby) {
  // Babel, jest-cli and some other modules may be located under
  // react-scripts/node_modules, so need to let node.js know about it
  var path = require('path');
  process.env.NODE_PATH +=
    path.delimiter +
    path.join(__dirname, 'node_modules') +
    path.delimiter +
    path.join(__dirname, 'node_modules/react-scripts/node_modules');
    // path.delimiter +
    // path.join(wallaby.projectCacheDir, 'src');

  require('module').Module._initPaths();

  // Babel needs this
  process.env.NODE_ENV = 'development';

  const babelCompiler = wallaby.compilers.babel({
    babel: require('@babel/core'),
    presets: ['react-app']
  });

  return {
    files: [
      // Include all files required to run the app
      // Wallaby will copy these files internally to add instrumentation
      // Everything required to run Storybook is required to be able to run storyshots
      'jsconfig.json',
      '.storybook/**/*.js',
      'src/**/*.+(js|jsx|json|snap|css|less|sass|scss|jpg|jpeg|gif|png|svg)',
      // But don't include the tests that will be triggering
      '!src/**/*.test.js'
    ],
    tests: [
      // '!src/spec/storyshots.test.js', // Can be useful to disable the storyshots tests as they are long running
      '!src/spec/screenshots/**/*.*', // Don't try and run screenshots with wallaby
      'src/**/*.test.js'
    ],
    filesWithNoCoverageCalculated: [
      'node_modules/**/*.*',
      '.storybook/**/*.js',
      'src/**/*.stories*.js',

      'src/**/*.spec*.js',
      'src/spec/**/*.*',

      'src/registerServiceWorker.js'
    ],
    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest',

    compilers: {
      '**/*.js?(x)': babelCompiler,
      // 'dot' folders are not included by the above
      '.storybook/**/*.js': babelCompiler
    },

    reportConsoleErrorAsError: true,
    hints: {
      // https://wallabyjs.com/docs/config/coverage.html#stopping-code-coverage-calculation-for-code-blocks-inside-a-file
      ignoreCoverage: /ignore coverage/ // or /istanbul ignore next/, or any RegExp
    },

    setup: wallaby => {
      const jestConfig = require('react-scripts/scripts/utils/createJestConfig')(
        p => require.resolve('react-scripts/' + p)
      );
      Object.keys(jestConfig.transform || {}).forEach(
        k => ~k.indexOf('^.+\\.(js|jsx') && void delete jestConfig.transform[k]
      );
      delete jestConfig.testEnvironment;
      jestConfig.setupTestFrameworkScriptFile =
        '<rootDir>/src/spec/test-setup.js';

      wallaby.testFramework.configure(jestConfig);
    }
  };
};
