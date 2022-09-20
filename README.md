# classting-frontend-task
클래스팅 프론트엔드 과제 (양홍석)

🏠 웹페이지: https://classting-frontend-task.vercel.app  

✅ E2E 테스트 보고서 페이지: https://davidyang2149.github.io/classting-frontend-task

📚 이슈(TODO): https://github.com/DavidYang2149/classting-frontend-task/issues?q=is%3Aissue+is%3Aclosed

📚 PR 기록: https://github.com/DavidYang2149/classting-frontend-task/pulls?q=is%3Apr+is%3Aclosed

📚 문서화 : https://github.com/DavidYang2149/classting-frontend-task/discussions

📚 개발 일지: https://github.com/DavidYang2149/classting-frontend-task/wiki

## 📚 애플리케이션 소개 & 기능
'퀴즈'를 풀 수 있는 웹 애플리케이션입니다.

![classting-quiz](https://user-images.githubusercontent.com/40143056/191155666-ed9c3a46-611e-42ba-a30a-4bc49a2013f9.gif)

### 기능
### 필수구현
- [x] 사용자는 '퀴즈 풀기' 버튼을 클릭하여 퀴즈 풀기를 시작할 수 있다.
- [x] 사용자는 문항에 대한 답안을 4개 보기 중에 선택할 수 있다.
- [x] 사용자는 답안을 선택하면 다음 문항을 볼 수 있다.
  - [x] 답안 선택 후 다음 문항 버튼을 볼 수 있다.
  - [x] 답안이 맞았는지 틀렸는지 바로 알 수 있다.
  - [x] 다음 문항 버튼을 클릭하여 다음 문항으로 이동할 수 있다.
- [x] 모든 문항을 다 풀면 사용자는 다음과 같은 결과 정보를 볼 수 있다.
  - [x] 퀴즈를 마칠 때까지 소요된 시간
  - [x] 정답 개수
  - [x] 오답 수

### 추가구현
- [ ] 정 오답에 대한 비율을 차트로 표기
- [x] 다시 풀기
- [ ] 오답 노트

## 💎 기술 스택
### 언어
- TypeScript

### 라이브러리 & 프레임워크
- React
- Next.js

### 상태관리
- Redux Toolkit

### CSS 스타일
- Tailwind CSS

### 테스트 도구
- Jest
- Testing Library
- Cypress

### 환경설정 지원
- ESLint
- Sentry
- Vercel(Deploy)

## 🔖 프로젝트 노드 버전 관리

프로젝트 실행시 권장 노드 버전

```sh
# .nvmrc
v16.15.0
```
If you want to manage nvm. recommand to use [fnm(Fast Node Manager)](https://github.com/Schniz/fnm)

```sh
# use Homebrew
brew install fnm
```

## 📚 Install dependencies

```sh
npm install
```

## 💻 Run dev server

```sh
npm run dev
```

## 🧪 Lint and fix

```sh
npm run lint
```

## 🧪 Run Coverage

```sh
npm run test:unit

# running option
npm run test
```

## 🧪 Run E2E tests

```sh
npm run e2e

# headless option
npm run e2e:headless
```
