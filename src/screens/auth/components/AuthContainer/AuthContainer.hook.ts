import {useMemo} from 'react';

import {AuthContainerType} from './AuthContainer.types';

const useAuthContainer = (type: AuthContainerType) => {
  const titleText = useMemo(() => {
    switch (type) {
      case 'signUp':
        return 'Create Account';
      default:
        return 'Welcome to React Native App!';
    }
  }, [type]);

  const descriptionText = useMemo(() => {
    switch (type) {
      case 'signUp':
        return "Let's get started";
      default:
        return "Let's see how it works";
    }
  }, [type]);

  const submitButtonText = useMemo(() => {
    switch (type) {
      case 'signUp':
        return 'Sign up';
      default:
        return 'Sign in';
    }
  }, [type]);

  const switcDesriptionText = useMemo(() => {
    switch (type) {
      case 'signUp':
        return 'Already have an account?';
      default:
        return "Don't have an account?";
    }
  }, [type]);

  const swtichActionText = useMemo(() => {
    switch (type) {
      case 'signUp':
        return 'Sign in!';
      default:
        return 'Sign up!';
    }
  }, [type]);

  return {
    titleText,
    descriptionText,
    submitButtonText,
    switcDesriptionText,
    swtichActionText,
  };
};

export default useAuthContainer;
