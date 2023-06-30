import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Home = () => {
  return (
    <HomeStyle>
      <h1>3팀 1주차 과제</h1>
      <Link to="/signin">로그인</Link>
      <Link to="/signup">회원가입</Link>
    </HomeStyle>
  );
};

export default Home;

const HomeStyle = styled.section`
  padding: 50px 70px;
  border-radius: 20px;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #fff;
  h1 {
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 20px;
  }

  a {
    width: 100%;
    line-height: 50px;
    background-color: navy;
    color: #fff;
    text-align: center;
    border-radius: 10px;
  }
`;
