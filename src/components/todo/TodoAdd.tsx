import React, { useState } from 'react';
import { CREATETODO } from 'apis/todo';
import { TodoType } from 'interfaces/todo';
import styled from 'styled-components';

interface PropsType {
  setList: React.Dispatch<React.SetStateAction<Array<TodoType>>>;
}

const TodoAdd = ({ setList }: PropsType) => {
  const [text, setText] = useState('');

  const handlerSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      setText('');
      return;
    }

    try {
      const response = await CREATETODO(text);
      if (!response) {
        throw new Error('todo 등록에 실패하였습니다.');
      } else {
        setList(prevList => [...prevList, response]);
      }
    } catch (error: any) {
      alert(error.message);
    }

    setText('');
  };

  return (
    <FormStyle onSubmit={handlerSubmit}>
      <InputStyle
        type="text"
        data-testid="new-todo-input"
        placeholder="Add Todo"
        value={text}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
          setText(e.target.value)
        }
      />
      <ButtonStyle data-testid="new-todo-add-button" type="submit">
        Add
      </ButtonStyle>
    </FormStyle>
  );
};

export default TodoAdd;

const FormStyle = styled.form`
  width: 100%;
  display: flex;
  padding: 1rem;
  background-color: aliceblue;
`;

const InputStyle = styled.input`
  flex: 1 1 auto;
  font-size: 1.2rem;
  padding: 0.4rem 1rem;
  border: 1px solid navy;
  background-color: #fff;
  outline: none;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

const ButtonStyle = styled.button`
  cursor: pointer;
  background-color: navy;
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 0 1.4rem;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  :hover {
    filter: brightness(125%);
  }
`;
