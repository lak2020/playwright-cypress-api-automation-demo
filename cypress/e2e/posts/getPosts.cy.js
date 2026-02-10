const PostApiService = require('../../services/postApiService');

/**
 * Tests for GET /posts and GET /posts/{id} endpoints.
 * Covers: list posts, single post, filter by user, nested comments, and not found.
 */
describe('Get Posts', { tags: ['@Posts', '@GET'] }, () => {
  it('Verify GET /posts returns list of 100 posts', { tags: '@Smoke' }, () => {
    PostApiService.getPosts().then((response) => {
      expect(response.status).to.eq(200);

      const posts = response.body;
      expect(posts).to.have.length(100);

      posts.forEach((post) => {
        expect(post.id).to.be.greaterThan(0);
        expect(post.userId).to.be.greaterThan(0);
        expect(post.title).to.be.a('string').and.not.be.empty;
        expect(post.body).to.be.a('string').and.not.be.empty;
      });
    });
  });

  it('Verify GET /posts/1 returns a single post with correct data', { tags: '@Smoke' }, () => {
    const postId = 1;

    PostApiService.getPostById(postId).then((response) => {
      expect(response.status).to.eq(200);

      const post = response.body;
      expect(post.id).to.eq(postId);
      expect(post.userId).to.be.greaterThan(0);
      expect(post.title).to.be.a('string').and.not.be.empty;
      expect(post.body).to.be.a('string').and.not.be.empty;
    });
  });

  it('Verify GET /posts/999 returns 404 for non-existent post', { tags: '@Negative' }, () => {
    PostApiService.getPostById(999).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it('Verify GET /posts?userId=1 returns only posts for user 1', () => {
    const userId = 1;

    PostApiService.getPostsByUserId(userId).then((response) => {
      expect(response.status).to.eq(200);

      const posts = response.body;
      expect(posts).to.not.be.empty;
      posts.forEach((post) => {
        expect(post.userId).to.eq(userId);
      });
    });
  });

  it('Verify GET /posts/1/comments returns comments for post 1', () => {
    const postId = 1;

    PostApiService.getPostComments(postId).then((response) => {
      expect(response.status).to.eq(200);

      const comments = response.body;
      expect(comments).to.not.be.empty;
      comments.forEach((comment) => {
        expect(comment.postId).to.eq(postId);
        expect(comment.id).to.be.greaterThan(0);
        expect(comment.name).to.be.a('string').and.not.be.empty;
        expect(comment.email).to.be.a('string').and.not.be.empty;
        expect(comment.body).to.be.a('string').and.not.be.empty;
      });
    });
  });
});
