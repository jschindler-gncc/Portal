const { withModuleFederation } = require('@nx/angular/module-federation');
const config = require('./module-federation.config');
module.exports = withModuleFederation(config).then((webpackConfigFunc) =>
  webpackConfigFunc({
    output: {
      scriptType: 'text/javascript',
    },
  }),
);
