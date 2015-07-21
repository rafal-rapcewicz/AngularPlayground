/// <reference path="../../app/_all.d.ts" />

module AppDirectives {    

    export var dad2: () => ng.IDirective = () => {
        return {
            restrict: 'EA',
            template: '<div class="dad">{{greeting}}{{name}}' +
            '<son></son>' +
            '</div>' +
            '<div><label>New parent\'s name:</label><input type="text" ng-model="name" /></div>',
            controller: function () {
                this.name = 'Paul'
            },
            link: (scope: IDadScope, elem: JQuery, attributes: ng.IAttributes, ngModel: ng.INgModelController) => {
                scope.name = (<any>ngModel).name;
                scope.greeting = 'Hey, I am ';
            }
        };
    };

}