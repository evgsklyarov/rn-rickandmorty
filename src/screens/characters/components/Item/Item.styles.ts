import {StyleSheet} from 'react-native';
import colors from 'src/theme/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    flexDirection: 'row',
    borderColor: colors.primary,
    borderWidth: 1,
    marginBottom: 10,
  },

  image: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },

  content: {
    flex: 1,
    padding: 10,
  },

  name: {
    marginBottom: 5,
  },

  date: {
    fontStyle: 'italic',
  },
});

export default styles;
