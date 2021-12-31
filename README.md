# express-jwt
jwt를 통한 인증, 인가처리를 하는 서버 로직 구현

해당 repository를 통해 얻고자 하는 것들은 다음과 같습니다.

1. 인증 / 인가 로직 처리
2. 테스트 케이스 작성
3. (optional) 인증 서버와 api서버 분리하여 연동하기


2021.12.28 - jwt sign / vefiy function 추가 https://github.com/homeswiz/express-jwt/projects/1#card-75332003

2021.12.29 - jwt function test base 추가, 앞으로의 테스트는 api를 기준으로 하기로 결정

2021.12.30 - api 테스트 전 server 3 layer architecture 참고 : https://velog.io/@ju_h2/Node-express-%EC%84%9C%EB%B2%84%EC%97%90-3-Layer-Architecture-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0

2021.12.31 - architecture 적

(예정) POST /login시, jwt.sign function test 코드 추가, middlware jwt.verify function test 코드 추가

(예정) jwt error handling 추가

(예정) jwt error handling test 로직 추가
