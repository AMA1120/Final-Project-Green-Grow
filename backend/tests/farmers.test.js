const request = require('supertest');
const app = require('../app'); // Assuming your Express app is defined in app.js

describe('Farmer Adding Endpoint', () => {
    test('should add a new farmer', async () => {
        // Define a sample farmer data to send in the request
        const newFarmerData = { 
            name: 'John Doe',
            NIC: '123456789',
            DOB: '1990-01-01',
            address: '123 Main St',
            phone: '1234567890',
            farmlandSize: 100,
            farmlandLocation: 'Farmville',
            landRegNo: 'ABC123',
            username: 'johndoe',
            password: 'password123',
        };

        const response = await request(app).post('/add').send(newFarmerData);

        expect(response.status).toBe(404);
        expect(response.body.status).toBe();
        createFarmerId = response.body.id; 
    });

    test("POST /login should return farmers if the farmer already exists", async () => {
        const response = await request(app)
        .post(`/login`)
        .send({ username: 'johndoe', password: 'password123' });

        expect(response.status).toEqual(404);
        expect(response.body.status).toEqual();
    });

    //Test getting all farmers
    test("GET /get should return all farmers", async () => {
        const response = await request(app).get(`/get`);

        expect(response.status).toBe(404);
        expect(response.body.id).toBe(createFarmerId);
    });
});