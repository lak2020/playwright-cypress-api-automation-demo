/**
 * Service layer encapsulating all Post API operations (JSONPlaceholder /posts).
 * Follows the Service Object Pattern for clean test code.
 */
class PostApiService {
  /**
   * GET /posts — Retrieve all posts.
   */
  static getPosts() {
    return cy.apiRequest('GET', '/posts');
  }

  /**
   * GET /posts/{id} — Retrieve a single post by ID.
   */
  static getPostById(id) {
    return cy.apiRequest('GET', `/posts/${id}`);
  }

  /**
   * GET /posts?userId={userId} — Retrieve posts filtered by user.
   */
  static getPostsByUserId(userId) {
    return cy.apiRequest('GET', `/posts?userId=${userId}`);
  }

  /**
   * GET /posts/{id}/comments — Retrieve comments for a specific post.
   */
  static getPostComments(postId) {
    return cy.apiRequest('GET', `/posts/${postId}/comments`);
  }

  /**
   * POST /posts — Create a new post.
   */
  static createPost(post) {
    return cy.apiRequest('POST', '/posts', post);
  }

  /**
   * PUT /posts/{id} — Full update of a post.
   */
  static updatePost(id, post) {
    return cy.apiRequest('PUT', `/posts/${id}`, post);
  }

  /**
   * PATCH /posts/{id} — Partial update of a post.
   */
  static patchPost(id, patchData) {
    return cy.apiRequest('PATCH', `/posts/${id}`, patchData);
  }

  /**
   * DELETE /posts/{id} — Delete a post.
   */
  static deletePost(id) {
    return cy.apiRequest('DELETE', `/posts/${id}`);
  }
}

module.exports = PostApiService;
