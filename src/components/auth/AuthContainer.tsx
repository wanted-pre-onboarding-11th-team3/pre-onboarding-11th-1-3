import React, { useState, useEffect } from 'react';
import AuthContainerPresenter from './AuthContainer.presenter';
import { useLocation, useNavigate } from 'react-router-dom';
import { SIGNIN, SIGNUP } from 'apis/auth';
import { IAuthType, IAuthValidType } from 'interfaces/auth';

interface PropsType {
  title: string;
  dataTestid: string;
}

const AuthContainer = ({ title, dataTestid }: PropsType) => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const [form, setForm] = useState<IAuthType>({
    email: '',
    password: '',
  });
  const [isValid, setIsValid] = useState<IAuthValidType>({
    isEmail: false,
    isPassword: false,
  });
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(!(isValid.isEmail && isValid.isPassword));
  }, [isValid.isEmail, isValid.isPassword]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const current = event.target.value;

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
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setDisabled(true);
      if (location === '/signup') {
        await SIGNUP({
          email: form.email,
          password: form.password,
        });
        alert('회원가입이 성공하였습니다!\n로그인을 시도해주세요.');
        navigate('/signin');
      }
      if (location === '/signin') {
        await SIGNIN({
          email: form.email,
          password: form.password,
        });
        alert('환영합니다!');
        navigate('/todo');
      }
    } catch (error: any) {
      alert(
        location === '/signup'
          ? error.response.data.message
          : location === '/signin'
          ? '이메일이나 비밀번호를 다시 확인해주세요.'
          : ''
      );
    }
  };

  return (
    <AuthContainerPresenter
      title={title}
      data={form}
      isValid={isValid}
      dataTestid={dataTestid}
      disabled={disabled}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default AuthContainer;
