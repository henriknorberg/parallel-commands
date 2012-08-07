
var parallel-commands = module.exports = function (opts, cb) {
    if (typeof opts === 'object') {
        return new ParallelCommands(opts, cb);
    }
    else {
        return new ParallelCommands(cb, opts);
    }
};

function ParallelCommands (cmnds){
	 if (!cmnds) this.commands = [];
}

ParallelCommands.prototype.addCommand = function(cmnd){
	this.addCommandAt(cmnd);
};

ParallelCommands.prototype.addCommandAt = function(indx,cmnd){
	this.commands.splice(indx, 0, cmnd);
};

ParallelCommands.prototype.execute = function(){
//Insert async here
};