palantir_app.directive('intervalNav', ['$document','$interval','stateModel',
    function($document, $interval,stateModel){
        return{
            restrict: 'AE',
            scope: {},
            controllerAs: '$ctrl',
            templateUrl: 'templates/interval_nav.html',
            replace:true,
            controller: ['$scope', function($scope){
                this.stateModel = stateModel;
            }],
            link: function ($scope, element, attrs, $ctrl){

            }
        };
}]);