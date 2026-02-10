/**
 * Service layer for Todo API operations (JSONPlaceholder /todos).
 */
class TodoApiService {
  /**
   * GET /todos — Retrieve all todos.
   */
  static getTodos() {
    return cy.apiRequest('GET', '/todos');
  }

  /**
   * GET /todos/{id} — Retrieve a single todo by ID.
   */
  static getTodoById(id) {
    return cy.apiRequest('GET', `/todos/${id}`);
  }

  /**
   * GET /todos?userId={userId} — Retrieve todos filtered by user.
   */
  static getTodosByUserId(userId) {
    return cy.apiRequest('GET', `/todos?userId=${userId}`);
  }
}

module.exports = TodoApiService;
