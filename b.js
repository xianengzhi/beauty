const _a = Symbol('a')
const _b = Symbol('b')
const _options = Symbol('options')

module.exports = CIR => class B extends CIR {
  constructor (options) {
    super(options)
    this[_options] = {
      name: 'B',
      ...options
    }
  }

  b () {
    this[_a]()
    this[_b]()
  }

  [_a] () {
    console.log(3)
    return 3
  }

  [_b] () {
    console.log(4)
    return 4
  }
}
