parallel-commands
=================
Async parallel queue for commands in node.js. 

```javascript

parallelCommands = require('parallel-commands')([cmnd0,cmnd1],triggerMeWhenDone);

parallelCommands.addCommand(cmnd3);
parallelCommands.addCommandAt(2,cmnd2);
parallelCommands.execute();

```
