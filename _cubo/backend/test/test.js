const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const should = chai.should();

const BASE_URL = "http://localhost:3003";

const MOCK_USER = {
    name: 'Freddie',
    email: 'mercury@gmail.com',
    password: 'bohemian'
};

describe('Test suit API Cubo', function() {
    
    it("Should register an user", (done) => {
        chai.request(BASE_URL)
            .post('/signup')
            .send(MOCK_USER)
            .end((err, res) => {
                if(err) {
                    throws(err);
                }
                res.should.have.status(201);
                done();
            });
    });
});
