import {Platform, StyleSheet} from 'react-native';
import colors from 'src/theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

    backgroundColor: colors.backgroundLight,
  },

  scrollContainer: {
    width: '100%',
  },

  scrollContent: {
    paddingHorizontal: 16,
  },

  scrollContentScrollable: {
    paddingBottom: Platform.OS === 'ios' ? 200 : 0,
  },

  form: {
    width: '100%',
    alignItems: 'center',
  },

  title: {
    textAlign: 'center',
  },

  description: {
    textAlign: 'center',
    marginTop: 8,
  },

  submitButton: {
    marginTop: 16,
  },

  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
});

export default styles;
