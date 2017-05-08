palantir_app.directive('crimeAppContainer', ['$timeout','$document','$interval','stateModel','crimeModel',
    function($timeout,$document, $interval,stateModel,crimeModel){
        return{
            restrict: 'AE',
            scope: {
            },
            controllerAs: '$ctrl',
            templateUrl: 'templates/crime_app_container.html',
            replace:true,
            controller: ['$scope', function($scope){
                this.crimes = $scope.crimes;
            }],
            link: function ($scope, element, attrs, $ctrl){
            }
        };
}]);