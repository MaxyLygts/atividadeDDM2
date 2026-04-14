import { StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-web';

export default function App() {
  return (
    <>
    <ScrollView
      style={styles.fundo}
      contentContainerStyle = {styles.container}
    >
    <Text style={styles.texto1}>NA</Text>
    <Text style={styles.texto2}>ETEC</Text>
    <Text style={styles.texto3}>O</Text>
    <Text style={styles.texto4}>MIN</Text>
    <Text style={styles.texto5}>IMPERA</Text>
    <Text style={styles.texto6}>3MIN</Text>
    </ScrollView>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },

  texto1: {

    color: 'orange',
    fontSize: 30

  },

  texto2: {

    color: 'red',
    fontSize: 30

  },

  texto3: {

    color: 'blue',
    fontSize: 30

  },

  texto4: {

    color: 'green',
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',

  },

  texto5: {

    color: 'gray',
    fontSize: 30,
    fontStyle: 'italic',

  },

  texto6: {

    color: 'purple',
    margin: 20,
    fontSize: 50,
    fontWeight: 'bold',

  },
});
