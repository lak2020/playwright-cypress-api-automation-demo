const PostApiService = require('../../services/postApiService');

/**
 * Tests for DELETE /posts/{id} endpoint.
 */
describe('Delete Posts', { tags: ['@Posts', '@DELETE'] }, () => {
  it('Verify DELETE /posts/{id} deletes a post and returns 200', { tags: '@Smoke' }, () => {
    const postId = 1;

    PostApiService.deletePost(postId).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  [1, 50, 100].forEach((postId) => {
    it(`Verify DELETE /posts/${postId} returns 200`, () => {
      PostApiService.deletePost(postId).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });
});
