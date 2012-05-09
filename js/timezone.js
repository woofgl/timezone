(function () {

    // --------- Component Interface Implementation ---------- //
    function TimeZone() {
       brite.dao.registerDao("TimeZone", new brite.dao.SimpleDao());
    }

    TimeZone.prototype.create = function () {
        var html = $("#tmpl-TimeZone").render({});
        return $(html);
    };

    TimeZone.prototype.postDisplay = function () {
        var c = this;

    };
    // --------- /Component Interface Implementation ---------- //


    // --------- Component Registration --------- //
    brite.registerComponent("TimeZone", {
            parent:"body"
        },
        // Note in this way, when a function is passed, this function will be use as the factory for the new instance it is responsible to return an instance of the Component
        function () {
            return new TimeZone();
        });
    // --------- /Component Registration --------- //  

})();