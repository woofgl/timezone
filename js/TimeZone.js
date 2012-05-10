(function () {

    // --------- Component Interface Implementation ---------- //
    function TimeZone() {

    }

    TimeZone.prototype.create = function () {
        buildTimeZone();
        var html = $("#tmpl-TimeZone").render({});
        return $(html);
    };

    TimeZone.prototype.postDisplay = function () {
        var c = this;
        var $e = c.$element;
        $("body").delegate("#addNewCity", "click", function(){
             brite.display("SelectTimeZone")
        });

    };
    // --------- /Component Interface Implementation ---------- //
    // --------- Component Private Method  ---------- //
    var buildTimeZone = function() {
        brite.dao.list("TimeZone").done(function(timeZone){

        var selectedTimeZone = [];
        var wd = tmz.wd;

        var date = new Date();
        var Dyear = date.getFullYear();
        var Dday = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        var Dmonth = date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
        var Dhour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
        var Dminute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        var Dsecond = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        var Dweek = wd[date.getDay()];
        var localTime = {
            'Dcity' : 'Local Time',
            'Dcounty' : '',
            'Dyear' : Dyear,
            'Dday' : Dday,
            'Dmonth' : Dmonth,
            'Dhour' : Dhour,
            'Dminute' : Dminute,
            'Dsecond' : Dsecond,
            'Dweek' : Dweek
        };
        selectedTimeZone.push(localTime);

        for (var i = 0; i < timeZone.length; i++) {
            var t = new Date();
            t.setTime(t.getTime() + (t.getTimezoneOffset() * 60000) + ((timeZone[i].stz + timeZone[i].dst) * 60000));

            var Dcity = timeZone[i].city;
            var Dcounty = timeZone[i].country;

            //the zone's time
             Dyear = t.getFullYear();
             Dday = t.getDate() < 10 ? '0' + t.getDate() : t.getDate();
             Dmonth = t.getMonth() < 10 ? '0' + (t.getMonth() + 1) : t.getMonth() + 1;
             Dhour = t.getHours() < 10 ? '0' + t.getHours() : t.getHours();
             Dminute = t.getMinutes() < 10 ? '0' + t.getMinutes() : t.getMinutes();
             Dsecond = t.getSeconds() < 10 ? '0' + t.getSeconds() : t.getSeconds();
             Dweek = wd[t.getDay()];


            var tz = {
                'Dcity' : Dcity,
                'Dcounty' : Dcounty,
                'Dyear' : Dyear,
                'Dday' : Dday,
                'Dmonth' : Dmonth,
                'Dhour' : Dhour,
                'Dminute' : Dminute,
                'Dsecond' : Dsecond,
                'Dweek' : Dweek
            };

            selectedTimeZone.push(tz);
        }
        var $tz = $("#tmpl-TimeZone").render({"timeZone":selectedTimeZone});
        $("#page").html("");
        $("#page").append($tz);
        setTimeout(buildTimeZone,1000);
        });
    };

    // --------- /Component Private Method  ---------- //



    // --------- Component Registration --------- //
    brite.registerComponent("TimeZone", {
            parent:"#page"
        },
        // Note in this way, when a function is passed, this function will be use as the factory for the new instance it is responsible to return an instance of the Component
        function () {
            return new TimeZone();
        });
    // --------- /Component Registration --------- //  

})();