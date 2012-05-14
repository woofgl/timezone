(function () {

    // --------- Component Interface Implementation ---------- //
    function SelectTimeZone() {

    }

    SelectTimeZone.prototype.create = function () {
        var tz = tmz.D;
        var timeZone = [];

        for (var i = 0; i < tz.length; i++) {
            var city = {
                'city': tz[i].city
            };
            timeZone.push(city);
        }

        var $e = $("#tmpl-selectTimeZone").render({timeZone:timeZone});
        $("body").append("<div id='selectTimeZoneScreener' class='dialogScreener'></div>");
        return $e;
    };

    SelectTimeZone.prototype.postDisplay = function () {
        var component = this;
        var $element = this.$element;

        //user click on #selectTimeZoneScreener
        $("#selectTimeZoneScreener").click(function(){
            component.close();
        });

        //user click on TimeZone add section
        $element.delegate(".add .timeZone","click",function(){
            var $this = $(this);
            var city = $this.attr("data-obj_city");
            addCityTimeZone(city);
            component.close();
        });

        /*-- Helper Functions --*/
        function addCityTimeZone(city){
            var timeZone = tmz.D;
            for (var i = 0; i < timeZone.length; i++) {
                if(timeZone[i].city == city){
                    brite.dao.get("TimeZone", timeZone[i].city).done(function(tm){
                       if(tm){
                           brite.dao.update("TimeZone",city, timeZone[i]);
                       }else{
                           brite.dao.create("TimeZone",timeZone[i]);
                       }
                    });
                }
            }
        }

        /*-- /Helper Functions --*/

    };

    SelectTimeZone.prototype.close = function () {
        this.$element.remove();
        $("#selectTimeZoneScreener").remove();
        $("#selectTimeZone").html("");
    };
    // --------- /Component Interface Implementation ---------- //


    // --------- Component Registration --------- //
    brite.registerComponent("SelectTimeZone", {
            parent:"#selectTimeZone"
        },
        // Note in this way, when a function is passed, this function will be use as the factory for the new instance it is responsible to return an instance of the Component
        function () {
            return new SelectTimeZone();
        });
    // --------- /Component Registration --------- //

})();