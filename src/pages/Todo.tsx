import { useState, useEffect } from 'react';
import TodoHeader from 'components/todo/TodoHeader';
import TodoList from 'components/todo/TodoList';
import TodoAdd from 'components/todo/TodoAdd';
import { GETTODO } from 'apis/todo';
import { TodoType } from 'interfaces/todo';
import { styled } from 'styled-components';

const Todo = () => {
  const [list, setList] = useState<TodoType[]>([]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const response = await GETTODO();
        if (!response) {
          throw new Error('todoList를 불러오지 못했습니다.');
        }
        setList(response);
      } catch (error: any) {
        alert(error.message);
      }
    };
    getTodos();
  }, []);

  return (
    <TodoContainerStyle className="container" style={{ alignItems: 'inherit' }}>
      <TodoHeader />
      <TodoListStyle className="list">
        {list.length > 0 ? (
          list.map((item: TodoType) => (
            <TodoList key={item.id} item={item} setList={setList} />
          ))
        ) : (
          <EmptyMessage>할 일을 입력해주세요.</EmptyMessage>
        )}
      </TodoListStyle>
      <TodoAdd setList={setList} />
    </TodoContainerStyle>
  );
};

export default Todo;

const TodoContainerStyle = styled.div`
  width: 500px;
  border-radius: 20px;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;

const TodoListStyle = styled.ul`
  padding: 1rem 0;
  background-color: #fff;
  min-height: 400px;
  max-height: 500px;
  overflow-y: auto;
`;

const EmptyMessage = styled.p`
  padding: 0.2rem 1rem;
  font-size: 1.1rem;
`;
