palantir_app.factory('stateModel', [
    function() {
        return {
            this: self,
            PalantirAPI: new PalantirAPI(),
            data:{
                interval_start: null,
                interval_end: null,
                crimes: null,
            },
            getCrimes: function(){
                return this.PalantirAPI.getCrimes();
            }
        };
}]);