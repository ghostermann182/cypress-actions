const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjJjODFkYmMzLTM2NTktNGVhNC05YTA5LWQ1MjZmYTBjZWI1Yy0xNjc2Mzk5NTU5Njk1IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiN2NhOGQ0NjktZDcxZi00OGFlLThkZmItMDM5N2I4NDdjNzJmIiwidHlwZSI6InQifQ.FWfJ8rdXr9wsCdA4Ffn2R4ByXIiKv0SDtQfMCxhx8is'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
