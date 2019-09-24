let User = require('../server/models/User');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();


chai.use(chaiHttp);

describe('Authentication', () => {
    beforeEach((done) => { //Before each test we empty the database
        User.deleteMany({}, (err) => {
            done();
        });
    });

    describe('/post Oauth', () => {
        it('should GET get a 400 error', (done) => {
            const data = {
                name: "Samson",
                // email:"sam@gmail.com",
                provider:"google"
            };
            chai.request(server)
                .post("/oauth")
                .send(data)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error');
                    res.body.error.should.have.property('email');
                    done();
                });
        });
    });
});
