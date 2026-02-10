/**
 * Service layer encapsulating User API operations (JSONPlaceholder /users).
 */
class UserApiService {
  /**
   * GET /users — Retrieve all users.
   */
  static getUsers() {
    return cy.apiRequest('GET', '/users');
  }

  /**
   * GET /users/{id} — Retrieve a single user by ID.
   */
  static getUserById(id) {
    return cy.apiRequest('GET', `/users/${id}`);
  }
}

module.exports = UserApiService;
