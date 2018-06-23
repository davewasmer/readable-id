const rid = require('../index.js')

describe('readable-id', () => {
  it('should generate ids that are readable', () => {
    let readable = rid()
    expect(typeof readable === 'string').toBe(true)
    expect(readable.length > 7).toBe(true)
  })
})