const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config();
const { obterToken } = require('../helpers/autenticacao');
const postTransferencias = require('../fixtures/postTransferencia.json');


describe('Transferências', () => {
    let token;
    beforeEach(async () => {
        token = await obterToken('julio.lima', '123456');
    })

    describe('POST /transferencias', () => {

        it('Deve retornar sucesso com 201 quando o valor da transferência for igual ou acima de 10 reais', async () => {
            const bodyTransferencias = { ...postTransferencias }
            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(bodyTransferencias);
            expect(resposta.statusCode).to.equal(201);

        });

        it('Deve retornar sucesso com 422 quando o valor for abaixo de 10 reais', async () => {
            const bodyTransferencias = { ...postTransferencias }
            bodyTransferencias.valor = 7;
            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(bodyTransferencias);
            expect(resposta.statusCode).to.equal(422);
        });
    });

    describe('GET /transferencias/{id}', () => {
        it('deve retornar sucesso com status 200 e dados iguais ao registro de transferência contidos nos bancos de dados quando o id for valido', async () => {
            const resposta = await request(process.env.BASE_URL)
                .get('/transferencias/3')
                .set('Authorization', `Bearer ${token}`);
            console.log(resposta.body);
            console.log(resposta.status);
            expect(resposta.status).to.equal(200);
            expect(resposta.body.id).to.equal(3);
            expect(resposta.body.id).to.be.a('number');
            expect(resposta.body.conta_origem_id).to.equal(1);
            expect(resposta.body.conta_destino_id).to.equal(2);
            expect(resposta.body.valor).to.equal('11.00');
            expect(resposta.body.valor).to.be.a('number');

        });
    });

    describe('GET /transferencias', () => {
        it('deve retornar 10 elementos na páginação quando informar limite de 10 registros', async () => {
            const resposta = await request(process.env.BASE_URL)
                .get('/transferencias?page=1&limite=10')
                .set('Authorization', `Bearer ${token}`);
            expect(resposta.status).to.equal(200);
            expect(resposta.body.limit).to.equal(10);
            expect(resposta.body.transferencias).to.have.lengthOf(10);

        })
    })
});