import { axiosInstance } from './instance';
import { TodoType } from 'interfaces/todo';

export const GETTODO = async () => {
  const response = await axiosInstance.get('/todos');
  return response.data;
};

export const CREATETODO = async (todo: string) => {
  const response = await axiosInstance.post('/todos', { todo });
  return response.data;
};
export const UPDATETODO = async ({ id, todo, isCompleted }: TodoType) => {
  const response = await axiosInstance.put(`/todos/${id}`, {
    todo,
    isCompleted,
  });
  return response.data;
};
export const DELETETODO = async (id: number) =>
  await axiosInstance.delete(`/todos/${id}`);
