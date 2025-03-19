#!/usr/bin/env node
import app from '../app.js'
import debug from 'debug'
import cluster from 'cluster'
import os from 'os'

// const cpus = os.cpus();
// console.log('cpus returned from the function: ', cpus);

const log = debug('apinode:www')
// log(`Information returned by cpus: ${cpus}`);
// log(`Type of cpus variable: ${typeof cpus}`);

// if (cluster.isPrimary) {
//     cpus.foreach(_ => cluster.fork())
//     cluster.on('exit', (err) => log(err))
// } else {
//     app.listen(3000, log('server started on port 3000...'))
// }



app.listen(3000, () => log('server started on port 3000...'));