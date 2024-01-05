
import { StatusBar, SafeAreaView, Text } from 'react-native';
import { StyleSheet } from "react-native-web";
import Agendamentos from './src/screens/Agendamentos';

export default function App() {
  return (
    <SafeAreaView >
      <StatusBar/>
      <Agendamentos/>
      <Text style={estilos.tag}>Created by ArchitectCaio</Text>
    </SafeAreaView>
  );
  }
  const estilos = StyleSheet.create({
    tag: {    
        textAlign: "center",
        padding: 20
        
    }
});