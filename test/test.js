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
})