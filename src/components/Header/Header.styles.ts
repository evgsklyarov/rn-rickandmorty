import {Platform, StyleSheet} from 'react-native';

type Args = {
  safeAreaTopMargin: number;
};
const useComponentStyles = ({safeAreaTopMargin}: Args) =>
  StyleSheet.create({
    container: {
      height: 38 + safeAreaTopMargin,

      paddingTop: safeAreaTopMargin || 8,

      flexDirection: 'row',
      alignItems: 'center',
    },

    leftContent: {
      flex: 1,
      justifyContent: 'center',
      height: 30,
    },

    title: {
      flex: 3,
      textAlign: 'center',
      justifyContent: 'center',

      lineHeight: Platform.OS === 'ios' ? undefined : 25,
    },

    rightContent: {
      flex: 1,
      alignItems: 'flex-end',
    },
  });

export default useComponentStyles;
