/// <reference path="../_all.d.ts" />

module Application.Directives {

    //usage: <div sample-directive name="{{sec.name}}"></div>
    //where sec is controllerAs of controller in which directive is nested
    export var sampleDirective: () => ng.IDirective = () => {
        return {
            restrict: 'AE',
            //scope : false ( Directive uses its parent scope (~two-way binding) )
            //scope: true ( Directive gets a new scope, still with inheritance(~one-way binding,
            //      so when directive changes value it's not reflected in parent scope and since then
            //      changes to that property in parent scope, doesn't reflect property in directive scope ) )
            scope: { //isolated scope
                name: '@' //one-way binding
                // '=' => two-way binding
                // '&' => method binding, example: <div sample-directive name="sec.methodName()"></div>
            },
            template: 'Name: {{name}} Address: {{address}}',
            link: (scope: ng.IScope, element: Element, attrs: any) => {
                scope['address'] = 'Zaporoska 32';
            }
        };
    };

}