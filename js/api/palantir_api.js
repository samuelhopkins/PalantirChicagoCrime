var PalantirAPI = function () {

  this.getCrimes = function(account){
      return $.when($.ajax({
        url: "http://104.236.160.123:3301/api/data?limit=10&offset=0",
        type: "GET",
        contentType: 'application/json; charset=UTF-8',
        dataType: "json",
      })
    );
  };
};

PalantirAPI.prototype = new PalantirAPI();
PalantirAPI.prototype.constructor = PalantirAPI;