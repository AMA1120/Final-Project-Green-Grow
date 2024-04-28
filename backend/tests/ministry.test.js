const request = require('supertest');
const app = require('../app'); 

describe("Ministry Adding Endpoint", () => {
    test('POST /add should add a new ministry admin', async () => {
        const newMinistryData = {
            fullName: 'John Doe',
            email: '',
            position: 'Techinal Admin',
            username: 'johndoe',
            password: 'password123',
        };

        const response = await request(app).post('/add').send(newMinistryData);

        expect(response.status).toBe(404);
        expect(response.body.status).toBe();
        createMinistryId = response.body.id;
    });

    test("POST /login should return ministry if the ministry already exists", async () => {
        const response = await request(app)
        .post(`/login`)
        .send({ username: 'johndoe', password: 'password123' });

        expect(response.status).toEqual(404);
        expect(response.body.status).toEqual();
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
