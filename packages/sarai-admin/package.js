Package.describe({
  name: 'sarai:sarai-admin',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  
  var packages = [
    "sarai:sarai-lib",
    "sarai:sarai-user"
  ]

  api.use(packages)
  api.imply(packages)

  api.addFiles([
    "lib/collections/admin.js"
    ], ["client", "server"])

  api.addFiles([
    "server/methods.js",
    "server/publications.js",
    "server/fixture.js"
    ], "server")

  api.export([
    "Admin"
    ])

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('sarai:sarai-admin');
});
