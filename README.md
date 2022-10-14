# 쇼핑몰

과거 프로젝트에는 라이브러리 없이 만들어 보려고 노력했었다.  
이번 토이프로젝트는 타입스크립트 + 여러 라이브러리를 사용해보며 학습하며 적용해보자.

**[배포 URL]**

- URL: https://react-shopping-mall-two.vercel.app/

**[계정]**

- 🧑🏻‍💻 id: test2020@naver.com
- 🔐 password: test2020

## 기술 스택

- react
- recoil, recoil-persist
- react-router v6
- axios
- styled-component
- react-hook-form
- embla-carousel-react

## 프로젝트 구현

1. 메인 페이지 반응형 웹 구현
2. 메인 페이지에서 더 나은 UX를 위해 skeleton-ui 구현

## 프로젝트를 하면서 고민한 나의 생각 정리하기

1. 고객이 상품정보를 보기 위해 상품을 클릭했을 때 그 데이터를 다시 fetching해 올 것인가?

- 쇼핑몰은 처음에 상품 데이터를 불러온다.  
  메인페이지에서 불러온 상품 데이터를 상태관리하고, 고객이 상품을 눌렀을 때 누른 상품의 데이터를 fetching 하지말고, 상태관리한 정보를 토대로 상세페이지에 보여주면 된다고 생각한다.

2. React-query에 대한 학습과 도입

- 현재 recoil을 가지고 상태관리 하고 있는데 react-query를 도입할것인가?
  - react-query를 이용하면 캐싱과 무한스크롤 등을 쉽게 구현할 수 있다.  
    react-query로 서버의 상태와 클라이언트의 상태관리를 할 수 있다고 보았는데, 그럼 recoil을 사용하지말고 react-query만 사용해야 하는 것인가?
  - 우선 recoil의 편리한 상태관리를 사용하면서 부가적인 기능을 사용하기 위해 react-query도 사용해보자. 둘 다 사용해보다보면 답이 나오겠지..!
