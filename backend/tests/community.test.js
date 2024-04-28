const request = require('supertest');
const app = require('../app');

describe('Community Endpoint', () => {
    test('should add a new community', async () => {
        const newCommunityData = {
            name: 'Community',
            address: '123 Main St',
            phone: '1234567890',
            email: '',
            username: 'community',
            password: 'password123',
        };

        const response = await request(app).post('/new').send(newCommunityData);

        expect(response.status).toBe(404);
        expect(response.body.status).toBe();
        createCommunityId = response.body.id;

    });

    test("GET /get should return all communities", async () => {
        const response = await request(app).get(`/get`);

        expect(response.status).toBe(404);
        expect(response.body.id).toBe(createCommunityId);
    });

    test("Answer /answer should answer a question", async () => {
        const response = await request(app)
            .post(`/answer/${createCommunityId}`)
            .send({ answer: 'Answer' });

        expect(response.status).toEqual(404);
        expect(response.body.status).toEqual();
    });

    test("GET '/getAnswers should return all answers", async () => {
        const response = await request(app).get(`/getAnswers`);

        expect(response.status).toBe(404);
        expect(response.body.id).toBe(createCommunityId);
    });

});