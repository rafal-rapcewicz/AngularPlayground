/// <reference path="../app/_all.d.ts" />

'use strict';

module AppAdv {

    export class AdvCtrl {

        public static $inject = ['$scope'];

        constructor(private $scope: ng.IScope) {

        }
    }

    export var postalCodeValidator: () => ng.IDirective = () => {
        return {
            require: 'ngModel',
            link: (scope: any, elem: JQuery, attributes: ng.IAttributes, ctrl: any) => {
                ctrl.$parsers.push(function (value) {
                    var regex = /[A-Z]\d[A-Z]\ ?\d[A-Z]\d/;
                    var success = regex.test(value);
                    ctrl.$setValidity('postal', success);
                    return value;
                });
            }
        };
    };

    var advApp = angular.module('advApp', []);
    
    advApp.controller('advCtrl', AdvCtrl); 
    advApp.directive('postalCodeValidator', postalCodeValidator);

    advApp.value('createMatrix', (cells: Array<any>) => {
        var matrix = [];
        for (var i = 0, j = 0; i < cells.length; i++) {
            if (i > 0 && i % 3 == 0) j++;
            matrix[j] = matrix[j] || [];
            matrix[j].push(cells[i]);
        };
        return matrix;
    });
    
    export class TicTacToeCtrl {

        public cells: Array<number>;
        public static $inject = ['$scope'];

        constructor(private $scope: ng.IScope) {
            //only using 'as' syntax we can bypass assigning model to scope
            this.cells = (<any>$scope).cells = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        }
    }

    export var ticTacToe: () => ng.IDirective = () => {
        return {
            transclude: 'element',
            //terminal: true,
            link: ($scope: ng.IScope, elem: JQuery, attrs: any, ctrl: any, transcludeFn: Function) => {
                var cells = $scope.$eval(attrs.ticTacToe);
                var anchor = elem;
                for (var i = 0; i < cells; i++) {
                    var scope = $scope.$new();
                    (<any>scope).index = i;
                    transcludeFn(scope, function (element) {
                        anchor.after(element);
                        anchor = element;
                    });
                };
            }
        };
    };

    advApp.controller('TicTacToeCtrl', TicTacToeCtrl);
    advApp.directive('ticTacToe', ticTacToe);

}