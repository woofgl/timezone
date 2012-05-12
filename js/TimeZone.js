(function () {

    // --------- Component Interface Implementation ---------- //
    function TimeZone() {

    }

    TimeZone.prototype.create = function (data, config) {
        var html = $("#tmpl-TimeZone").render(data);
//        console.log(data);
        return $(html);
    };

    TimeZone.prototype.postDisplay = function (data) {
        var c = this;
        var $e = c.$element;
        brite.display("Clock",data, {parent: $e.find(".clockTime")})

    };
    // --------- /Component Interface Implementation ---------- //

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