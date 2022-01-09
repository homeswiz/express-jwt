const request = require("supertest");
const server = require("../index");

describe("Login Test", () => {


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
})

describe("Oauth Test", () => {

	const coperations = [ "KAKAO" ]
	const authorizationCodeObj = {
		KAKAO : null
	}

	for (let i = 0; i < coperations.length; i++) {
		const coperation = coperations[i];

		describe(`POST /user/oauth/singUp, coperation = ${coperation}`, () => {
			it("should return true(success)", (done) => {
				request(server)
					.post(`/user/oauth/singUp?coperation=${coperation}&code=${authorizationCodeObj[coperation]}`)
					.expect(200)
					.end(done);
			})
		})
	}

})