#! usr/bin/env node

// const cmdShim = require('cmd-shim')
// const path = require('path')

// cmdShim(path.join(__dirname, '/cli.js'), './.bin/cli', function () {
//   console.log('ok')
// })

const list = [
  require('./a'),
  require('./b')
]
const Base = list.reduce((a, b) => b(a), class B {})

class Case extends Base {
  constructor (options) {
    super(options)
    this.options = options
  }
}

const ca = new Case({})
console.log(ca)
