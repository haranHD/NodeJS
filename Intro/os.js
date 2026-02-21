const os = require('os');
console.log('Platform :' + os.platform());
console.log('Architecture : ' + os.arch())
console.log('Free space :' + Math.round(os.freemem() / 1024 ** 3) + 'GB')
console.log("home : "+ os.homedir())
console.log('OS uptiming : ' + os.uptime())