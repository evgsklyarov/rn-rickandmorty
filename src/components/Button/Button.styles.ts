import {StyleSheet} from 'react-native';
import colors from 'src/theme/colors';

const styles = StyleSheet.create({
  button: {
    height: 48,
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 5,
    overflow: 'hidden',
  },

  buttonContained: {
    backgroundColor: colors.primary,
  },

  buttonOutlined: {
    borderColor: colors.primary,
    borderWidth: 1,
  },

  buttonDisabled: {
    backgroundColor: colors.disabled,
  },

  buttonDisabledOutlined: {
    borderColor: colors.disabledDark,
  },

  disabledBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.disabled,
  },

  title: {
    color: colors.textLight,
  },

  titleOutlined: {
    color: colors.primary,
  },

  titleDisabledContainedButton: {
    color: colors.textLight,
  },

  titleDisabledOutlinedButton: {
    color: colors.disabledDark,
  },
});

export default styles;
