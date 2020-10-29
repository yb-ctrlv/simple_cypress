# Cypress

## 기능
* 테스트 설정
* 테스트 작성 
* 테스트 실행 
* 디버그 테스트 

## 지원
* 통합 테스트
* 단위 테스트
* 종단 간 테스트

설치
  npm i -D cypress
  
eslint 사용시
```
  eslint -init
  npm i -D eslint-plugin-cypress
```
.eslintrc 설정*
```
  module.exports = {
    "env": {
      "cypress/globals": true
    },
    "plugins": [
      "cypress"
    ],
    "extends": [
      "plugin:cypress/recommended"
    ],
    "rules": {
      "cypress/no-assigning-return-values": "error",
      "cypress/no-unnecessary-waiting": "error",
      "cypress/assertion-before-screenshot": "warn",
      "cypress/no-force": "warn",
      "cypress/no-async-tests": "error"
    }
  };
```
최초 실행
```
  ./node_modules/.bin/cypress open
  or
  npx cypress open
```
실행
```
  npm run cypress:open
```

지원되는 브라우저
```
  https://docs.cypress.io/guides/guides/launching-browsers.html#Browsers
```
API 공식 Document
```
  https://docs.cypress.io/api/
```
