'use strict';
module Application.Home {

    export class SecoundCtrl {

        public name: string;
        public button1Text: string;

        public static $inject = ['$rootScope'];

        constructor(private $rootScope: ng.IRootScopeService) {
            this.name = 'Rafal';
            this.button1Text = 'Test $rootScope';
        }

        onClick = (): void => {
            //conclusion: separate modules have separate rootScopes !!!
            this.$rootScope['x'] = this.$rootScope['x'] || 1;
            this.button1Text = this.$rootScope['x'] !== 1 ? '$rootScope was changed by other module' : '$rootScope wasn\'t changed by other module';
        }

    }
}