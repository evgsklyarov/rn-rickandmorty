import React from 'react';

import Screen from 'src/components/Screen';
import Text from 'src/components/Text';
import Button from 'src/components/Button';
import useAuth from 'src/hooks/useAuth';

import styles from './Profile.styles';

const Profile = () => {
  const {user, logout} = useAuth();
  return (
    <Screen>
      <Text text="Profile" type="header" />
      <Text text={`Email: ${user?.email}`} />
      <Button
        title="Logout"
        onPress={logout}
        variant="outlined"
        style={styles.logout}
      />
    </Screen>
  );
};

export default Profile;
