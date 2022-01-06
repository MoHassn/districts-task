import chai from "chai";
import chaiHttp from "chai-http";
import app from "../index";

chai.use(chaiHttp);
const { expect } = chai;

describe("GET /districts", () => {
  it("should get all districts", (done) => {
    chai
      .request(app)
      .get("/districts")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
      });
    done();
  });
});

describe("GET /districts/near", () => {
  it("should get near districts", (done) => {
    chai
      .request(app)
      .get("/districts/near")
      .send({
        location: [29.924526, 31.205753],
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).have.property("nearDistricts");
        expect(res.body)
          .to.have.nested.property("nearDistricts[0]")
          .to.have.all.keys([
            "_id",
            "name",
            "location",
            "calcDistance",
            "orders",
          ]);
      });
    done();
  });
});
