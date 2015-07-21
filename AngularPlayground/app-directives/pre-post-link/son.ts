/// <reference path="../../app/_all.d.ts" />

module AppDirectives {

    interface ISonScope extends IDadScope {
        sonSays: string;
    }

    export var son: () => ng.IDirective = () => {
        return {
            restrict: 'EA',
            template: '<div class="son">{{sonSays}}</div>',            
            link: (scope: ISonScope, elem: JQuery, attributes: ng.IAttributes, ngModel: ng.INgModelController) => {
                //scope.name comes from parent scope, in this case from directive dad scope
                scope.sonSays = 'Hey, I am son, and my dad is ' + scope.name;
            }
        };
    };

}