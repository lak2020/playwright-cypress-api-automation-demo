// ***********************************************
// Custom Cypress commands for API testing
// ***********************************************

/**
 * Custom command to make API requests with default headers.
 * Wraps cy.request with JSON content-type headers.
 */
Cypress.Commands.add('apiRequest', (method, url, body = null) => {
  const options = {
    method,
    url,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    failOnStatusCode: false,
  };

  if (body) {
    options.body = body;
  }

  return cy.request(options);
});

/**
 * Assert response status code with descriptive message.
 */
Cypress.Commands.add('assertStatusCode', { prevSubject: true }, (response, expectedStatus) => {
  expect(response.status, `Expected status ${expectedStatus} but got ${response.status}`).to.eq(expectedStatus);
  return cy.wrap(response);
});
