import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {User} from 'src/types/user';

type AuthContextType = {
  user: User | null;
  loadingInitial: boolean;
  login: (user: User) => void;
  logout: () => void;
};

const USER_KEY = 'user';

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [user, setUser] = useState<User | null>(null);
  const [loadingInitial, setLoadingInitial] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        const _user = await AsyncStorage.getItem(USER_KEY);
        setUser(_user ? JSON.parse(_user) : null);
      } catch (error) {
        throw error;
      } finally {
        setLoadingInitial(false);
      }
    })();
  }, []);

  const setUserData = async (_user: User) => {
    try {
      setUser(_user);

      await AsyncStorage.setItem(USER_KEY, JSON.stringify(_user));
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      setUser(null);

      await AsyncStorage.removeItem(USER_KEY);
    } catch (error) {
      throw error;
    }
  };

  const memoedValue = useMemo(
    () => ({
      user,
      loadingInitial,
      login: setUserData,
      logout,
    }),
    [user, loadingInitial],
  );

  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
