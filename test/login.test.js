const request = require('supertest');
const { expect } = require('chai');

describe('Login', () => {
    describe('POST /login', () => {
        it('deve retornar 200 com um token string quando usar credenciais válidas', async () => {
            const res = await request('http://localhost:3000')
                .post('/login')
                .set('Content-Type', 'application/json')
                .send({
                    "username": "julio.lima",
                    "senha": "123456"
                });
            console.log(res.statusCode);
            console.log(res.body);

            expect(res.statusCode).to.equal(200);
            expect(res.body.token).to.be.a('string');
        });
    });
});