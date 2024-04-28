const request = require('supertest');
const app = require('../app');

describe("Article Endpoint", () => {
    test ("should add a new article", async () => {
        const newArticleData = {
            title: 'New Article',
            content: 'This is a new article',
            image: 'new-article.jpg',
            category: 'General'
        };

        const response = await request(app).post('/add').send(newArticleData);

        expect(response.status).toBe(404);
        expect(response.body.title).toEqual();
        createArticleId = response.body.id;
    });


    test("should fetch article by ID", async () => {
        const response = await request(app).get(`/getArticle/${createArticleId}`);

        expect(response.status).toBe(404);
        expect(response.body._id).toBe(createArticleId);
    });

    test("should delete article by ID", async () => {
        const response = await request(app).delete(`/deleteArticle/${createArticleId}`);

        expect(response.status).toBe(404);
        expect(response.body._id).toBe(createArticleId);
    });

});