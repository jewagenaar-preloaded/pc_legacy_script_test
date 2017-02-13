var Spinner = pc.createScript('spinner');

// initialize code called once per entity
Spinner.prototype.initialize = function() {
    
};

// update code called every frame
Spinner.prototype.update = function(dt) {
	this.entity.rotate(0, 1 * dt, 0);
};
