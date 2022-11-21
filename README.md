# random-quiz-frontend

🏠 웹페이지: https://random-quiz-frontend-task.vercel.app

✅ E2E 테스트 보고서 페이지: https://davidyang2149.github.io/random-quiz-frontend

## 📚 애플리케이션 소개 & 기능
'퀴즈'를 풀 수 있는 웹 애플리케이션입니다.

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

## 테스트

### E2E 테스트 

각 피처 작업이 완료된 후 PR을 올리면 GitHub Actions를 통해 E2E 테스트를 진행합니다. 

테스트 결과는 [웹페이지](https://davidyang2149.github.io/random-quiz-frontend)에서 확인할 수 있습니다.

### 테스트 커버리지

Jest와 Testing-Library를 사용하였습니다.

![test-coverage](https://user-images.githubusercontent.com/40143056/191526342-5bda0898-61cb-4c55-8bcc-6053359f415f.png)


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

## 🔖 프로젝트 패키지 설치 - canvas가 설치되지 않는 이슈

프로젝트 패키지 설치 시 canvas가 설치되지 않는 경우, 다음 작업이 필요합니다.

```sh
npm install -g node-gyp
# use Homebrew
brew install pkg-config cairo pango libpng jpeg giflib librsvg pixman
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
