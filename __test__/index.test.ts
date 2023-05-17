import request from 'supertest';
import { Express } from 'express-serve-static-core';
import { app } from '../src';
let server: Express;
describe('APP should say "Hello World!"', () => {
    beforeAll(() => {
        server = app;
    });
    test('should return 200', async () => {
        const res = await request(server).get("/")
        expect(res.status).toBe(200);
        console.log('Test successful')
        expect(res.status).toBe(100);
        expect(res.body).toMatchObject({ message: `Hello World!` });

    });
    afterAll((done) => {
        server.disable;
        done();
    });
});