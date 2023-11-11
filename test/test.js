// tests/test-api.test.js
const request = require("supertest");
const app = require("../index"); // Adjust the path accordingly
const mongoose = require('mongoose')
const authtoken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjU0ZDI3MWNlZDY3NDA0MjJhYWVjNmJiIiwiaWF0IjoxNjk5NzIwNzYwLCJleHAiOjE2OTk4MDcxNjB9.PUDj7eQTceqLnWuOIviGYW4ipftfi8w2GxcLPjijtY0";

describe("API Tests", () => {
  it("signup user", async () => {
    const res = await request(app)
      .post("/user/signup")
      .send({ name: "allen" , email:"oko345n@gmail.com" , password:"123456"});
    expect(res.status).toBe(200);
    // expect(res.body).toHaveLength(2);
  }, 90000);
  it("login user", async () => {
    const res = await request(app)
      .post("/user/login")
      .send({email:"oko345n@gmail.com" , password:"123456"});
    expect(res.status).toBe(200);
    // expect(res.body).toHaveLength(2);
  }, 90000);
  it("should get all Itinerarys", async () => {
    const res = await request(app)
      .get("/user/retrieve/all/mgn")
      .set("Authorization", `Bearer ${authtoken}`)
      .send({ userid: "654d271ced6740422aaec6bb" });
    expect(res.status).toBe(200);
    // expect(res.body).toHaveLength(2);
  }, 90000);
  it("create Itinerary", async () => {
    const res = await request(app)
      .post("/user/create/mgn")
      .set("Authorization", `Bearer ${authtoken}`)
      .send({ userid:"654d271ced6740422aaec6bb",
      name:"my mgn134",
      start:"654d271ced6740422aaec6bb",
      end:"654d271ced6740422aaec6bb",
      destination:[
          {
              city:"judy", country:"judy" , departureDate:"12/2/2023",  arrivalDate:"12/2/2023"
          },
         
      ],
      activities:[
          {
              location:"judy", name:"judy" , date:"12/2/2023"
          }
          
      ],
      transportation:[
          {
              mode:"judy", details:"judy" , departureDate:"12/2/2023",  arrivalDate:"12/2/2023"
          }
          
          
      ],
      accomodation:[
          {
              name:"judy", address:"judy" , checkInDate:"12/2/2023",  checkoutDate:"12/2/2023"
          }
          
      ]});
    expect(res.status).toBe(200);
    // expect(res.body).toHaveLength(2);
  }, 90000);
  it("should get user Itinerary", async () => {
    const res = await request(app)
      .get("/user/retrieve/user/mgn")
      .set("Authorization", `Bearer ${authtoken}`)
      .send({ userid: "654d271ced6740422aaec6bb" });
    expect(res.status).toBe(200);
    // expect(res.body).toHaveLength(2);
  }, 70000);
  it("should get a single Itinerary", async () => {
    const res = await request(app)
      .get("/user/retrieve/single/mgn")
      .set("Authorization", `Bearer ${authtoken}`)
      .send({ userid: "654d271ced6740422aaec6bb" , mgnid:'654daed953560c8de7277920' });
    expect(res.status).toBe(200);
    // expect(res.body).toHaveLength(2);
  }, 70000);
  it("should delete Itinerary", async () => {
    const res = await request(app)
      .delete("/user/delete/mgn")
      .set("Authorization", `Bearer ${authtoken}`)
      .send({ userid: "654d271ced6740422aaec6bb" , mgnid:'654daed953560c8de7277920' });
    expect(res.status).toBe(200);
    // expect(res.body).toHaveLength(2);
  }, 70000);
  afterAll(async (done) => {
    // Closing the DB connection allows Jest to exit successfully.
    await mongoose.connection.close();
    done();
  })

});
