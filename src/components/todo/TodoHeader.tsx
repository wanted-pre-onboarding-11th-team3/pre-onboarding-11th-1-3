import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const TodoHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    window.localStorage.clear();
    navigate('/');
  };

  return (
    <HeaderStyle>
      <TitleStyle>ToDo</TitleStyle>

      <ButtonStyle onClick={handleLogout}>Logout</ButtonStyle>
    </HeaderStyle>
  );
};

export default TodoHeader;

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 0;
  background-color: aliceblue;
  border-bottom: 1px solid var(--color-grey);
  color: navy;
`;
const TitleStyle = styled.span`
  font-size: 1.5rem;
  color: var(--color-accent);
  font-weight: bold;
  margin-left: 1.2rem;
`;
const ButtonStyle = styled.button`
  cursor: pointer;
  background-color: navy;
  color: #ffffff;
  font-weight: bold;
  font-size: 0.8rem;
  padding: 0.3rem 0.5rem;
  border-radius: 8px;
  margin-right: 1.2rem;

  &:hover {
    filter: brightness(125%);
  }
`;
