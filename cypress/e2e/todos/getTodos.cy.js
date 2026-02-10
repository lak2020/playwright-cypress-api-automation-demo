const TodoApiService = require('../../services/todoApiService');

/**
 * Tests for GET /todos and GET /todos/{id} endpoints.
 * Covers: list todos, single todo, filter by user, and not found.
 */
describe('Get Todos', { tags: ['@Todos', '@GET'] }, () => {
  it('Verify GET /todos returns list of 200 todos', { tags: '@Smoke' }, () => {
    TodoApiService.getTodos().then((response) => {
      expect(response.status).to.eq(200);

      const todos = response.body;
      expect(todos).to.have.length(200);

      todos.forEach((todo) => {
        expect(todo.id).to.be.greaterThan(0);
        expect(todo.userId).to.be.greaterThan(0);
        expect(todo.title).to.be.a('string').and.not.be.empty;
      });
    });
  });

  it('Verify GET /todos/1 returns a single todo', { tags: '@Smoke' }, () => {
    const todoId = 1;

    TodoApiService.getTodoById(todoId).then((response) => {
      expect(response.status).to.eq(200);

      const todo = response.body;
      expect(todo.id).to.eq(todoId);
      expect(todo.userId).to.be.greaterThan(0);
      expect(todo.title).to.be.a('string').and.not.be.empty;
    });
  });

  it('Verify GET /todos?userId=1 returns only todos for user 1', () => {
    const userId = 1;

    TodoApiService.getTodosByUserId(userId).then((response) => {
      expect(response.status).to.eq(200);

      const todos = response.body;
      expect(todos).to.not.be.empty;
      todos.forEach((todo) => {
        expect(todo.userId).to.eq(userId);
      });
    });
  });

  it('Verify GET /todos/999 returns 404 for non-existent todo', { tags: '@Negative' }, () => {
    TodoApiService.getTodoById(999).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it('Verify todos contain both completed and incomplete items', () => {
    TodoApiService.getTodos().then((response) => {
      expect(response.status).to.eq(200);

      const todos = response.body;
      const hasCompleted = todos.some((t) => t.completed === true);
      const hasIncomplete = todos.some((t) => t.completed === false);

      expect(hasCompleted, 'Should contain completed todos').to.be.true;
      expect(hasIncomplete, 'Should contain incomplete todos').to.be.true;
    });
  });
});
