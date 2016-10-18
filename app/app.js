"use strict";

var angular = require("angular");

require("angular-ui-router");
require("angular-animate");

require("./punchcard/punchcard.module");
require("./about/about.module");


var githubStatsApp = angular.module("gstats", [
    // third party modules
    "ngAnimate",
    "ui.router",

    // local modules
    "templates",
    "gstats.about",
    "gstats.punchcard"
]);


githubStatsApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/");
    $urlRouterProvider.otherwise("/");
});
