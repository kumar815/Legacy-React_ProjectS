//import os from 'os';
import React from 'react';
const os = require('os');

//total memory
let totalMemory = os.totalmem();
console.log('Total Mem : ${totalMemory}');

//free memory
let freMemory = os.freemem();
console.log('Free Mem : ${freeMemory}');

//os name
let osName = os.hostname();
console.log('OS Name: ${osName}');

//home Dirlet homeDir = os.homedir();//import os from 'os';
import React from 'react';
const os = require('os');

// total memory
let totalMemory = os.totalmem();
console.log(`Total Mem : ${totalMemory}`);

// free memory
let freeMemory = os.freemem();
console.log(`Free Mem : ${freeMemory}`);

// os name
let osName = os.hostname();
console.log(`OS Name: ${osName}`);

// home directory
let homeDir = os.homedir();
console.log(`Home Directory: ${homeDir}`);
console.log('homeDir: ${homedir}');
