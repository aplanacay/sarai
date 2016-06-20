Package.describe({
  name: 'sarai:sarai-layout',
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

  var client = [
    "client/includes/head.html",
    "client/includes/top-header/index.html",
    "client/includes/main-header/index.html",
    "client/includes/side-bar/index.html",
    "client/layout/main-layout/index.html",
    "client/layout/main-layout/index.less"
  ]

  api.addFiles(client, "client")

  api.addAssets([
    "public/images/SARAI-white.png"
    ], "client")

  api.export([
    "MainLayout"
    ])
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('sarai:sarai-layout');
});