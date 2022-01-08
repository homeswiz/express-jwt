# express-jwt
jwt를 통한 인증, 인가처리를 하는 서버 로직 구현

해당 repository를 통해 얻고자 하는 것들은 다음과 같습니다.

1. 인증 / 인가 로직 처리
2. 테스트 케이스 작성
3. (optional) 인증 서버와 api서버 분리하여 연동하기


2021.12.28 - jwt sign / vefiy function 추가 https://github.com/homeswiz/express-jwt/projects/1#card-75332003

2021.12.29 - jwt function test base 추가, 앞으로의 테스트는 api를 기준으로 하기로 결정

2021.12.30 - api 테스트 전 server 3 layer architecture 참고 : https://velog.io/@ju_h2/Node-express-%EC%84%9C%EB%B2%84%EC%97%90-3-Layer-Architecture-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0

2021.12.31 - architecture 적용

2021.01.01 - user models Sequelize 적용, SingUp & Login API 추가

2021.01.02 - test 코드 추가 - POST /user/signUp, POST /user/login

2021.01.03 - aws 인프라 환경 구축하기 (1) private / public VPC 분리하여 구축하기, 참고 : https://docs.aws.amazon.com/ko_kr/vpc/latest/userguide/how-it-works.html

2021.01.04 - winston logging 추가

2021.01.05 - DB connection pool & DB CPU 관리 관련 공부
 이유 : SinUp API 요청이 많아지자 deadLock 발생 및 급격한 CPU 상승 발생 가능성이 있어 공부하기
 참고자료
 - 3-way-handshaking : https://www.techopedia.com/definition/10339/three-way-handshake
 - Connection Pool을 사용해야 하는 이유 : https://devkly.com/db/db-connection-pool/
 - (optional) MYSQL 엔진 아키텍처 : https://velog.io/@fortice/MySQL-%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98
 - (optional) TPS 지표 이해하기 : https://www.whatap.io/ko/blog/14/
 - (aws) RDS for MYSQL 높은 사용률 해결 방법 : https://aws.amazon.com/ko/premiumsupport/knowledge-center/rds-instance-high-cpu/

2021.01.06 - 성능 테스트 방법을 준비
 참고자료
 - Sequelize Connection Pool : https://sequelize.org/master/manual/connection-pool.html
 
 궁금증 
 1. seuqelize Connection Pool설정과 DB 자체에서 Connection Pool을 설정하면 DB 설정 Connection 개수 + Sequelize Connection 개수일까?
 2. multi server sequelize Connection 생성시 multi server * connection 개수가 될까?
 
 이거 테스트 해봐야겠다.

(예정)  DB(MYSQL) CPU의 사용량 상승은 DB Connection 외에도 여러가지 있을 수 있기 때문에 주로 어떤 요소들이 있는지 확인

2021.01.07 - what about json update?? 
 - 만약 json(text type)과 같은 큰 자료형태의 업데이트가 빈번하게 일어나면 어떻게 해야할까? -> 이것도 테스트 필요
 참고자료
 - https://www.youtube.com/watch?v=OjppS4RWWt8


## required 2021.01.08 ~ 2021.01.09
 Oauth로도 회원가입할 수 있도록 서버 구현하기
 
 (참고)
 - Oauth란? https://tecoble.techcourse.co.kr/post/2021-07-10-understanding-oauth/
 - Oauth vs Oauth 2.0 ?? https://velog.io/@undefcat/OAuth-2.0-%EA%B0%84%EB%8B%A8%EC%A0%95%EB%A6%AC 
 - express exmaple (kakao) : https://redbinalgorithm.tistory.com/687
 - kakao oauth login document : https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api#req-user-info
 - naver oauth login document : 
 - google oauth login document : 
