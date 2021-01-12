#! /usr/bin/env node

const { program } = require('commander')
const PKG = require('./package.json')
const cmd = require('./cmd')

program
  .version(PKG.version)

program
  .command('color')
  .description('set your cmd interface`color.')
  .action((...args) => { action('color', args) })

program
  .parse(process.argv)

if (process.argv.length === 2) {
  program.outputHelp()
}

function action (name, args) {
  cmd[name].init(args)
}
