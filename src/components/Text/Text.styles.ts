import {StyleSheet} from 'react-native';
import colors from 'src/theme/colors';

const styles = StyleSheet.create({
  default: {
    color: colors.textDark,
    fontSize: 14,
  },

  headerType: {
    fontSize: 18,
  },

  inattentiveType: {
    color: colors.textInattentive,
  },

  actionType: {
    color: colors.primary,
  },
});

export default styles;
