﻿/// <reference path="../../app/_all.d.ts" />

module AppDirectives {

    export interface IDadScope extends ng.IScope {
        name: string;
        greeting: string;
    }

    export var dad: () => ng.IDirective = () => {
        return {
            restrict: 'EA',
            template: '<div class="dad">{{greeting}}{{name}}' +
            '<son></son>' +
            '</div>',
            //WARNING: you have to change definition of link property to any from Function
            link: {
                /* 
                When a directive contains multiple child directives, all of the child directive’s 
                link functions executed first then the parent directive link function.
                This is where the pre-link comes handy. A pre-link function of a directive will get executed 
                before all of its child directives’ link functions.
                So child link functions can have acces to setted parent scope.

                pre-link functions start execution from top parent directive ( oposite to link(post-link) )

                But: It’s not a best practice to create pre-link functions whenever 
                we introduce a child directive. Use controller instead (see dad2).
                */
                pre: (scope: IDadScope, elem: JQuery, attributes: ng.IAttributes, ngModel: ng.INgModelController) => {
                    scope.name = 'Paul';
                    scope.greeting = 'Hey, I am ';
                },
                // link as function is alias to link.post
                post: (scope: IDadScope, elem: JQuery, attributes: ng.IAttributes, ngModel: ng.INgModelController) => {

                }
            }
        };
    };

}