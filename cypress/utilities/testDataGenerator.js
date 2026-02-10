const { faker } = require('@faker-js/faker');

/**
 * Generates realistic random test data using Faker.js library.
 */
class TestDataGenerator {
  /**
   * Generate a create post request with random title, body, and userId.
   */
  static generateCreatePostRequest() {
    return {
      title: faker.lorem.sentence(),
      body: faker.lorem.paragraphs(2),
      userId: faker.number.int({ min: 1, max: 10 }),
    };
  }

  /**
   * Generate an update post request with random title, body, and userId.
   */
  static generateUpdatePostRequest() {
    return {
      title: faker.lorem.sentence(),
      body: faker.lorem.paragraphs(2),
      userId: faker.number.int({ min: 1, max: 10 }),
    };
  }

  /**
   * Generate multiple create post requests for data-driven testing.
   */
  static generateMultiplePosts(count) {
    return Array.from({ length: count }, () => this.generateCreatePostRequest());
  }

  /**
   * Generate a random email address.
   */
  static generateEmail() {
    return faker.internet.email();
  }

  /**
   * Generate a random sentence for titles.
   */
  static generateTitle() {
    return faker.lorem.sentence();
  }
}

module.exports = TestDataGenerator;
