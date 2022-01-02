const request = require("supertest");
const server = require("../index");
const { expect } = require('chai');

describe("API Test", () => {

	describe("GET /", () => {
		it("should return healthy", (done) => {
			request(server)
				.get("/")
				.expect(200)
				.end(done);
		})
	})

	describe("POST /user/signUp", () => {
		it("should return true(success)", (done) => {
			request(server)
				.post("/user/signUp")
				.send({
					name: "test",
					email: "test@gmail.com",
					password: "12341234"
				})
				.expect(200)
				.end(done);
		})
	})

})