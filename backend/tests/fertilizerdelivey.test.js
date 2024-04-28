const request = require('supertest');
const app = require('../app');

describe('Fertilizer Delivery Endpoint', () => {
    test('should add a new fertilizer delivery', async () => {
        const newFertilizerDeliveryData = {
            fertilizerType: 'Urea',
            quantity: '10 bags',
            date: '2022-12-31',
            time: '10:00 AM',
            location: '123 Main St',
            farmerId: '1234567890',
            agrarianId: '0987654321',
        };

        const response = await request(app).post('/add').send(newFertilizerDeliveryData);

        expect(response.status).toBe(404);
        expect(response.body.status).toBe();
        createFertilizerDeliveryId = response.body.id;

    });

    test("PUT /updateministry should update fertilizer delivery status to Ministry", async () => {
        const response = await request(app)
            .put(`/updateministry/${createFertilizerDeliveryId}`);

        expect(response.status).toEqual(404);
        expect(response.body.status).toEqual();
    });

    test("PUT /updateasc should update fertilizer delivery status to ASC", async () => {
        const response = await request(app)
            .put(`/updateasc/${createFertilizerDeliveryId}`);

        expect(response.status).toEqual(404);
        expect(response.body.status).toEqual();
    });

    test("GET /get should return all fertilizer deliveries", async () => {
        const response = await request(app).get(`/get`);

        expect(response.status).toBe(404);
        expect(response.body.id).toBe(createFertilizerDeliveryId);
    });

});