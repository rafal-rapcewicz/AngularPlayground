'use strict';
module Application.Home {

    export class SecoundCtrl {

        public name: string;

        public static $inject = ['$rootScope'];

        constructor(private $rootScope: ng.IRootScopeService) {
            this.name = 'Rafal';
        }

        onClick = (): void => {
            //conclusion: separate modules have separate rootScopes !!!
            (<any>this.$rootScope).x = 1;
        }

    }
}