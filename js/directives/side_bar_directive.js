palantir_app.directive('sideBar', ['$timeout','$document','$interval','crimeModel','stateModel',
    function($timeout,$document, $interval, crimeModel, stateModel){
        return{
            restrict: 'AE',
            scope: {},
            controllerAs: '$ctrl',
            templateUrl: 'templates/side_bar.html',
            replace:true,
            controller: ['$scope', function($scope){
            }],
            link: function ($scope, element, attrs, $ctrl){
                $ctrl.getCrimes = function(){
                    stateModel.getCrimes().then(function(data){
                        $ctrl.crimes = data;
                        stateModel.data.crimes = data;
                         $timeout(function(){
                            $scope.$apply();
                        },0);
                    },function(data){
                        console.log("api error");
                    });
                };
                $ctrl.getCrimes();
            }
        };
}]);