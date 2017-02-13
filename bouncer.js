pc.script.attribute('speed', 'number', 80);
pc.script.attribute('distance', 'number', 10)

pc.script.create("bouncer", function (app) {
    var Bouncer = function (entity) {
        this.entity = entity;
        this.offset = 0;
        this.direction = 1;
    };

    Spinner.prototype = {
        initialize: function () {

        },

        update: function (dt) {

            this.offset += this.direction * dt * this.speed;

            if(this.offset > this.distance)
            {
                this.direction = -this.direction;
                this.offset = this.distance;
            }
            else if(this.offset < -this.distance)
            {
                this.direction = -this.direction;
                this.offset = -this.distance;
            }


        	this.entity.setLocalPosition(0, this.offset, 0);
        }
    };

    return Bouncer;
});