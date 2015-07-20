/// <reference path="_all.d.ts" />
/// <reference path="about/scotchctrl.ts" />
/// <reference path="home/secoundctrl.ts" />
/// <reference path="home/sampledirective.ts" />

'use strict';

module Application {

    var app = angular.module('app', ['ui.router']);

    app.controller('scotchController', Application.About.ScotchCtrl);

    app.config(($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
            .state('home', {
            url: '/home',
            templateUrl: '/app/home/partial-home.html'
        })
        
        // nested list with custom controller
            .state('home.list', { 
            url: '/list',
            templateUrl: '/app/home/partial-home-list.html',
            controller: ($scope: any) => {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })

        // nested list with just some random string data
            .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
            .state('about', {
            url: '/about',
            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: '/app/about/partial-about.html' },

                // the child views will be defined here (absolutely named)
                'columnOne@about': { template: 'Look I am a column!' },

                // for column two, we'll define a separate controller 
                'columnTwo@about': {
                    templateUrl: '/app/about/table-data.html',
                    controllerAs: 'about',
                    controller: 'scotchController'
                }
            }
        });

    });

    var app2 = angular.module('app2', []);

    app2.controller('secoundCtrl', Application.Home.SecoundCtrl);
    app2.directive('sampleDirective', Application.Directives.sampleDirective);

    angular.element(document).ready(() => {
        angular.bootstrap(document.getElementById('SecoundApp'), ['app2']);        
    });
}