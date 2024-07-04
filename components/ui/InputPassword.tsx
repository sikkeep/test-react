// components/ui/InputPassword.tsx

import React from 'react';

interface PasswordInputProps {
  register: any;
  errors: any;
}

const InputPassword: React.FC<PasswordInputProps> = ({ register, errors }) => {
  return (
    <div>
      <input
        type="password"
        placeholder="Password"
        {...register('password')}
        className={`w-full p-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded`}
      />      
    </div>
  );
};

export default InputPassword;
