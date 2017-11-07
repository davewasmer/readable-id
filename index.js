var nanoid = require('nanoid')
var adjectives = require('./adjectives')
var nouns = require('./nouns')

// adjectives and nouns from https://gist.github.com/afriggeri/1266756

module.exports = function() {
  var id = nanoid(7)
  var adjectiveIndex = Math.floor(Math.random() * adjectives.length)
  var nounIndex = Math.floor(Math.random() * nouns.length)
  return adjectives[adjectiveIndex] + "-" + nouns[nounIndex] + "-" + id
}
