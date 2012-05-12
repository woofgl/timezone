(function () {

    // --------- Component Interface Implementation ---------- //
    function Clock() {

    }

    ;

    Clock.prototype.create = function (data) {
        var html = $("#tmpl-Clock").render({});
        return $(html);
    };

    Clock.prototype.postDisplay = function (data) {
        var c = this;
        drawClock.call(c, data);
    };
    // --------- /Component Interface Implementation ---------- //

    // --------- Component private method ---------- //
    function drawClock(data) {
//         var $clockCanvas = this.$element.find("canvas");
        var c2d = brite.gtx(this.$element.find("canvas"));


        if (c2d) {
            var width = 150;
            c2d.clearRect(0, 0, width, width);
            //Define gradients for 3D / shadow effect
            var grad1 = c2d.createLinearGradient(0, 0, width, width).addColorStop(0, "#D83040").addColorStop(1, "#801020");
            var grad2 = c2d.createLinearGradient(0, 0, width, width).addColorStop(0, "#801020").addColorStop(1, "#D83040");
            c2d.font("Bold 10px Arial").textBaseline("middle").textAlign("center").lineWidth(1).save();

            //Outer bezel
            c2d.strokeStyle(grad1).lineWidth(10);
            c2d.beginPath().arc(width / 2, width / 2, width * 0.46, 0, Math.PI * 2, true);
            c2d.shadowOffsetX(4).shadowOffsetY(4).shadowColor("rgba(0,0,0,0.6)").shadowBlur(6);
            c2d.stroke();

            //Inner bezel
            c2d.restore().strokeStyle(grad2).lineWidth(10);
            c2d.beginPath().arc(width / 2, width / 2, width * 0.43, 0, Math.PI * 2, true).stroke();
            c2d.strokeStyle("#222").save();

            c2d.translate(width / 2, width / 2);
            //Markings/Numerals
            for (i = 1; i <= 60; i++) {
                ang = Math.PI / 30 * i;
                sang = Math.sin(ang);
                cang = Math.cos(ang);
                //If modulus of divide by 5 is zero then draw an hour marker/numeral
                if (i % 5 == 0) {
                    sx = sang * width * 0.32;
                    sy = cang * width * -0.32;
                    ex = sang * width * 0.4;
                    ey = cang * width * -0.4;
                    nx = sang * width * 0.27;
                    ny = cang * width * -0.27;
                    c2d.lineWidth(4).fillText(i / 5, nx, ny);
                    //Else this is a minute marker
                } else {
                    c2d.lineWidth(2);
                    sx = sang * width * 0.36;
                    sy = cang * width * -0.36;
                    ex = sang * width * 0.4;
                    ey = cang * width * -0.4;
                }
                c2d.beginPath().moveTo(sx, sy).lineTo(ex, ey).stroke();
            }
            //Fetch the current time
            var ampm = "AM";
            var now = new Date();
            var hrs = data.Dhour;
            var min = data.Dminute
            var sec = data.Dsecond;

            c2d.strokeStyle("#000");
            //Draw AM/PM indicator
            if (hrs >= 12) ampm = "PM";
            c2d.lineWidth(1);
            c2d.strokeRect(width*0.07, -width*0.047, width*0.137, width * 0.09).fillText(ampm, width*0.13, 0);

            c2d.lineWidth(6).save();
            //Draw clock pointers but this time rotate the canvas rather than
            //calculate x/y start/end positions.
            //
            //Draw hour hand
            c2d.rotate(Math.PI / 6 * (hrs + (min / 60) + (sec / 3600)));
            c2d.beginPath().moveTo(0, 10).lineTo(0, -width*0.2).stroke();
            c2d.restore().save();
            //Draw minute hand
            c2d.rotate(Math.PI / 30 * (min + (sec / 60)));
            c2d.beginPath().moveTo(0, 20).lineTo(0, -width*0.3).stroke();
            c2d.restore().save();
            //Draw second hand
            c2d.rotate(Math.PI / 30 * sec).strokeStyle("#E33");
            c2d.lineWidth(1).beginPath().moveTo(0, 20).lineTo(0, -width*0.36).stroke();
            c2d.restore();

            //Additional restore to go back to state before translate
            //Alternative would be to simply reverse the original translate
            c2d.restore();
        }
    }

    // --------- /Component private method ---------- //


    // --------- Component Registration --------- //
    brite.registerComponent("Clock", {
            emptyParent:true
        },
        // Note in this way, when a function is passed, this function will be use as the factory for the new instance it is responsible to return an instance of the Component
        function () {
            return new Clock();
        });
    // --------- /Component Registration --------- //

})
    ();