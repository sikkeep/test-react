// components/ui/InputEmail.tsx

import React from 'react';

interface EmailInputProps {
  register: any;
  errors: any;
}

const InputEmail: React.FC<EmailInputProps> = ({ register, errors }) => {
  return (
    <>
      <input
        type="email"
        placeholder="Email"
        {...register('email')}
        className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded`}
      />
    </>
  );
};

export default InputEmail;
