import {StyleSheet} from 'react-native';
import colors from 'src/theme/colors';

type Args = {
  withSafeAreaTopPadding: boolean;
  withSafeAreaBottomPadding: boolean;
  withHorizontalPadding: boolean;
  withHeader: boolean;
  safeAreaBottomMargin: number;
  safeAreaTopMargin: number;
};

const useComponentStyles = ({
  withSafeAreaTopPadding,
  withSafeAreaBottomPadding,
  withHorizontalPadding,
  withHeader,
  safeAreaBottomMargin,
  safeAreaTopMargin,
}: Args) =>
  StyleSheet.create({
    container: {
      flex: 1,

      paddingTop: withSafeAreaTopPadding && !withHeader ? safeAreaTopMargin : 0,
      paddingBottom: withSafeAreaBottomPadding ? safeAreaBottomMargin : 0,

      backgroundColor: colors.backgroundLight,
    },

    content: {
      flex: 1,
      paddingHorizontal: withHorizontalPadding ? 16 : undefined,
    },
  });

export default useComponentStyles;
