parallel-commands
=================
Async parallel queue for commands. 

```javascript

parallel-commands = require('parallel-commands')([cmnd0,cmnd1],triggerMeWhenDone);

parallel-commands.addCommand(cmnd3);
parallel-commands.addCommandAt(2,cmnd2);
parallel-commands.execute();

```
