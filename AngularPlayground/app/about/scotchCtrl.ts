module Application.About {
    'use strict';    

    export class ScotchCtrl {        

        public message: string;
        public scotches: Array<any>;

        public static $inject = ["$scope"];

        constructor(private $scope: ng.IScope) {

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

    }
} 