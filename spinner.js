pc.script.attribute('speed', 'number', 80);

pc.script.create("spinner", function (app) {
    var Spinner = function (entity) {
        this.entity = entity;
    };

    Spinner.prototype = {
        initialize: function () {

        },

        update: function (dt) {
        	this.entity.rotate(0, this.speed * dt, 0);
        }
    };

    return Spinner;
});