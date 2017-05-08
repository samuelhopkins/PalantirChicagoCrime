palantir_app.directive('crimesDisplay', ['$timeout','$document','$interval',
    function($timeout,$document, $interval){
        return{
            restrict: 'AE',
            scope: {
                crimes: '@',
            },
            controllerAs: '$ctrl',
            templateUrl: 'templates/crimes_list.html',
            replace:true,
            controller: ['$scope', function($scope){
                this.crimes = $scope.crimes;
            }],
            link: function ($scope, element, attrs, $ctrl){
                $scope.$watch('crimes',function(newVal,oldVal,scope){
                        $ctrl.crimes = eval(newVal);
                        $timeout(function(){
                            $scope.$apply();
                        },0);
                },true);
            }
        };
}]);