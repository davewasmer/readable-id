shortid = require('shortid')
adjectives = require('./adjectives')
nouns = require('./nouns')

// adjectives and nouns from https://gist.github.com/afriggeri/1266756

module.exports = function() {
  id = shortid.generate()
  adjectiveIndex = Math.round(Math.random() * adjectives.length)
  nounIndex = Math.round(Math.random() * nouns.length)
  return adjectives[adjectiveIndex] + "-" + nouns[nounIndex] + "-" + id
}