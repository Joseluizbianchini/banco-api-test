const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config();
const postLogin = require('../fixtures/postLogin.json');

describe('Login', () => {
    describe('POST /login', () => {
        it('deve retornar 200 com um token string quando usar credenciais válidas', async () => {
            const bodyLogin = { ...postLogin }
            const res = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send(bodyLogin);
            expect(res.statusCode).to.equal(200);
            expect(res.body.token).to.be.a('string');
        });
    });
});