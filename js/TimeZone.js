(function () {

    // --------- Component Interface Implementation ---------- //
    function TimeZone() {

    }

    TimeZone.prototype.create = function (data, config) {
        this.data = data;
        var html = $("#tmpl-TimeZone").render(data);
        return $(html);
    };

    TimeZone.prototype.postDisplay = function () {
        var c = this;
        var $e = c.$element;
        brite.display("Clock",c.data, {parent: $e.find(".clockTime")})

        $e.delegate("a.delete","click", function(){
            console.log(c.data);
               brite.dao.remove("TimeZone", c.data.Dcity);
               $e.html("");
               $e.remove();
        });

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