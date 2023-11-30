import {StyleSheet} from 'react-native';
import colors from 'src/theme/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingBottom: 20,
    position: 'relative',
  },
  label: {
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 12,
    height: 48,
    color: colors.textDark,
  },
  errorContainer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
  },
  errorText: {
    color: colors.danger,
  },
});

export default styles;
