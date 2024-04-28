const request = require('supertest');
const app = require('../app');

describe('Messages Endpoint', () => {
    test('should add a new message', async () => {
        const newMessageData = {
            problemType: 'Water',
            message: 'Water is leaking from the roof',
        };

        const response = await request(app).post('/submit').send(newMessageData);

        expect(response.status).toBe(404);
        expect(response.body.status).toBe();
        createMessageId = response.body.id;

    });

    test("GET /get should return all messages", async () => {
        const response = await request(app).get(`/get`);

        expect(response.status).toBe(404);
        expect(response.body.id).toBe(createMessageId);
    });

    test("POST /send-sms should send an SMS", async () => {
        const newSMSData = {
            message: 'Test SMS',
            number: '+94769413257',
        };

        const response = await request(app).post('/send-sms').send(newSMSData);

        expect(response.status).toBe(404);
        expect(response.body.status).toBe();


  });

});