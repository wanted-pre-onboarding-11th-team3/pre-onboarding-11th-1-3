import { IAuthType } from 'interfaces/auth';
import { axiosInstance } from './instance';

/** 회원가입 */
export const SIGNUP = async ({ email, password }: IAuthType) =>
  await axiosInstance.post('/auth/signup', { email, password });

/** 로그인 */
export const SIGNIN = async ({ email, password }: IAuthType) =>
  await axiosInstance.post('/auth/signin', { email, password });
