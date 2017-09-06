var morgan = require('morgan');

module.exports = function(sails) {

  return {

    /**
     * Default configuration
     *
     * We do this in a function since the configuration key for
     * the hook is itself configurable, so we can't just return
     * an object.
     */
    defaults: {

      requestlogger: {
        // Turn morgan logging on by default in development environment
        // and off for production, using the 'dev' format
        //see: https://github.com/expressjs/morgan#predefined-formats for more formats
        format: 'dev',
        morganOptions: {},
        inDevelopment: true,
        inProduction: false
      }
    },

    routes: {

      before: {

        'all /*': function addRequestLogging (req, res, next) {
          // If the hook has been deactivated, just return
          //Need to define requestlogger manually, since don't have acces to this.configKey
          var loggerSettings = sails.config['requestlogger'];
          var isProduction = process.env.NODE_ENV === 'production';

          if ((isProduction && loggerSettings.inProduction === true) ||
            (!isProduction && loggerSettings.inDevelopment === true)) {
              var logger = morgan(loggerSettings.format, loggerSettings.morganOptions);
              logger(req, res, function (err) {
                if (err) next(err)

                next();
              });
          } else {
            next();
          }
        }
      }
    },

    /**
     * Initialize the hook
     * @param  {Function} cb Callback for when we're done initializing
     */
    initialize: function(cb) {
      // Finally
      cb();
    }

  };
};
