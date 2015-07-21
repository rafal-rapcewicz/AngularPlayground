'use strict';  
module Application.About {  

    export class ScotchCtrl {        

        public message: string;
        public scotches: Array<any>;
        public button1Text: string;

        public static $inject = ['$scope', '$rootScope'];

        constructor(private $scope: ng.IScope, private $rootScope: ng.IRootScopeService) {

            this.message = 'test';
            this.scotches = [
                {
                    name: 'Macallan 12',
                    price: 50
                },
                {
                    name: 'Chivas Regal Royal Salute',
                    price: 10000
                },
                {
                    name: 'Glenfiddich 1937',
                    price: 20000
                }
            ];
            this.button1Text = 'Test $rootScope';
        }

        onClick = (): void => {
            //conclusion: separate modules have separate rootScopes !!!
            this.$rootScope['x'] = this.$rootScope['x'] || 2;
            this.button1Text = this.$rootScope['x'] !== 2 ? '$rootScope was changed by other module' : '$rootScope wasn\'t changed by other module';
        }

    }
} 