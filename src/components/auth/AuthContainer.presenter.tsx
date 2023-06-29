import Button from 'components/common/Button';
import Input from 'components/common/Input';
import Title from 'components/common/Title';
import { IAuthType, IAuthValidType } from 'interfaces/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface PropsType {
  title: string;
  data: IAuthType;
  isValid: IAuthValidType;
  dataTestid: string;
  disabled: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

const AuthContainerPresenter = ({
  title,
  data,
  isValid,
  dataTestid,
  disabled,
  onChange,
  onSubmit,
}: PropsType) => {
  const navigate = useNavigate();

  return (
    <AuthStyle>
      <Title titleType="h1" title={title} margin="0 0 50px" />
      <FormStyle onSubmit={onSubmit}>
        <Input
          dataTestid="email-input"
          type="email"
          placeholder="이메일"
          value={data.email}
          onChange={onChange}
        />
        {!isValid.isEmail && data.email && (
          <InvalidStyle>이메일 형식을 확인해 주세요.</InvalidStyle>
        )}
        <Input
          dataTestid="password-input"
          type="password"
          placeholder="비밀번호"
          value={data.password}
          onChange={onChange}
        />
        {!isValid.isPassword && data.password && (
          <InvalidStyle>8자 이상 입력해주세요.</InvalidStyle>
        )}
        <Button
          type="submit"
          dataTestid={dataTestid}
          text={title}
          isDisabled={disabled}
        />
      </FormStyle>
      <Button text="홈으로" onClick={() => navigate('/')} />
    </AuthStyle>
  );
};

export default AuthContainerPresenter;

const AuthStyle = styled.div`
  > button {
    width: 100%;
    background-color: skyblue;
    margin-top: 50px;
  }
`;

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InvalidStyle = styled.p`
  color: red;
  font-size: 14px;
`;
