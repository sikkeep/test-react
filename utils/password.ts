// src/utils/password.ts

import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

/**
 * Хеширование пароля с использованием соли
 * @param password - Пароль в виде строки
 * @returns Промис, возвращающий хешированный пароль
 */
export const saltAndHashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

/**
 * Проверка пароля на соответствие хешу
 * @param password - Пароль в виде строки
 * @param hash - Хешированный пароль
 * @returns Промис, возвращающий true, если пароли совпадают, иначе false
 */
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return await bcrypt.compare(password, hash);
}
