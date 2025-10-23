// monitors/api-check.js
/**
 * Scripted API Monitor to check a sample public API.
 */
const assert = require('assert');

const targetUrl = 'https://api.publicapis.org/entries';

// Make a GET request
$http.get(targetUrl, (err, response, body) => {
  assert.equal(err, null, 'Request failed: Network Error');
  assert.equal(response.statusCode, 200, 'Expected a 200 OK response');

  const data = JSON.parse(body);

  // Assert that the response contains at least one entry
  assert.ok(data.count > 0, 'No entries found in the API response');

  console.log('API check successful. Found ' + data.count + ' entries.');
});
