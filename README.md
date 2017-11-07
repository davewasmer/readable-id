# readable-id

Generate (mostly) human readable, Heroku-style ids.

## Usage

```js
rid = require('readable-id')
rid()
// red-voice-ekDJ84G-We
```

Here is, literally, the entire source code:

```js
nanoid = require('nanoid')
adjectives = require('./adjectives')
nouns = require('./nouns')

// adjectives and nouns from https://gist.github.com/afriggeri/1266756

module.exports = function() {
  id = nanoid(7)
  adjectiveIndex = Math.round(Math.random() * adjectives.length)
  nounIndex = Math.round(Math.random() * nouns.length)
  return adjectives[adjectiveIndex] + "-" + nouns[nounIndex] + "-" + id
}
```

The `nanoid` package lends uniqueness and collision resistance, and the adjectives and nouns the human readability.
