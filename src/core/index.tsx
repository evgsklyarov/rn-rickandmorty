import React, {FC} from 'react';
import {ApolloProvider} from '@apollo/client';
import client from 'src/graphql/apollo';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Navigation from 'src/navigation';
import {AuthProvider} from 'src/hooks/useAuth';

const Core: FC = () => {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <ApolloProvider client={client}>
          <Navigation />
        </ApolloProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
};

export default Core;
