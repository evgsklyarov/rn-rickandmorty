import {User} from 'src/types/user';
import {sleep} from './common';
import {createUser, getUser} from './fakeDataBase';

export const login = async (
  email: string,
  password: string,
): Promise<boolean> => {
  try {
    await sleep(1000);

    const user = await getUser(email);
    if (user) {
      if (user.password === password) {
        return true;
      } else {
        throw new Error('Wrong password');
      }
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    throw error;
  }
};

export const register = async (user: User): Promise<User> => {
  try {
    await sleep(1000);

    const newUser = await createUser(user);

    return newUser;
  } catch (error) {
    throw error;
  }
};
