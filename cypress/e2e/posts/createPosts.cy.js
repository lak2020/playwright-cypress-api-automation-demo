const PostApiService = require('../../services/postApiService');
const TestDataGenerator = require('../../utilities/testDataGenerator');

/**
 * Tests for POST /posts endpoint.
 * Covers: creating posts with valid data, random data, and data-driven tests.
 */
describe('Create Posts', { tags: ['@Posts', '@POST'] }, () => {
  it('Verify POST /posts creates a new post and returns 201', { tags: '@Smoke' }, () => {
    const newPost = {
      title: 'Test Post Title',
      body: 'This is the body of the test post.',
      userId: 1,
    };

    PostApiService.createPost(newPost).then((response) => {
      expect(response.status).to.eq(201);

      const result = response.body;
      expect(result.title).to.eq(newPost.title);
      expect(result.body).to.eq(newPost.body);
      expect(result.userId).to.eq(newPost.userId);
      expect(result.id).to.be.greaterThan(0);
    });
  });

  it('Verify POST /posts with Faker random data creates post correctly', { tags: '@Smoke' }, () => {
    const newPost = TestDataGenerator.generateCreatePostRequest();

    PostApiService.createPost(newPost).then((response) => {
      expect(response.status).to.eq(201);

      const result = response.body;
      expect(result.title).to.eq(newPost.title);
      expect(result.body).to.eq(newPost.body);
      expect(result.userId).to.eq(newPost.userId);
    });
  });

  const dataDrivenCases = [
    { title: 'First Post', body: 'Body of first post', userId: 1 },
    { title: 'Second Post', body: 'Body of second post', userId: 2 },
    { title: 'Third Post', body: 'Body of third post', userId: 3 },
  ];

  dataDrivenCases.forEach(({ title, body, userId }) => {
    it(`Verify POST /posts works with data: "${title}"`, () => {
      const newPost = { title, body, userId };

      PostApiService.createPost(newPost).then((response) => {
        expect(response.status).to.eq(201);

        const result = response.body;
        expect(result.title).to.eq(title);
        expect(result.body).to.eq(body);
        expect(result.userId).to.eq(userId);
      });
    });
  });
});
