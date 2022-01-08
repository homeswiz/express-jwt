const request = require("supertest");
const server = require("../index");
const { expect } = require('chai');

describe("API Test", () => {


	// singUp and login test
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

	describe("POST /user/login", () => {
		it("should return true(success)", (done) => {
			request(server)
				.post("/user/login")
				.send({
					email: "test@gmail.com",
					password: "12341234"
				})
				.expect(200)
				.end(done);
		})
	})

	// oauth signUp & login test
	describe("POST /user/oauth/singUp", () => {
		it("should return true(success)", (done) => {
			request(server)
				.post("/user/oauth/singUp")
				.send(
					//todo
				)
				.expect(200)
				.end(done);
		})
	})

	describe("POST /user/oauth/login", () => {
		it("should return true(success)", (done) => {
			request(server)
				.post("/user/oauth/login")
				.send(
					//todo
				)
				.expect(200)
				.end(done);
		})
	})

})