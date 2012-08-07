async = require('async');

var parallelCommands = module.exports = function (opts, cb) {

        return new ParallelCommands(opts, cb);
};

function ParallelCommands (cmnds,cb){
	if (!cmnds) this.commands = []; 
    else {  this.commands = cmnds};
	this.callback = cb;
}

ParallelCommands.prototype.addCommand = function(cmnd){
	this.commands.push(cmnd);
};

ParallelCommands.prototype.addCommandAt = function(indx,cmnd){
	this.commands.splice(indx, 0, cmnd);
};

ParallelCommands.prototype.execute = function(){
	async.parallel(this.commands, this.callback);
};