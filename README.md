# [Team3 - Todo App]()
👆🏻 제목을 클릭하면 배포된 사이트를 확인하실 수 있습니다.

<br/>

## 🗓️ 기간

- 2023년 6월 27일 ~ 2023년 06월 30일

## 🧭 목적

- 동료학습 및 협업능력과 새로운 인사이트

<br/>

## 💡 진행방식

1.  팀 컨벤션을 지정하여 [위키](https://github.com/wanted-pre-onboarding-11th-team3/pre-onboarding-11th-1-3/wiki/Team-convention#commit-convention)에 정리해 두었습니다.
2.  [팀 노션](https://www.notion.so/3-5ae5a568e91640bb960bee97a98327a7?pvs=4)을 활용하여 각자의 사전과제를 보고 Best Practice라고 생각되는 과제에 투표를 합니다. (Login/SignUp, Todo)
3.  팀원들의 원티드 인턴십 사전과제 중, 각각 Best Practice로 선발된 코드를 팀 프로젝트에 반영하고 VScode의 "Live Share" 확장프로그램을 사용하여 서로의 코드 작성법을 실시간으로 보며 함께 리팩토링을 진행하였습니다.
4.  원격 브랜치에 pr을 올린 후, 한번 더 코드를 확인 한 후, 3명이상 승인을 받으면 develop 브랜치로 Merge합니다.

<br/>

## 🎖️ Members

<table border>
  <tbody>
    <tr>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/64674174?v=4"  alt=""/>
        팀장 FE.<br/>
        <a href="https://github.com/hyerimhan">
          <img src="https://img.shields.io/badge/한혜림-000000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/111730140?v=4"  alt=""/><br />
        팀원 FE.<br/>
        <a href="https://github.com/ImGyuriKim">
          <img src="https://img.shields.io/badge/김규리-000000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/117807467?v=4"  alt=""/><br />
        팀원 FE.<br/>
        <a href="https://github.com/jh1109">
          <img src="https://img.shields.io/badge/노주희-000000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/94950829?v=4"  alt=""/>
        팀원 FE.<br/>
        <a href="https://github.com/NONONCRUST">
          <img src="https://img.shields.io/badge/신상호-000000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/44185091?v=4"  alt=""/>
        팀원 FE.<br/>
        <a href="https://github.com/marie-ming">
          <img src="https://img.shields.io/badge/정민지-000000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/92035406?v=4"  alt=""/>
        팀원 FE.<br/>
        <a href="https://github.com/hanseungjune">
          <img src="https://img.shields.io/badge/한승준-000000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
     </tr>
  </tbody>
</table>

<br/>

## 🛠️ Stacks

![react](https://user-images.githubusercontent.com/123078739/234895132-18ab503a-fcc7-486d-b89a-cb0cc1f7796b.svg) ![eslint](https://user-images.githubusercontent.com/123078739/234895191-c1198a7b-9e2e-499a-8e61-c3b87bf8e2c2.svg)
![prettier](https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black) ![Axios](https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white) ![typescript](https://user-images.githubusercontent.com/123078739/234895162-42f905c6-765d-44d2-bcb1-b011286ef6b2.svg) ![styledcomponents](https://user-images.githubusercontent.com/123078739/234895185-7fd6c334-faca-4520-8551-2f20b32f085e.svg)

<br/>

## 👑 Best Practice

> Best Practice란 모범사례라는 말로서, 특정 문제를 효과적으로 해결하기 위한 가장 성공적인 해결책 또는 방법론을 의미합니다.

### 📍 기능 (CRUD)

- [회원가입](#signup--login)
- [로그인 / 로그아웃](#signup--login)
- [Todo](#todo)
- [Redirect Route](#redirect-route)

<table border>
  <tr>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>회원가입</td>
    <td>로그인</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Todo</td>
    <td>Redirect Route</td>
  </tr>
</table>

### 🌳 File Tree

```
📦src
┣ 📂apis
┃ ┣ 📜auth.ts
┃ ┣ 📜instance.ts
┃ ┗ 📜todo.ts
┣ 📂components
┃ ┣ 📂auth
┃ ┃ ┣ 📜AuthContainer.presenter.tsx
┃ ┃ ┗ 📜AuthContainer.tsx
┃ ┣ 📂common
┃ ┃ ┣ 📜Button.tsx
┃ ┃ ┣ 📜Input.tsx
┃ ┃ ┗ 📜Title.tsx
┃ ┗ 📂todo
┃ ┃ ┣ 📜TodoAdd.tsx
┃ ┃ ┣ 📜TodoHeader.tsx
┃ ┃ ┗ 📜TodoList.tsx
┣ 📂interfaces
┃ ┣ 📜auth.ts
┃ ┗ 📜todo.ts
┣ 📂pages
┃ ┣ 📜Home.tsx
┃ ┣ 📜Login.tsx
┃ ┣ 📜NotFound.tsx
┃ ┣ 📜Signup.tsx
┃ ┗ 📜Todo.tsx
┣ 📂routes
┃ ┣ 📜RedirectRoute.tsx
┃ ┗ 📜router.tsx
┣ 📂utils
┃ ┗ 📜storage.ts
┣ 📜App.tsx
┣ 📜GlobalStyle.ts
┣ 📜index.tsx
┗ 📜react-app-env.d.ts
```

### 🔒 SignUp / Login

#### ❓ 선정이유

- 전체적인 구조가 깔끔하고 잘 정리되었습니다.
- 디렉토리 구조가 의미에 맞게 잘 세분화 되어있습니다.
- 로그인, 회원가입 입력폼이 똑같기 때문에 공통 컴포넌트로 만들고 각각 페이지에서 import하는 방식을 채택하였습니다.

#### 💥트러블 슈팅

- 이슈

  - 이메일 or 비밀번호 입력 후 입력값을 삭제시, 에러메세지가 사라지지 않는 이슈를 발견하였습니다.

  ```
  switch (event.target.type) {
  case 'email':
  const regex = /\S+@\S+\.\S+/

  if (!regex.test(current)) {
    setErrorMessage({
      ...errorMessage,
      emailError: '이메일 형식을 확인해 주세요.',
    })
    setIsValid({ ...isValid, isEmail: false })
    setDisabled(true)
  } else {
    setErrorMessage({ ...errorMessage, emailError: '' })
    setIsValid({ ...isValid, isEmail: true })
  }
  setForm({ ...form, email: current })
  break
  case 'password':
  if (current.length < 8) {
    setErrorMessage({
      ...errorMessage,
      passwordError: '8자 이상 입력해주세요.',
    })
    setIsValid({ ...isValid, isPassword: false })
    setDisabled(true)
  } else {
    setErrorMessage({
      ...errorMessage,
      passwordError: '',
    })
    setIsValid({ ...isValid, isPassword: true })
    setDisabled(false)
  }
  setForm({ ...form, password: current })
  break
  }
  ```

  ![authBefore](https://github.com/hyerimhan/pre-onboarding-11th-1-3/assets/64674174/5cb87bb7-0701-4b07-8eac-ba6c3489f914)

  <br/>

- 해결

  - 불필요한 state를 삭제(errorMessage)하고 에러메세지는 유효성 유무를 판단하는 상태(isValid)를 넘겨주고 입력값이 없으면 에러메세지가 비활성화 되도록 구현하였습니다.

  ```
  switch (event.target.type) {
      case 'email':
        const regex = /\S+@\S+\.\S+/; // eslint-disable-line

        setIsValid(prev => ({
          ...prev,
          isEmail: !regex.test(current) ? false : true,
        }));
        setForm(prev => ({ ...prev, email: current }));
        break;
      case 'password':
        setIsValid(prev => ({
          ...prev,
          isPassword: current.length < 8 ? false : true,
        }));
        setForm(prev => ({ ...prev, password: current }));
        break;
    }
  ```
![authAfter](https://github.com/hyerimhan/pre-onboarding-11th-1-3/assets/64674174/99a9c73b-846e-4425-ad27-a4177a159eb2)

  <br/>

### ✅ TODO

#### ❓ 선정이유

- 할일을 입력할 수 있는 영역인 TodoAdd.tsx와 여기서 입력받은 내용들을 보여주는 영역인 TodoList.tsx로 컴포넌트를 나눠서 코드를 재사용하거나 유지보수하기 편리할 것 같다는 생각이 들었습니다.

<br/>

### 🚩 Redirect Route

#### ❓ 선정이유

- 페이지 컴포넌트 내부에 리다이렉션 로직을 작성하게 되면 컴포넌트 렌더링 이후에 로직이 실행되기 때문에 불필요한 렌더링이 생길 수 있습니다. 반면에 컴포넌트로 분리해서 컴포넌트 트리 윗부분에 위치시키면 페이지 컴포넌트가 렌더링되기전에 페이지를 이동시킬 수 있고 관심사도 분리되기 때문에 아주 좋은 구현 방법이라고 생각합니다!

#### 💥트러블 슈팅

- 이슈
  - 안정성을 위하여 try catch문을 활용하여 api를 불러오는 방법으로 코드를 수정하였는데, RedirectRoute에 설정해 놓은 alert 창과 각 컴포넌트에 설정해놓은 try catch문에서 에러가 발생하는 catch문의 error메세지가 한꺼번에 활성화되어 alert메세지가 불필요하게 2번 활성화되는 이슈를 발견하였습니다.

```
 useEffect(() => {
    if (accessToken && (location === '/signup' || location === '/signin')) {
      alert('로그인 상태입니다!')
      navigate('/todo')
    }
    if (!accessToken && location === '/todo') {
      alert('로그인이 필요해요!')
      navigate('/signin')
    }
  }, [navigate, location, accessToken])
```

- 해결
  - 불필요한 useEffect는 삭제하고, return 할 수 있도록 `navigate()`를 `<Navigate to=""/>`로 변경하여 더 이상 실행할 필요가 없는 경우 한번만 실행되도록 하였습니다.

```
if (accessToken && (location === '/signup' || location === '/signin')) {
  alert('로그인 상태입니다!');
  return <Navigate to="/todo" replace />;
}
if (!accessToken && location === '/todo') {
  alert('로그인이 필요해요!');
  return <Navigate to="/signin" replace />;
}
```

<br/>

## ✒️ 회고

<table border>
  <thead>
    <tr>
      <th>이름</th>
      <th>좋았던 점</th>
      <th>아쉬웠던 점</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>규리</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>주희</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>상호</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>민지</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>승준</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>혜림</td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
