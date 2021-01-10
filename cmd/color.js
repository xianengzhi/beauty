const { prompt } = require('enquirer')
const colors = require('ansi-colors')

class Color {
  static init () {
    const color = new this()
    color.ask()
  }

  async ask () {
    const response = await prompt([
      {
        type: 'Sort',
        name: 'colors',
        message: 'Sort the colors in order of preference',
        hint: 'Top is best, bottom is worst',
        numbered: true,
        choices: ['red', 'white', 'green', 'cyan', 'yellow'].map(n => ({
          name: n,
          message: colors[n](n)
        }))
      }
    ])
    console.log(response)
  }
}

module.exports = Color
