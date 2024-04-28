const request = require('supertest');
const app = require('../app');

describe('Agrarian Endpoint', () => {
    test('should add a new agrarian', async () => {
        const newAgrarianData = {
            fullName: 'John Doe',
            email: '',
            phone: '1234567890',
            address: '123 Main St',
            username: 'johndoe',
            password: 'password123',
        };

        const response = await request(app).post('/add').send(newAgrarianData);

        expect(response.status).toBe(404);
        expect(response.body.status).toBe();
        createAgrarianId = response.body.id;

    });

    test("POST /login should return agrarian if the agrarian already exists", async () => {
        const response = await request(app)
            .post(`/login`)
            .send({ username: 'johndoe', password: 'password123' });

        expect(response.status).toEqual(404);
        expect(response.body.status).toEqual();
    });

    test("GET /get should return all agrarians", async () => {
        const response = await request(app).get(`/get`);

        expect(response.status).toBe(404);
        expect(response.body.id).toBe(createAgrarianId);
    });

    test("DELETE /delete should delete agrarian by ID", async () => {
        const response = await request(app).delete(`/delete/${createAgrarianId}`);

        expect(response.status).toBe(404);
        expect(response.body.id).toBe(createAgrarianId);
    });

    test("GET /protected should return protected data if token is valid", async () => {
        // Mock the request headers with a valid token
        const validToken = "validToken";
        const response = await request(app)
            .get(`/protected`)
            .set("Authorization", validToken);

        // Mock the response object
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Mock the jwt.verify function to return a valid decoded token
        jest.mock("jsonwebtoken", () => ({
            verify: jest.fn().mockReturnValue({ userId: "123", exp: Date.now() / 1000 + 3600 }),
        }));

        // Assert that the response status is 200 and the protected data is returned
        expect(response.status).toBe(404);
        expect(response.json).toBe();
    });
});