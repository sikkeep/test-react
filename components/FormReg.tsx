// components/Register.tsx
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { auth, db } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';

interface IFormInput {
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async ({ email, password }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // save data in Realtime Database
      await set(ref(db, 'users/' + user.uid), {
        email: user.email
      });

      console.log('success');
    } catch (error) {
      console.error('error');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input
        type="email"
        placeholder="Email"
        {...register('email', { required: 'Email is required' })}
        className="w-full p-2 border border-gray-300 rounded"
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      <input
        type="password"
        placeholder="Password"
        {...register('password', { required: 'Password is required' })}
        className="w-full p-2 border border-gray-300 rounded"
      />
      {errors.password && <p className="text-red-500">{errors.password.message}</p>}
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Register</button>
    </form>
  );
};

export default Register;
