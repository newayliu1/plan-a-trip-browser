"use strict";



define('plan-a-trip-browser/adapters/application', ['exports', 'plan-a-trip-browser/config/environment', 'active-model-adapter', 'ember'], function (exports, _planATripBrowserConfigEnvironment, _activeModelAdapter, _ember) {
  exports['default'] = _activeModelAdapter['default'].extend({
    host: _planATripBrowserConfigEnvironment['default'].apiHost,

    auth: _ember['default'].inject.service(),

    headers: _ember['default'].computed('auth.credentials.token', {
      get: function get() {
        var headers = {};
        var token = this.get('auth.credentials.token');
        if (token) {
          headers.Authorization = 'Token token=' + token;
        }

        return headers;
      }
    })
  });
});
define('plan-a-trip-browser/app', ['exports', 'ember', 'plan-a-trip-browser/resolver', 'ember-load-initializers', 'plan-a-trip-browser/config/environment'], function (exports, _ember, _planATripBrowserResolver, _emberLoadInitializers, _planATripBrowserConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _planATripBrowserConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _planATripBrowserConfigEnvironment['default'].podModulePrefix,
    Resolver: _planATripBrowserResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _planATripBrowserConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('plan-a-trip-browser/components/change-password-form', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'form',
    classNames: ['form-horizontal'],

    passwords: {},

    init: function init() {
      this._super.apply(this, arguments);
      this.set('passwords', {});
    },

    actions: {
      submit: function submit() {
        this.sendAction('submit', this.get('passwords'));
      },

      reset: function reset() {
        this.set('passwords', {});
        this.sendAction('reset');
      }
    }
  });
});
define('plan-a-trip-browser/components/create-attraction-input', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    init: function init() {
      this._super.apply(this, arguments);
      this.set('newItem', { timeSpend: 120 });
    },
    actions: {
      save: function save() {
        var data = this.get('newItem');
        data.trip = this.get('trip');
        this.sendAction('save', data);
        this.set('newItem.name', '');
        this.set('newItem.address', '');
        this.set('newItem.notes', '');
        this.set('newItem.timeSpend', 120);
      },
      cancel: function cancel() {
        this.sendAction('cancel');
        this.set('newItem.name', '');
        this.set('newItem.address', '');
        this.set('newItem.notes', '');
        this.set('newItem.timeSpend', 120);
      }
    }
  });
});
define('plan-a-trip-browser/components/edit-attraction', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    actions: {
      save: function save() {
        this.sendAction('save', this.get('attraction'));
      },
      cancel: function cancel() {
        console.log('cancel');
        this.get('attraction').rollbackAttributes();
        this.sendAction('cancel');
      }
    }
  });
});
define('plan-a-trip-browser/components/email-input', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'div',
    classNames: ['form-group']
  });
});
define('plan-a-trip-browser/components/flash-message', ['exports', 'ember-cli-flash/components/flash-message'], function (exports, _emberCliFlashComponentsFlashMessage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFlashComponentsFlashMessage['default'];
    }
  });
});
define('plan-a-trip-browser/components/hamburger-menu', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'button',
    classNames: ['navbar-toggle', 'collapsed'],
    attributeBindings: ['toggle:data-toggle', 'target:data-target', 'expanded:aria-expanded'],
    toggle: 'collapse',
    target: '#navigation',
    expanded: false
  });
});
define('plan-a-trip-browser/components/home-page', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    auth: _ember['default'].inject.service(),

    user: _ember['default'].computed.alias('auth.credentials.email'),
    isAuthenticated: _ember['default'].computed.alias('auth.isAuthenticated')
  });
});
define('plan-a-trip-browser/components/my-application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    auth: _ember['default'].inject.service(),

    user: _ember['default'].computed.alias('auth.credentials.email'),
    isAuthenticated: _ember['default'].computed.alias('auth.isAuthenticated'),

    actions: {
      signOut: function signOut() {
        this.sendAction('signOut');
      }
    }
  });
});
define('plan-a-trip-browser/components/navbar-header', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'div',
    classNames: ['navbar-header']
  });
});
define('plan-a-trip-browser/components/new-trip-input', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    actions: {
      save: function save() {
        this.sendAction('save', this.get('trip'));
      },
      cancel: function cancel() {
        this.get('trip').rollbackAttributes();
        this.sendAction('cancel');
      }
    }
  });
});
define('plan-a-trip-browser/components/password-confirmation-input', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'div',
    classNames: ['form-group']
  });
});
define('plan-a-trip-browser/components/password-input', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'div',
    classNames: ['form-group']
  });
});
define('plan-a-trip-browser/components/sign-in-form', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'form',
    classNames: ['form-horizontal'],

    actions: {
      submit: function submit() {
        this.sendAction('submit', this.get('credentials'));
      },

      reset: function reset() {
        this.set('credentials', {});
      }
    }
  });
});
define('plan-a-trip-browser/components/sign-up-form', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'form',
    classNames: ['form-horizontal'],

    credentials: {},

    init: function init() {
      this._super.apply(this, arguments);
      this.set('credentials', {});
    },

    actions: {
      submit: function submit() {
        this.sendAction('submit', this.get('credentials'));
      },

      reset: function reset() {
        this.set('credentials', {});
      }
    }
  });
});
define('plan-a-trip-browser/components/trip-item', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    actions: {
      'delete': function _delete() {
        return this.sendAction('delete', this.get('trip'));
      },
      edit: function edit() {
        this.sendAction('edit', this.get('trip'));
      }
    },
    afterSomeEvent: function afterSomeEvent() {
      this.flashMessage({
        type: 'warning',
        action: 'delete', // Run when message is
        content: '<strong>Click here</strong> to cancel', // Pass HTML
        duration: 5000 });
    }
  });
});
// Milliseconds to show the message for
define('plan-a-trip-browser/components/user-info', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('plan-a-trip-browser/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('plan-a-trip-browser/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('plan-a-trip-browser/flash/object', ['exports', 'ember-cli-flash/flash/object'], function (exports, _emberCliFlashFlashObject) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFlashFlashObject['default'];
    }
  });
});
define('plan-a-trip-browser/helpers/app-version', ['exports', 'ember', 'plan-a-trip-browser/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _planATripBrowserConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _planATripBrowserConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('plan-a-trip-browser/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('plan-a-trip-browser/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define("plan-a-trip-browser/initializers/active-model-adapter", ["exports", "active-model-adapter", "active-model-adapter/active-model-serializer"], function (exports, _activeModelAdapter, _activeModelAdapterActiveModelSerializer) {
  exports["default"] = {
    name: 'active-model-adapter',
    initialize: function initialize() {
      var application = arguments[1] || arguments[0];
      application.register('adapter:-active-model', _activeModelAdapter["default"]);
      application.register('serializer:-active-model', _activeModelAdapterActiveModelSerializer["default"]);
    }
  };
});
define('plan-a-trip-browser/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'plan-a-trip-browser/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _planATripBrowserConfigEnvironment) {
  var _config$APP = _planATripBrowserConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('plan-a-trip-browser/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('plan-a-trip-browser/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('plan-a-trip-browser/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('plan-a-trip-browser/initializers/export-application-global', ['exports', 'ember', 'plan-a-trip-browser/config/environment'], function (exports, _ember, _planATripBrowserConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_planATripBrowserConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _planATripBrowserConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_planATripBrowserConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('plan-a-trip-browser/initializers/flash-messages', ['exports', 'ember', 'plan-a-trip-browser/config/environment'], function (exports, _ember, _planATripBrowserConfigEnvironment) {
  exports.initialize = initialize;
  var deprecate = _ember['default'].deprecate;

  var merge = _ember['default'].assign || _ember['default'].merge;
  var INJECTION_FACTORIES_DEPRECATION_MESSAGE = '[ember-cli-flash] Future versions of ember-cli-flash will no longer inject the service automatically. Instead, you should explicitly inject it into your Route, Controller or Component with `Ember.inject.service`.';
  var addonDefaults = {
    timeout: 3000,
    extendedTimeout: 0,
    priority: 100,
    sticky: false,
    showProgress: false,
    type: 'info',
    types: ['success', 'info', 'warning', 'danger', 'alert', 'secondary'],
    injectionFactories: ['route', 'controller', 'view', 'component'],
    preventDuplicates: false
  };

  function initialize() {
    var application = arguments[1] || arguments[0];

    var _ref = _planATripBrowserConfigEnvironment['default'] || {};

    var flashMessageDefaults = _ref.flashMessageDefaults;

    var _ref2 = flashMessageDefaults || [];

    var injectionFactories = _ref2.injectionFactories;

    var options = merge(addonDefaults, flashMessageDefaults);
    var shouldShowDeprecation = !(injectionFactories && injectionFactories.length);

    application.register('config:flash-messages', options, { instantiate: false });
    application.inject('service:flash-messages', 'flashMessageDefaults', 'config:flash-messages');

    deprecate(INJECTION_FACTORIES_DEPRECATION_MESSAGE, shouldShowDeprecation, {
      id: 'ember-cli-flash.deprecate-injection-factories',
      until: '2.0.0'
    });

    options.injectionFactories.forEach(function (factory) {
      application.inject(factory, 'flashMessages', 'service:flash-messages');
    });
  }

  exports['default'] = {
    name: 'flash-messages',
    initialize: initialize
  };
});
define('plan-a-trip-browser/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('plan-a-trip-browser/initializers/local-storage-adapter', ['exports', 'ember-local-storage/initializers/local-storage-adapter'], function (exports, _emberLocalStorageInitializersLocalStorageAdapter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLocalStorageInitializersLocalStorageAdapter['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberLocalStorageInitializersLocalStorageAdapter.initialize;
    }
  });
});
define('plan-a-trip-browser/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('plan-a-trip-browser/initializers/text-field', ['exports', 'ember'], function (exports, _ember) {
  exports.initialize = initialize;

  function initialize() {
    _ember['default'].TextField.reopen({
      classNames: ['form-control']
    });
  }

  exports['default'] = {
    name: 'text-field',
    initialize: initialize
  };
});
define('plan-a-trip-browser/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("plan-a-trip-browser/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('plan-a-trip-browser/models/attraction', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    name: _emberData['default'].attr('string'),
    address: _emberData['default'].attr('string'),
    timeSpend: _emberData['default'].attr('number'),
    notes: _emberData['default'].attr('string'),
    trip: _emberData['default'].belongsTo('trip')
  });
});
define('plan-a-trip-browser/models/trip', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    name: _emberData['default'].attr('string'),
    user: _emberData['default'].belongsTo('user'),
    attractions: _emberData['default'].hasMany('attraction')
  });
});
define('plan-a-trip-browser/models/user', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    email: _emberData['default'].attr('string'),
    trips: _emberData['default'].hasMany('trip')
  });
});
define('plan-a-trip-browser/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('plan-a-trip-browser/router', ['exports', 'ember', 'plan-a-trip-browser/config/environment'], function (exports, _ember, _planATripBrowserConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _planATripBrowserConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('sign-up');
    this.route('sign-in');
    this.route('change-password');
    this.route('trips', function () {
      this.route('new');
    });
    this.route('trip', { path: '/trips/:trip_id' }, function () {
      this.route('edit');
      this.route('attraction', { path: '/:attraction_id' }, function () {
        this.route('edit');
      });
      this.route('new');
    });
  });

  exports['default'] = Router;
});
define('plan-a-trip-browser/routes/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    auth: _ember['default'].inject.service(),
    flashMessages: _ember['default'].inject.service(),

    // model () {
    // let id = this.get('auth').get('credentials').get('id');
    // return this.get('store').find('user', id);
    // },

    actions: {
      signOut: function signOut() {
        var _this = this;

        this.get('auth').signOut().then(function () {
          return _this.get('store').unloadAll();
        }).then(function () {
          return _this.transitionTo('sign-in');
        }).then(function () {
          _this.get('flashMessages').warning('You have been signed out.');
        })['catch'](function () {
          _this.get('flashMessages').danger('There was a problem. Are you sure you\'re signed-in?');
        });
      },

      error: function error(reason) {
        var unauthorized = reason.errors && reason.errors.some(function (error) {
          return error.status === '401';
        });

        if (unauthorized) {
          this.get('flashMessages').danger('You must be authenticated to access this page.');
          this.transitionTo('/sign-in');
        } else {
          this.get('flashMessages').danger('There was a problem. Please try again.');
        }

        return false;
      }
    }
  });
});
define('plan-a-trip-browser/routes/change-password', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    auth: _ember['default'].inject.service(),
    flashMessages: _ember['default'].inject.service(),

    actions: {
      changePassword: function changePassword(passwords) {
        var _this = this;

        this.get('auth').changePassword(passwords).then(function () {
          return _this.get('auth').signOut();
        }).then(function () {
          return _this.transitionTo('sign-in');
        }).then(function () {
          _this.get('flashMessages').success('Successfully changed your password!');
        }).then(function () {
          _this.get('flashMessages').warning('You have been signed out.');
        })['catch'](function () {
          _this.get('flashMessages').danger('There was a problem. Please try again.');
        });
      },
      cancel: function cancel() {
        this.transitionTo('application');
      }
    }
  });
});
define('plan-a-trip-browser/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.get('store').findAll('trip');
    }
  });
});
define('plan-a-trip-browser/routes/sign-in', ['exports', 'ember', 'rsvp'], function (exports, _ember, _rsvp) {
  exports['default'] = _ember['default'].Route.extend({
    auth: _ember['default'].inject.service(),
    flashMessages: _ember['default'].inject.service(),

    model: function model() {
      return _rsvp['default'].Promise.resolve({});
    },

    actions: {
      signIn: function signIn(credentials) {
        var _this = this;

        return this.get('auth').signIn(credentials).then(function () {
          return _this.transitionTo('application');
        }).then(function () {
          return _this.get('flashMessages').success('Thanks for signing in!');
        })['catch'](function () {
          _this.get('flashMessages').danger('There was a problem. Please try again.');
        });
      }
    }
  });
});
define('plan-a-trip-browser/routes/sign-up', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    auth: _ember['default'].inject.service(),
    flashMessages: _ember['default'].inject.service(),

    actions: {
      signUp: function signUp(credentials) {
        var _this = this;

        this.get('auth').signUp(credentials).then(function () {
          return _this.get('auth').signIn(credentials);
        }).then(function () {
          return _this.transitionTo('application');
        }).then(function () {
          _this.get('flashMessages').success('Successfully signed-up! You have also been signed-in.');
        })['catch'](function () {
          _this.get('flashMessages').danger('There was a problem. Please try again.');
        });
      }
    }
  });
});
define('plan-a-trip-browser/routes/trip', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return this.get('store').findRecord('trip', params.trip_id);
    },
    actions: {
      'delete': function _delete(attraction) {
        attraction.destroyRecord();
      }
    }
  });
});
define('plan-a-trip-browser/routes/trip/attraction', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('plan-a-trip-browser/routes/trip/attraction/edit', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    flashMessages: _ember['default'].inject.service(),
    actions: {
      editAttraction: function editAttraction(attraction) {
        var _this = this;

        attraction.save().then(function () {
          return _this.transitionTo('trip');
        })['catch'](function () {
          attraction.rollbackAttributes();
          _this.get('flashMessages').danger('Time speed has to be numbers. Please try again.');
        });
      },
      cancel: function cancel() {
        history.back();
      }
    }
  });
});
define('plan-a-trip-browser/routes/trip/edit', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    actions: {
      editTrip: function editTrip(trip) {
        var _this = this;

        trip.save().then(function () {
          return _this.transitionTo('trips');
        });
      },
      cancel: function cancel() {
        history.back();
      }
    }
  });
});
define('plan-a-trip-browser/routes/trip/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('plan-a-trip-browser/routes/trip/new', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    flashMessages: _ember['default'].inject.service(),
    actions: {
      createAttraction: function createAttraction(data) {
        var _this = this;

        var attraction = this.get('store').createRecord('attraction', data);
        attraction.save().then(function () {
          return _this.transitionTo('trip');
        })['catch'](function () {
          attraction.destroyRecord();
          _this.get('flashMessages').danger('Attraction name and address can not be empty. And Time speed has to be numbers. Please try again.');
        });
      },
      cancel: function cancel() {
        history.back();
      }
    }
  });
});
define('plan-a-trip-browser/routes/trips', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.get('store').findAll('trip');
    },
    actions: {
      editTrip: function editTrip(trip) {
        this.transitionTo('trip.edit', trip);
      },
      deleteTrip: function deleteTrip(trip) {
        trip.destroyRecord();
      }
    }
  });
});
define('plan-a-trip-browser/routes/trips/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('plan-a-trip-browser/routes/trips/new', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.get('store').createRecord('trip', {});
    },
    actions: {
      createTrip: function createTrip(trip) {
        var _this = this;

        trip.save().then(function () {
          return _this.transitionTo('trips');
        });
      },
      cancel: function cancel() {
        history.back();
      }
    }
  });
});
define('plan-a-trip-browser/routes/users', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.get('store').findAll('user');
    }
  });
});
define('plan-a-trip-browser/serializers/application', ['exports', 'active-model-adapter'], function (exports, _activeModelAdapter) {
  exports['default'] = _activeModelAdapter.ActiveModelSerializer.extend({});
});
define('plan-a-trip-browser/services/ajax', ['exports', 'ember', 'ember-ajax/services/ajax', 'plan-a-trip-browser/config/environment'], function (exports, _ember, _emberAjaxServicesAjax, _planATripBrowserConfigEnvironment) {
  exports['default'] = _emberAjaxServicesAjax['default'].extend({
    host: _planATripBrowserConfigEnvironment['default'].apiHost,

    auth: _ember['default'].inject.service(),
    headers: _ember['default'].computed('auth.credentials.token', {
      get: function get() {
        var headers = {};
        var token = this.get('auth.credentials.token');
        if (token) {
          headers.Authorization = 'Token token=' + token;
        }

        return headers;
      }
    })
  });
});
define('plan-a-trip-browser/services/auth', ['exports', 'ember', 'ember-local-storage'], function (exports, _ember, _emberLocalStorage) {
  exports['default'] = _ember['default'].Service.extend({
    ajax: _ember['default'].inject.service(),
    credentials: (0, _emberLocalStorage.storageFor)('auth'),
    isAuthenticated: _ember['default'].computed.bool('credentials.token'),

    signUp: function signUp(credentials) {
      return this.get('ajax').post('/sign-up', {
        data: {
          credentials: {
            email: credentials.email,
            password: credentials.password,
            password_confirmation: credentials.passwordConfirmation
          }
        }
      });
    },

    signIn: function signIn(credentials) {
      var _this = this;

      return this.get('ajax').post('/sign-in', {
        data: {
          credentials: {
            email: credentials.email,
            password: credentials.password
          }
        }
      }).then(function (result) {
        _this.get('credentials').set('id', result.user.id);
        _this.get('credentials').set('email', result.user.email);
        _this.get('credentials').set('token', result.user.token);
      });
    },

    changePassword: function changePassword(passwords) {
      return this.get('ajax').patch('/change-password/' + this.get('credentials.id'), {
        data: {
          passwords: {
            old: passwords.previous,
            'new': passwords.next
          }
        }
      });
    },

    signOut: function signOut() {
      var _this2 = this;

      return this.get('ajax').del('/sign-out/' + this.get('credentials.id'))['finally'](function () {
        return _this2.get('credentials').reset();
      });
    }
  });
});
define('plan-a-trip-browser/services/flash-messages', ['exports', 'ember-cli-flash/services/flash-messages'], function (exports, _emberCliFlashServicesFlashMessages) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFlashServicesFlashMessages['default'];
    }
  });
});
define('plan-a-trip-browser/storages/auth', ['exports', 'ember-local-storage/local/object'], function (exports, _emberLocalStorageLocalObject) {
  exports['default'] = _emberLocalStorageLocalObject['default'].extend({});
});
define("plan-a-trip-browser/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "ij0688hp", "block": "{\"statements\":[[\"append\",[\"helper\",[\"my-application\"],null,[[\"signOut\"],[\"signOut\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "plan-a-trip-browser/templates/application.hbs" } });
});
define("plan-a-trip-browser/templates/change-password", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "+qyoI6s3", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Change Password\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"helper\",[\"change-password-form\"],null,[[\"submit\",\"reset\"],[\"changePassword\",\"cancel\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "plan-a-trip-browser/templates/change-password.hbs" } });
});
define("plan-a-trip-browser/templates/components/change-password-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "4u9gmirC", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"previous\"],[\"flush-element\"],[\"text\",\"Old Password\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"id\",\"placeholder\",\"value\"],[\"password\",\"form-control\",\"previous\",\"Old password\",[\"get\",[\"passwords\",\"previous\"]]]]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"next\"],[\"flush-element\"],[\"text\",\"New Password\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"id\",\"placeholder\",\"value\"],[\"password\",\"form-control\",\"next\",\"New password\",[\"get\",[\"passwords\",\"next\"]]]]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"submit\"]],[\"flush-element\"],[\"text\",\"\\n  Change Password\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-default\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"reset\"]],[\"flush-element\"],[\"text\",\"\\n  Cancel\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "plan-a-trip-browser/templates/components/change-password-form.hbs" } });
});
define("plan-a-trip-browser/templates/components/create-attraction-input", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "54lYgV78", "block": "{\"statements\":[[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Create An New Attraction\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"form\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"name\"],[\"flush-element\"],[\"text\",\"Attraction Name\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"id\",\"value\",\"maxlength\"],[\"name\",[\"get\",[\"newItem\",\"name\"]],50]]],false],[\"text\",\"\\n  \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"address\"],[\"flush-element\"],[\"text\",\"Address\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"id\",\"value\",\"maxlength\"],[\"address\",[\"get\",[\"newItem\",\"address\"]],50]]],false],[\"text\",\"\\n  \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"time\"],[\"static-attr\",\"type\",\"number\"],[\"flush-element\"],[\"text\",\"Time Spend\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"id\",\"value\",\"maxlength\"],[\"time\",[\"get\",[\"newItem\",\"timeSpend\"]],50]]],false],[\"text\",\"\\n  \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"notes\"],[\"flush-element\"],[\"text\",\"Notes\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"id\",\"value\",\"maxlength\"],[\"notes\",[\"get\",[\"newItem\",\"notes\"]],100]]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-xs btn-warning\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"save\"]],[\"flush-element\"],[\"text\",\"Submit\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-xs btn-danger\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"cancel\"]],[\"flush-element\"],[\"text\",\"Cancel\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "plan-a-trip-browser/templates/components/create-attraction-input.hbs" } });
});
define("plan-a-trip-browser/templates/components/edit-attraction", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "IOMdsTpj", "block": "{\"statements\":[[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"attraction\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"attraction\",\"address\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"form\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"time\"],[\"static-attr\",\"type\",\"number\"],[\"flush-element\"],[\"text\",\"Time Spend\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"id\",\"value\",\"maxlength\"],[\"time\",[\"get\",[\"attraction\",\"timeSpend\"]],50]]],false],[\"text\",\"\\n  \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"notes\"],[\"flush-element\"],[\"text\",\"Notes\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"id\",\"value\",\"maxlength\"],[\"notes\",[\"get\",[\"attraction\",\"notes\"]],100]]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-warning btn-xs\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"save\"]],[\"flush-element\"],[\"text\",\"Submit\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-xs btn-danger\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"cancel\"]],[\"flush-element\"],[\"text\",\"Cancel\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "plan-a-trip-browser/templates/components/edit-attraction.hbs" } });
});
define("plan-a-trip-browser/templates/components/email-input", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "cG7qYu23", "block": "{\"statements\":[[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"email\"],[\"flush-element\"],[\"text\",\"Email\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"id\",\"placeholder\",\"value\"],[\"email\",\"email\",\"Email\",[\"get\",[\"email\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "plan-a-trip-browser/templates/components/email-input.hbs" } });
});
define("plan-a-trip-browser/templates/components/hamburger-menu", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "ePjljblp", "block": "{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"sr-only\"],[\"flush-element\"],[\"text\",\"Toggle navigation\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "plan-a-trip-browser/templates/components/hamburger-menu.hbs" } });
});
define("plan-a-trip-browser/templates/components/home-page", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "pP6TKZlz", "block": "{\"statements\":[[\"block\",[\"unless\"],[[\"get\",[\"isAuthenticated\"]]],null,3,2]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"MY TRIPS\"]],\"locals\":[]},{\"statements\":[[\"text\",\"CREATE NEW TRIPS\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"user-info\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"user-info\"],null,[[\"user\",\"trips\"],[[\"get\",[\"user\"]],[\"get\",[\"trips\"]]]]],false],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"trips.new\"],[[\"class\"],[\"btn btn-warning\"]],1],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"trips\"],[[\"class\"],[\"btn btn-info\"]],0],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Please SIGN IN Or SIGN UP To Star Your Journal!!!\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "plan-a-trip-browser/templates/components/home-page.hbs" } });
});
define("plan-a-trip-browser/templates/components/my-application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Qxc1Km+T", "block": "{\"statements\":[[\"open-element\",\"nav\",[]],[\"static-attr\",\"class\",\"navbar nav-primary\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container-fluid\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"unknown\",[\"navbar-header\"]],false],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"collapse navbar-collapse\"],[\"static-attr\",\"id\",\"navigation\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"nav navbar-nav navbar-right\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"isAuthenticated\"]]],null,5,3],[\"text\",\"      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"each\"],[[\"get\",[\"flashMessages\",\"queue\"]]],null,0],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-8 col-md-offset-2\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"append\",[\"helper\",[\"flash-message\"],null,[[\"flash\"],[[\"get\",[\"flash\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[\"flash\"]},{\"statements\":[[\"text\",\"Sign In\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Sign Up\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"sign-up\"],null,2],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"sign-in\"],null,1],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Change Password\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"change-password\"],null,4],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"signOut\"]],[\"flush-element\"],[\"text\",\"Sign Out\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "plan-a-trip-browser/templates/components/my-application.hbs" } });
});
define("plan-a-trip-browser/templates/components/navbar-header", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "ODsC84RT", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"hamburger-menu\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "plan-a-trip-browser/templates/components/navbar-header.hbs" } });
});
define("plan-a-trip-browser/templates/components/new-trip-input", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "SeZ4Iqm/", "block": "{\"statements\":[[\"open-element\",\"form\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"input\"],null,[[\"class\",\"value\",\"maxlength\"],[\"form-goup\",[\"get\",[\"trip\",\"name\"]],50]]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-warning btn-xs\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"save\"]],[\"flush-element\"],[\"text\",\"Submit\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-xs btn-danger\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"cancel\"]],[\"flush-element\"],[\"text\",\"Cancel\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "plan-a-trip-browser/templates/components/new-trip-input.hbs" } });
});
define("plan-a-trip-browser/templates/components/password-confirmation-input", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "dI61O0tV", "block": "{\"statements\":[[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"password-confirmation\"],[\"flush-element\"],[\"text\",\"Password Confirmation\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"id\",\"placeholder\",\"value\"],[\"password\",\"password-confirmation\",\"Password Confirmation\",[\"get\",[\"password\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "plan-a-trip-browser/templates/components/password-confirmation-input.hbs" } });
});
define("plan-a-trip-browser/templates/components/password-input", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "5IrxbJgp", "block": "{\"statements\":[[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"kind\"],[\"flush-element\"],[\"text\",\"Password\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"id\",\"placeholder\",\"value\"],[\"password\",\"password\",\"Password\",[\"get\",[\"password\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "plan-a-trip-browser/templates/components/password-input.hbs" } });
});
define("plan-a-trip-browser/templates/components/sign-in-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "XghWziC3", "block": "{\"statements\":[[\"append\",[\"helper\",[\"email-input\"],null,[[\"email\"],[[\"get\",[\"credentials\",\"email\"]]]]],false],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"password-input\"],null,[[\"password\"],[[\"get\",[\"credentials\",\"password\"]]]]],false],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"submit\"]],[\"flush-element\"],[\"text\",\"\\n  Sign In\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-default\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"reset\"]],[\"flush-element\"],[\"text\",\"\\n  Cancel\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "plan-a-trip-browser/templates/components/sign-in-form.hbs" } });
});
define("plan-a-trip-browser/templates/components/sign-up-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "drpYXQWs", "block": "{\"statements\":[[\"append\",[\"helper\",[\"email-input\"],null,[[\"email\"],[[\"get\",[\"credentials\",\"email\"]]]]],false],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"password-input\"],null,[[\"password\"],[[\"get\",[\"credentials\",\"password\"]]]]],false],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"password-confirmation-input\"],null,[[\"password\"],[[\"get\",[\"credentials\",\"passwordConfirmation\"]]]]],false],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"submit\"]],[\"flush-element\"],[\"text\",\"\\n  Sign Up\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-default\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"reset\"]],[\"flush-element\"],[\"text\",\"\\n  Cancel\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "plan-a-trip-browser/templates/components/sign-up-form.hbs" } });
});
define("plan-a-trip-browser/templates/components/trip-item", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Mpbuw4Yg", "block": "{\"statements\":[[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"box\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"trip\",[\"get\",[\"trip\"]]],null,0],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Attractions: \"],[\"append\",[\"unknown\",[\"trip\",\"attractions\",\"length\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-danger btn-xs\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"delete\"]],[\"flush-element\"],[\"text\",\"Delete\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary btn-xs\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"edit\"]],[\"flush-element\"],[\"text\",\"Edit\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"trip\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "plan-a-trip-browser/templates/components/trip-item.hbs" } });
});
define("plan-a-trip-browser/templates/components/user-info", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "5LLe5XkX", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"box\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"User Information\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Email: \"],[\"append\",[\"unknown\",[\"user\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Trips You Had Created: \"],[\"append\",[\"unknown\",[\"trips\",\"length\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "plan-a-trip-browser/templates/components/user-info.hbs" } });
});
define("plan-a-trip-browser/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "pYFLQv5c", "block": "{\"statements\":[[\"append\",[\"helper\",[\"home-page\"],null,[[\"trips\"],[[\"get\",[\"model\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "plan-a-trip-browser/templates/index.hbs" } });
});
define("plan-a-trip-browser/templates/sign-in", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "NFcs9JOm", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Sign In\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"helper\",[\"sign-in-form\"],null,[[\"submit\",\"reset\",\"credentials\"],[\"signIn\",\"reset\",[\"get\",[\"model\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "plan-a-trip-browser/templates/sign-in.hbs" } });
});
define("plan-a-trip-browser/templates/sign-up", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "ELVVJluw", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Sign Up\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"helper\",[\"sign-up-form\"],null,[[\"submit\"],[\"signUp\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "plan-a-trip-browser/templates/sign-up.hbs" } });
});
define("plan-a-trip-browser/templates/trip", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "La+u+VWR", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "plan-a-trip-browser/templates/trip.hbs" } });
});
define("plan-a-trip-browser/templates/trip/attraction", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "9pBUaEjo", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "plan-a-trip-browser/templates/trip/attraction.hbs" } });
});
define("plan-a-trip-browser/templates/trip/attraction/edit", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "0bhop4Yu", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Attraction Edit\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"edit-attraction\"],null,[[\"attraction\",\"save\",\"cancel\"],[[\"get\",[\"model\"]],\"editAttraction\",\"cancel\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "plan-a-trip-browser/templates/trip/attraction/edit.hbs" } });
});
define("plan-a-trip-browser/templates/trip/edit", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "RP3Q1q2B", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Edit \"],[\"append\",[\"unknown\",[\"model\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"new-trip-input\"],null,[[\"trip\",\"save\",\"cancel\"],[[\"get\",[\"model\"]],\"editTrip\",\"cancel\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "plan-a-trip-browser/templates/trip/edit.hbs" } });
});
define("plan-a-trip-browser/templates/trip/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "o8mRK8ZQ", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"attractions\"]]],null,3],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"trip.new\",[\"get\",[\"model\"]]],[[\"class\"],[\"btn btn-warning\"]],1],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"trips\"],[[\"class\"],[\"btn btn-success\"]],0],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Back\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"Create New attraction\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"Edit\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"box\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"attraction\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"text\",\"Address: \"],[\"append\",[\"unknown\",[\"attraction\",\"address\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h5\",[]],[\"flush-element\"],[\"text\",\"Expected time spend: \"],[\"append\",[\"unknown\",[\"attraction\",\"timeSpend\"]],false],[\"text\",\" MINS\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Notes: \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"],[\"append\",[\"unknown\",[\"attraction\",\"notes\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"trip.attraction.edit\",[\"get\",[\"attraction\"]]],[[\"class\"],[\"btn btn-primary btn-xs\"]],2],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"btn btn-danger btn-xs\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"delete\",[\"get\",[\"attraction\"]]]],[\"flush-element\"],[\"text\",\"Delete\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"attraction\"]}],\"hasPartials\":false}", "meta": { "moduleName": "plan-a-trip-browser/templates/trip/index.hbs" } });
});
define("plan-a-trip-browser/templates/trip/new", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "0VJaUIPd", "block": "{\"statements\":[[\"append\",[\"helper\",[\"create-attraction-input\"],null,[[\"trip\",\"save\",\"cancel\"],[[\"get\",[\"model\"]],\"createAttraction\",\"cancel\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "plan-a-trip-browser/templates/trip/new.hbs" } });
});
define("plan-a-trip-browser/templates/trips", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "MNSGpbCw", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "plan-a-trip-browser/templates/trips.hbs" } });
});
define("plan-a-trip-browser/templates/trips/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "YzBDWyCS", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"My Trips\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,2],[\"block\",[\"link-to\"],[\"trips.new\"],[[\"class\"],[\"btn btn-warning\"]],1],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"application\"],[[\"class\"],[\"btn btn-success\"]],0],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Back\"]],\"locals\":[]},{\"statements\":[[\"text\",\"CREATE NEW TRIPS\"]],\"locals\":[]},{\"statements\":[[\"append\",[\"helper\",[\"trip-item\"],null,[[\"trip\",\"delete\",\"edit\"],[[\"get\",[\"trip\"]],\"deleteTrip\",\"editTrip\"]]],false],[\"text\",\"\\n\"]],\"locals\":[\"trip\"]}],\"hasPartials\":false}", "meta": { "moduleName": "plan-a-trip-browser/templates/trips/index.hbs" } });
});
define("plan-a-trip-browser/templates/trips/new", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "0w8VRxps", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Create New Trip\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"new-trip-input\"],null,[[\"trip\",\"save\",\"cancel\"],[[\"get\",[\"model\"]],\"createTrip\",\"cancel\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "plan-a-trip-browser/templates/trips/new.hbs" } });
});
define("plan-a-trip-browser/templates/users", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "KGl7lkkM", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Users\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,0],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"user\",\"email\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"user\"]}],\"hasPartials\":false}", "meta": { "moduleName": "plan-a-trip-browser/templates/users.hbs" } });
});


define('plan-a-trip-browser/config/environment', ['ember'], function(Ember) {
  var prefix = 'plan-a-trip-browser';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("plan-a-trip-browser/app")["default"].create({"name":"plan-a-trip-browser","version":"0.0.0+512c2dd5"});
}
//# sourceMappingURL=plan-a-trip-browser.map
