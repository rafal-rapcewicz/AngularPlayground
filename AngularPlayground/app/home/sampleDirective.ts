/// <reference path="../_all.d.ts" />

module Application.Directives {

    //usage: <div sample-directive name="{{sec.name}}"></div>
    //where sec is controllerAs of controller in which directive is nested
    export var sampleDirective: () => ng.IDirective = () => {
        return {
            restrict: 'AE',
            scope: {
                name: '@' //one-way binding
                // '=' => two-way binding
                // '&' => method binding, example: <div sample-directive name="sec.methodName()"></div>
            },
            template: 'Name: {{name}} Address: {{address}}',
            link: (scope: ng.IScope, element: Element, attrs: any) => {
                scope['address'] = 'Testing address';
            }
        };
    };

}