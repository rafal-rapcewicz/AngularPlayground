//<grid-screen resource= "/api/data.json" >
//<grid-columns >
//<grid-column title= "Product" field= "product" > </grid-column>
//< grid - column title= "Description" field= "description" > </grid-column>
//< grid - column title= "Cost" field= "Cost" > </grid-column>
//< /grid-columns>
//< grid with-inline - editor > </grid>
//< /grid-screen>

module AppDirectives {    

    export var gridScreen: (...args: any[]) => ng.IDirective = ($http: ng.IHttpService) => {
        return {
            restrict: 'E',
            controller: function($scope) {
                this.setEditor = (editor) => {
                },
                this.setColumns = (cols) => {
                    $scope.cols = cols;
                }
            },
            link: (scope: any, elem: JQuery, attributes: any /*ng.IAttributes*/, ngModel: ng.INgModelController) => {
                $http.get(attributes.resource).success((response: any) => {
                    scope.rows = response.data;
                });
            }
        };
    };

    export var gridColumns: () => ng.IDirective = () => {
        return {
            restrict: 'E',
            /*
                we require in link function for controllers:
                ^ - looks in parent element's controller
                , and own controller
            */
            require: ['^gridScreen', 'gridColumns'],
            controller: function () {
                var columns = [];
                this.addColumn = (col) => {
                    columns.push(col);
                };
                this.getColumns = () => {
                    return columns;
                };
            },
            link: (scope: any, elem: JQuery, attributes: ng.IAttributes, controllers: any[] /*ng.INgModelController*/) => {
                var gridScreenController = controllers[0];
                var gridColumnsController = controllers[1];
                gridScreenController.setColumns(gridColumnsController.getColumns());
            }
        };
    };

    export var gridColumn: () => ng.IDirective = () => {
        return {
            restrict: 'E',
            require: '^gridColumns',
            link: (scope: any, elem: JQuery, attributes: any /*ng.IAttributes*/, gridColumnsController: any) => {
                gridColumnsController.addColumn({
                    title: attributes.title,
                    field: attributes.field
                });
            }
        };
    };

    export var grid: () => ng.IDirective = () => {
        return {
            restrict: 'E',            
            link: (scope: any, elem: JQuery, attributes: ng.IAttributes, ngModel: ng.INgModelController) => {

            }
        };
    };

    export var withInlineEditor: () => ng.IDirective = () => {
        return {
            restrict: 'A',            
            link: (scope: any, elem: JQuery, attributes: ng.IAttributes, ngModel: ng.INgModelController) => {

            }
        };
    };

}