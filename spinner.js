pc.script.create("spinner", function (app) {
    var ScriptObject = function (entity) {
        this.entity = entity;
    };

    ScriptObject.prototype = {
        initialize: function () {

        },

        update: function (dt) {
        	this.entity.rotate(0, 1*dt, 0);
        }
    };

    return ScriptObject;
});