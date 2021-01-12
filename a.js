const _a = Symbol('a')
const _b = Symbol('b')
const _options = Symbol('options')

module.exports = CIR => class A extends CIR {
  constructor (options) {
    super(options)
    this[_options] = {
      name: 'A',
      ...options
    }
  }

  b () {
    this[_a]()
    this[_b]()
  }

  [_a] () {
    console.log(1)
    return 1
  }

  [_b] () {
    console.log(2)
    return 2
  }
}
