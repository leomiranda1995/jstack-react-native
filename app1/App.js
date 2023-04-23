import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { appFirebase } from './src/Config/firebaseConnection';
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';

export default function App() {
  const [ dados, setDados ] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const db = getFirestore(appFirebase);

      const querySnapshot = await getDocs(collection(db, "teste"));
        querySnapshot.forEach((doc) => {
          setDados([doc.data()]);
          // console.log(doc.data);
      });
    }

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {
        dados.map(item => (
          <Text key={item.nome}>Nome: {item.nome}</Text>
        ))
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
