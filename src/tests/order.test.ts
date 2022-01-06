import chai from "chai";
import chaiHttp from "chai-http";
import app from "../index";

chai.use(chaiHttp);
const { expect } = chai;

describe("POST /orders", () => {
  it("It should create order", (done) => {
    chai
      .request(app)
      .post("/districts/61d2f6f5fcdf58d92d32dad3/orders")
      .send({ type: "BASIC" })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
      });
    done();
  });
  it("It should fail creating order", (done) => {
    chai
      .request(app)
      .post("/districts/61d2f6f5fcdf58d92d32dad3/orders")
      .send()
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res).to.be.json;
      });
    done();
  });
});
