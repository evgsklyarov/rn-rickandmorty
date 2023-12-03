import AsyncStorage from '@react-native-async-storage/async-storage';

import {User} from 'src/types/user';

const USER_TABLE_NAME = 'users';

export const getUsers = async (): Promise<User[]> => {
  try {
    const users = await AsyncStorage.getItem(USER_TABLE_NAME);

    return JSON.parse(users || '[]');
  } catch (error) {
    throw error;
  }
};

export const createUser = async (user: User): Promise<User> => {
  try {
    const users = await getUsers();
    const existedUser = users.find(u => u.email === user.email);

    if (existedUser) {
      throw new Error('User already exists');
    }

    users.push(user);

    await AsyncStorage.setItem(USER_TABLE_NAME, JSON.stringify(users));

    return user;
  } catch (error) {
    throw error;
  }
};

export const getUser = async (email: string): Promise<User | undefined> => {
  try {
    const users = await getUsers();

    return users.find(u => u.email === email);
  } catch (error) {
    throw error;
  }
};
