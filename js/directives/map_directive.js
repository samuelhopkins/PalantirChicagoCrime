palantir_app.directive('map', ['$document','$interval','crimeModel','stateModel',
    function($document, $interval,crimeModel,stateModel){
        return{
            restrict: 'AE',
            scope: {},
            controllerAs: '$ctrl',
            templateUrl: 'templates/map.html',
            replace:true,
            controller: ['$scope', function($scope){
        
            }],
            link: function ($scope, element, attrs, $ctrl){

            }
        };
}]);