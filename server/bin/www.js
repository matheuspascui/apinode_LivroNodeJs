#!/usr/bin/env node
import app from '../app.js'
import debug from 'debug'

const log = debug('apinode:www')

app.listen(3000, () => log('server started on port 3000...'));