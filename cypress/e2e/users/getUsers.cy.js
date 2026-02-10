const UserApiService = require('../../services/userApiService');

/**
 * Tests for GET /users and GET /users/{id} endpoints.
 * Covers: list users, single user, user data structure, and not found.
 */
describe('Get Users', { tags: ['@Users', '@GET'] }, () => {
  it('Verify GET /users returns list of 10 users', { tags: '@Smoke' }, () => {
    UserApiService.getUsers().then((response) => {
      expect(response.status).to.eq(200);

      const users = response.body;
      expect(users).to.have.length(10);

      users.forEach((user) => {
        expect(user.id).to.be.greaterThan(0);
        expect(user.name).to.be.a('string').and.not.be.empty;
        expect(user.username).to.be.a('string').and.not.be.empty;
        expect(user.email).to.be.a('string').and.not.be.empty;
      });
    });
  });

  it('Verify GET /users/1 returns user with complete data structure', { tags: '@Smoke' }, () => {
    const userId = 1;

    UserApiService.getUserById(userId).then((response) => {
      expect(response.status).to.eq(200);

      const user = response.body;
      expect(user.id).to.eq(userId);
      expect(user.name).to.be.a('string').and.not.be.empty;
      expect(user.username).to.be.a('string').and.not.be.empty;
      expect(user.email).to.be.a('string').and.not.be.empty;
      expect(user.phone).to.be.a('string').and.not.be.empty;
      expect(user.website).to.be.a('string').and.not.be.empty;
      expect(user.address).to.not.be.null;
      expect(user.company).to.not.be.null;
    });
  });

  it('Verify GET /users/999 returns 404 for non-existent user', { tags: '@Negative' }, () => {
    UserApiService.getUserById(999).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  [1, 5, 10].forEach((userId) => {
    it(`Verify GET /users/${userId} returns correct user`, () => {
      UserApiService.getUserById(userId).then((response) => {
        expect(response.status).to.eq(200);

        const user = response.body;
        expect(user.id).to.eq(userId);
      });
    });
  });
});
