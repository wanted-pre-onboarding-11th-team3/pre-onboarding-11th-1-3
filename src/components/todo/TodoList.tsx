import React, { useState, useCallback } from 'react';
import { UPDATETODO, DELETETODO } from 'apis/todo';
import { TodoType } from 'interfaces/todo';
import { HiOutlineTrash } from 'react-icons/hi';
import { AiOutlineCheck } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
import { MdOutlineCancel } from 'react-icons/md';
import styled from 'styled-components';

interface PropsType {
  item: TodoType;
  setList: React.Dispatch<React.SetStateAction<Array<TodoType>>>;
}

const TodoList = ({ item, setList }: PropsType) => {
  const { id, todo, isCompleted } = item;
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(todo);

  const handleUpdate = async (newTodo: TodoType) => {
    try {
      const response = await UPDATETODO({
        id,
        todo: newTodo.todo,
        isCompleted: newTodo.isCompleted,
      });
      if (!response) {
        throw new Error('todo 수정에 실패하였습니다.');
      } else {
        setList(prevList =>
          prevList.map(value => (value.id === newTodo.id ? newTodo : value))
        );
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  const todoUpdate = () => {
    if (text.trim().length === 0 || todo === text) {
      setText(todo);
    } else {
      handleUpdate({ ...item, todo: text });
    }
    setIsEdit(prev => !prev);
  };

  const handleDelete = async () => {
    try {
      const response = await DELETETODO(id);
      if (response?.status === 204) {
        setList(prevList => prevList.filter(item => item.id !== id));
      } else {
        throw new Error('todo 삭제에 실패하였습니다.');
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  const toggleIsEdit = useCallback(() => {
    setIsEdit(prev => !prev);
  }, [setIsEdit]);

  return (
    <TodoStyle>
      <CkBoxStyle
        type="checkbox"
        id={id.toString()}
        checked={isCompleted}
        onChange={(e: { target: { checked: boolean } }) =>
          handleUpdate({ ...item, isCompleted: e.target.checked })
        }
      />
      {isEdit ? (
        <TxtStyle
          type="text"
          data-testid="modify-input"
          className="input"
          defaultValue={todo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
        />
      ) : (
        <TodotxtStyle>{todo}</TodotxtStyle>
      )}

      <IconStyle>
        {isEdit ? (
          <ButtonStyle data-testid="submit-button" onClick={todoUpdate}>
            <AiOutlineCheck />
          </ButtonStyle>
        ) : (
          <ButtonStyle
            data-testid="modify-button"
            onClick={() => toggleIsEdit()}
          >
            <BiEditAlt />
          </ButtonStyle>
        )}
      </IconStyle>
      <IconStyle>
        {isEdit ? (
          <ButtonStyle
            data-testid="cancel-button"
            onClick={() => toggleIsEdit()}
          >
            <MdOutlineCancel />
          </ButtonStyle>
        ) : (
          <ButtonStyle data-testid="delete-button" onClick={handleDelete}>
            <HiOutlineTrash />
          </ButtonStyle>
        )}
      </IconStyle>
    </TodoStyle>
  );
};

export default TodoList;

const TodoStyle = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 1rem;
  color: var(--color-text);
  // flex: 1 1 auto;
  gap: 0.5rem;
`;

const CkBoxStyle = styled.input`
  width: 1.3rem;
  height: 1.3rem;
  accent-color: navy;
`;

const TxtStyle = styled.input`
  font-size: 1.3rem;
  border: none;
  outline: none;
  background-color: transparent;
  flex: 1 1 auto;
  width: auto;
  display: flex;
  border-bottom: 1px solid navy;
`;

const TodotxtStyle = styled.span`
  background-color: inherit;
  flex: 1 1 auto;
  font-size: 1.3rem;
  height: 28px;
  display: flex;
  align-items: center;
`;

const IconStyle = styled.span`
  width: 26px;
  height: 26px;
  background-color: aliceblue;
  border-radius: 100%;
  transition: all 150ms ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  &:hover {
    background-color: navy;
    transform: rotate(15deg) scale(1.2);
    color: #fff;
  }
`;

const ButtonStyle = styled.button`
  color: var(--color-text);
  background-color: transparent;
`;
