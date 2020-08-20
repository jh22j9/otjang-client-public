# otjang-client

## Intro

- **팀 명 :** 4hangers
- **프로젝트 명 :** o t j a n g
- **프로젝트 형태 :** 수강생 프로젝트
- **팀원 :** 김경원, 김라희, 이나린, 전희주(팀장)
- **배포 링크 :** 배포 후 업데이트

## Project

새로운 계절이 오면 흐린 기억 속 티셔츠를 찾아 수납 박스를 파헤치던 경험이 있으신가요?

옷장(otjang)은 생활의 3요소 중 하나인 의복을 한 눈에 관리하여 생활 효율을 높이고자 합니다. 의복은 남녀노소 누구나 착용하므로, 뷰티/패션에 초점을 맞추지 않는 범용적 라이프스타일 관리 프로그램을 지향합니다. 

나의 옷장은 크게 의류/신발/잡화 카테고리로 분류됩니다. 아이템 등록 시 이미지, 계절, 구매일, 구매처(브랜드), 가격 등을 함께 입력합니다. 아이템 정보는 통계에 활용되어 월별 의류 구매 비용 등을 확인할 수 있습니다.

### 사용 스택
![](https://images.velog.io/images/jheeju/post/0d654a7f-57cb-4dba-8ab6-09f7ac91d510/%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%89%E1%85%B3%E1%84%90%E1%85%A2%E1%86%A8.svg)


### 스택 아키텍쳐
![](https://images.velog.io/images/jheeju/post/edd23cf5-ec00-4884-be89-1d83b27b5939/%E1%84%89%E1%85%B3%E1%84%90%E1%85%A2%E1%86%A8%E1%84%8B%E1%85%A1%E1%84%8F%E1%85%B5%E1%84%90%E1%85%A6%E1%86%A8%E1%84%8E%E1%85%A7.svg)

### 기능 Flow
![](https://images.velog.io/images/jheeju/post/545347f0-8639-4983-b694-3da655597f83/otjang-wireframe.jpg)

### 시연 GIF

|회원가입/탈퇴|비밀번호 변경|자동 로그인|
:---:|:---:|:---:
|![](https://media.giphy.com/media/QWA42CW0NprNrZPmIV/giphy.gif)|![](https://media.giphy.com/media/W4hxt0VCtaRnEjIdlE/giphy.gif)|![](https://media.giphy.com/media/j1tjeohHchMHIvyRMx/giphy.gif)|

|카테고리|아이템 추가|아이템 편집|
:---:|:---:|:---:
|![](https://media.giphy.com/media/IhgeIWAQgetBfmKRyv/giphy.gif)|![](https://media.giphy.com/media/lrbiqoVmAQQij2GupH/giphy.gif)|![](https://media.giphy.com/media/cmTRGUdqVWfk2FSlzg/giphy.gif)|

|아이템 삭제|통계|세탁표시기호|
:---:|:---:|:---:
|![](https://media.giphy.com/media/WnBE8yFr19i2Y4ubCT/giphy.gif)|![](https://media.giphy.com/media/dZue9jWekTtb3y5doS/giphy.gif)|![](https://media.giphy.com/media/JsDpGYoIFWCKDqJH7y/giphy.gif)|

## Members
### 전희주 (팀장)
- Role : Team Leader
- Position : Front-end
- Stack : React Native, Redux, Redux-thunx, React Navigation, React-hooks, Firebase
- Works :
    - 프로젝트 기획 및 문서 관리
    - 로고 디자인 및 스플래쉬 스크린 구현
    - 회원가입, 로그인, 비밀번호 변경, 회원 탈퇴 화면 기능 구현
    - Firebase로 소셜 로그인 기능 구현
    - 아이템 정보, 편집, 삭제 화면 구성 및 기능 구현
    - 의류/신발/잡화 카테고리 내 세부 타입 네비게이션 구현
    - 더보기 화면 구성 및 기능 구현
    - 내 정보 화면 구성 및 기능 구현
    
 ### 김경원
 - Role : Team Member
 - Position : Front-end
 - Stack : React Native, Redux, Redux-thunk, AWS-SDK, React Navigation, React-hooks, Victory Native
 - Works :
    - React component 설계
    - Redux 설계 및 기능구현 
    - 옷 데이터 추가,수정,삭제 기능 Logic 작성 
    - Redux-thunk 사용하여 서버와 연동기능 구현
    - 로그인, 회원가입 페이지 화면구성
    - 홈화면 구성 및 기능 구현
    - 통계화면 구성 및 기능 구현 
    - LongPress 통한 옷 데이터 삭제
    - 데이터 추가화면구성 
    - 데이터 추가, 수정화면의 UI 기능 구현 ( 옷 data입력 ) 
    - 이미지 picker, aws-sdk 사용한 이미지 upload 기능

### 이나린
- Role : Team Member
- Position : Back-end
- Stack : node.js, express, JWT, sequelize, MySQL, passport, passport-google-oauth20,  firebase-admin, EC2, RDS, Route53
- Works :
    - API 문서 작성
    - 데이터 베이스 스키마 설계(공동작업)
    - MVC 패턴 적용 및 라우터 분리
    - 유저 데이터 CRUD (Server ↔ DB)
    - 비밀번호 암호화
    - 소셜 로그인 백엔드 처리(토큰 발급)
    - JWT 유저인증 미들웨어 적용 
    - 아이템 뷰 테이블 migration으로 생성
    - 다대다 관계 테이블 sequelize 관계 설정
    - RDS 생성 및 셋팅
    - EC2 배포 및 PM2 적용
    
### 김라희
- Role :  Team Member
- Position : Full-Stack
- Stack : node.js, express, sequelize, MySQL, S3 / React-Native, React-Navigation, React-Hooks
- Works :
    - DB 테이블 생성 및 관계 설정
    - 아이템 데이터 CRUD (Server ↔ DB)
    - 비밀번호 암호화
    - multerS3,aws-sdk를 활용한 이미지 업로드
    - dotenv를 이용한 개발 버전 적용
    - Async storage를 활용한 자동로그인
    - 세탁표시기호 페이지
