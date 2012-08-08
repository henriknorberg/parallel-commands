var async = require('async');

var parallelCommands = module.exports = function (opts, cb) {

        return new ParallelCommands(opts, cb);
};

function ParallelCommands (cmnds,cb){
   	 var that = this;
     this.commands = [];

    // Please refactor into addCommandAt
    this.commands = cmnds.map(function(cmnd){
      if(typeof cmnd === "object" && typeof cmnd.execute === "function"){
            return cmnd.execute;
        } else if (typeof cmnd === "function"){
            return cmnd;
        } else {
            console.log("ParallelCommands: Tried to add non command " + cmnd);
        }
    });
   
    this.callback = cb;

    this.execute = function(cllbck){
        async.parallel(that.commands, that.callback);
       
        if (typeof cllbck === "function") cllbck(null);
    };
}

ParallelCommands.prototype.addCommand = function(cmnd){
        this.addCommandAt(this.commands.length,cmnd.execute);
};

ParallelCommands.prototype.addCommandAt = function(indx,cmnd){
    //assume last position id out of bounds
    if (indx > this.commands.length) indx = this.commands.length;
    
    //Make sure it is a command(has a execute method)!
    if(typeof cmnd === "object" && typeof cmnd.execute === "function"){
        this.commands.splice(indx, 0, cmnd.execute);
    } else if (typeof cmnd === "function"){
        this.commands.splice(indx, 0, cmnd);
    } else {
        console.log("ParallelCommands: Tried to add non command " + cmnd);
    }

};

