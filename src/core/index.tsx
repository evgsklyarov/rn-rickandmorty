import React, {FC} from 'react';
import {ApolloProvider} from '@apollo/client';
import client from 'src/graphql/apollo';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Navigation from 'src/navigation';

const Core: FC = () => {
  return (
    <SafeAreaProvider>
      <ApolloProvider client={client}>
        <Navigation />
      </ApolloProvider>
    </SafeAreaProvider>
  );
};

export default Core;
