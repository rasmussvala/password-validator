import { StyleSheet, View } from 'react-native';
import PasswordValidator from 'react-native-password-validator';

export default function App() {
  return (
    <View style={styles.container}>
      <PasswordValidator />;
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
