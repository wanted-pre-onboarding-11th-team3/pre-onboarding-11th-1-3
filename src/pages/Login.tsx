import { SIGNIN } from 'apis/auth';
import AuthContainer from 'components/auth/AuthContainer';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const signin = async (email: string, password: string) => {
    try {
      const response = await SIGNIN({
        email,
        password,
      });
      alert('환영합니다!');
      navigate('/todo');
      if (!response) {
        throw new Error('이메일이나 비밀번호를 다시 확인해주세요');
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <AuthContainer
      title="로그인"
      dataTestid="signin-button"
      onSubmit={signin}
    />
  );
};

export default Login;
