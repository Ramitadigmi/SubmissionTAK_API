const resquest = require("supertest")("https://restful-booker.herokuapp.com")
const expect = require("chai").expect;

describe("Booking Restful", function(){
    it("Success Post Booking", async function() {
        const response = await resquest
        .post("/booking")
        .send({
            firstname: "Jim",
            lastname: "Brown",
            totalprice : 111,
            depositpaid : true,
            bookingdates : {
                checkin: "2018-01-01",
                checkout : "2019-01-01"
            },
            additionalneeds : "Breakfast"
        });
        expect(response.status).to.eql(418)
    }) 
    it("Success Get Booking ", async function() {
        const response = await resquest
        .get("/booking")
        .send({
            "bookingid": 1
          },
          {
            "bookingid": 2
          },
          {
            "bookingid": 3
          },
          {
            "bookingid": 4
          });
        expect(response.status).to.eql(200)
    }) 
    it("Success Get Booking id", async function() {
        const response = await resquest
        .get("/booking/1")
        .send({
            firstname: "Sally",
            lastname: "Brown",
            totalprice: 111,
            depositpaid: true,
            bookingdates: {
                checkin: "2013-02-23",
                checkout: "2014-10-23"
            },
            additionalneeds: "Breakfast"
        });
        expect(response.status).to.eql(418)
    }) 
}) 