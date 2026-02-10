const PostApiService = require('../../services/postApiService');
const TestDataGenerator = require('../../utilities/testDataGenerator');

/**
 * Tests for PUT and PATCH /posts/{id} endpoints.
 * Covers: full update, partial update, and response validation.
 */
describe('Update Posts', { tags: ['@Posts', '@PUT', '@PATCH'] }, () => {
  it('Verify PUT /posts/{id} fully updates a post and returns 200', { tags: '@Smoke' }, () => {
    const postId = 1;
    const updateData = {
      title: 'Updated Title',
      body: 'Updated body content',
      userId: 1,
    };

    PostApiService.updatePost(postId, updateData).then((response) => {
      expect(response.status).to.eq(200);

      const result = response.body;
      expect(result.id).to.eq(postId);
      expect(result.title).to.eq(updateData.title);
      expect(result.body).to.eq(updateData.body);
      expect(result.userId).to.eq(updateData.userId);
    });
  });

  it('Verify PATCH /posts/{id} partially updates a post', { tags: '@Smoke' }, () => {
    const postId = 1;
    const patchData = { title: 'Patched Title Only' };

    PostApiService.patchPost(postId, patchData).then((response) => {
      expect(response.status).to.eq(200);

      const result = response.body;
      expect(result.id).to.eq(postId);
      expect(result.title).to.eq('Patched Title Only');
      // Body and userId should still exist (not cleared)
      expect(result.userId).to.be.greaterThan(0);
    });
  });

  it('Verify PUT /posts/{id} with random data updates correctly', () => {
    const postId = 5;
    const updateData = TestDataGenerator.generateUpdatePostRequest();

    PostApiService.updatePost(postId, updateData).then((response) => {
      expect(response.status).to.eq(200);

      const result = response.body;
      expect(result.id).to.eq(postId);
      expect(result.title).to.eq(updateData.title);
      expect(result.body).to.eq(updateData.body);
    });
  });
});
