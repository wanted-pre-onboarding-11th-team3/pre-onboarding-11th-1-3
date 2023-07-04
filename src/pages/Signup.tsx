import { SIGNUP } from 'apis/auth';
import AuthContainer from 'components/auth/AuthContainer';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const signup = async (email: string, password: string) => {
    try {
      await SIGNUP({
        email,
        password,
      });
      alert('회원가입이 성공하였습니다!\n로그인을 시도해주세요.');
      navigate('/signin');
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  return (
    <AuthContainer
      title="회원가입"
      dataTestid="signup-button"
      onSubmit={signup}
    />
  );
};

export default Signup;
