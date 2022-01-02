const request = require("supertest");
const server = require("../index");
const { expect } = require('chai');

describe("API Test", () => {

	describe("GET /", () => {
		it("should return healthy", () => {
			request(server)
				.get("/")
				.expect(200)
				.end(function(err, res) {
					if (err) {
						return done(err)
					} else {
						expect(res.body).equal("healthy");
					}
					return done();
				  });
		})
	})

	describe("POST /user/signUp", () => {
		it("should return true", (done) => {

			const userDto = { 
				email: "test@gmail.com",
				password: "123123",
				name: "test"
			}

			request(server)
				.post("/user/singUp", {
					json: true
				})
				.send(userDto)
				.expect(200)
				.end(function(err, res) {
					if (err) return done(err);
					return done();
				  });
		})
	})
})