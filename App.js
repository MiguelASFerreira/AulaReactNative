import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Facts from './src/pages/Facts';
import HeaderLista from './src/pages/HeaderLista';
import Dados from './src/pages/Dados';
import Univer from './src/pages/Univer';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Dados />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },
});
