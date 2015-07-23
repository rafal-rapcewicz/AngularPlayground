/// <reference path="../app/_all.d.ts" />

'use strict';

module AppDirectives {

    var app = angular.module('app', ['ui.router']);
    app.run(($templateRequest) => {
        $templateRequest('/templates/editor.html');
    });
    app.controller('directivesCtrl', DirectivesCtrl); 
    app.directive('dad', dad);
    app.directive('dad2', dad2);
    app.directive('son', son);

    app.directive('gridScreen', gridScreen);
    app.directive('gridColumns', gridColumns);
    app.directive('gridColumn', gridColumn);
    app.directive('grid', grid);
    app.directive('withInlineEditor', withInlineEditor);
    app.directive('editorInitializer', editorInitializer);    

    app.config(($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
            .state('home', {
            url: '/home',
            templateUrl: '/app-directives/pre-post-link/pre-post-link.tmpl.html'
        })                

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
            .state('about', {
            url: '/about',
            templateUrl: '/app/home/partial-home.html'
        });

    });
    
}