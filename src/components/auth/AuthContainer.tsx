import React, { useState } from 'react';
import AuthContainerPresenter from './AuthContainer.presenter';
import { IAuthType } from 'interfaces/auth';

interface PropsType {
  title: string;
  dataTestid: string;
  onSubmit: (email: string, password: string) => Promise<void>;
}

const AuthContainer = ({ title, dataTestid, onSubmit }: PropsType) => {
  const [form, setForm] = useState<IAuthType>({
    email: '',
    password: '',
  });

  const isValid = {
    isEmail: /\S+@\S+\.\S+/.test(form.email),
    isPassword: form.password.length >= 8,
  };

  const isDisable = !isValid.isEmail || !isValid.isPassword;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const current = event.target.value;

    switch (event.target.type) {
      case 'email':
        setForm(prev => ({ ...prev, email: current }));
        break;
      case 'password':
        setForm(prev => ({ ...prev, password: current }));
        break;
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(form.email, form.password);
  };

  return (
    <AuthContainerPresenter
      title={title}
      data={form}
      isValid={isValid}
      dataTestid={dataTestid}
      disabled={isDisable}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default AuthContainer;
