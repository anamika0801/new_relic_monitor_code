const got = require('got');

const endpoint = 'https://api.example.com/health';

async function checkApi() {
  console.log(`Checking API endpoint: ${endpoint}`);

  try {
    const response = await got(endpoint, {
      throwHttpErrors: false,
      timeout: { request: 5000 },
    });

    
    assert.ok(
      response.statusCode === 200,
      `Expected a 200 status code but got ${response.statusCode}`
    );

   
    const body = JSON.parse(response.body);

  
    assert.ok(
      body.status === 'ok',
      `Expected status 'ok' but got '${body.status}'`
    );

    console.log('Monitor check passed successfully!');
  } catch (error) {
    console.error('Monitor check failed:', error);
    assert.fail(error.message);
  }
}

checkApi();
