'use strict';  
module Application.About {  

    export class ScotchCtrl {        

        public message: string;
        public scotches: Array<any>;

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
        }

        onClick = (): void => {
            //conclusion: separate modules have separate rootScopes !!!
            (<any>this.$rootScope).x = 2;
        }

    }
} 